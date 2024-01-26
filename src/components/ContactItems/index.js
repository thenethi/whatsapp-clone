import { Link } from 'react-router-dom'
import './index.css'

const ContactItems =(props)=>{
    const {contactItem}=props 
    const {id,profile,message,name,time}=contactItem
    return(
        <Link to={`/${id}`} className="link-text">
        <li>
            <img src={profile} alt='profile' className='profile-image'/>
            <div className='profile-details-container'>
                <h1 className='profile-head'>{name}</h1>
                <p className='profile-msg'>{message}</p>
            </div>
            <p className='profile-msg profile-msg-time'>{time}</p>
        </li>
        <hr className='horizontal-line'/>
        </Link>
    )
}

export default ContactItems