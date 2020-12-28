import React from "react";

function Note(props) {
  function initiateDelete() {
    props.updateNotes(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={initiateDelete}>DELETE</button>
    </div>
  );
}

export default Note;
