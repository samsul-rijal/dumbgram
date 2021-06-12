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

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/feed" exact component={FeedPage} />
          <Route path="/explore" exact component={ExplorePage} />
          <Route path="/profileexplore" exact component={FeedProfilePeople} />
          <Route path="/createpost" exact component={CreatePostPage} />
          <Route path="/editprofile" exact component={EditProfilePage} />
          <Route path="/message" exact component={MessagePage} />
        </Switch>
      </Router>
    </div>
    );
}

export default App;
