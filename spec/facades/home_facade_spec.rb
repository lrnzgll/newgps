require 'rails_helper'


RSpec.describe Home::HomeFacade do
  let(:italy) { create(:country) }

  before(:each) do
    @h = Home::HomeFacade.new(countries: [italy], ip: "127.0.0.1")
  end
  context "When testing the homefacade class" do 
    it "the countries method should return a list of countries orderedd alphabetically" do 
     
    end
  end 
end
