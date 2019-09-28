class VenuesController < ApplicationController

  def index
    venues = Venue.all
    render json: venues, except:[:created_at, :updated_at], include:[:reviews]
  end
  def show
    venue = Venue.find_by(params[:id])
    render json: venue, except:[:created_at, :updated_at]
  end
end
