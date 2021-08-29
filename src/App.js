import './App.css';
import Clock from './components/Clock.jsx'

function App() {
  return (
    <div className="App">
      <Clock region = 'Australia'city='Sydney'/>
      <Clock region = 'Asia'city='Tokyo'/>
      <Clock region = 'Europe'city='London'/>
      <Clock region = 'America'city='New_York'/>    
    </div>
  );
}

export default App;
