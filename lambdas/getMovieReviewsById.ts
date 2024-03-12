import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, QueryCommand, QueryCommandInput } from "@aws-sdk/lib-dynamodb";

// Helper function to create the DynamoDB query input.
function createQueryInput(movieId: string, minRating?: string, reviewerName?: string): QueryCommandInput {
  const expressionAttributeValues: any = { ":movieId": movieId };
  let filterExpressions: string[] = [];

  if (minRating) {
    expressionAttributeValues[":minRating"] = parseInt(minRating);
    filterExpressions.push("Rating > :minRating");
  }
  if (reviewerName) {
    expressionAttributeValues[":reviewerName"] = reviewerName;
    filterExpressions.push("ReviewerName = :reviewerName");
  }

  return {
    TableName: process.env.TABLE_NAME!,
    KeyConditionExpression: "MovieId = :movieId",
    ExpressionAttributeValues: expressionAttributeValues,
    FilterExpression: filterExpressions.join(" and ") || undefined
  };
}

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  if (!process.env.TABLE_NAME) {
    console.error("Environment variable TABLE_NAME is not set.");
    return {
      statusCode: 500,
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ message: "Server configuration error" }),
    };
  }

  try {
    console.log("Event: ", event);
    const movieId = event.pathParameters?.movieId;
    const minRating = event.queryStringParameters?.minRating;
    const reviewerName = event.queryStringParameters?.reviewerName;

    if (!movieId) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Movie ID is required in the path" }),
        headers: { "content-type": "application/json" },
      };
    }

    const queryInput = createQueryInput(movieId, minRating, reviewerName);
    const queryOutput = await ddbDocClient.send(new QueryCommand(queryInput));

    if (!queryOutput.Items || queryOutput.Items.length === 0) {
      return {
        statusCode: 404,
        body: JSON.stringify({ message: "No reviews found for the specified movie ID" }),
        headers: { "content-type": "application/json" },
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ reviews: queryOutput.Items }),
      headers: { "content-type": "application/json" },
    };
  } catch (error: any) {
    console.error("Error: ", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal server error", error: error.message }),
      headers: { "content-type": "application/json" },
    };
  }
};

const ddbDocClient = createDDbDocClient();
function createDDbDocClient(): DynamoDBDocumentClient {
  const ddbClient = new DynamoDBClient({ region: process.env.REGION });
  return DynamoDBDocumentClient.from(ddbClient);
}
