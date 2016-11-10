class Heart < ApplicationRecord
  belongs_to :user
  belongs_to :lecture_request
end
