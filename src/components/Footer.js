import React from 'react';
import { Row, Col } from 'react-bootstrap';
import appstore from '../assets/img/app-store-badge.png';
import googleplay from '../assets/img/google-play-badge-128x128.png';
import mastercard from '../assets/img/Master-Card-icon.png';
import visa from '../assets/img/Visa-icon.png';
import paypal from '../assets/img/Paypal-icon.png';



const Footer = () => {
    return (
        <footer>
            <Row>
                <Col xs={6} md={3}>
                    <h6 className="footerHeader">help</h6>
                    <ul>
                        <li>Status</li>
                        <li>Support</li>
                        <li>Size Chart</li>
                        <li>Terms of Delivery</li>
                        <li>My Orders</li>
                        <li>Return Policy</li>
                        <li>Offers</li>
                        <li>Rewards Program</li>
                        <li>Partners</li>
                    </ul>
                </Col>
                <Col xs={6} md={3}>
                    <h6 className="footerHeader">Social media</h6>
                    <ul className="socialMediaBar">
                        <li><a><i className="fa fa-google-plus-official" aria-hidden="true"></i>
                        </a></li>
                        <li><i className="fa fa-youtube" aria-hidden="true"></i>
                        </li>
                        <li className="facebook"><i className="fa fa-facebook" aria-hidden="true"></i>
                        </li>
                        <li><i className="fa fa-twitter" aria-hidden="true"></i>
                        </li>
                        <li><i className="fa fa-instagram" aria-hidden="true"></i>
                        </li>
                    </ul>
                </Col>
                <Col xs={6} md={3}>
                    <h6 className="footerHeader">Payment Methods</h6>
                    <Row className="paymentBadgeContainer">
                        <Col xs={3} md={7}><i className="fa fa-cc-visa" aria-hidden="true"></i></Col>
                        <Col xs={3} md={7}><i className="fa fa-cc-mastercard" aria-hidden="true"></i></Col>
                        <Col xs={3} md={7}><i className="fa fa-cc-paypal" aria-hidden="true"></i></Col>
                    </Row>
                </Col>
                <Col xs={6} md={3}>
                    <h6 className="footerHeader">mobile</h6>
                    <Row className="storeBadgeContainer">
                        <Col xs={3} md={6}><img className="storeBadge apple" src={appstore} alt="appstore"/></Col>
                        <Col xs={3} md={6}><img className="storeBadge google" src={googleplay} alt="googleplay"/></Col>
                    </Row>
                </Col>
            </Row>
        </footer>
    )
}

export default Footer;

                {/*<p className="text-muted">&copy; 2017 Shane Fairweather</p>*/}
