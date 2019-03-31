require 'rails_helper'


RSpec.describe Home::IntroPageFacade do
  let!(:route1) { create(:route, cached_votes_total: 5) }
  let!(:route2) { create(:route, cached_votes_total: 30) }
  let!(:route3) { create(:route, cached_votes_total: 20) }
  let!(:region1) { create(:region) }
  let!(:region2) { create(:region) } 
  let!(:region3) { create(:region) }

  describe '#new_routes' do
    subject { Home::IntroPageFacade.new }
    context 'when called' do
      it 'is an array of routes' do
        expect(subject.new_routes).to all(be_an(Route))
      end
      it 'loads an array of routes in desc order' do
        array = subject.new_routes
        expect(array.sort.reverse).to eq(array)
      end
    end
  end
  describe '#most_favourites_routes' do
    context 'when called' do
      it 'is an array of routes' do
        expect(subject.most_favourites_routes).to all(be_an(Route))
      end
      it 'loads an array of routes sorted by desc chaced_votes_total' do
        array = subject.most_favourites_routes
        expect(array.sort_by(&:cached_votes_total).reverse).to eq(array)
      end
    end
  end
  describe '#routes_by_region' do
    context 'when called' do
      it 'is an array' do
        expect(subject.routes_by_region).to all(be_an(Array))
      end
    end
  end  
end
