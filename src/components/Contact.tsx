const Contact = () => {
  return (
    <div className="edrea_tm_section hidden animated" id="contact">
      <div className="section_inner">
        <div className="edrea_tm_contact">
          <div className="edrea_tm_main_title">
            <h3>
              Get in <span className="coloring">Touch</span>
            </h3>
          </div>
          <div className="wrapper">
            <div className="left">
              <ul>
                <li>
                  <div className="list_inner">
                    <i className="icon-location" />
                    <span>
                      <a href="#" className="href_location">
                        Phoenix, AZ
                      </a>
                    </span>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <i className="icon-phone" />
                    <span>
                      <a href="tel:6023593022">(602) 359-3022</a>
                    </span>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <i className="icon-mail-1" />
                    <span>
                      <a href="mailto:kevin.shelley@pm.me">
                        kevin.shelley@pm.me
                      </a>
                    </span>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <i className="icon-linkedin-1" />
                    <span>
                      <a
                        href="https://www.linkedin.com/in/kevin-shelley"
                        target="_blank"
                        rel="noreferrer"
                      >
                        kevin-shelley
                      </a>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="right">
              <div className="fields">
                <form
                  action="/"
                  method="post"
                  className="contact_form"
                  id="contact_form"
                >
                  <div
                    className="returnmessage"
                    data-success="Your message has been received, We will contact you soon."
                  />
                  <div className="empty_notice">
                    <span>Please Fill Required Fields</span>
                  </div>
                  <div className="first">
                    <ul>
                      <li>
                        <div className="list_inner">
                          <input
                            id="name"
                            type="text"
                            placeholder="Name"
                            autoComplete="off"
                          />
                        </div>
                      </li>
                      <li>
                        <div className="list_inner">
                          <input
                            id="email"
                            type="text"
                            placeholder="Email"
                            autoComplete="off"
                          />
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="last">
                    <textarea
                      id="message"
                      placeholder="Message"
                      defaultValue={""}
                    />
                  </div>
                  <div className="edrea_tm_button">
                    <a id="send_message" href="#">
                      Send Message
                    </a>
                  </div>
                  {/* If you want change mail address to yours, just open "modal" folder >> contact.php and go to line 4 and change detail to yours.  */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
