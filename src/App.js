import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav><a href="./">Home</a><a href="#">About</a><a href="#">Contact</a><a href="#">Projects</a></nav>
      <header className="App-header">
        <h1>Divyansh Jain</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          I am a software engineer and a school student .
        </p>
      </header>
      <footer>Created with ❤ by <a href="https://github.com/codekajadoo">Divyansh Jain</a></footer>
    </div>
  );
}

export default App;
