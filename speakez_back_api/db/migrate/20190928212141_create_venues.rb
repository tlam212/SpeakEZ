class CreateVenues < ActiveRecord::Migration[6.0]
  def change
    create_table :venues do |t|
      t.string :name
      t.string :address1
      t.string :address2
      t.string :lat
      t.string :lng
      t.string :img
      t.string :description

      t.timestamps
    end
  end
end
