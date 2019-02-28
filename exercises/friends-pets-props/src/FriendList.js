import React from 'react';
import Friend from './Friend';

const FriendList = () => {
    const styles={
        backgroundColor: "#F18DD3",
        textAlign: "center"
    }
    const friends = [
    {
      name: "Ben",
      age: 29,
      pets: [
        {
          name: "spot",
          breed: "Tabby"
        },{
          name: "John Johnson",
          breed: "Husky"
        },{
          name: "Bear the bear",
          breed: "Grizzly"
        }
      ]
    },{
      name: "Bob",
      age: 31,
      pets: [
        {
          name: "Sally",
          breed: "Australian Shepard"
        }
      ]
    },{
      name: "Marcus",
      age: 25,
      pets: [
        {
          name: "Indy",
          breed: "Akita"
        },{
          name: "Anna",
          breed: "Persian Cat"
        }
      ]
    },{
      name: "Jacob",
      age: 20,
      pets: [
        {
          name: "fluffy",
          breed: "Sphynx cat"
        },{
          name: "patches",
          breed: "Sphynx cat"
        },{
          name: "tiger",
          breed: "Sphynx cat"
        },{
          name: "oscar",
          breed: "Sphynx cat"
        }
      ]
    }
  ]

 
    const mappedFriends = friends.map((friend, i) => {
        
      
      return (
            <div key = {i+friend.name}>
      
                <Friend name={friend.name} age={friend.age} pets={friend.pets}/>  
                </div>
        )
    } )
    return (
        <div>
            <h1 style={styles}>Friends with Pets</h1>
            {mappedFriends}
        </div>
    )
}

  export default FriendList;