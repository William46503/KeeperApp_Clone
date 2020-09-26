import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [inputContent, setInputContent] = React.useState({
    inputTitle: "",
    inputContent: ""
  });

  const [noteItem, setNoteItems] = React.useState([]);

  function addItemHandler(event) {
    setNoteItems((prevValue) => {
      return [...prevValue, inputContent];
    });
    console.log(noteItem);
    setInputContent({
      inputTitle: "",
      inputContent: ""
    });
    event.preventDefault();
  }

  function inputContentHandler(event) {
    const inputName = event.target.name;
    const inputValue = event.target.value;

    setInputContent((prevValue) => {
      if (inputName === "title") {
        return {
          inputTitle: inputValue,
          inputContent: prevValue.inputContent
        };
      } else if (inputName === "content") {
        return {
          inputTitle: prevValue.inputTitle,
          inputContent: inputValue
        };
      }
    });
    console.log(inputName);
    console.log(inputValue);
  }

  function deleteItem(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea
        inputContentHandler={inputContentHandler}
        addItemHandler={addItemHandler}
        inputTitle={inputContent.inputTitle}
        inputContent={inputContent.inputContent}
      />

      {noteItem.map((item, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={item.inputTitle}
            content={item.inputContent}
            onDelete={deleteItem}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
