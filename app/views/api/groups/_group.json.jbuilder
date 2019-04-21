json.extract! group, :id, :title, :location, :about

json.member_ids group.member_ids

json.organizer_id group.organizer.id

if group.photo.attached?
    json.photoUrl url_for(group.photo)
end 