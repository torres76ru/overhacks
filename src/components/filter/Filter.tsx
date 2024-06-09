import { useEffect, useState } from "react";
import classes from "./Filter.module.scss";
import CustomCheckBox from "../UI/checkBox/CustomCheckBox";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { fetchTopics } from "../../store/topicsSlice";

const marks = ["Ongoing", "Upcoming"];

interface FilterProps {
  onFilterChange: (selectedMarks: string[]) => void;
}

interface CheckBoxItem {
  name: string;
  label: string;
}

const Filter = ({ onFilterChange }: FilterProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const topics = useSelector((state: RootState) => state.topics.topics);

  const [selectedMarks, setSelectedMarks] = useState<string[]>([]);
  const [filterVisible, setFilterVisible] = useState<boolean>(false);
  const [selectedItems, setSelectedItems] = useState<{
    [key: string]: boolean;
  }>({});
  const [filterList, setFilterList] = useState<CheckBoxItem[]>([]);

  useEffect(() => {
    dispatch(fetchTopics());
  }, [dispatch]);

  useEffect(() => {
    const filterList = Array.isArray(topics)
      ? topics.map((topic) => ({
          name: topic.name.toLowerCase(),
          label: topic.name
        }))
      : [];
    setFilterList(filterList);
  }, [topics]);

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
    const selectedItemKeys = Object.keys(updatedItems).filter(
      (key) => updatedItems[key]
    );
    onFilterChange(selectedItemKeys);
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
