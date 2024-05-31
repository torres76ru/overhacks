import { useEffect, useState } from "react";
import HackatonCard from "../hackatonCard/HackatonCard";
import axios from "axios";
import { API_URL } from "../../App";
import { Hackaton } from "../../types/hackathon";

interface Props {
  filter?: string[];
}

const HackatonList = ({ filter }: Props) => {
  const [hackatonList, setHackatonList] = useState<Hackaton[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Hackaton[]>(API_URL + "/hackathons");
        const data = response.data;
        console.log(data);
        setHackatonList(data);
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
    console.log("FILTERHACKATHON");
    if (!filter) console.log(filter);
    if (!filter || filter?.length === 0) return true; // Если фильтр не определен, выводим все
    console.log("FILTERED");
    console.log(filter);
    // Проверяем, есть ли пересечения между темами hackathon и фильтром
    return hackathon.topics.some((topic) => filter.includes(topic));
  };

  return (
    <div>
      {hackatonList
        .filter((hackathon) => filterHackathon(hackathon)) // Фильтруем список по фильтру, если он определен
        .map((hackaton) => (
          <HackatonCard key={hackaton.id} hackaton={hackaton} />
        ))}
    </div>
  );
};

export default HackatonList;
