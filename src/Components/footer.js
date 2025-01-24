import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faSquareGithub, faSquareXTwitter, faSquareInstagram, faSquareFacebook, faSquareThreads } from "@fortawesome/free-brands-svg-icons";
import { toast } from "react-toastify";
function Footer() {
  const Facebook = () => {
    toast.info('Redirecting to Facebook', {
      position: "top-center",
      autoClose: 4000,
      pauseOnHover: false,
      draggable: false,
    });
    setTimeout(() => {
      window.open('https://www.facebook.com/ekallwin', '_blank');
    }, 2500);
  };
  const Instagram = () => {
    toast.info('Redirecting to Instagram', {
      position: "top-center",
      autoClose: 4000,
      pauseOnHover: false,
      draggable: false,
    });
    setTimeout(() => {
      window.open('https://www.instagram.com/ekallwin', '_blank');
    }, 2500);
  };
  const Twitter = () => {
    toast.info('Redirecting to X (Twitter)', {
      position: "top-center",
      autoClose: 4000,
      pauseOnHover: false,
      draggable: false,
    });
    setTimeout(() => {
      window.open('https://www.twitter.com/ekallwin', '_blank');
    }, 2500);
  };
  const Threads = () => {
    toast.info('Redirecting to Threads (by Instagram)', {
      position: "top-center",
      autoClose: 4000,
      pauseOnHover: false,
      draggable: false,
    });
    setTimeout(() => {
      window.open('https://www.threads.net/@ekallwin', '_blank');
    }, 2500);
  };
  const LinkedIn = () => {
    toast.info('Redirecting to LinkedIn', {
      position: "top-center",
      autoClose: 4000,
      pauseOnHover: false,
      draggable: false,
    });
    setTimeout(() => {
      window.open('https://www.linkedin.com/in/ekallwin/', '_blank');
    }, 2500);
  };
  const Github = () => {
    toast.info('Redirecting to GitHub', {
      position: "top-center",
      autoClose: 4000,
      pauseOnHover: false,
      draggable: false,
    });
    setTimeout(() => {
      window.open('https://github.com/ekallwin', '_blank');
    }, 2500);
  };

  return (
    <>
      <footer>
        <div className="footer-content">
          <h4>Social medias</h4>
        </div>
        <div className="footer-text">
          <FontAwesomeIcon icon={faSquareFacebook} className="Social" size="2xl" onClick={Facebook} />
          <FontAwesomeIcon icon={faSquareInstagram} className="Social" size="2xl" onClick={Instagram} />
          <FontAwesomeIcon icon={faSquareXTwitter} className="Social" size="2xl" onClick={Twitter} />
          <FontAwesomeIcon icon={faSquareThreads} className="Social" size="2xl" onClick={Threads} />
          <FontAwesomeIcon icon={faLinkedin} className="Social" size="2xl" onClick={LinkedIn} />
          <FontAwesomeIcon icon={faSquareGithub} className="Social" size="2xl" onClick={Github} />
        </div>
        <div className="footer-copyright" style={{ textAlign: 'center' }}>
          <p>&copy; {new Date().getFullYear()} Created, Developed and maintained by <a href="#About">Allwin E K</a></p>
        </div>
      </footer>
    </>
  )
}
export default Footer;