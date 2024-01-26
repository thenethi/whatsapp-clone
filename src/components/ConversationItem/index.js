import { FaVideo,FaSearch,FaRegSmile,FaPlus } from "react-icons/fa";
import { CiMenuKebab } from "react-icons/ci";
import { MdKeyboardVoice } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";
import Cookies from "js-cookie";
import {withRouter } from "react-router-dom";
import './index.css'

const ConversationItem=(props)=>{
    const {userConversation}=props 
    const {name, message,profile}=userConversation
    const {history}=props 
    const logOutBtn=()=>{
        Cookies.remove("loginStatus")
        history.replace('/login')
    }
    return(
        <>
            <div className='header-container'>
                <div className="header-profile-container">
                <img src={profile} alt="chat-img" className='header-profile-image'/>
                <h1 className="header-name">{name}</h1>
                </div>
                <div>
                <FaVideo className="header-icon"/>
                <FaSearch className="header-icon"/>
                <CiMenuKebab className="header-icon"/>
                <button type="button" className="logout-btn" onClick={logOutBtn}><IoLogOutOutline className="header-icon"/></button>
                </div>
            </div>
            <div className="conversation-container">
                <div className="message-container">
                    {message}
                </div>
            </div>
            <div className="conversation-input-container">
                    <FaRegSmile className="header-icon"/>
                    <FaPlus className="header-icon"/>
                    <input type="text" placeholder="Type a message" className="conversation-user-input-container"/>
                    <MdKeyboardVoice className="header-icon"/>
            </div>
        </>
    )
}

export default withRouter(ConversationItem)