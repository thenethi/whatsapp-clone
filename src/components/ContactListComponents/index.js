import NavBar from '../NavBar'
import {users} from '../../Data'
import ContactItems from '../ContactItems'
import './index.css'
console.log(users)
const ContactListComponents=()=>
    (
    <div className='contact-list-container'>
        <NavBar/>
        <input type='search' placeholder='Search or start new chat' className='input-search'/>
        <ul type="none">
            {users.map((each)=><ContactItems key={each.id} contactItem={each}/>)}
        </ul>
    </div>
)

export default ContactListComponents