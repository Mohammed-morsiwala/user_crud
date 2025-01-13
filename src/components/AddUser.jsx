import React, { useState, useEffect } from 'react'
import Button from './reusable_components/Button'
import Wrapper from './reusable_components/Wrapper'
import UserModal from './UserModal'
import UserList from './UserList'

function AddUser() {
    const [showModal, setShowModal] = useState(false)
    const [usersList, setUsersList] = useState([])
    const [isEditMode, setIsEditMode] = useState(false);
    const [userDetails, setUserDetails] = useState({})

    const handleAddUser = () => {
        setUserDetails({});
        setIsEditMode(false);
        setShowModal(true);
    }
    const handleCloseModal = () => {
        setIsEditMode(false);
        setShowModal(false);
    }
    const handleOnSubmit = (user, action) => {
        console.log("on Adduser page:"+user);
        if(action === "addUser"){
            setUsersList((prevUsers) => [...prevUsers, user]);
        }else{
            setUsersList((prevUsers) => 
                prevUsers.map((u) => u.id === user.id ? user : u)
            );
        }
        setShowModal(false);
    };
    const handleEditUser = (id) =>{
        let user = usersList.find((user) => user.id === id);
        setIsEditMode(true);
        setUserDetails(user);
        setShowModal(true);
    }
    const handleDeleteUser = (id) =>{
        const userConfirmed = confirm("Are you sure you want to delete this user?");
        if (userConfirmed) {
            let updatedUserList = usersList.filter((user) => user.id !== id);
            setUsersList(updatedUserList);
            // Add your delete logic here, e.g., making an API call to delete the user.
        }
    }

    useEffect(() => {
        console.log('Updated users list:', usersList);
    }, [usersList]); 

    return (
        <>
            <Wrapper>
                <Button
                    onclick={handleAddUser}
                    buttonTitle={"Add User"}
                    styles={"m-2 p-2 inline-flex items-center bg-blue-400 rounded-2xl"}
                    svg={<svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12h4m-2 2v-4M4 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    }
                />
                <UserModal
                    showModal={showModal}
                    modalTitle={isEditMode ? "Edit user" : "Create new user"}
                    buttonTitle={isEditMode ? "Edit" : "Add"}
                    userDetails={userDetails}
                    onSubmit={handleOnSubmit}
                    closeModal={handleCloseModal}
                />
            </Wrapper>
            <UserList 
                users={usersList} 
                onClickEdit={handleEditUser}
                onClickDelete={handleDeleteUser}
            />
        </>
    )
}

export default AddUser