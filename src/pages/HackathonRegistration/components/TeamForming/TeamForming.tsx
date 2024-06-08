import { useState } from "react";
import css from "./TeamForming.module.scss";
import Container from "../../../../components/UI/container/Container";
import CustomCheckBox from "../../../../components/UI/checkBox/CustomCheckBox";
import Button from "../../../../components/UI/button/Button";

const roles = [
  { name: "selected", label: "By selected Hackathon" },
  { name: "pm", label: "Product Manager" },
  { name: "chief", label: "Chief Technical Officer" },
  { name: "ux/ui", label: "UX/UI Designer" },
  { name: "frontend", label: "Frontend Developer" },
  { name: "backend", label: "Backend Developer" },
  { name: "qa", label: "QA Engineer" }
];

const TeamForming = () => {
  const [selectedItems, setSelectedItems] = useState<{
    [key: string]: boolean;
  }>({});

  const handleCheckBoxChange = (updatedItems: { [key: string]: boolean }) => {
    setSelectedItems(updatedItems);
    console.log(updatedItems);
  };

  return (
    <Container>
      <h1>Do you want to form a team</h1>
      <p>
        Select the roles for teammates you want to invite, or click "Skip" if
        you're not interested
      </p>
      <div className={css.roles}>
        <CustomCheckBox
          items={roles}
          onChange={handleCheckBoxChange}
          selectedItems={selectedItems}
        />
      </div>
      <div className={css.buttons}>
        <Button to={"/people"}>Choose</Button>
        <Button to={"/hackathons"} variant={"secondary"}>
          Skip
        </Button>
      </div>
    </Container>
  );
};

export default TeamForming;
