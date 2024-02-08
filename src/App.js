import './App.css';

import Home from './home/Home';
import About from './about/About';
import Timeline from './experience/Timeline';

function App() {
  return (
    <div className="App">
      <Home/>
      <hr></hr>
      <About/>
      <Timeline/>
    </div>
  );
}

export default App;
