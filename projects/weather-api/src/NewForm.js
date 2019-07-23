import React from 'react'

const NewForm = (props) => {
  return (
    <div className="formContainer">
      <form onSubmit={props.loadWeather}>
      <input type="text" name="city" placeholder="City..."/>
      <input type="text" name="country" placeholder="Country..."/>
      <button>Get Weather</button>
      </form>
    </div>
  )
}

export default NewForm
