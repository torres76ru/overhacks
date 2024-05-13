import { useState } from "react";
import classes from "./Filter.module.scss";

const marks = ["WEB3", "Gaming", "AI"];

const Filter = () => {
  const [selectedMarks, setSelectedMarks] = useState<string[]>([]);

  const toggleMark = (mark: string) => {
    if (selectedMarks.includes(mark)) {
      setSelectedMarks(selectedMarks.filter((item) => item !== mark));
    } else {
      setSelectedMarks([...selectedMarks, mark]);
    }
  };
  return (
    <>
      <ul className={classes.filter}>
        <li
          className={
            classes.filter_item +
            " " +
            (selectedMarks.length === 0 ? classes.active : "")
          }
          onClick={() => setSelectedMarks([])}
        >
          All
        </li>
        {marks.map((mark, index) => (
          <li
            className={
              classes.filter_item +
              " " +
              (selectedMarks.includes(mark) ? classes.active : "")
            }
            onClick={() => toggleMark(mark)}
            key={index}
          >
            {mark}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Filter;
