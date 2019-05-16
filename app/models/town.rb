class Town < ApplicationRecord
  belongs_to :county

  validates :name, presence: true
  validates :lnglat, presence: true
end
