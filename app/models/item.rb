class Item < ApplicationRecord
  before_create :before_create
  def before_create
    self.priority = Time.current.to_i
  end
end
