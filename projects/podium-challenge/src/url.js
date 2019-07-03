  // axios.get(`https://shakespeare.podium.com/api/reviews/&apikey=${API_KEY}`)
  //         .then(res => res.json())
  //         .then(data => {
  //           this.setState({
  //             reviews: data
  //           })
  //         })
  //         .catch(console.log)


  // --Theme--
    // const props = {
    //   toggleTheme: this.toggleTheme,
    //   ...this.state
    // }

array.shuffle = function(){
  var input = this;
  for(var i=input.length-1; i >=0; i--){
    var randomIndex = Math.floor(Math.random()*(i+1));
    var itemAtIndex = input[randomIndex];

    input[randomIndex] = input[i];
    input[i] = itemAtIndex;
  }
  return input;
}
module.exports=url;

function shuffle(array){
  var currentIndex= array.length, tempValue, randomIndex;

  while(0 !== currentIndex){
    randomIndex = Math.floor(Math.random()* currentIndex);
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = tempValue;
  }
  return array;
}
var arr = [2, 11, 13, 43];
arr = shuffle(arr);
console.log(arr)