import Login from './components/Login';
import ConversationComponents from './components/ConversationComponents';
import ContactListComponents from './components/ContactListComponents'
import ProtectedRoute from './components/ProtectedRoute';
import {Route,Switch} from 'react-router-dom'
import './App.css';

const App=()=>(
  <Switch>
    <ProtectedRoute exact path="/" component={ContactListComponents}/>
    <Route exact path="/login" component={Login}/>
    <ProtectedRoute exact path="/:id" component={ConversationComponents}/>
  </Switch>
)

export default App;
