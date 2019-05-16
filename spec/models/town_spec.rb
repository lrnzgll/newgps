require 'rails_helper'

RSpec.describe Town, type: :model do
  let(:provinciavarese) { build_stubbed(:county) }
  subject { described_class.new(name: 'Varese', county: provinciavarese, lnglat: "POINT(45.9954 12.544684)") }

  it "is valid with valid attributes" do
    expect(subject).to be_valid    
  end

  it "is not valid without a name" do
    subject.name = nil
    expect(subject).to_not be_valid
  end

  it "is not valid without a lnglat" do
    subject.lnglat = nil
    expect(subject).to_not be_valid
  end

  it { should belong_to :county }
end
