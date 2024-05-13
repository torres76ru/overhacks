import HackatonCard from "../hackatonCard/HackatonCard";

const hackatonList = [
  {
    id: "1",
    name: "AIBC World Hackathon",
    prize_pool: "180 000",
    curency: "USD"
  },
  {
    id: "2",
    name: "AIBC World Hackathon",
    prize_pool: "180 000",
    curency: "USD"
  },
  {
    id: "2",
    name: "AIBC World Hackathon",
    prize_pool: "180 000",
    curency: "USD"
  },
  {
    id: "2",
    name: "AIBC World Hackathon",
    prize_pool: "180 000",
    curency: "USD"
  }
];

const HackatonList = () => {
  return (
    <div>
      {hackatonList.map((hackaton) => (
        <HackatonCard key={hackaton.id} hackaton={hackaton} />
      ))}
    </div>
  );
};

export default HackatonList;
