import { useContext } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

import { context } from "../../context/context";
import AnimatedText from "../AnimatedText";
import Modal from "./Modal";

const AboutPopup = ({ open, close, aboutData }) => {
  const colorContext = useContext(context);
  const { color } = colorContext;

  const phoneNumber = aboutData.phn.replace(/-/g, "");

  return (
    <Modal open={open} close={close}>
      <div className="about_popup_details">
        <div className="left">
          <div className="left_inner">
            <div className="author">
              <div className="avatar_image">
                <img src="/img/thumbs/1-1.jpg" alt="" />
                <div className="main" data-img-url="/img/about/profile.jpg" />
              </div>
              <div className="short">
                <h3 className="name">
                  {aboutData.firstName}{" "}
                  <span className="coloring">{aboutData.lastName}</span>
                </h3>
                <h3 className="job">
                  <AnimatedText />
                </h3>
              </div>
            </div>
            <div className="list">
              <ul>
                <li>
                  <div className="list_inner">
                    <i className="icon-user" />
                    <span>
                      {aboutData.firstName} {aboutData.lastName}
                    </span>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <i className="icon-calendar" />
                    <span>{aboutData.bithday}</span>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <i className="icon-location" />
                    <span>
                      <a href="#" className="href_location">
                        {aboutData.address}
                      </a>
                    </span>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <i className="icon-phone" />
                    <span>
                      <a href={`tel:${phoneNumber}`}>{aboutData.phn}</a>
                    </span>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <i className="icon-mail-1" />
                    <span>
                      <a href={`mailto:${aboutData.email}`}>
                        {aboutData.email}
                      </a>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="edrea_tm_button full">
              <a href="/files/resume.pdf" download>
                Download CV
              </a>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="right_inner">
            <div className="biography">
              <div className="about_title">
                <h3>
                  <span>
                    About <span className="coloring">Me</span>
                  </span>
                </h3>
              </div>
              <div className="text">
                <p> Hajar Boughoula</p>
                <p>Software Engineer 👩🏼‍💻 | 11+ Years of programming beautiful solutions for diverse fields 🚀 | 
                  Specializing in web development, data management & analysis, and Image & Natural Language Processing 👾</p>
                <p>I have been coding ever since I was 13 years old culminating in extensive experience in engineering 
                  and implementing optimal solutions for a wide range of industry software needs. From creating research focused 
                  software for NASA’s Mission to Psyche, to leading tech teams at the Red Crescent in building enterprise management 
                  software, I've had the privilege to work on exclusive and complex projects that shaped me into the well rounded developer I am today.</p>
                <p>Bringing together coherent compatible teams from all around the world is where I excel as a team builder. With experience in managing 
                  teams of 10+ engineers, I’ve learned that great software isn’t just about the algorithms – it’s about collaboration, vision, and diligence. 
                  My teams are best known for strong team dynamics that foster an environment of camaraderie, creativity, and rising to challenges to deliver 
                  beautiful and durable software with consistent high performance even under pressure.</p>
                <p>In my free time, I play chess competitively with my national federation, which can sometimes be mirrored in the way I approach problem solving at work. 
                  Finding the best solution even in seemingly impossible situations is my true passion.</p>
                <p>Currently exploring opportunities where I can work with dynamic teams and contribute to solving the next big challenge. If you’re passionate about innovative solutions (or chess!) 
                  and are looking for a seasoned engineer and team player, let’s connect!</p>
                <br></br>
                <p>
                  I am excited to use my years of experience in web development
                  to learn new technology and continue to broaden my skill set.
                </p>
              </div>
            </div>
            <div className="service">
              <div className="about_title">
                <h3>
                  <span>
                    Quality <span className="coloring">Services</span>
                  </span>
                </h3>
              </div>
              <div className="list">
                <ul>
                  {aboutData.serviceLists &&
                    aboutData.serviceLists.map((service, i) => (
                      <li key={i}>
                        <i className="icon-right-dir" />
                        {service}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
            <div className="prog_skill">
              <div className="about_title">
                <h3>
                  <span>
                    Programming <span className="coloring">Skills</span>
                  </span>
                </h3>
              </div>
              <div className="oki_progress">
                {aboutData.skills &&
                  aboutData.skills.programming &&
                  aboutData.skills.programming.map((programming, i) => (
                    <div
                      key={i}
                      className="progress_inner skillsInner___"
                      data-value={95}
                    >
                      <span>
                        <span className="label">{programming.name}</span>
                        <span
                          className="number"
                          style={{ right: `${100 - programming.value}%` }}
                        >
                          {programming.value}%
                        </span>
                      </span>
                      <div className="background">
                        <div className="bar open">
                          <div
                            className="bar_in"
                            style={{ width: `${programming.value}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            {aboutData.skills.language && (
              <div className="lang_skill">
                <div className="about_title">
                  <h3>
                    <span>
                      Language <span className="coloring">Skills</span>
                    </span>
                  </h3>
                </div>
                <div className="circular_progress_bar">
                  <ul>
                    {aboutData.skills &&
                      aboutData.skills.language &&
                      aboutData.skills.language.map((language, i) => (
                        <li key={i}>
                          <div className="list_inner">
                            <div className="myCircle" data-value="0.95">
                              <CircularProgressbar
                                value={language.value}
                                text={`${language.value}%`}
                                strokeWidth={2}
                                styles={buildStyles({
                                  // Colors
                                  pathColor: color,
                                })}
                              />
                            </div>
                            <div className="title">
                              <span>{language.name}</span>
                            </div>
                          </div>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            )}
            <div className="timeline">
              <div className="about_title">
                <h3>
                  <span>
                    Education <span className="coloring">Timeline</span>
                  </span>
                </h3>
              </div>
              <div className="list">
                <ul>
                  {aboutData &&
                    aboutData.education &&
                    aboutData.education.map((edu, i) => (
                      <li key={i}>
                        <div className="list_inner">
                          <div className="time">
                            <span>{edu.year}</span>
                          </div>
                          <div className="place">
                            <h3>{edu.unv}</h3>
                            <span>{edu.degree}</span>
                          </div>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
            <div className="timeline">
              <div className="about_title">
                <h3>
                  <span>
                    Working <span className="coloring">Timeline</span>
                  </span>
                </h3>
              </div>
              <div className="list">
                <ul>
                  {aboutData &&
                    aboutData.working &&
                    aboutData.working.map((work, i) => (
                      <li key={i}>
                        <div className="list_inner">
                          <div className="time">
                            <span>{work.year}</span>
                          </div>
                          <div className="place">
                            <h3>{work.company}</h3>
                            <span>{work.deg}</span>
                          </div>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
            {aboutData.partnersLogos && (
              <div className="partners">
                <div className="about_title">
                  <h3>
                    <span>
                      My <span className="coloring">Partners</span>
                    </span>
                  </h3>
                </div>
                <div className="list">
                  <ul>
                    {aboutData &&
                      aboutData.partnersLogos &&
                      aboutData.partnersLogos.map((logo, i) => (
                        <li key={i}>
                          <div className="list_inner">
                            <img src={logo} alt="" />
                            <a className="cavani_tm_full_link" href="#" />
                          </div>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            )}
            {/* <div className="testimonial">
              <div className="about_title">
                <h3>
                  <span>
                    Clients <span className="coloring">Feedback</span>
                  </span>
                </h3>
              </div>
              <div className="list">
                <Swiper {...testimonialSlider} className="owl-carousel">
                  <SwiperSlide>
                    <div className="list_inner">
                      <div className="text">
                        <i className="icon-quote-left" />
                        <p>
                          Beautiful minimalist design and great, fast response
                          with support. Highly recommend. Thanks Marketify!
                        </p>
                      </div>
                      <div className="details">
                        <div className="image">
                          <div
                            className="main"
                            data-img-url="img/testimonials/1.jpg"
                          />
                        </div>
                        <div className="info">
                          <h3>Alexander Walker</h3>
                          <span>Graphic Designer</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="list_inner">
                      <div className="text">
                        <i className="icon-quote-left" />
                        <p>
                          These people really know what they are doing! Great
                          customer support availability and supperb kindness.
                        </p>
                      </div>
                      <div className="details">
                        <div className="image">
                          <div
                            className="main"
                            data-img-url="img/testimonials/2.jpg"
                          />
                        </div>
                        <div className="info">
                          <h3>Armin Van Buuren</h3>
                          <span>Content Manager</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="list_inner">
                      <div className="text">
                        <i className="icon-quote-left" />
                        <p>
                          I had a little problem and the support was just
                          awesome to quickly solve the situation. And keep going
                          on.
                        </p>
                      </div>
                      <div className="details">
                        <div className="image">
                          <div
                            className="main"
                            data-img-url="img/testimonials/3.jpg"
                          />
                        </div>
                        <div className="info">
                          <h3>Baraka Clinton</h3>
                          <span>English Teacher</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </Modal>
  );
};
export default AboutPopup;
