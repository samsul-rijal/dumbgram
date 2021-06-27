import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import FeedPage from './Pages/FeedPage'
import ExplorePage from './Pages/ExplorePage'
import FeedProfilePeople from './Pages/FeedProfilePeople'
import CreatePostPage from './Pages/CreatePostPage'
import EditProfilePage from './Pages/EditProfilePage';
import MessagePage from './Pages/MessagePage';
import Home from './Pages/Home';

import { UserContext } from "./contexts/userContext"
import { useContext, useEffect } from 'react';
import { API, setAuthToken } from './config/api'

if(localStorage.token){
  setAuthToken(localStorage.token)
}

function App() {
  const [state, dispatch] = useContext(UserContext);

  const checkUser = async () => {
    try {
      const response = await API.get('/check-auth')
      console.log(response.data.data.user)

      console.log(localStorage.token)

      let payload = response.data.data.user
      payload.token = localStorage.token
      console.log(payload)

      dispatch({
        type: "USER_SUCCESS",
        payload
      })

    } catch (error) {
      console.log(error.response)
    }
  }

  console.log(state)

  useEffect(()=>{
    checkUser()
  },[])

  return (
    <div className="App">
      <Router>
        <Switch>
          { (state.isLogin) ?
            <> 
              <Route path="/" exact component={Home} />
              <Route path="/feed" exact component={FeedPage} />
              <Route path="/explore" exact component={ExplorePage} />
              <Route path="/profileexplore" exact component={FeedProfilePeople} />
              <Route path="/createpost" exact component={CreatePostPage} />
              <Route path="/editprofile" exact component={EditProfilePage} />
              <Route path="/message" exact component={MessagePage} />
            </>
            :
            <>
              <Route exact path="/*" component={ Home } />
            </>
          }
        </Switch>
      </Router>
    </div>
    );
}

export default App;
