import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faSquareGithub, faSquareXTwitter, faSquareInstagram, faSquareFacebook, faSquareThreads } from "@fortawesome/free-brands-svg-icons";
import { NotificationManager } from "react-notifications";
function Footer() {
  const Facebook = () => {
    NotificationManager.info('Redirecting to Facebook', null, 3000);
    setTimeout(() => {
      window.open('https://www.facebook.com/ekallwin', '_blank');
    }, 2500);
  };
  const Instagram = () => {
    NotificationManager.info('Redirecting to Instagram', null, 4000);
    setTimeout(() => {
      window.open('https://www.instagram.com/ekallwin', '_blank');
    }, 2500);
  };
  const Twitter = () => {
    NotificationManager.info('Redirecting to X (Twitter)', null, 4000);
    setTimeout(() => {
      window.open('https://www.twitter.com/ekallwin', '_blank');
    }, 2500);
  };
  const Threads = () => {
    NotificationManager.info('Redirecting to Threads (by Instagram)', null, 4000);
    setTimeout(() => {
      window.open('https://www.threads.net/@ekallwin', '_blank');
    }, 2500);
  };
  const LinkedIn = () => {
    NotificationManager.info('Redirecting to LinkedIn', null, 4000);
    setTimeout(() => {
      window.open('https://www.linkedin.com/in/ekallwin/', '_blank');
    }, 2500);
  };
  const Github = () => {
    NotificationManager.info('Redirecting to GitHub', null, 4000);
    setTimeout(() => {
      window.open('https://github.com/ekallwin', '_blank');
    }, 2500);
  };

  return (
    <>
      <footer>
        <div className="footer-content">
          <h4>My social medias</h4>
        </div>
        <div className="footer-text">
          <FontAwesomeIcon icon={faSquareFacebook} className="Social" size="2xl" onClick={Facebook} />
          <FontAwesomeIcon icon={faSquareInstagram} className="Social" size="2xl" onClick={Instagram} />
          <FontAwesomeIcon icon={faSquareXTwitter} className="Social" size="2xl" onClick={Twitter} />
          <FontAwesomeIcon icon={faSquareThreads} className="Social" size="2xl" onClick={Threads} />
          <FontAwesomeIcon icon={faLinkedin} className="Social" size="2xl" onClick={LinkedIn} />
          <FontAwesomeIcon icon={faSquareGithub} className="Social" size="2xl" onClick={Github} />
          <div className="footer-copyright" style={{ textAlign: 'center', fontSize: '13px' }}>
            <p>&copy; {new Date().getFullYear()} Created, Developed and maintained by <a href="#About">Allwin E K</a></p>
          </div>
        </div>
      </footer>
    </>
  )
}
export default Footer;