import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  function addNote(newNote) {
    setNotes((prevValue) => {
      return [...prevValue, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevValue) => {
      return prevValue.filter((delNote, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addOn={addNote} />
      {notes.map((displayingNotes, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={displayingNotes.title}
            content={displayingNotes.content}
            onDelete={deleteNote}
          />
        );
      })}

      {/* <Note key={1} title="Note title" content="Note content" /> */}
      <Footer />
    </div>
  );
}

export default App;
