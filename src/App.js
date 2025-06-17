
import './App.css';
import CounterFunc from './components/counterFunc';
import CounterClass from './components/counterClass';
function App() {
  return (
    <div className="app">
      <header>
       <p>Assignment-2 Counter Application</p>
      </header>
      
      <section className='app-body'>
        <div>
          <h4>Function Component</h4>
          <CounterFunc/>
        </div>
         <div>
          <h4>Class Component</h4>
          <CounterClass/>
        </div>
      </section>
     
    </div>
  );
}

export default App;
