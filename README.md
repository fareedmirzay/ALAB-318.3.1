Step 4: Test All Routes
Restart your server and test each route:

GET / - should return a welcome message.
GET /api - should return a message confirming access to the API root.
GET /api/users - retrieves all users.
POST /api/users - creates a new user.
GET /api/users/
- retrieves a user by ID.
PATCH /api/users/
- updates a user by ID.
DELETE /api/users/
- deletes a user by ID.
GET /api/posts - retrieves all posts.
POST /api/posts - creates a new post.
GET /api/posts/
- retrieves a post by ID.
PATCH /api/posts/
- updates a post by ID.
DELETE /api/posts/
- deletes a post by ID.



SUMMARY OF THE NEW ROUTES:

1.GET /api/users/
/posts – Retrieves all posts by the specified user.
2.GET /api/posts?userId=<VALUE> – Retrieves all posts by the user with the specified userId query parameter.
3.GET /comments – Retrieves all comments, optionally filtered by userId or postId.
4.POST /comments – Creates a new comment.
5.GET /comments/
– Retrieves the comment with the specified ID.
6.PATCH /comments/
– Updates the comment with the specified ID.
7.DELETE /comments/
– Deletes the comment with the specified ID.
8.GET /comments?userId=<VALUE> – Retrieves comments by the specified userId.
9.GET /comments?postId=<VALUE> – Retrieves comments by the specified postId.
10.GET /posts/
/comments – Retrieves comments on a specific post.
11.GET /posts/
/comments?userId=<VALUE> – Retrieves comments on a specific post by a specific user.
12.GET /users/
/comments – Retrieves all comments by a specific user.
13.GET /users/
/comments?postId=<VALUE> – Retrieves comments by a user on a specific post.