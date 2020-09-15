import React from "react";
import Swiper from "react-id-swiper";
// SCSS
import "swiper/css/swiper.css";
// Components
import SkillsBox from "./skillsBox";
// Assets
import Skill01 from "../../assets/skills/partner01.svg";
import Skill02 from "../../assets/skills/partner02.svg";
import Skill03 from "../../assets/skills/partner03.svg";
import Skill04 from "../../assets/skills/partner04.svg";
import Skill05 from "../../assets/skills/partner05.svg";
import Skill06 from "../../assets/skills/partner06.svg";
import Skill07 from "../../assets/skills/partner07.svg";
import Skill08 from "../../assets/skills/partner08.svg";
import Skill09 from "../../assets/skills/partner09.svg";
import Skill10 from "../../assets/skills/partner10.svg";
import Skill11 from "../../assets/skills/partner11.svg";

class MutipleSlidesPerView extends React.Component {
  state = {
    skills: [
      {
        preview: Skill01,
        id: "1",
      },
      {
        preview: Skill02,
        id: "2",
      },
      {
        preview: Skill03,
        id: "3",
      },
      {
        preview: Skill04,
        id: "4",
      },
      {
        preview: Skill05,
        id: "5",
      },
      {
        preview: Skill06,
        id: "6",
      },
      {
        preview: Skill07,
        id: "7",
      },
      {
        preview: Skill08,
        id: "8",
      },
      {
        preview: Skill09,
        id: "9",
      },
      {
        preview: Skill10,
        id: "10",
      },
      {
        preview: Skill11,
        id: "11",
      },
    ],
  };

  render() {
    let skillsRender = null;

    if (this.state.skills) {
      skillsRender = this.state.skills.map((skill) => (
        <div key={skill.id}>
          <SkillsBox skill={skill.preview} />
        </div>
      ));
    }

    const params = {
      grabCursor: true,
      slidesPerView: 1,
      spaceBetween: 5,
      loop: true,
      breakpoints: {
        1200: {
          slidesPerView: 6,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        320: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
      },
    };
    return <Swiper {...params}>{skillsRender}</Swiper>;
  }
}
export default MutipleSlidesPerView;
