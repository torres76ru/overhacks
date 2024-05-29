import HackatonCard from "../hackatonCard/HackatonCard";

const hackatonList = [
  {
    id: "1",
    name: "Microsoft Developers AI Learning Hackathon",
    prize_pool: "10 000",
    curency: "USD",
    preview: "src/assets/img/hackathon1.png"
  },
  {
    id: "2",
    name: "Google Cloud Vertex AI Agent Builder Hackathon",
    prize_pool: "180 000",
    curency: "USD",
    preview: "src/assets/img/hackathon2.png"
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
