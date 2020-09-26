import React from "react";

function CreateArea(props) {
  return (
    <div>
      <form onChange={props.inputContentHandler}>
        <input name="title" placeholder="Title" value={props.inputTitle} />
        <textarea
          name="content"
          placeholder="Take a note..."
          value={props.inputContent}
          rows="3"
        />
        <button onClick={props.addItemHandler}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
