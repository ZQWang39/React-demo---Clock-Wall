
import Clock from './components/Clock.jsx'
import './components/App.scss'

const cities = [
  {
    id:1,
    region:'Australia', 
    city:'Sydney'
  },
   {
    id:2,
    region:'Asia', 
    city:'Tokyo'
  },
   {
     id:3,
     region:'Europe', 
     city:'London'
  },
   {
     id:4,
     region:'America', 
     city:'New_York'
  }
]
function App() {
  return (
    <div className="App">
      <ul className='clock__container'>
        {
          cities.map(city=>(
            <li className='clock' key={city.id}><Clock region={city.region} city={city.city}/></li>
          ))
        }  
      </ul>
    </div>
  );
}

export default App;
