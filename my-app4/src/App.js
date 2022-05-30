import logo from "./logo.svg";
import "./App.css";
import Contact from "./Components/Contact";
import Contacts from "./Components/Contacts";
import Button from "./Components/Button";



function App() {
  // console.log(Contacts);
  return (
    <div className="App">
      <h1>My Contacts</h1>
  


      <Contact
        name={Contacts[0].name}
        number={Contacts[0].num}
        img={Contacts[0].imgURL}
        email={Contacts[0].email}
        Button={Button}

      />
      < Button />
      <Contact
        name={Contacts[1].name}
        number={Contacts[1].num}
        img={Contacts[1].imgURL}
        email={Contacts[1].email}
      />
      <Contact
        name={Contacts[2].name}
        number={Contacts[2].num}
        img={Contacts[2].imgURL}
        email={Contacts[2].email}
      />
      <Contact
        name={Contacts[3].name}
        number={Contacts[3].num}
        img={Contacts[3].imgURL}
        email={Contacts[3].email}
      />
      <Contact
        name={Contacts[4].name}
        number={Contacts[4].num}
        img={Contacts[4].imgURL}
        email={Contacts[4].email}
      />
      <Contact
        name={Contacts[5].name}
        number={Contacts[5].num}
        img={Contacts[5].imgURL}
        email={Contacts[5].email}
      /> 
    </div>
  );
}

export default App;
