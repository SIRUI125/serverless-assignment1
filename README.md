Serverless REST Assignment.
Name: Sirui Yao

Video demonstration: ..... URL of your Youtube video demonstration ....

This repository contains an implementation of a serverless REST API for the AWS platform. The CDK framework is used to provision its infrastructure. The API's domain context is movie reviews.

API endpoints.
[ Provide a bullet-point list of the app's endpoints (excluding the Auth API endpoints you have successfully implemented in full. Omit those in the assignment specification that you did not complete.] e.g.

+ POST /movies/reviews - add a movie review.

+ GET /movies/{movieId}/reviews - Get all the reviews for a movie with the specified id.

+ GET /movies/{movieId}/reviews?minRating=n - Get all the reviews for the film with the specified ID whose rating was higher than the minRating.

+ GET /movies/{movieId}/reviews/{reviewerName} - Get the review for the movie with the specified movie ID and written by the named reviewer.

+ PUT /movies/{movieId}/reviews/{reviewerName} - Update the text of a review.

+ GET /movies/{movieId}/reviews/{year} - Get the reviews written in a specific year for a specific movie.

+ GET /reviews - Get all the movies reviews

+ GET /reviews/{reviewerName} - Get all the reviews written by a specific reviewer.

+ GET /reviews/{reviewerName}/{movieId}/translation?language=code - Get a translated version of a movie review using the movie ID and reviewer name as the identifier.

API Gateway
![alt text](APIs.png)

![alt text](<API Gateway1.png>)

![alt text](<API Gateway2.png>)

![alt text](<API Gateway3.png>)

Authentication (if relevant).
![alt text](Authentication.png)

Independent learning (If relevant).
![alt text](<Translation in Chinese.png>)

![alt text](<Translantion in French.png>)

I use this guideline website "https://completecoding.io/typescript-translation-api/" to learn how to apply translation in typescript api.After I add translation function to my api.I use language codes website "https://www.alchemysoftware.com/livedocs/ezscript/Topics/Catalyst/Language.htm" to find specific codes of some countries.And I can translate my reviews into other languages.


