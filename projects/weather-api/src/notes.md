  fetch('http')
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded:true,
        items: json,
      })
    })

    render(){
      const {isLoaded, items} = this.state;
      if(!isLoaded){
        return<div>Loading...</div>
      }
      else{
         return(
           <ul>
           <li>{items.map(item => ())}
           <li>
           </ul>
           <div>
      )
    }
    }