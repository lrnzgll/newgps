class Region < ApplicationRecord
  extend FriendlyId
  friendly_id :slug, use: :slugged

  belongs_to :country

  has_many :region_routes, dependent: :destroy
  has_many :place_of_interests, dependent: :destroy

  validates :slug, presence: true
  validates :name, presence: true

  
end
