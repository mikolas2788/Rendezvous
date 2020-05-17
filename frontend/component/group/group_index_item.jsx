import React from 'react';
import { Link } from 'react-router-dom';

const GroupIndexItem = ({ group }) => {

    const photoUrl = group.photoUrl 
        || 'https://s3.amazonaws.com/rendezvous-meetup-dev/mxCCsykrJvfv7ucfX3f99Yh4'
        return (
            <Link 
                className='group-single-item'
                to={`/groups/${group.id}`}>
                <img src={photoUrl} />
                <div className='group-item-transparency'>
                    <h2>{group.title}</h2>
                </div>
            </Link>
        )
}

export default GroupIndexItem;