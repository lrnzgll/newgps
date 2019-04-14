class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home, :data]

  def home
    @intro_page_content ||= Home::IntroPageFacade.new
  end

  def data
    render json: {data: Home::IntroPageFacade.new.data_regions_routes}
  end
end
