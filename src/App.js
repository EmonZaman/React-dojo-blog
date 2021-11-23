

import Navbar from './navbar'
import Home from './home'

function App() {
  const title = 'App Component';
  const likes = 50;
  const values = [1, 2, 3, 4, 5, 6, 6]
  const links = 'http://www.google.com'
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="content">
        {/* <h1>{title}</h1>  
        <p>you have {likes} likes</p>
        <p>{Math.random() * 10}</p>
        <p>{values}</p>
        <a href={links}>Google Site</a> */}
        <Home></Home>
      </div>

    </div>
  );
}

export default App;
