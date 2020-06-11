class PostSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :url, :code, :slug, :user_id, :avg_score

  has_many :reviews
  belongs_to :user
end
