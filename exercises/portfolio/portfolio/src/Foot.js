import React from 'react';
// import {Footer} from 'react-materialize';
import './foot.css';

const Foot = () => {
  return(
    // <div className="footerContainer">
    //   <a href="">linkedin</a>
    //   <a href="">github</a>
    // </div>
     <footer class="page-footer">
     <div class="container">
       <div class="row">
         <div class="col l6 s12">
           <h5 class="white-text">Contact Information</h5>
           <p class="">Veronica Giraldo</p>
           <p>vgiraldo.veronica@gmail.com</p>
           <p>801.634.9893</p>
           <p>Salt Lake City, UT</p>
         </div>
         <div class="col s12 m6">
           <h5 class="white-text">Links</h5>
           <ul>
             <li><a class="grey-text text-lighten-3" href="https://www.linkedin.com/in/veronicagiraldo"><i class="fab fa-linkedin"></i></a></li>
             <li><a class="grey-text text-lighten-3" href="https://github.com/veronicagiraldo"><i class="fab fa-github"></i></a></li>
             {/* <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li> */}
             {/* <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li> */}
           </ul>
         </div>
       </div>
     </div>
     <div class="footer-copyright">
       <div class="container">
      Veronica Giraldo © 2019 Copyright Text
       {/* <a class="grey-text text-lighten-4 right" href="#!">More Links</a> */}
       </div>
     </div>
   </footer>
  )
} 
export default Foot;