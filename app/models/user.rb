class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :omniauthable, :omniauth_providers => [:github]

  has_many :lecture_requests
  has_many :comments

  # hearts associations
  has_many   :hearts
  has_many   :lectures_liked, :through => :hearts, :source => :lecture_request
end

