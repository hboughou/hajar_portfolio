import { Fragment, useState } from "react";

import AnimatedText from "./AnimatedText";
import AboutPopup from "./popup/AboutPopup";

const aboutData = {
  firstName: "Hajar",
  lastName: "Boughoula",
  bithday: "1993.11.08",
  address: "Phoenix, AZ",
  phn: "+966554687664",
  email: "hajar.boughoula@gmail.com",
  serviceLists: [
    "Website Development",
    "Web APIs",
    "XAI | ML | NLP",
    "Distributed Systems",
    "Infrastructure",
    "Shared Web Hosting",
    "Accessibility",
    "SEO",
  ],
  skills: {
    programming: [
      { name: "Python", value: "95" },
      { name: "Typescript", value: "95" },
      { name: "JavaScript", value: "95" },
      { name: "React", value: "90" },
      { name: "Java", value: "90" },
      { name: "HTML", value: "90" },
      { name: "CSS", value: "90" },
      { name: "NextJS", value: "70" },
      { name: "Postgres", value: "70" },
      { name: "MySQL", value: "70" },
      { name: "AWS", value: "50" },
      { name: "C/C++", value: "40" },
      { name: "C#/.Net Core", value: "30" },
    ],
  },
  education: [
    {
      year: "December 2024",
      unv: "Arizona State University",
      degree: "B.S. Software Engineering",
    },
    { year: "2012-2014", unv: "Massachusetts Institute of Technology" },
  ],
  working: [
    {
      year: "2021 - Present",
      company: "GOLO, LLC",
      deg: "Lead Software Engineer",
    },
    {
      year: "2021 - Present",
      company: "UIUC - Smart MOOCs",
      deg: "Software Engineer",
    },
    { year: "2020 - 2021", company: "Planet.com", deg: "Software Engineer" },
    {
      year: "2018 - 2021",
      company: "Honeywell Connected Enterprise",
      deg: "Software Engineer",
    },
    { year: "2018 - 2020", company: "CodeDevils", deg: "Webmaster" },
    {
      year: "2017 - 2018",
      company: "Honeywell Aerospace",
      deg: "Systems Engineer",
    },
  ],
};

const About = () => {
  const [popup, setPopup] = useState(false);
  return (
    <Fragment>
      <AboutPopup
        open={popup}
        close={() => setPopup(false)}
        aboutData={aboutData}
      />
      <div className="edrea_tm_section hidden animated" id="about">
        <div className="section_inner">
          <div className="edrea_tm_about">
            <div className="left">
              <div className="image">
                <img src="/img/thumbs/1-1.jpg" alt="" />
                <div className="main" data-img-url="/img/about/profile.jpg" />
              </div>
            </div>
            <div className="right">
              <div className="short">
                <h3 className="name">
                  {aboutData.firstName}{" "}
                  <span className="coloring">{aboutData.lastName}</span>
                </h3>
                <h3 className="job">
                  <AnimatedText />
                </h3>
              </div>
              <div className="text">
                <p>
                Software Engineer 👩🏼‍💻 | 11+ Years of programming beautiful solutions for diverse fields 🚀 | Specializing in web development, data management & analysis, and Image & Natural Language Processing 👾
                </p>
                <p>
                I have been coding ever since I was 13 years old culminating in extensive experience in engineering 
                and implementing optimal solutions for a wide range of industry software needs. From creating research 
                focused software for NASA's Mission to Psyche, to leading tech teams at the Red Crescent in building 
                enterprise management software, I've had the privilege to work on exclusive and complex projects that 
                shaped me into the well rounded developer I am today.
                </p>
                <p>
                Bringing together coherent compatible teams from all around the world is where I excel as a team builder. 
                With experience in managing teams of 10+ engineers, I've learned that great software isn't just about the algorithms - 
                it's about collaboration, vision, and diligence. My teams are best known for strong team dynamics that foster an environment of camaraderie, 
                creativity, and rising to challenges to deliver beautiful and durable software with consistent high performance even under pressure.
                </p>
                <p>
                In my free time, I play chess competitively with my national federation, which can sometimes be mirrored 
                in the way I approach problem solving at work. Finding the best solution even in seemingly impossible situations is my true passion.
                </p>
                <p>
                Currently exploring opportunities where I can work with dynamic teams and contribute to solving the next big 
                challenge. If you're passionate about innovative solutions (or chess!) and are looking for a seasoned engineer and team player, let's connect!
                </p>
              </div>
              <div className="edrea_tm_button">
                <a href="#" onClick={() => setPopup(true)}>
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default About;
