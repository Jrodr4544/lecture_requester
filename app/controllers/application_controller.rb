class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  respond_to :json
  before_action :configure_permitted_parameters, if: :devise_controller?
  before_filter :cors_preflight_check
  after_filter :cors_set_access_control_headers

  # For all responses in this controller, return the CORS access control headers.

  def cors_set_access_control_headers
      headers['Access-Control-Allow-Origin'] = '*'
      headers['Access-Control-Allow-Methods'] = 'POST, GET, OPTIONS'
      headers['Access-Control-Allow-Headers'] = %w{Origin Accept Content-Type X-Requested-With auth_token X-CSRF-Token}.join(',')
      headers['Access-Control-Max-Age'] = "1728000"
  end

  def cors_preflight_check
    if request.method == "OPTIONS"
      headers['Access-Control-Allow-Origin'] = 'http://localhost'
      headers['Access-Control-Allow-Methods'] = 'POST, GET, OPTIONS'
      headers['Access-Control-Allow-Headers'] = %w{Origin Accept Content-Type X-Requested-With auth_token X-CSRF-Token}.join(',')
      headers['Access-Control-Max-Age'] = '1728000'
      render :text => '', :content_type => 'text/plain'
    end
  end

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
