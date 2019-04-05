import React from 'react';
import { Link } from 'react-router-dom';

const GroupIndexItem = props => {

    return (
        <Link 
            className='group-single-item'
            to={`/groups/${props.group.id}`}>
            {props.group.title}
        </Link>
    );
};

export default GroupIndexItem;