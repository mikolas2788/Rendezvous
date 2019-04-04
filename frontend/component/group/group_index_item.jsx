import React from 'react';
import { Link } from 'react-router-dom';

const GroupIndexItem = props => {

    return (
        <div className='group-single-item'>
            <div className='group-item-link-content'>
                <Link 
                    className='group-item-link'
                    to={`/groups/${props.group.id}`}>
                    {props.group.title}
                </Link>
            </div>
        </div>
    );
};

export default GroupIndexItem;