  class Home::IntroPageFacade

  
    def initialize
        
    end
  
    def new_routes
      @new_routes ||= Route.order(created_at: :desc).limit(10).includes(:user)
    end

    def most_favourites_routes
      @most_favourites_routes ||= Route.order(cached_votes_total: :desc).limit(10).includes(:user)
    end
  end
  