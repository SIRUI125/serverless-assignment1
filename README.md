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
<img width="1275" alt="APIs" src="https://github.com/SIRUI125/serverless-assignment1/assets/144785434/c2803764-d540-4152-8c5d-7f314630664b">


<img width="1270" alt="API Gateway1" src="https://github.com/SIRUI125/serverless-assignment1/assets/144785434/a7443d77-2d93-4164-afb3-a8267ce72728">


<img width="1280" alt="API Gateway2" src="https://github.com/SIRUI125/serverless-assignment1/assets/144785434/acb77cbe-56ca-4101-a90d-508ee14bb0d2">

<img width="1271" alt="API Gateway3" src="https://github.com/SIRUI125/serverless-assignment1/assets/144785434/713aa7a6-4d5e-4072-8f81-5f40bc67b06e">



Authentication (if relevant).
<img width="1278" alt="Authentication" src="https://github.com/SIRUI125/serverless-assignment1/assets/144785434/0ef38f09-984e-4a83-86f1-9c92babe4cce">


Independent learning (If relevant).
<img width="1277" alt="Translation in Chinese" src="https://github.com/SIRUI125/serverless-assignment1/assets/144785434/71a81b37-8bb7-4d64-8dd3-0c53579f877f">


<img width="1280" alt="Translantion in French" src="https://github.com/SIRUI125/serverless-assignment1/assets/144785434/51eeed01-dd18-4b26-8671-0d25e679441a">


I use this guideline website "https://completecoding.io/typescript-translation-api/" to learn how to apply translation in typescript api.After I add translation function to my api.I use language codes website "https://www.alchemysoftware.com/livedocs/ezscript/Topics/Catalyst/Language.htm" to find specific codes of some countries.And I can translate my reviews into other languages.


