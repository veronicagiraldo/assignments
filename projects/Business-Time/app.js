// Inline/Block elements
// Divs & spans
// Images
// List (navigation bar can count as a "list")
// Headers/paragraphs
// Semantic HTML (HTML 5 new tags)
// CSS Box model (margin, padding, border, width/height
// Responsive (Media queries, Flexbox, Bootstrap Grid, CSS Grids, or any combination of the above)
// Multiple HTML pages, linked

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

// function myFunction() {
//   var x = document.getElementById("myTopnav");
//   if (x.className === "topnav") {
//     x.className += " responsive";
//   } else {
//     x.className = "topnav";
//   }
// }