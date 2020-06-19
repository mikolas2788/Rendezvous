import React from 'react';
import GroupIndexItem from './group_index_item';

class GroupIndex extends React.Component {

    constructor (props) {
        super (props)

        this.handleGroups = this.handleGroups.bind(this)
    }

    componentDidMount () {
        this.props.fetchGroups()
    }

    handleGroups () {
        const fixedsearchValue = this.props.searchValue.toLowerCase()
        const groups = this.props.groups 
        const filteredGroups = groups.filter(group => {
            let title = group.title.toLowerCase()
            if ( fixedsearchValue === "" || title.includes(fixedsearchValue) ) {
                return true
            } else {
                return false
            }
        })

        return filteredGroups.map(group => (
            <GroupIndexItem 
                key={group.id}
                group={group} 
                currentUser={this.props.currentUser} 
            />
        ))
    }

    render () {
        let groups; 
        if ( this.props.groups ) groups = this.handleGroups()

        return (
            <div className='groupindex-main'>
                <h1>AVAILABLE GROUPS</h1>
                <div className='groupindex-strip'>
                    { groups } 
                </div>
            </div>         
        )
    }

}

export default GroupIndex