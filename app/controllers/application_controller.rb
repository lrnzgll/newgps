# frozen_string_literal: true
class ApplicationController < ActionController::Base
  protect_from_forgery
  before_action :authenticate_user! 
  before_action :home 

  def home
    @countries ||= Country.includes(:regions).load
    @content ||= Home::HomeFacade.new(countries: @countries, ip: request.remote_ip)
  end
end
