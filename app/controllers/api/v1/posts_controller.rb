module Api
  module V1
    class PostsController < ApplicationController
      skip_before_action :verify_authenticity_token
      # before_action :set_post, only: [:show, :edit, :update, :destroy]
      
      protect_from_forgery with: :null_session
      

      # GET /posts
      # GET /posts.json
      def index
        posts = Post.all

        render json: PostSerializer.new(posts, options).serialized_json
      end

      # GET /posts/1
      # GET /posts/1.json
      def show
        post = Post.find_by(slug: params[:slug])

        render json: PostSerializer.new(post, options).serialized_json
      end

      # GET /posts/new
      def new
        post = Post.new
      end

      # GET /posts/1/edit
      def edit
      end

      # POST /posts
      # POST /posts.json
      def create
        post = Post.new(post_params)
        
        # post.user = current_user

        
          if post.save
            render json: PostSerializer.new(post).serialized_json
          else
            render json: { error: post.errors.messages }, status: 422
          end
        
      end

      # PATCH/PUT /posts/1
      # PATCH/PUT /posts/1.json
      def update
        post = Post.find_by(slug: params[:slug])

        
          if post.update(post_params)
            render json: PostSerializer.new(post, options).serialized_json
          else
            render json: { error: post.errors.messages }, status: 422
          
          end
      end

      # DELETE /posts/1
      # DELETE /posts/1.json
      def destroy
        post = Post.find_by(slug: params[:slug])
        
        if post.destroy
          head :no_content
        else
          render json: { error: post.errors.messages }, status: 422
        end
        
      end

      private
        # Use callbacks to share common setup or constraints between actions.
        def set_post
          @post = Post.find(params[:id])
        end

        # Only allow a list of trusted parameters through.
        def post_params
          params.require(:post).permit(:title, :url, :code, :slug, :user_id)
        end

        def options
          @options ||= { include: %i[reviews]}
        end
               
        def current_user
          return unless session[:user_id]
          current_user ||= User.find(session[:user_id])
        end

        def logged_in?
          !!session[:user_id]
        end


    end
  end
end