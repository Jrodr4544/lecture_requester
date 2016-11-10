class Comment < ApplicationRecord
  belongs_to :lecture_request
  belongs_to :user
end
