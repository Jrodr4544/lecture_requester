Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users, only: [:show, :edit, :update]

  root "application#index"

  resources :lecture_requests, only: [:create, :show, :update, :index, :destroy]
  
  get 'avatars', to: 'application#images'
  get 'users/:id/hearts', to: 'lecture_requests#liked_requests'
  post 'lecture_requests/:id/heart', to: 'lecture_requests#heart_lecture_request'
  post 'lecture_requests/:id/comment', to: 'lecture_requests#comment_lecture_request'
  # post 'lecture_requests/:id/comment', to: 'comments#comment_lecture_request'

end
