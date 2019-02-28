import React from 'react';

const Badges = (props) => {
    // const styles={
    //     borders: "solid 1px" 
    
    const {firstName, lastName, email, birth, phone, favFood, about } = props.badge
    return (
        <div className='badgeInfo'>
            <h2>Badge: </h2>
            <h4>Name: {firstName} {lastName}</h4>
            <h4>phone number: {phone}</h4>
            <h4>Place of Birth: {birth}</h4>
            <h4>Favorite Food: {favFood}</h4>
            <h4>email: {email}</h4>
            <h4>Tell us about yourself {about}</h4>
        </div>
    )
}

export default Badges