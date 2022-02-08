import PropTypes from 'prop-types'
import Button from "./Button";
const Header = ({title}) => {
const onClick=()=>{
console.log('Click')
}
  return (
   <header className="header">
       <h1>Task Tracker {title}</h1>
       <Button color='green' text='Add' onClick={onClick} />
   </header>
  )
}
Header.defaultProps={
    title:'Boo',
}
Header.propTypes={
    title:PropTypes.string.isRequired,
}

export default Header
