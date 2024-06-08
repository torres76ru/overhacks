import ArrowBack from "../../components/UI/arrow-back/ArrowBack";
import Button from "../../components/UI/button/Button";
import Container from "../../components/UI/container/Container";
import HackatonCard from "../../components/hackatonCard/HackatonCard";
import classes from "./AdminPage.module.scss";
const hackathon = {
  id: 0,
  __v: 2,
  description:
    "<p>🚀 Exciting News for Tech Enthusiasts! 🚀<br />\n<br />\n🌟 Get ready to unleash your creativity at the AIBC Summit&#39;s Hackathon, powered by Ledger! 🌟<br />\n<br />\n🔥 Imagine diving into cutting-edge tracks like Gaming Wallets, Social Bots, and Web 3 Games&mdash;your gateway to the future of technology! 🔥<br />\n<br />\n💰 And the rewards? Oh, they&#39;re HUGE! TBA in cash prizes, exclusive tickets to the AIBC Dubai event (with flights/accommodation covered), and incubation support from the brilliant minds at Playnance! 💡<br />\n<br />\n🚀 This isn&#39;t just a hackathon; it&#39;s your chance to shine and be part of something revolutionary! 🚀<br />\n<br />\n<br />\n🚀 Secure your spot now! Register for the hackathon at https://lnkd.in/ezRBerZe and let the tech adventure begin! 🚀<br />\n<br />\nDon&#39;t miss out on the opportunity of a lifetime&mdash;where groundbreaking ideas meet extraordinary rewards! 🌟🚀 #AIBCSummitHackathon #TechInnovation #UnlockTheFuture</p>",
  endDate: null,
  format: "Online",
  imageUrl: "https://storage.googleapis.com/overhacks-resources/aibc.jpeg",
  name: "AIBC Hackathon",
  prize: "TBA",
  projects: ["659d8faaa5cda698f3138efb", "658dfdb4d27dad78b0f771ee"],
  sponsors: [""],
  startDate: "2024-03-16T00:00:00.000Z",
  topics: ["crypto", " social bots", " web3 games"],
  projectMembersLimit: "",
  projectsLimit: null
};

const AdminPage = () => {
  return (
    <div className={classes.wrapper}>
      <ArrowBack />

      <Container>
        <div style={{ margin: "30px 0 42px" }}>
          <Button variant={"secondary"} href={"#"}>
            Add new event
          </Button>
        </div>

        <div className={classes.title}>My events:</div>
        <HackatonCard hackaton={hackathon} admin={true} />
        <HackatonCard hackaton={hackathon} admin={true} />
      </Container>
    </div>
  );
};

export default AdminPage;
