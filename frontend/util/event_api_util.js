export const fetchEvents = () => {
    return (
        $.ajax({
            method: 'get',
            url: '/api/events'
        })
    );
};

export const fetchEvent = (id) => {
    return (
        $.ajax({
            method: 'get',
            url: `/api/events/${id}`
        })
    );
};

export const createEvent = (event) => {
    return (
        $.ajax({
            method: 'post',
            url: '/api/events',
            data: { event }
        })
    );
};

export const updateEvent = (event) => {
    return (
        $.ajax({
            method: 'patch',
            url: `/api/events/${event.id}/edit`,
            data: { event }
        })
    );
};

export const deleteEvent = (id) => {
    return (
        $.ajax({
            method: 'delete',
            url: `/api/events/${id}`
        })
    );
};
