class Api::V1::HomeController < ApplicationController
    
  def index
    @countries ||= Country.includes(:regions)
    render json: @countries.as_json(root: true,
      only: [:name, :slug],
      include:{regions: 
        {only: [:name, :slug]}
      }
    )
  end

end
