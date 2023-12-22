import logo from './logo.svg';
import './App.css';
import Content from './Content.js';

function App() {
  const firstName = "Allen"
  const secondName = "Stephen"

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world from {firstName} and {secondName}!
        </p>
        <Content/>
        <p>
          <text>
            Authors:{"\n"}
            <a
              className='App-link'
              href='https://github.com/alleng2'
              target='_blank'
              rel='noopener noreferrer'
            >Allen Guo</a>
            {' '} and {' '}
            <a
              className='App-link'
              href='https://github.com/stephenmoy14'
              target='_blank'
              rel='noopener noreferrer'
            >Stephen Moy</a>
          </text>
        </p>
      </header>
    </div>
  );
}

export default App;
