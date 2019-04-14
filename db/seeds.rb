require 'faker'
require 'betterlorem'

p 'regions created'
PlaceOfInterest.create(name: Faker::Name.name, description: BetterLorem.p(rand(3..20), true, true ), region: Region.last )
PlaceOfInterest.create(name: Faker::Name.name, description: BetterLorem.p(rand(3..20), true, true ), region: Region.first )
p 'place of interested created'
Array.new(20) { User.create(username: Faker::Name.name, email: "abc#{rand(999)}@abc.com", password: 'password' )} 
Array.new(500) do |i|
  r = Route.create(name: Faker::Name.name, description: BetterLorem.p(rand(3..20), true, true ), difficulty: rand(1..10), distance: rand(3..100), gpx: 'bla', user: User.all.sample)
  RegionRoute.create(route: r, region: Region.all.sample)
  CountyRoute.create(route: r, county: County.all.sample)
  Array.new(rand(1..4)){  Kind.create(name: ["strada", "sentiero", "ciclopedonale", "ciclabile"].sample,  route_id: r.id) }
  Array.new(rand(1..4)){ Surface.create(name: ["asfalto", "misto", "ghiaia", "terra"].sample, route_id: r.id) }
  RouteLocation.create(name: Faker::Name.name, description: BetterLorem.p(rand(3..20), true, true ), route_id: r.id)
  p i
end
p 'finished'

