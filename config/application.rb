require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module LectureRequester
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
    
    # For heroku configuration ability to access assets 
    config.serve_static_assets = true

    config.action_dispatch.default_headers.merge!({
      'Access-Control-Allow-Origin' => '*',
      'Access-Control-Request-Method' => '*'
    })

    Rails.application.config.middleware.use OmniAuth::Builder do
      # require 'openid/store/filesystem' 
      provider :github, ENV['GITHUB_KEY'], ENV['GITHUB_SECRET']
      # provider :openid, store: OpenID::Store::Filesystem.new('/tmp')
    end
    
    # used for omniauth -->
    # Instead of the initializer, you'll have to set the relevant options somewhere before your 
    # middleware is built (like application.rb) and pass them to your preferred middleware
    config.session_store :cookie_store, key: '_interslice_session'
    config.middleware.use ActionDispatch::Cookies # Required for all session management
    config.middleware.use ActionDispatch::Session::CookieStore, config.session_options

    # Allowing Devise to respond to JSON

    config.to_prepare do
      DeviseController.respond_to :html, :json
    end

  end
end
