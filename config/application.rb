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

    # Allowing Devise to respond to JSON

    config.to_prepare do
      DeviseController.respond_to :html, :json
    end

    # Setting up headers to avoid CORS issues
    config.action_dispatch.default_headers = {
      'Access-Control-Allow-Origin' => '*',
      'Access-Control-Request-Method' => %w{GET POST OPTIONS}.join(",")
    }
    
  end
end
