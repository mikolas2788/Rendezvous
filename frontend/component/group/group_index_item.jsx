import React from 'react';
import { Link } from 'react-router-dom';

const GroupIndexItem = ({ group, currentUser }) => {
    const photoUrl = group.photoUrl 
        || 'https://s3.amazonaws.com/rendezvous-meetup-dev/mxCCsykrJvfv7ucfX3f99Yh4'
    
    let route = currentUser ? `/groups/${group.id}` : '/login'
    
    return (
        <Link
            className='group-single-item'
            to={route}
        >
            <img src={photoUrl} />
            <div className='group-item-transparency'>
                <h2>{group.title}</h2>
            </div>
        </Link>
    )
}

export default GroupIndexItem;