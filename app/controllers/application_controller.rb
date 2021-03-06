class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session
  respond_to :json
  before_action :configure_permitted_parameters, if: :devise_controller?
  after_filter :set_csrf_cookie

  def index
    render 'application/index'
  end

  def images
    # using Dir.entries to get the root path of rails server's assets images based on the .jpg extension 
    @images = Dir.entries(File.join(Rails.root,'public','assets')).select {|file| File.fnmatch('*.jpg',file)}
    render json: @images
  end
  
  def set_csrf_cookie
    cookies['XSRF-TOKEN'] = form_authenticity_token if protect_against_forgery?
  end

  protected
  
  def verified_request?
   super || valid_authenticity_token?(session, request.headers['X-XSRF-TOKEN'])
  end

  def configure_permitted_parameters
    # setting avatar as the avatar's nested form attribute for image. Avatar is not an object, it is a string that references an image
    (params[:user] != nil && params[:user][:avatar] != nil) ? params[:user][:avatar] = params[:user][:avatar][:image] : nil

    added_attrs = [:user, :username, :email, :password, :avatar, :password_confirmation, :remember_me]

    devise_parameter_sanitizer.permit :sign_up, keys: added_attrs
    devise_parameter_sanitizer.permit :account_update, keys: added_attrs
  end
end
