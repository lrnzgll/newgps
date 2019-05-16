FactoryBot.define do
  factory :town do
    name { "MyString" }
    county { nil }
    lnglat { "POINT(45.9954 12.544684)"}
  end
end
