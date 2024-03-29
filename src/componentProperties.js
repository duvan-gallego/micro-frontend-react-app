/*!
* Use the two objects below to register the properties and attributes the
* Web Component is expected to receive.
* These will be passed down as props to the React App underneath.
*/
import PropTypes from 'prop-types';

/**
 * Update proptypes to reflect the types of the properties and attributes
* NB: The type of an attribute must be primitive
 */
export const propTypes = {
  /*todos: PropTypes.array,
  componentTitle: PropTypes.string,*/
  name: PropTypes.string
};

/**
 * Update this object with the initial values of the properties
 */
export const componentProperties = {
  name: 'Default name value'
};

/**
 * Update this object with the initial values of the attributes
 */
export const componentAttributes = {
  componentTitle: 'React App',
};
