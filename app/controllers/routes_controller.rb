class RoutesController < ApplicationController
  
  before_action :set_route, only: [:show]
  before_action :adjust_visit_counter, only: [:show]
  skip_before_action :authenticate_user!, only: [:show]
    
  def show
  end


  private
  # Use callbacks to share common setup or constraints between actions.
  def set_route
    @route ||= Route.find(params[:id])
  end

  def adjust_visit_counter
    @route.add_view
  end
end
