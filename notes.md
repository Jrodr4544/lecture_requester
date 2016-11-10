Database Relationships:
<!-- User -->
- has a username, email, and a password
- has many lecture requests
- has many comments
- has many   hearts
- has many   lectures_liked, through => hearts, source => lecture_request


<!-- LectureRequest -->
- has a title, and content
- belongs to user, and can only be modified by owner
- has many comments
- has many hearts
- has many user_likes, through => hearts, source => user

<!-- hearts for likes, on click will get the current user's id? -->

<!-- Comment -->
- has text
- belongs to LectureRequest
- belongs to User

<!-- Heart -->
- belongs to user
- belongs to lecture_request

Created rails app and used postgresql as database in case I want to use heroku:
rails new "lecture-requester" --database=postgresql

Steps:

- Wrote list of requirements for project
- Used rails new to create new app
- generated gemfile and added some gems
- ran bundle install
- ran devise install, and generated the devise Model (User model in this case)
- Started postgres server app in order to create postgres db
- created migrations for users, hearts, comments and lectureRequests
