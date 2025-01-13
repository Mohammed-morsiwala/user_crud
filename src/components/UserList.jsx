import React from 'react'
import User from './User'
import ListCard from './reusable_components/ListCard';

export default function UserList({ users, onClickEdit, onClickDelete}) {
    // const noUserFound = "There is no user till now!!!";
    let list = 'There is no user till now!!!';

    if(users && users.length > 0){
        list = (
            <ul>
                {users.map((user) => (
                    <User 
                        key={user.id}
                        user={user} 
                        onEdit={onClickEdit}
                        onDelete={onClickDelete}
                    />
                ))}
            </ul>
        );
    } 
    return (
        <ListCard>{list}</ListCard>
    )
}
