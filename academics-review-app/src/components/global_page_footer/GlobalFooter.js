import React, { Component } from "react";

class GlobalFooter extends Component {
  ComponentGlobalFooterContent = () => {
    return (
      <div className="footer_content">
        <div className="row">
          {/* Footer Column - About */}
          <div className="col-lg-3 footer_col">
            {/* Logo */}
            <div className="logo_container">
              <div className="logo">
                <img src="/images/logo.png" alt="" />
                <span>course</span>
              </div>
            </div>
            <p className="footer_about_text">
              In aliquam, augue a gravida rutrum, ante nisl fermentum nulla,
              vitae tempor nisl ligula vel nunc. Proin quis mi malesuada,
              finibus tortor fermentum, tempor lacus.
            </p>
          </div>
          {/* Footer Column - Menu */}
          <div className="col-lg-3 footer_col">
            <div className="footer_column_title">Menu</div>
            <div className="footer_column_content">
              <ul>
                <li className="footer_list_item">
                  <a href="index.html">Home</a>
                </li>
                <li className="footer_list_item">
                  <a href="index.html">About Us</a>
                </li>
                <li className="footer_list_item">
                  <a href="index.html">Courses</a>
                </li>
                <li className="footer_list_item">
                  <a href="index.html">News</a>
                </li>
                <li className="footer_list_item">
                  <a href="index.html">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          {/* Footer Column - Usefull Links */}
          <div className="col-lg-3 footer_col">
            <div className="footer_column_title">Usefull Links</div>
            <div className="footer_column_content">
              <ul>
                <li className="footer_list_item">
                  <a href="index.html">Testimonials</a>
                </li>
                <li className="footer_list_item">
                  <a href="index.html">FAQ</a>
                </li>
                <li className="footer_list_item">
                  <a href="index.html">Community</a>
                </li>
                <li className="footer_list_item">
                  <a href="index.html">Campus Pictures</a>
                </li>
                <li className="footer_list_item">
                  <a href="index.html">Tuitions</a>
                </li>
              </ul>
            </div>
          </div>
          {/* Footer Column - Contact */}
          <div className="col-lg-3 footer_col">
            <div className="footer_column_title">Contact</div>
            <div className="footer_column_content">
              <ul>
                <li className="footer_contact_item">
                  <div className="footer_contact_icon">
                    <img
                      src="/images/placeholder.svg"
                      alt="https://www.flaticon.com/authors/lucy-g"
                    />
                  </div>
                  Blvd Libertad, 34 m05200 Arévalo
                </li>
                <li className="footer_contact_item">
                  <div className="footer_contact_icon">
                    <img
                      src="/images/smartphone.svg"
                      alt="https://www.flaticon.com/authors/lucy-g"
                    />
                  </div>
                  0034 37483 2445 322
                </li>
                <li className="footer_contact_item">
                  <div className="footer_contact_icon">
                    <img
                      src="/images/envelope.svg"
                      alt="https://www.flaticon.com/authors/lucy-g"
                    />
                  </div>
                  hello@company.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <footer className="footer">
        <div className="container">{this.ComponentGlobalFooterContent()}</div>
      </footer>
    );
  }
}

export default GlobalFooter;
