import './App.css';
//Named Import
import Netflix from './components/Netflix/Netflix';
//import Form from './components/Form/Form';

function App() {
  return (
    <>
      <div className="App">
        <Netflix user='John'/>
      </div>
    </>
  );
}

export default App;
