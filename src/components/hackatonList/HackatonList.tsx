import { useEffect } from "react";
import HackatonCard from "../hackatonCard/HackatonCard";
import { HackathonState } from "../../types/types";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { fetchHackathons } from "../../store/hackathonSlice";

interface Props {
  filter?: string[];
  searchQuery: string;
}

const HackatonList = ({ searchQuery, filter }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const hackathons = useSelector(
    (state: RootState) => state.hackathons.hackathons
  );

  useEffect(() => {
    dispatch(fetchHackathons());
  }, [dispatch]);

  const filterHackathon = (hackathon: HackathonState): boolean => {
    const nameMatches = hackathon.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    if (!filter || filter.length === 0) return nameMatches; // Return true if filter is not defined or empty

    const topicsMatch = hackathon.topics.some((topic) =>
      filter.includes(topic)
    );

    return nameMatches && topicsMatch;
  };

  return (
    <div>
      {hackathons
        .filter((hackathon) => filterHackathon(hackathon))
        .map((hackaton) => (
          <HackatonCard key={hackaton.id} hackaton={hackaton} />
        ))}
    </div>
  );
};

export default HackatonList;
