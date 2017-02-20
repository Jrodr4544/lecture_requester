class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  respond_to :json
  before_action :configure_permitted_parameters, if: :devise_controller?
  
  def index
    render 'application/index'
  end

  def images
    # binding.pry
    # using Dir.entries to get the root path of rails server's assets images based on the .jpg extension 
    @images = Dir.entries(File.join(Rails.root,'public','assets')).select {|file| File.fnmatch('*.jpg',file)}
    # binding.pry
    render json: @images
  end

  protected

  def configure_permitted_parameters
    # binding.pry
    # setting avatar as the avatar's nested form attribute for image. Avatar is not an object, it is a string that references an image
    (params[:user] != nil && params[:user][:avatar] != nil) ? params[:user][:avatar] = params[:user][:avatar][:image] : nil

    added_attrs = [:user, :username, :email, :password, :avatar, :password_confirmation, :remember_me]

    devise_parameter_sanitizer.permit :sign_up, keys: added_attrs
    devise_parameter_sanitizer.permit :account_update, keys: added_attrs
  end
end
