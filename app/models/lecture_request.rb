class LectureRequest < ApplicationRecord
  has_many   :comments
  belongs_to :user

  # hearts associations
  has_many   :hearts
  has_many   :user_likes, :through => :hearts, :source => :user
end
