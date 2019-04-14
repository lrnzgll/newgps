class Region::RegionFacade
  def initialize(region)
    @region = region
  end

  def counties
    @counties ||= County.where(region: @region).includes(:towns).order(name: :asc).group(:id).pluck(:name, :slug, Arel.sql('count(towns.id)'))
  end
end
