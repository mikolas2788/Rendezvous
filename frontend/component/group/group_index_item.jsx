import React from 'react';
import { Link } from 'react-router-dom';

const GroupIndexItem = props => {
    let photo = <img src={props.group.photo} />

    return (
        <div className='group-item'>
            <div className='group-photo'>
                { photo }
            </div>
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