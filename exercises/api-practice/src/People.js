import React from 'react';

const People = ({people}) => {
  return(
    <div>
      <h1>StarWars People</h1>
      {people.map((person) => (<h6>{person.results.name}</h6>))}
    </div>
  )
};
export default People;
// const Contacts = ({ contacts }) => {
//   return (
//     <div>
//       <center><h1>Contact List</h1></center>
//       {contacts.map((contact) => (
//         <div class="card">
//           <div class="card-body">
//             <h5 class="card-title">{contact.name}</h5>
//             <h6 class="card-subtitle mb-2 text-muted">{contact.email}</h6>
//             <p class="card-text">{contact.company.catchPhrase}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   )
// };