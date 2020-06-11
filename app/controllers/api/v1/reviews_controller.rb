module Api
  module V1
    class ReviewsController < ApplicationController
      skip_before_action :verify_authenticity_token
      before_action :set_review, only: [:show, :edit, :update, :destroy]

      protect_from_forgery with: :null_session

      # GET /reviews
      # GET /reviews.json
      def index
        reviews = Review.all

        render json: ReviewSerializer.new(reviews).serialized_json
      end

      # GET /reviews/1
      # GET /reviews/1.json
      def show
      end

      # GET /reviews/new
      def new
        @review = Review.new
      end

      # GET /reviews/1/edit
      def edit
      end

      # POST /reviews
      # POST /reviews.json
      def create
        review = post.reviews.new(review_params)

        # review.user = current_user

          if review.save
            render json: ReviewSerializer.new(review).serialized_json
          else
            render json: { error: review.errors.messages }, status: 422
          
        end
      end

      # PATCH/PUT /reviews/1
      # PATCH/PUT /reviews/1.json
      def update
        respond_to do |format|
          if @review.update(review_params)
            format.html { redirect_to @review, notice: 'Review was successfully updated.' }
            format.json { render :show, status: :ok, location: @review }
          else
            format.html { render :edit }
            format.json { render json: @review.errors, status: :unprocessable_entity }
          end
        end
      end

      # DELETE /reviews/1
      # DELETE /reviews/1.json
      def destroy
        review = Review.find(params[:id])
        
        if review.destroy
          head :no_content
        else
          render json: { error: review.errors.messages }, status: 422
        end
      end

      private
        # Use callbacks to share common setup or constraints between actions.
        def set_review
          @review = Review.find(params[:id])
        end

        def post
            @post ||= Post.find(params[:post_id])
        end

        # Only allow a list of trusted parameters through.
        def review_params
          params.require(:review).permit(:title, :description, :score, :user_id, :post_id)
        end
    end
  end
end
