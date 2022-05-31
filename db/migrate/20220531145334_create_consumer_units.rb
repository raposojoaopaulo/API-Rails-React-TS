class CreateConsumerUnits < ActiveRecord::Migration[7.0]
  def change
    create_table :consumer_units do |t|
      t.string :nickname
      t.string :local
      t.string :brand
      t.string :model

      t.timestamps
    end
  end
end
