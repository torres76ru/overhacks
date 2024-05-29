import { useState } from "react";
import classes from "./Filter.module.scss";
import CustomCheckBox from "../UI/checkBox/CustomCheckBox";

const marks = ["Ongoing", "Upcoming"];

const Filter = () => {
  const [selectedMarks, setSelectedMarks] = useState<string[]>([]);
  const [filterVisible, setFilterVisible] = useState<boolean>(false);
  const [selectedItems, setSelectedItems] = useState<{
    [key: string]: boolean;
  }>({
    online: false,
    ai: false,
    web3: false,
    gaming: false,
    dapps: false,
    defi: false,
    nft: false,
    security: false
  });

  const filterList = [
    { name: "online", label: "Online" },
    { name: "ai", label: "AI" },
    { name: "web3", label: "WEB3" },
    { name: "gaming", label: "Gaming" },
    { name: "dapps", label: "DApps" },
    { name: "defi", label: "DeFi" },
    { name: "nft", label: "NFT / Digital art" },
    { name: "security", label: "Security" }
  ];

  const toggleMark = (mark: string) => {
    if (selectedMarks.includes(mark)) {
      setSelectedMarks(selectedMarks.filter((item) => item !== mark));
    } else {
      setSelectedMarks([...selectedMarks, mark]);
    }
  };

  const toggleVisible = () => {
    setFilterVisible(!filterVisible);
  };

  const handleCheckBoxChange = (updatedItems: { [key: string]: boolean }) => {
    setSelectedItems(updatedItems);
  };

  return (
    <>
      <ul className={classes.filter}>
        <li
          className={`${classes.filter_item} ${classes.filter__spoilerButton}`}
          onClick={toggleVisible}
        >
          Filters
          <div
            className={`${classes.filter__spoiler} ${
              filterVisible && classes._active
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <CustomCheckBox
              items={filterList}
              onChange={handleCheckBoxChange}
              selectedItems={selectedItems}
            />
          </div>
        </li>
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
