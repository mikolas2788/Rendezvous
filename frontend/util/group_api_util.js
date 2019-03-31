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
            url: `/api/groups/${group.id}/edit`,
            data: { group }
        })
    );
};

export const deleteGroup = (id) => {
    return (
        $.ajax({
            method: 'delete',
            url: `/api/groups/${id}`
        })
    );
};

