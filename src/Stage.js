import { useEffect, useState } from "react";
import { hiragana } from "./kana";
const Stage = ({ option }) => {
  const [num, setNum] = useState(0);
  const [shuffledArray, setShuffledArry] = useState([]);

  useEffect(() => {
    let kanaArray;

    if (option === "hiragana") {
      kanaArray = Array.from(hiragana);
    } else {
      kanaArray = [];
    }

    setShuffledArry(
      kanaArray
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
    );

    setNum(0);
  }, [option]);
  console.log(num);

  return shuffledArray.length > 0 ? (
    <div className="stage">
      <div className="stageKana">{shuffledArray[num][1]}</div>
      <div
        onClick={() => {
          if (num < shuffledArray.length - 1) {
            setNum(num + 1);
          } else {
            // promote finished one round
            setNum(0);
          }
        }}
        className="stageNext"
      >
        next
      </div>
    </div>
  ) : (
    <div>error</div>
  );
};

export default Stage;
