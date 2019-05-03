class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home, :search]

  def home
    @intro_page_content ||= Home::IntroPageFacade.new
    gon.data = @intro_page_content.data_regions_routes
  end

  def search
    @search_content ||= Home::SearchFacade.new
  end
end
