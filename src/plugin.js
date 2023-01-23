// TODO есть чем заняться на стриме
/*
[ ] - Context
*/
import { ref } from "orve";
import { getRandomWord } from "./assets/words";
export default {
  setup(orve) {
    const s = new Array(5)
    .fill(0)
    .map(
      (e) => new Array(5)
                  .fill(0)
                  .map((e, i) => ({ id: i, value: null, status: null })));
    orve.context["bank"] = {
      letters: ref(s),
      current: [0, 0],
      word: getRandomWord()
    }
  }
}