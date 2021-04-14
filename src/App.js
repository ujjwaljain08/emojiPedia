import react , {useState} from 'react';
 


function App() {
  const emojiCollection = {
    "😊": "Smiling Emoji",
    "😂": "Laughining Emoji",
    "😍": "Loving Emoji",
    "😎": "Cool Emoji",
    "😔": "Sad Emoji",
    "😭": "Crying Emoji",
    "😮": "Shocked Emoji",
    "😉": "Winking Face",
    "😚": "Kissing Face with Closed Eyes",
"😙": "Kissing Face with Smiling Eyes",

"😀": "Grinning Face",
"😃": "Grinning Face with Big Eyes",
"😄": "Grinning Face with Smiling Eyes",
"😁": "Beaming Face with Smiling Eyes",
"😆": "Grinning Squinting Face",
"😅": "Grinning Face with Sweat",
  }
  const emojis = Object.keys(emojiCollection);

   const [meaning , setMeaning] = useState("Result")

  function emojiClickHandler(e) {
    setMeaning(emojiCollection[e]);
  }

  return (
    <div className="App">
 
       <h1>{meaning}</h1>
       {emojis.map((e) => (
        <span
          key={e}
          onClick={() => emojiClickHandler(e)}
          style={{ fontSize: "30px", margin: "5px", cursor: "pointer" }}
        >
          {e}
        </span>
          ))}
    </div>
  );
}

export default App;
