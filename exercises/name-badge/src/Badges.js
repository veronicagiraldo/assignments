import Reach from 'react';

const Badges = (props) =>{
    const {firstName, lastName, etc...} =props.badge
    return (
        <div>
            <h3>{firstName}  {lastName}</h3>
            <h5>email: {email}</h5>
            <h5>phone number : {phone} </h5>
            <h5>favoritefood: {favFood} </h5>
            <h5></h5>
            <h5></h5>

        </div>
    )
}