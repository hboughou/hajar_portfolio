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
                <p>
                  My name is <span>Kevin Shelley.</span> I am a software
                  engineer with 10 years of industry experience, specializing in
                  full stack web development. My passion lies in designing and
                  building innovative software solutions for web applications
                  that cater to users across the globe and on various operating
                  systems. This commitment to efficiency and accessibility is
                  evident in the multi-million dollar projects I have developed
                  while working for Fortune 100 tech companies like Honeywell,
                  as well as smaller private businesses such as GOLO.
                </p>
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
