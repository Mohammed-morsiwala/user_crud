import React from 'react'
import Button from './reusable_components/Button';

function User({ user, onEdit, onDelete}) {
    const handleEditUser = () => {
        onEdit(user.id)
    }
    const handleDeleteUser = () =>{
        onDelete(user.id)
    }
    return (
        <li key={user.id}>
            <div className='flex justify-center'>
                <div className='p-2 m-2'>{user && user?.name ? user.name : "no Name"}</div>
                <div className='p-2 m-2'>{user && user?.email ? user.email : "no Email"}</div>
                <div className='p-2 m-2'>
                    <Button
                        onclick={handleEditUser}
                        styles={"inline-flex items-center"}
                        svg={<svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth="2" d="M7 19H5a1 1 0 0 1-1-1v-1a3 3 0 0 1 3-3h1m4-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm7.441 1.559a1.907 1.907 0 0 1 0 2.698l-6.069 6.069L10 19l.674-3.372 6.07-6.07a1.907 1.907 0 0 1 2.697 0Z" />
                        </svg>
                        }
                    />
                    <Button
                        onclick={handleDeleteUser}
                        styles={"inline-flex items-center"}
                        svg={<svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
                          </svg>                          
                        }
                    />
                </div>
            </div>
        </li>
    )
}

export default User