import React from 'react';
import { Link } from 'react-router-dom';

const GroupIndexItem = props => {

    return (
        <Link 
            className='group-single-item'
            to={`/groups/${props.group.id}`}>
            <img src={props.group.photoUrl} />
            <div className='group-item-transparency'>
                <h2>{props.group.title}</h2>
            </div>
        </Link>
    );
};

export default GroupIndexItem;