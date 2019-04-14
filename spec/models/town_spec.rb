require 'rails_helper'

RSpec.describe Town, type: :model do
  it { should belong_to :county }
end
