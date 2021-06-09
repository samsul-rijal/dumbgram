import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import LandingPage from './Pages/Home'
import FeedPage from './Pages/FeedPage'
import ExplorePage from './Pages/ExplorePage'
import FeedProfilePeople from './Pages/FeedProfilePeople'
import CreatePostPage from './Pages/CreatePostPage'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/feed" exact component={FeedPage} />
          <Route path="/explore" exact component={ExplorePage} />
          <Route path="/profileexplore" exact component={FeedProfilePeople} />
          <Route path="/createpost" exact component={CreatePostPage} />
        </Switch>
      </Router>
    </div>
    );
}

export default App;
