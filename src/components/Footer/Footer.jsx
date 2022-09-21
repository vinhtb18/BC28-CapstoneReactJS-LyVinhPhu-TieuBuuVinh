import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-group">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="footer-item footer-bd">
                <h2>GET HELP</h2>
                <ul>
                  <li>
                    <a href="#">Contact us</a>
                  </li>
                  <li>
                    <a href="#">Shopping</a>
                  </li>
                  <li>
                    <a href="#">NIKEiD</a>
                  </li>
                  <li>
                    <a href="#">Nike+</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="footer-item footer-bd">
                <h2>ORDERS</h2>
                <ul>
                  <li>
                    <a href="#">Payment options</a>
                  </li>
                  <li>
                    <a href="#">Shipping and delivery</a>
                  </li>
                  <li>
                    <a href="#">Returns</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="footer-item">
                <h2>REGISTER</h2>
                <ul>
                  <li>
                    <a href="#">
                      Create one account to manage everthing you do with Nike,
                      from your shopping preferences to your Nike+ activity.
                    </a>
                  </li>
                  <li>
                    <a className="footer-item-text-red" href="#">
                      Learn more
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
      {/* footer-bottom  */}
      <div className="footer-group footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="footer-item footer-bd">
                <h2>EMAIL SIGN UP</h2>
                <ul>
                  <li>
                    <a href="#">
                      Be the first to knnow about new products and special
                      offers.
                    </a>
                  </li>
                  <li>
                    <a className="footer-item-text-red" href="#">
                      Sign up now
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="footer-item footer-bd">
                <h2>GIFT CARDS</h2>
                <ul>
                  <li>
                    <a href="#">Give the gift that always fits.</a>
                  </li>
                  <li>
                    <a className="footer-item-text-red" href="#">
                      View cards
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="footer-item">
                <h2>SOTRES NEAR YOU</h2>
                <ul>
                  <li>
                    <a href="#">
                      Locate a Nike retail store or authorized retailer.
                    </a>
                  </li>
                  <li>
                    <a className="footer-item-text-red" href="#">
                      Search
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
