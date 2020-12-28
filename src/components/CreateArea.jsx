import React, { useState } from "react";

function CreateArea(props) {
  const [notesTitle, setNotesTitle] = useState("");
  const [notesContent, setNotesContent] = useState("");

  function handleInput(event) {
    if (event.target.name === "title") {
      setNotesTitle(event.target.value);
    } else {
      setNotesContent(event.target.value);
    }
  }

  function handleSubmit(event) {
    const note = {
      notetitle: notesTitle,
      noteContent: notesContent
    };

    props.createNotes((prevValue) => {
      return [...prevValue, note];
    });

    setNotesTitle("");
    setNotesContent("");

    event.preventDefault();
  }

  return (
    <div>
      <form onChange={handleInput}>
        <input name="title" placeholder="Title" value={notesTitle} />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={notesContent}
        />
        <button onClick={handleSubmit}>+</button>
      </form>
    </div>
  );
}

export default CreateArea;
