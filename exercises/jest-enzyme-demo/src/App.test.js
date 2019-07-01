import React from 'react';
import Enzyme, {shallow} from 'Enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({adapter: new EnzymeAdapter()})
// /**
//  * factory function to create a shallowwrapper for the App component
//  * @function setup
//  * @param {object} props -component props specific to this setup
//  * @param {any} state - value of data-test attribute for search 
//  * @returns {ShallowWrapper}
//  */

const setup = (props={}, state=null) => {
  const wrapper = shallow(<App {...props}/>)
  state && wrapper.setState(state);
  return wrapper
}
// /**
//  * Return ShallowWrapper containing nodes witht he given data-test value
//  * @param {ShallowWrapper} wrapper -enzyme shallow wrapper to search within
//  * @param {string} val - value of data-test attribute for search 
//  * @return {ShallowWrapper}
//  */
const findByTestAttr = (wrapper, val) =>{
  return wrapper.find(`[data-test="${val}"]`);
}


// then replace shallow with setup 
// then replace wrapper.find with = findByTestAttr 
test('renders wihtout error', () =>{
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent.length).toBe(1);
});
test('renders increment button', () =>{
  const wrapper = setup();
  const button = findByTestAttr(wrapper, 'increment-button');
  expect(button.length).toBe(1);
});
test('renders counter display', () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.length).toBe(1);
});
// State
test('counter starts at 0', () => {
  const wrapper = setup();
  const initialCounterState = wrapper.state('counter');
  expect(initialCounterState).toBe(0)
});
test('clicking button increments counter display', () =>{
  const counter = 7;
  const wrapper = setup(null, {counter});
  const button = findByTestAttr(wrapper, 'increment-button');
  button.simulate('click');
  wrapper.update();
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.text()).toContain(counter +1);
}); 