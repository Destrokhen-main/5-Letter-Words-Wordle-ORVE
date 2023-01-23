import orve from "orve";

import style from "./letterBook.sc.scss";

export default function () {
  return (
    <div class={style.body}>
      {
        this.bank.letters.forList((e, i) => {
          return (
            <div class={style.cell}>
              <p style={
                {
                  fontSize: i === this.bank.current[0] ? "20px" : "16px"}
                }
              >{i + 1}</p>
              {e.map((m, y) => {
                  let dopStatus = "";
            
                  if (m.status === "have") {
                    dopStatus = style["have-letter"];
                  } else if (m.status === "done") {
                    dopStatus = style["correct"];
                  }
                  return (
                    <div
                      class={`${style["cell-lett"]} ${dopStatus}`}
                      style={{
                        border: y === this.bank.current[1] && i === this.bank.current[0] ? "3px solid red" : ""
                      }}
                    >
                      {m.value ?? ""}
                    </div>
                  )
                })}
            </div>
          )
        })
      }
    </div>
  )
}