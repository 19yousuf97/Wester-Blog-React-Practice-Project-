import Navbar from './navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './create';
import BlogDetails from './BlogDetails';
import NotFound from './notFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <div className="Content">
          <Switch>
            <Route exact path="/">
              <Home>  </Home>
            </Route>
            <Route path="/create">
              <Create>  </Create>
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails>  </BlogDetails>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
