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
- Added serializer for lectureRequests and comments
- created lecture request controller
  added index action
  added authenticate_user only on create, edit, destroy
- added routes to route file for lecture requests
- added nested serialization to user controller for lecture_requests.comments and lecture_requests.user_likes
- added actions to lecture_request controller; comment, heart, update, create, update
- added more gems
  bower-rails to package assets
  angular-ui-router
  angular-js
- semantic-ui along with angular was added to bower after installing bower
- added semantic-ui several gems as dependencies for asset pipeline and such according to docs
- started adding views
- added front end authentication with angular session controller

Working on the JavaScript

what will I need?

packaging gem that packages front end assets
  - bower-rails
  - Angular Templates (angular-rails-templates)

Angular
  - angular JS
  - angular UI router
  - angular devise for front end authentication
<!-- maybe moment.js for timestamp formatting -->
  - use semantic ui
    add ui cards to user profiles

To Do:

- finish adding views
  everything in the views as well
- finish routing with angular

NEXT THINGS

- make sure auth with git is possible with omni auth

- make sure the tabs render the right view with angular and update values where needed

- add profile attributes and functionality
  - make sure user can edit their own requests

