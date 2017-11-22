class CreateItems < ActiveRecord::Migration[5.1]
  def change
    create_table :items do |t|
      t.string :text
      t.boolean :checked
      t.float :priority

      t.timestamps
    end
  end
end
