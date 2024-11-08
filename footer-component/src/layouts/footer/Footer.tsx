import FooterBottom from "../../components/footer/footer-bottom/FooterBottom";
import FooterMiddle from "../../components/footer/footer-middle/FooterMiddle";
import FooterTop from "../../components/footer/footer-top/FooterTop";
import "./Footer.scss";
const Footer = () => {
  return (
    <section id="footer">
      <FooterTop />
      <FooterMiddle />
      <FooterBottom />
    </section>
  );
};

export default Footer;
