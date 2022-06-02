import styles from './SideNavBar.module.css'
import { Link } from 'react-router-dom'

function SideNavBar() {
  return (
    <div className={styles.sidebar}>
      <ul>
        <li>
          <Link to="/dashboard">
            <button>Dashboard</button>
          </Link>          
        </li>
        <li>          
          <Link to="/consumerunits">
            <button>Consumer Units</button>
          </Link>          
        </li>
        <li>          
          <Link to="/generationrecord">
            <button>Register generated energy</button>
          </Link>          
        </li>
      </ul>
    </div>
  )
}

export default SideNavBar
