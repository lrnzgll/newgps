class Home::HomeFacade

  attr_reader :countries, :regions

  def initialize(countries:, ip:)
    @countries = countries
    @ip = ip
  end

  def countries
    @countries.order(:name)
  end

  def avatar
    @identicon ||= RubyIdenticon.create_base64(@ip, square_size: 5)
  end
end
