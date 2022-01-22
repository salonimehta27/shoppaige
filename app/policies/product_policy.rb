class ProductPolicy < ApplicationPolicy
  attr_reader :user,:product
  class Scope < Scope
    def resolve
      scope.all
    end
  end

  def initialize(user,product)
    @user=user 
    @product=product
  end

  def create? 
    user.has_role? :seller
  end

  def show?
    true
  end

  def index?
    true
  end
end
