import './App.css';
import MainPages from './Components/MainPages';
import Navigation from './Components/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      {/* <h1>Hello E-Commerce React Home Page</h1> */}
      <MainPages />
    </div>
  );
}

export default App;
