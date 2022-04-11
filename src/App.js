import './App.css';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Counter from './Counter';

function App() {
  let counterValue = 0;
  return (
    <div class="container text-center">
      <div class="row">
        <div class="col-sm-12">
          <h1>Counter Value</h1>
          <Counter value={counterValue}/>
        </div>
      </div> 
    </div> 
  );
}

export default App;
