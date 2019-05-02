import {useState} from 'react';

// name the toggle
export const useToggle = isToggled => {
  console.log('hi')
  const [toggle, setToggle] = useState(isToggled)
  const toggler = () => setToggle(!toggle)
  return {toggle, toggler}
}

