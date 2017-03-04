class CallbacksController < Devise::OmniauthCallbacksController
  # def create
  #   @user = User.find_or_create_from_auth_hash(auth_hash)
  #   self.current_user = @user

  # end
  def github
    @user = User.from_omniauth(request.env["omniauth.auth"])
    sign_in_and_redirect @user
  end

end