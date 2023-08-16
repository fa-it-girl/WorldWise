import classes from './Button.module.css'
import PropTypes from 'prop-types';

const Button = ({children, type, onClick}) => {
  return (
    <button onClick={onClick} className={`${classes.btn} ${classes[type]}`}>{children}</button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired, // children should be a valid React node
  type: PropTypes.string.isRequired, // type should be a string and is required
  onClick: PropTypes.func.isRequired, // onClick should be a function and is required
};

export default Button
