import '../App.css'
import { Search } from "lucide-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <div className='search-main'>
      <div className="search-container">
      <Search className="search-icon" size={16} />
      <input type="text" className="search-input" placeholder="Search" />
      <FontAwesomeIcon icon={faBell} style={{color: '#463fd3'}}/>
      </div>
      
  <div className='header'>   
  <h2 id='logo'>Dashboard</h2>

  <select name="week" id="weeks">
    <option value="This Week">This Week</option>
    <option value="This Month">This Month</option>
    <option value="This Year">This Year</option>
  </select>   
  </div>    
    </div>
  )
}

export default Header