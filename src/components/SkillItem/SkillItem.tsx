import * as C from "./SkillItem.styles";
import { MdStar } from "react-icons/md";
import React from "react";

type Props = {
  name: string;
  description: string;
  link: string;
  stars: number;
};

const SkillItem = ({ name, description, link, stars }: Props) => {
  const listStar: React.ReactElement[] = [];

  const starsCount = () => {
    let i: number;

    for (i = 0; i < stars; i++) {
      listStar.push(<MdStar key={i}/>);
    }
  };

  starsCount();

  return (
    <C.Item>
      <div className="topContainer">
        <div className="titleContent">
          <h3>{name}</h3>
          <div className="starContainer">{listStar}</div>
        </div>
        <img src={link} alt={name} />
      </div>

      <p>{description}</p>
    </C.Item>
  );
};

export default SkillItem;
