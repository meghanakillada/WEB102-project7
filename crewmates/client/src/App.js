import './App.css';
import React from 'react';
import { useRoutes } from 'react-router-dom'
import ReadPosts from './pages/ReadPosts'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'
import Home from './pages/Home'
import { Link } from 'react-router-dom'


const App = () => {
  
  const descr = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'

  const posts = []
 

  // Sets up routes
  let element = useRoutes([
    {
      path: "/",
      element:<Home />
    },
    {
      path: "/gallery",
      element:<ReadPosts data={posts}/>
    },
    {
      path:"/gallery/edit/:id",
      element: <EditPost data={posts} />
    },
    {
      path:"/new",
      element: <CreatePost />
    }
  ]);

  return ( 

    <div className="App">

      <div className="header">
        <h1>Crewmate Creator</h1>
        <Link to="/"><button className="headerBtn"> Home  </button></Link>
        <Link to="/gallery"><button className="headerBtn"> Crewmate Gallery  </button></Link>
        <Link to="/new"><button className="headerBtn"> Create Crewmate </button></Link>
      </div>
        {element}
    </div>

  );
}

export default App;
