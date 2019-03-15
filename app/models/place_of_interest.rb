class PlaceOfInterest < ApplicationRecord
  belongs_to :region

  validates :name, presence: true
  validates :description, presence: true
  
end
