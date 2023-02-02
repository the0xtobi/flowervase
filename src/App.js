import './App.css';
import greenvase from './image/greenvase.webp'
import lilyvase from './image/lilyvase.webp'

function App() {
  return (
    <div className='App'>
      <div className="container">
        <div className='row-display'>
          <h4>green</h4>
          <img src={greenvase} />
        </div>

        <div className='column-display'>
          <h4>lily</h4>
          <img src={lilyvase} />
        </div>
      </div>
    </div>
  );
}

export default App;
