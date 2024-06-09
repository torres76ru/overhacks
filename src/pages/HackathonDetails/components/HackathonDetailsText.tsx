interface Props {
  description: string;
}

const HackathonDetailsText = ({ description }: Props) => {
  return <div>{description}</div>;
};

export default HackathonDetailsText;
