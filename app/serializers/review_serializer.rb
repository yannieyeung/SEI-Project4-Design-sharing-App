class ReviewSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :score, :post_id, :user_id
  belongs_to :post
end
