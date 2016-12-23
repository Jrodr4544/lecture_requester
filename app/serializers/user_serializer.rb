class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :avatar

  has_many :hearts
  has_many :lecture_requests
  has_many :comments
end