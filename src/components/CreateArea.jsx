import React, { useState } from "react";
import Add from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab/Fab';
import Zoom from "@material-ui/core/Zoom/Zoom";
function CreateArea(props) {
  const [expand, setExpand] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  function handleExpand()
  {
    setExpand(true);
  }
  return (
    <div>
      <form onClick = {handleExpand} className="create-note">
        {expand &&         
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
}
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={expand ? "3" : "1"}
        />
        <Fab onClick={submitNote}><Add/></Fab>
      </form>
    </div>
  );
}

export default CreateArea;
