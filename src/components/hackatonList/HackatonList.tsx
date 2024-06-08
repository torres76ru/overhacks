import { useEffect, useState } from "react";
import HackatonCard from "../hackatonCard/HackatonCard";
import axios from "axios";
import { API_URL } from "../../App";
import { Hackaton } from "../../types/hackathon";

interface Props {
  filter?: string[];
  searchQuery: string;
}

const HackatonList = ({ searchQuery, filter }: Props) => {
  const [hackatonList, setHackatonList] = useState<Hackaton[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Hackaton[]>(API_URL + "/hackathons");
        setHackatonList(response.data);
      } catch (error) {
        console.error("Error fetching hackathon data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log(filter);
  }, [filter]);

  const filterHackathon = (hackathon: Hackaton): boolean => {
    const nameMatches = hackathon.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    if (!filter || filter.length === 0) return nameMatches; // Return true if filter is not defined or empty
    return (
      hackathon.topics.some((topic) => filter.includes(topic)) || nameMatches
    );
  };

  return (
    <div>
      {hackatonList
        .filter((hackathon) => filterHackathon(hackathon))
        .map((hackaton) => (
          <HackatonCard key={hackaton.id} hackaton={hackaton} />
        ))}
    </div>
  );
};

export default HackatonList;
