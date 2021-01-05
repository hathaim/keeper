import React, { useState } from "react";

function CreateArea(props) {
  const [input, setInput] = useState({ title: "", content: "" });
  function handleChange(event) {
    const { name, value } = event.target;
    setInput((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }
  function submiteNote(event) {
    event.preventDefault();
    props.addOn(input);
    setInput({ title: "", content: "" });
  }
  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          value={input.title}
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={handleChange}
          value={input.content}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submiteNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
