class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home]

  def home
    super
    @intro_page_content ||= Home::IntroPageFacade.new
  end
end
