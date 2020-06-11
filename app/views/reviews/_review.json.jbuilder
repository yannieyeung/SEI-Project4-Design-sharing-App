json.extract! review, :id, :title, :description, :score, :user_id, :post_id, :created_at, :updated_at
json.url review_url(review, format: :json)
