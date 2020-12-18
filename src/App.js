import React, { useState } from "react";
import "./styles.css";

//emoji dictionary
const emojiObject = {
  "🚸": "Children Crossing",
  "⛔": "No Entry",
  "🚫": "Prohibited",
  "🚳": "No Bicycles",
  "🚭": "No Smoking",
  "🚯": "No Littering",
  "🚱": "Non-Potable Water",
  "🚷": "No Pedestrians",
  "📵": "No Mobile Phones",
  "🔞": "No One Under Eighteen",
  "🛂": "Passport Control",
  "🛃": "Customs",
  "🛄": "Baggage Claim",
  "🛅": "Left Luggage",
  "🚮": "Litter in Bin Sign",
  "🚰": "Potable Water",
  "♿": "Wheelchair Symbol",
  "🚹": "Men’s Room",
  "🚺": "Women’s Room",
  "🚻": "Restroom",
  "🚼": "Baby Symbol",
  "🚾": "Water Closet",
  "⬆️": "Up Arrow",
  "↗️": "Up-Right Arrow",
  "➡️": "Right Arrow",
  "↘️": "Down-Right Arrow",
  "⬇️": "Down Arrow",
  "↙️": "Down-Left Arrow",
  "⬅️": "Left Arrow",
  "↖️": "Up-Left Arrow"
};

//list of all emojis
const list = Object.keys(emojiObject);

export default function App() {
  //useState
  const [emojiMeaning, setEmojiMeaning] = useState(
    "Start typing / choose from 👇"
  );
  //onChage of input field
  function onChangeHandler(event) {
    var meaning =
      emojiObject[event.target.value] === undefined
        ? "sorry..! we are unaware of this"
        : emojiObject[event.target.value];
    setEmojiMeaning(meaning);
  }

  //onClick on emoji
  function onClickHandler(emoji) {
    var meaning =
      emojiObject[emoji] === undefined
        ? "sorry..! we are unaware of this"
        : emojiObject[emoji];
    setEmojiMeaning(meaning);
  }

  return (
    <div className="App">
      <input
        className="input"
        onChange={onChangeHandler}
        placeholder="put emoji to know"
      />
      <div className="output">{emojiMeaning}</div>
      <div className="listingArea">
        {list.map((el) => {
          return (
            <span className="emoji" onClick={() => onClickHandler(el)}>
              {el}
            </span>
          );
        })}
      </div>
    </div>
  );
}
