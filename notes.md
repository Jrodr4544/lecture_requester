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
