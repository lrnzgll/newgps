class User < ApplicationRecord
  include SimpleDiscussion::ForumUser
  acts_as_voter
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  
  has_many :routes, dependent: :destroy
  validates :username, presence:true

  def name
    self.username
  end
end
