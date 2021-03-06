Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :questions, only: [:create, :show, :update, :edit, :destroy, :index]
    resources :answers, only: [:create, :index, :show, :update, :edit]
    resources :tags, only: [:create, :index, :show]
    resources :question_votes, only: [:create, :destroy, :index]
    resources :question_tags, only: [:create]
  end

  root "static_pages#root"
end
