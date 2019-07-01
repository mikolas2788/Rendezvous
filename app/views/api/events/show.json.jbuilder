json.event do 
    json.partial! 'api/events/event', event: @event
end 

# json.users do 
#     json.set! @event.organizer.id do 
#         json.partial! 'api/users/user', user: @event.organizer
#     end 
#     @event.members.each do |member| 
#         json.set! member.id do 
#             json.partial! 'api/users/user', user: member 
#         end 
#     end 
# end 