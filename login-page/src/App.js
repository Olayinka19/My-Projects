
import './App.css';
import Form from './Components/Form';





var UserIsRegistered = false;
function App() {
  return (
    <div className="App">
      <h1>{}</h1>
  
      <Form isRegistered={UserIsRegistered} />
      
    </div>
  );
}

export default App;
