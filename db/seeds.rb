User.create!([
  {email: "user@test.com", encrypted_password: "$2a$11$MyVi6JnH2YN2IMHBrbOgz.BNXLKY3Wu861wn4bOTmrFH4/zCDJU7i", reset_password_token: nil, reset_password_sent_at: nil, remember_created_at: nil, sign_in_count: 70, current_sign_in_at: "2017-02-26 02:25:50", last_sign_in_at: "2017-02-25 19:04:44", current_sign_in_ip: "127.0.0.1", last_sign_in_ip: "127.0.0.1", username: "user", bio: nil, avatar: nil, validate: false},
  {email: "nat@users.com", encrypted_password: "$2a$11$6A4hYOWbx5NqUUQkSTAWJ.ZKXLDPn9ofDzws9oufGRCKcQU2xWDTy", reset_password_token: nil, reset_password_sent_at: nil, remember_created_at: nil, sign_in_count: 1, current_sign_in_at: "2016-12-23 16:50:08", last_sign_in_at: "2016-12-23 16:50:08", current_sign_in_ip: "::1", last_sign_in_ip: "::1", username: "nat", bio: nil, avatar: "laura.jpg", validate: false},
  {email: "v@v.com", encrypted_password: "$2a$11$KjZFq74FCDiOwurI9A5NvOQDIsWr1t6Bq4QwGt8QeMdGXcpSoIMVq", reset_password_token: nil, reset_password_sent_at: nil, remember_created_at: nil, sign_in_count: 1, current_sign_in_at: "2016-12-25 00:21:44", last_sign_in_at: "2016-12-25 00:21:44", current_sign_in_ip: "::1", last_sign_in_ip: "::1", username: "v", bio: nil, avatar: "helen.jpg", validate: false},
  {email: "h@h.com", encrypted_password: "$2a$11$L3PCFoemU8vLs8w0Pqfhz.D.QPkC37BLEklSBYWjdzEDPNpRlmpSu", reset_password_token: nil, reset_password_sent_at: nil, remember_created_at: nil, sign_in_count: 2, current_sign_in_at: "2016-12-30 16:04:09", last_sign_in_at: "2016-12-25 00:28:51", current_sign_in_ip: "::1", last_sign_in_ip: "::1", username: "h", bio: nil, avatar: "daniel.jpg", validate: false},
  {email: "user@newuser.com", encrypted_password: "$2a$11$emwVaC5ovoIPHXDyZorRw.6S8YLye9nnJ435eAoi5wC2LFDkHACsG", reset_password_token: nil, reset_password_sent_at: nil, remember_created_at: nil, sign_in_count: 4, current_sign_in_at: "2016-12-30 15:18:29", last_sign_in_at: "2016-12-21 18:47:41", current_sign_in_ip: "::1", last_sign_in_ip: "::1", username: "newestuser", bio: nil, avatar: nil, validate: false},
  {email: "jane@users.com", encrypted_password: "$2a$11$Fms9psPdcfZxq/0O8LswSukbqv5lddtLgnFfpvfXd0BFqFSDCVNf6", reset_password_token: nil, reset_password_sent_at: nil, remember_created_at: nil, sign_in_count: 1, current_sign_in_at: "2016-12-30 15:19:39", last_sign_in_at: "2016-12-30 15:19:39", current_sign_in_ip: "::1", last_sign_in_ip: "::1", username: "jane", bio: nil, avatar: nil, validate: false},
  {email: "john@users.com", encrypted_password: "$2a$11$EoT6Ib5xXvxuxOUvM2EryO2oYAxntLBz2RYCTqRBzXAkaJsEvP6Sa", reset_password_token: nil, reset_password_sent_at: nil, remember_created_at: nil, sign_in_count: 1, current_sign_in_at: "2016-12-30 15:21:39", last_sign_in_at: "2016-12-30 15:21:39", current_sign_in_ip: "::1", last_sign_in_ip: "::1", username: "john", bio: nil, avatar: "justen.jpg", validate: false},
  {email: "l@l.com", encrypted_password: "$2a$11$v.5aK5lxK5KziiNR.IJ8vOw3uullh/Pbwg6zV8G7O6xs/svIIhJUG", reset_password_token: nil, reset_password_sent_at: nil, remember_created_at: nil, sign_in_count: 3, current_sign_in_at: "2016-12-30 15:59:13", last_sign_in_at: "2016-12-30 15:16:47", current_sign_in_ip: "::1", last_sign_in_ip: "::1", username: "l", bio: nil, avatar: "jenny.jpg", validate: false},
  {email: "u@u.com", encrypted_password: "$2a$11$z6MgzL0IU51ukYMV3jrWJ.EFEEBjzsy/DdNeSPOoLDNKnl/gFmWBO", reset_password_token: nil, reset_password_sent_at: nil, remember_created_at: nil, sign_in_count: 16, current_sign_in_at: "2017-01-29 19:05:12", last_sign_in_at: "2017-01-29 18:59:44", current_sign_in_ip: "::1", last_sign_in_ip: "::1", username: "u", bio: nil, avatar: "justen.jpg", validate: false},
  {email: "matt@example.com", encrypted_password: "$2a$11$/bcSUYl2ZMfHkT4kVTutB.mH0wj6p4ERHgwWNtQrkJ0r2ZcYRvFgm", reset_password_token: nil, reset_password_sent_at: nil, remember_created_at: nil, sign_in_count: 2, current_sign_in_at: "2017-02-20 20:01:05", last_sign_in_at: "2017-02-20 19:04:47", current_sign_in_ip: "127.0.0.1", last_sign_in_ip: "127.0.0.1", username: "matt-test", bio: nil, avatar: "matt-788b04df9d15d7fd6d1856733b5ae5879bfb3d34d0df15d8040ff88b8e9cdfb9.jpg, validate: false"}
])
Comment.create!([
  {text: "comment with text", user_id: 1, lecture_request_id: 1},
  {text: "[\"a comment for the request\"]", user_id: 3, lecture_request_id: 1},
  {text: "another comment for this", user_id: 3, lecture_request_id: 1},
  {text: "creating a comment for this other request", user_id: 3, lecture_request_id: 2},
  {text: "adding another comment for testing", user_id: 3, lecture_request_id: 1},
  {text: "a comment", user_id: 3, lecture_request_id: 1},
  {text: "adding a comment", user_id: 3, lecture_request_id: 2},
  {text: "comment", user_id: 3, lecture_request_id: 2},
  {text: "testing comments", user_id: 3, lecture_request_id: 3},
  {text: "testing again", user_id: 3, lecture_request_id: 3},
  {text: "testing yet again", user_id: 3, lecture_request_id: 3},
  {text: "a comment goes here", user_id: 48, lecture_request_id: 4},
  {text: "another comment used for testing", user_id: 48, lecture_request_id: 1},
  {text: "posting yet another comment sire", user_id: 48, lecture_request_id: 2},
  {text: "I just want to comment away", user_id: 48, lecture_request_id: 3}
])
Heart.create!([
  {user_id: 1, lecture_request_id: 1},
  {user_id: 2, lecture_request_id: 1},
  {user_id: 3, lecture_request_id: 1},
  {user_id: 3, lecture_request_id: 2},
  {user_id: 6, lecture_request_id: 2},
  {user_id: 6, lecture_request_id: 1},
  {user_id: 48, lecture_request_id: 4},
  {user_id: 48, lecture_request_id: 1}
])
LectureRequest.create!([
  {content: "This is just a test hahaha", title: "Having trouble understanding db relations?", user_id: 1},
  {content: "Having trouble with js.", title: "Help learning JS model objects?", user_id: 3},
  {content: "My params is not passing through because the object on require doesn't exist?", title: "Need help with rails strong params", user_id: 3},
  {content: "How do I filter an array of data based on the element's name?", title: "Need some direction with angularjs filters?", user_id: 6},
  {content: "With a sample summary as a description for testing purposes.", title: "A sample request", user_id: 48}
])
