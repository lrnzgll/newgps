require 'faker'
require 'betterlorem'


Region.destroy_all
Country.destroy_all
User.destroy_all
Route.destroy_all
Kind.destroy_all
Surface.destroy_all
RegionRoute.destroy_all
RouteLocation.destroy_all
italia = Country.create(name: "Italia", slug:"IT")
p italia
Region.create(name: "Abruzzo", slug:"abruzzo", country: italia)
Region.create(name: "Basilicata", slug:"baslicata", country: italia)
Region.create(name: "Calabria", slug:"calabria", country: italia)
Region.create(name: "Campania", slug:"campania", country: italia)
Region.create(name: "Emilia-Romagna", slug:"emiliaromagna", country: italia)
Region.create(name: "Friuli-Venezia Giulia", slug:"friuliveneziagiulia", country: italia)
Region.create(name: "Lazio", slug:"lazio", country: italia)
Region.create(name: "Liguria", slug:"liguria", country: italia)
Region.create(name: "Lombardia", slug:"lombardia", country: italia)
Region.create(name: "Marche", slug:"marche", country: italia)
Region.create(name: "Molise", slug:"molise", country: italia)
Region.create(name: "Piemonte", slug:"piemonte", country: italia)
Region.create(name: "Puglia", slug:"puglia", country: italia)
Region.create(name: "Sardegna", slug:"sardegna", country: italia)
Region.create(name: "Sicilia", slug:"sicilia", country: italia)
Region.create(name: "Sardegna", slug:"sardegna", country: italia)
Region.create(name: "Toscana", slug:"toscana", country: italia)
Region.create(name: "Trentino-Alto Adige", slug:"trentinoaltoadige", country: italia)
Region.create(name: "Valle d'Aosta", slug:"valledaosta", country: italia)
Region.create(name: "Veneto", slug:"veneto", country: italia)
p 'regions created'
PlaceOfInterest.create(name: Faker::Name.name, description: BetterLorem.p(rand(3..20), true, true ), region: Region.last)
p 'place of interested created'
Array.new(20) { User.create(username: Faker::Name.name, email: "abc#{rand(999)}@abc.com", password: 'password' )} 
Array.new(500) do |i|
    r = Route.create(name: Faker::Name.name, description: BetterLorem.p(rand(3..20), true, true ), difficulty: rand(1..10), distance: rand(3..100), gpx: 'bla', user: User.all.sample)
    RegionRoute.create(route: r, region: Region.all.sample)
    Array.new(rand(1..4)){  Kind.create(name: ["strada", "sentiero", "ciclopedonale", "ciclabile"].sample,  route_id: r.id) }
    Array.new(rand(1..4)){ Surface.create(name: ["asfalto", "misto", "ghiaia", "terra"].sample, route_id: r.id) }
    RouteLocation.create(name: Faker::Name.name, description: BetterLorem.p(rand(3..20), true, true ), route_id: r.id)
    p i
end
p 'finished'
