json.group do 
    json.partial! 'api/groups/group', group: @group
end 

json.users do 
    json.set! @group.organizer.id do 
        json.partial! 'api/users/user', user: @group.organizer
    end 
    @group.members.each do |member| 
        json.set! member.id do 
            json.partial! 'api/users/user', user: member 
        end 
    end 
end 