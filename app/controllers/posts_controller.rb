class PostsController < ApplicationController

  def index
    @posts = Post.all
  end

  def new
    @post = Post.new
  end

  def create
    @post = Post.find_or_create_by(post_params)
    @post.save

    redirect_to root_path
  end

  private

    def post_params
      params.require(:post).permit(:email)
    end

end
