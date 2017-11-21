json.extract! item, :id, :text, :checked, :priority, :created_at, :updated_at
json.url item_url(item, format: :json)
