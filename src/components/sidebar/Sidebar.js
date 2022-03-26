import './Sidebar.css'
import logo from '../../assests/logo.png'
import {FaTimes,FaWarehouse,FaFileContract,FaFileAlt} from 'react-icons/fa'
import {AiFillHome,AiFillProfile} from 'react-icons/ai'
import {BsFillPersonFill} from 'react-icons/bs'
import {BiLogOut} from 'react-icons/bi'
import {MdManageAccounts,MdOutlinePolicy,MdCalendarToday,MdPayment}  from 'react-icons/md'
import {GoGitPullRequest} from 'react-icons/go'
import {GiPayMoney} from 'react-icons/gi'

const Sidebar = ({sidebarOpen,closeSidebar}) =>{
    
    return (
        <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
            <div className="sidebar__title">
                <div className="sidebar__img">
                    <img src={logo} alt="logo" />
                    <h1>Codersbite</h1>
                </div>
                <i><FaTimes id="sidebarIcon" onClick={()=>closeSidebar()} /></i>
            </div>
            <div className="sidebar__menu">
                <div className="sidebar__link active_menu_link">
                    <i><AiFillHome/></i>
                    <a href="#">Dashboard</a>
                </div>
                <h2>MNG</h2>
                <div className="sidebar__link">
                    <i><BsFillPersonFill/></i>
                    <a href="#">Admin Management</a>
                </div>
                <div className="sidebar__link">
                    <i><AiFillProfile/></i>
                    <a href="#">Company Management</a>
                </div>
                <div className="sidebar__link">
                    <i><MdManageAccounts/></i>                    
                    <a href="#">Employee Management</a>
                </div>
                <div className="sidebar__link">
                    <i><FaWarehouse/></i>
                    <a href="#">Warehouse</a>
                </div>
                <div className="sidebar__link">
                    <i><FaFileContract/></i>
                    <a href="#">Contracts</a>
                </div>
                <h2>LEAVE</h2>
                <div className="sidebar__link">
                    <i><GoGitPullRequest/></i>
                    <a href="#">Requests</a>
                </div>
                <div className="sidebar__link">
                    <i ><MdOutlinePolicy/></i>
                    <a href="#">Leave Policy</a>
                </div>
                <div className="sidebar__link">
                    <i ><MdCalendarToday/></i>
                    <a href="#">Special Days</a>
                </div>
                <div className="sidebar__link">
                    <i ><FaFileAlt/></i>
                    <a href="#">Apply for leave</a>
                </div>
                <h2>PAYROLL</h2>
                <div className="sidebar__link">
                    <i ><GiPayMoney/></i>
                    <a href="#">Payroll</a>
                </div>
                <div className="sidebar__link">
                    <i ><MdPayment/></i>
                    <a href="#">Paygrade</a>
                </div>
                <div className="sidebar__link">
                    <i ><BiLogOut/></i>
                    <a href="#">Log out</a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;