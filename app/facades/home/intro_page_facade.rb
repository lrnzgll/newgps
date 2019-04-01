  class Home::IntroPageFacade

  
    def initialize
        
    end
  
    def new_routes
      @new_routes ||= Route.order(created_at: :desc).limit(10).includes(:user).load
    end
    def most_favourites_routes
      @most_favourites_routes ||= Route.order(cached_votes_total: :desc).limit(10).includes(:user).load
    end
    def routes_by_region
      @routes_by_region ||= Region.includes(:region_routes).order(name: :asc).group(:id).pluck(:name, :slug, Arel.sql('count(region_routes.id)'),:id)
    end
  end
  