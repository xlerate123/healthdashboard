import '../App.css'
import { LayoutDashboard, CalendarDays, SquarePlus, ArrowUpDown, MessageCircleMore, Phone, ChartLine, Settings } from 'lucide-react'

const Sidebar = ({ isOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
    <div className="sidebar-main">
      <div>
        <h2><span id='health'>Health</span><span id='care'>care.</span></h2>
        <h5 className='inactive-head'>General</h5>

        <h3 id='active'><LayoutDashboard size={18}/><span>Dashboard</span></h3>
        <h3 className='inactive'><ArrowUpDown size={18}/><span>History</span></h3>
        <h3 className='inactive'><CalendarDays size={18}/><span>Calendar</span></h3>
        <h3 className='inactive'><SquarePlus size={18}/><span>Appointments</span></h3>
        <h3 className='inactive'><ChartLine size={18}/><span>Statistics</span></h3>

        <h5 className='inactive-head'>Tools</h5>
        <h3 className='inactive'><MessageCircleMore size={18}/><span>Chat</span></h3>
        <h3 className='inactive'><Phone size={18}/><span>Support</span></h3>
      </div>  

        <div>
        <h3 className='inactive-end'><Settings />Setting</h3>
        </div>
      </div>
    </div>
  )
}

export default Sidebar