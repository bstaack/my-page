Rails.application.routes.draw do
  get '/projects' => 'pages#projects'
  get '/clientsites' => 'pages#clientsites'
  root 'pages#home'

end
