import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, createNotes] = useState([]);

  function updateNotes(location) {
    createNotes((prevValue) => {
      return prevValue.filter((note, index) => {
        return index !== location;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea createNotes={createNotes} />
      {notes.map((note, index) => {
        const { notetitle, noteContent } = note;

        return (
          <Note
            key={index}
            id={index}
            title={notetitle}
            content={noteContent}
            updateNotes={updateNotes}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
