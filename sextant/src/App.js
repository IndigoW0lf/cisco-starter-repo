import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';


function App() {
  return (
    <div className="App">
      <Banner />
      <Exhibit title="Example Exhibit">
        <p>Some content goes here.</p>
      </Exhibit>
    </div>
  );
}

export default App;
