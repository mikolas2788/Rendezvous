export const addRSVP = (id) => {
    return (
        $.ajax({
            method: 'post',
            url: `api/events/${id}/rsvps`
        })
    );
};

export const deleteRSVP = (id) => {
    return (
        $.ajax({
            method: 'delete',
            url: `api/events/${id}/rsvps`
        })
    );
}; 