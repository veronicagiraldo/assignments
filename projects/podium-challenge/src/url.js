corsReq = () => {
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');
  headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
  headers.append('Access-Control-Allow-Credentials', 'true');
  headers.append('GET','OPTIONS');
  headers.append('Authorization', 'Basic ' + base64.encode(username + ":" + password));

  const url = 'https://shakespeare.podium.com/api/reviews/';
  fetch(url, {
    //mode: 'no-cors',
    credentials: 'include',
    method: 'GET',
    headers: headers
  })
  .then(response => response.text())
  .then(data => console.log(data))
    this.setState({reviews: data})
  .catch(error => console.log('Authorization failed : ' + error.message));


 
}