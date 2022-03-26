import "./Navbar.css";
import avatar from "../../assests/avatar.svg"
import { AiOutlineSearch,AiOutlineClockCircle} from 'react-icons/ai';
import {FiMenu} from 'react-icons/fi'

const Navbar = (props)=>{

    return(
        <>
            <nav className="navbar">
                <div className="nav_icon" onClick={props.openSidebar()}>
                    <i className="fa fa-bars"><FiMenu /></i>
                </div>
                <div className="navbar__left">
                    <a href="#">Subscribers</a>
                    <a href="#">Video Management</a>
                    <a href="#" className="active_link">Amin</a>
                </div>
                <div className="navbar__right">
                    <a href="#">
                        <i className="fa fa-search"><AiOutlineSearch/></i>
                    </a>
                    <a href="#">
                        <i className="fa fa-clock-o"><AiOutlineClockCircle/></i>
                    </a>
                    <a href="#">
                        <img width="30" src={avatar} alt="avatar" />
                    </a>
                </div>
            </nav>
        </>
    )
}

export default Navbar;