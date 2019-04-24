export const fetchGroups = () => {
    return (
        $.ajax({
            method: 'get',
            url: '/api/groups'
        })
    );
};

export const fetchGroup = (id) => {
    return (
        $.ajax({
            method: 'get',
            url: `/api/groups/${id}`
        })
    );
};

export const createGroup = (group) => {
    return (
        $.ajax({
            method: 'post',
            url: '/api/groups',
            data: { group }
        })
    );
};

export const updateGroup = (group) => {
    return (
        $.ajax({
            method: 'patch',
            url: `/api/groups/${group.id}`,
            data: { group }
        })
    );
};

export const updateGroupPhoto = (formData, groupId) => {
    return (
        $.ajax({
            method: 'patch',
            url: `/api/groups/${groupId}`,
            data: formData, 
            contentType: false,
            processData: false
        })
    )
}

export const deleteGroup = (id) => {
    return (
        $.ajax({
            method: 'delete',
            url: `/api/groups/${id}`
        })
    );
};

