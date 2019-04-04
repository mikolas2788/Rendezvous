json.extract! group, :id, :title, :location, :about

json.member_ids group.member_ids

json.organizer_id group.organizer.id