import Navbar from './Navbar';
import Home from './Home';

//a component
export default function App() {

  const title = "Welcome to my Blog"

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

// export default App;
