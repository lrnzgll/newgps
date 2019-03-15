class RouteLocation < ApplicationRecord
  belongs_to :route

  validates :name, presence: true
  validates :description, presence: true
end
