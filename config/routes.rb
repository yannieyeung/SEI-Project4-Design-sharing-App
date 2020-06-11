Rails.application.routes.draw do
  # resources :reviews
  # resources :posts
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
root to: "pages#index"

namespace :api do
  namespace :v1 do
    resources :posts, param: :slug
    resources :reviews, only: [:create, :destroy, :index] 
  end
end

get "*path", to: "pages#index", via: :all

end
