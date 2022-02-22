class AddActiveListingToProducts < ActiveRecord::Migration[6.1]
  def change
    add_column :products, :active_listing, :boolean
  end
end
