FactoryBot.define do
    factory :region do
      name { "Lombardia" }
      slug  { "IT" }
      country
    end
  end