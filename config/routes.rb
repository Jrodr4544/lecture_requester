Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users, only: [:show, :edit]

  resources :lecture_requests, only: [:create, :show, :update, :index, :destroy]
end
