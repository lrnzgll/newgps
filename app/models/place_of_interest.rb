class PlaceOfInterest < ApplicationRecord
  belongs_to :county

  validates :name, presence: true
  validates :description, presence: true
  
end
