Database Relationships:
<!-- Users -->
- has a username, email, and a password
- has many lecture requests
- has many comments

<!-- LectureRequests -->
- has a title, and content
- belongs to user, and can only be modified by owner
- has many comments ?? 
<!-- hearts for likes, on click will get the current user's id? -->

<!-- Comments -->
- has content
- belongs to LectureRequest
- belongs to User

Created rails app and used postgresql as database in case I want to use heroku:
rails new "lecture-requester" --database=postgresql

Steps:

- Wrote list of requirements for project
- Used rails new to create new app
- generated gemfile and added some gems
- ran bundle install
- ran devise install, and generated the devise Model (User model in this case)
- Started postgres server app in order to create postgres db
- created migrations for users and lectures
