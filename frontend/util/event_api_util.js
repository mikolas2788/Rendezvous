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
    debugger 
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
            url: `/api/events/${event.id}`,
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
