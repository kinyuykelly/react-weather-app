import Weather from './components/Weather';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className='container'>
      <Weather defaultcity='New York'/>
    <footer>Coded by {""} <a href='https://github.com/Kinyuykelly' target='_blank'> Kinyuy Kelly</a> {""} and open-sourced on {""}
     <a href='https://github.com/Kinyuykelly/react-weather-app' target='_blank'> {""}GitHub</a></footer>
      </div>
    
    </div>
  );
}

