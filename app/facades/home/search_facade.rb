class Home::SearchFacade
  def initialize   
  end

  def routes
    @routes ||= Route.all
  end
end
