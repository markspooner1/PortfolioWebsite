import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import SchoolTwoToneIcon from "@mui/icons-material/SchoolTwoTone";
import { WorkTwoTone } from "@mui/icons-material";
import "react-vertical-timeline-component/style.min.css";
const Experience = () => {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018-2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #a0b1db" }}
          icon={<SchoolTwoToneIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Concordia University
          </h3>
          <p>B.S, Computer Science </p>
          <p>
            {" "}
            Coursework: Operating Systems, Databases, Advanced Program Design
            with C++, Artificial Intelligence, Web Programming, Computer
            Networking, Software Engineering
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018-2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #a0b1db" }}
          icon={<WorkTwoTone />}
        >
          <h3 className="vertical-timeline-element-title">
            Water Polo Player, Canadian Senior Men's National team
          </h3>
          <p>
            Represented Team Canada at various international competitions,
            including the 2021 Olympic Qualification Tournament and the 2019
            Pan-American Games.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019-2021"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #a0b1db" }}
          icon={<WorkTwoTone />}
        >
          <h3 className="vertical-timeline-element-title">
            Professional Water Polo Player, FNC Douai
          </h3>
          <p>
            Spent two seasons playing water polo for FNC Douai in France’s First
            divison league.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="May 2022 - Aug 2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #a0b1db" }}
          icon={<WorkTwoTone />}
        >
          <h3 className="vertical-timeline-element-title">
            Research Assistant
          </h3>
          <p>
            Completed data collection on and interview transcription about
            electronic elections processes in Ontario municipal elections.
            Analyzed electronic elections data for the 2014 and 2018 Ontario
            municipal elections to determine patterns between internet voting
            adoption and voter turnout{" "}
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
