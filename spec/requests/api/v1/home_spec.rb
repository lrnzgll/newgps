describe "Home API", :type => :request do
  before { 
    country1 = FactoryBot.create(:country)
    country2 = FactoryBot.create(:country)
    FactoryBot.create(:region, country:country1)
    FactoryBot.create(:region, country:country2)
    get '/api/v1/home'
    @json = JSON.parse(response.body)[0]
  }

  xit 'fetches a list of countries and regions' do
    expect(@json["country"].length).to eq(3)
    expect(@json["country"]["regions"].length).to eq(1)
  end
  xit "country key includes name, slug" do
    expect(@json["country"]).to include("name", "slug")
  end

  xit "region key includes name, slug" do
    expect(@json["country"]["regions"][0]).to include("name", "slug")
  end

  xit 'returns status code 200' do
    expect(response).to have_http_status(:success)
  end
end