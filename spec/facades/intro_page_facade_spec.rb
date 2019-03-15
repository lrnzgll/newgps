require 'rails_helper'


RSpec.describe Home::IntroPageFacade do
  let!(:route) { create(:route) }

  before(:each) do
    @h = Home::IntroPageFacade.new
  end
end
