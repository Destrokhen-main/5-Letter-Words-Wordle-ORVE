import orve from "orve";
import { checkExistWord } from "./assets/words";

import "./style.scss";
import LetterBlock from "./components/LetterBook";

function App() {
  document.addEventListener("keydown", (e) => {
    const key = e.key;
    const keys = "qwertyuioplkjhgfdsazxcvbnm";
    if (key === "Enter") {
      checkWord();
      return;
    }

    if (keys.includes(key) || key === "Backspace") {
      if (key !== "Backspace") {
        if (this.bank.current[1] <= 4) {
          const array = this.bank.letters.value[this.bank.current[0]];

          array[this.bank.current[1]].value = e.key;
          if (this.bank.current[1] !== 4)
            this.bank.current[1]++;
          this.bank.letters.value[this.bank.current[0]] = array;
        }
      } else {
        if (this.bank.current[1] >= 0) {
          const array = this.bank.letters.value[this.bank.current[0]];
          if (array[this.bank.current[1]].value !== null) {
            array[this.bank.current[1]].value = null;
          } 
          if (this.bank.current[1] !== 0)
            this.bank.current[1]--;
          this.bank.letters.value[this.bank.current[0]] = array;
        }
      }
    }
  });

  const checkWord = () => {
    const arr = this.bank.letters.value[this.bank.current[0]];

    const word = arr.reduce((a, b) => {
      if (b.value !== null)
        return a + b.value
      else
        return a;
    }, "");

    if (word.length === 5) {
      if (checkExistWord(word)) {
        const OrderedWord = this.bank.word.split("");
        const currentWord = word.split("");

        let done = 0;

        for(let i = 0; i !== currentWord.length; i++) {
          if (currentWord[i] === OrderedWord[i]) {
            arr[i].status = "done";
            done++;
          } else if (OrderedWord.includes(currentWord[i])) {
            arr[i].status = "have"
          }
        }


        this.bank.current[0]++;

        this.bank.letters.value[this.bank.current[0] - 1] = arr;

        if (done === 5) {
          alert("Great!");
          document.location.reload();
        }
        if (this.bank.current[0] > 4) {
          alert(`word: "${this.bank.word}"`);
          document.location.reload();
        }
        this.bank.current[1] = 0;
      } else {
        alert("I don't know this word");
      }
    } else {
      alert("Write the full word")
    }
  }

  return (
    <div>
      <LetterBlock />
      <button onclick={checkWord} style={{
        width: "100%",
        height: 50,
        marginTop: 30
      }}>Check Word</button>
    </div>
  )
}

export default App;