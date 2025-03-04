import PropTypes from "prop-types";
import React from "react";
import { Link } from "./Link";
import "./style.css";

export const Section = ({
  phone = "phone-2-1.svg",
  facebook = "facebook-4-1.svg",
  instagram = "instagram-2-1.svg",
  img = "facebook-4-1-2.svg",
  instagram1 = "instagram-2-1-2.svg",
  line = "line-14.svg",
  line1 = "image.svg",
  line2 = "line-14-2.svg",
  line3 = "line-14-3.svg",
  line4 = "line-14-4.svg",
  line5 = "line-14-5.svg",
  href,
  href1,
  href2,
}) => {
  return (
    <div className="section">
      <div className="overlap-group">
        <div className="rectangle" />

        <div className="frame">
          <div className="div">
            <div className="heading-our">הישארו מחוברים</div>

            <div className="text-wrapper-2">עקבו אחרינו ברשתות החברתיות</div>
          </div>

          <div className="frame-2">
            <div className="text-wrapper-3">ארגון המורים</div>

            <div className="frame-3">
              <div className="frame-4">
                <a
                  className="text-wrapper-4"
                  href={href}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  הצטרפות לקבוצת Whatsapp
                </a>

                <img className="img" alt="Phone" src={phone} />
              </div>

              <div className="frame-5">
                <a href={href1} rel="noopener noreferrer" target="_blank">
                  <p className="text-wrapper-4">עמוד פייסבוק של ארגון המורים</p>
                </a>

                <img className="img-2" alt="Facebook" src={facebook} />
              </div>

              <div className="frame-5">
                <p className="text-wrapper-4">עמוד פייסבוק של ארגון המורים</p>

                <img className="img-2" alt="Instagram" src={instagram} />
              </div>
            </div>
          </div>

          <div className="frame-6">
            <div className="text-wrapper-3">מועדון ‘תמורה’</div>

            <div className="frame-3">
              <div className="frame-4">
                <a
                  className="text-wrapper-4"
                  href={href2}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  עמוד פייסבוק של ‘תמורה’
                </a>

                <img className="img" alt="Facebook" src={img} />
              </div>

              <div className="frame-4">
                <div className="text-wrapper-4">עמוד פייסבוק של ‘תמורה’</div>

                <img className="img" alt="Instagram" src={instagram1} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="frame-7">
        <div className="frame-8">
          <p className="p">הצטרפו עכשיו למשפחת המורים העל-יסודיים</p>

          <p className="text-wrapper-5">
            הצעד הראשון להטבות ולשירותים המובילים
          </p>
        </div>

        <div className="frame-9">
          <div className="frame-10">
            <div className="frame-11">
              <div className="frame-12">
                <div className="your-email-addreass-wrapper">
                  <p className="your-email-addreass">
                    <span className="span">שם משפחה</span>

                    <span className="text-wrapper-6"> *</span>
                  </p>
                </div>

                <img className="line" alt="Line" src={line} />
              </div>

              <div className="frame-12">
                <div className="your-email-addreass-wrapper">
                  <p className="your-email-addreass">
                    <span className="span">שם פרטי</span>

                    <span className="text-wrapper-6"> *</span>
                  </p>
                </div>

                <img className="line" alt="Line" src={line1} />
              </div>

              <div className="frame-12">
                <div className="your-email-addreass-wrapper">
                  <p className="your-email-addreass">
                    <span className="span">טלפון</span>

                    <span className="text-wrapper-6"> *</span>
                  </p>
                </div>

                <img className="line" alt="Line" src={line2} />
              </div>

              <div className="frame-12">
                <div className="your-email-addreass-wrapper">
                  <p className="your-email-addreass">
                    <span className="span">תעודת זהות</span>

                    <span className="text-wrapper-6"> *</span>
                  </p>
                </div>

                <img className="line" alt="Line" src={line3} />
              </div>
            </div>

            <div className="frame-13">
              <div className="your-email-addreass-2">פרטים נוספים</div>

              <div className="frame-12">
                <div className="your-email-addreass-wrapper">
                  <p className="your-email-addreass">
                    <span className="span">שם בי”ס</span>

                    <span className="text-wrapper-6"> *</span>
                  </p>
                </div>

                <img className="line" alt="Line" src={line4} />
              </div>

              <div className="frame-12">
                <div className="your-email-addreass-wrapper">
                  <p className="your-email-addreass">
                    <span className="span">ישוב בי”ס</span>

                    <span className="text-wrapper-6"> *</span>
                  </p>
                </div>

                <img className="line" alt="Line" src={line5} />
              </div>
            </div>
          </div>

          <Link className="link-instance" />
        </div>
      </div>
    </div>
  );
};

Section.propTypes = {
  phone: PropTypes.string,
  facebook: PropTypes.string,
  instagram: PropTypes.string,
  img: PropTypes.string,
  instagram1: PropTypes.string,
  line: PropTypes.string,
  line1: PropTypes.string,
  line2: PropTypes.string,
  line3: PropTypes.string,
  line4: PropTypes.string,
  line5: PropTypes.string,
  href: PropTypes.string,
  href1: PropTypes.string,
  href2: PropTypes.string,
};
