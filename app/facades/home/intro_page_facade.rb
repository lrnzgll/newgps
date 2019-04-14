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
    @routes_by_region ||= Region.order(name: :asc).pluck(:name, :slug)
  end
  def data_regions_routes
    @data_regions_routes ||= Region.includes(:routes).order(name: :asc).group(:id).pluck(:name, Arel.sql('count(routes.id)'))
  end
end
