FactoryBot.define do
  factory :route do
    name { "Giro Lago di Varese" }
    description { "0" * 999999 }
    difficulty { rand(0..100)}
    distance { rand(0..300) }
    gpx { "MyString" }
    user
  end
end
