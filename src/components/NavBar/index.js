import { IoPerson } from "react-icons/io5";
import { MdGroups } from "react-icons/md";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { RiChatNewLine } from "react-icons/ri";
import { CiMenuKebab } from "react-icons/ci";
import './index.css'
const NavBar=()=>(
    <div className='navbar-container'>
        <IoPerson className="navbar-icon"/>
        <div className="icons-container">
            <MdGroups className="navbar-icon"/>
            <HiOutlineStatusOnline className="navbar-icon"/>
            <RiChatNewLine className="navbar-icon"/>
            <CiMenuKebab className="navbar-icon"/>
        </div>
    </div>
)

export default NavBar