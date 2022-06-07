import logo from "./logo.svg";
import "./App.css";
import Nav from "./Components/Nav";
import Form from "./Components/Form";
import Note from "./Components/Note";
import { useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return;
      [...prevNotes, newNote];
    });
  }
  return (
    <div className="App">
      <Nav />

      <Form onAdd={addNote} />
      <Note />
      {notes.map((noteItem) => {
        return <note title={noteItem.title} content={noteItem.content} />;
      })}
    </div>
  );
}

export default App;
