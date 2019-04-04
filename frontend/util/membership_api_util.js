export const addMembership = (id) => {
    return (
        $.ajax({
            method: 'post', 
            url: `api/groups/${id}/memberships`
        })
    );
};

export const deleteMembership = (id) => {
    return (
        $.ajax({
            method: 'delete', 
            url: `api/groups/${id}/memberships`
        })
    );
}; 