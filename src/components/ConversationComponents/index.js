import ContactListComponents from '../ContactListComponents'
import ConversationItem from '../ConversationItem'
import {users} from '../../Data'
import './index.css'

const ConversationComponents=(props)=>{
    const {match}=props 
    const {params}=match
    const {id}=params
    let filteredList
    try{
        filteredList=users[id-1]
    }
    catch(e){
        console.log(e)
    }
    return(
    <div className='app-container'>
        <ContactListComponents/>
        <div className='conversation-container'>
            <ConversationItem userConversation={filteredList} key={id}/>
        </div>
    </div>
)}

export default ConversationComponents