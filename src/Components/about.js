import Allwin from "./Images/Allwin.jpg";
import Resume from "./Resume/Resume.pdf"
import { toast } from "react-toastify";
function About() {
  const handleDownload = () => {
    if (!Resume) {
      toast.error('Resume file is not available!', {
      autoClose: "3000",
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    });
      return;
    }

    toast.info('Preparing to download my resume', {
      autoClose: "2000",
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    });

    setTimeout(() => {
      const link = document.createElement('a');
      link.href = Resume;
      link.download = 'Resume.pdf';
      link.click();

      toast.success('Resume has been successfully downloaded in your device!', {
      autoClose: "3000",
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    });
    }, 4000);
  };



  return (
    <>
      <div id="About" className="Abt">
        <h2 style={{ textAlign: 'center' }}>About</h2>
        <div className="About" id="Abt">
          <figure>
            <img src={Allwin} alt="Allwin E K" onContextMenu={(e) => e.preventDefault()} draggable="false" style={{ userSelect: 'none' }} />
            <figcaption>I am <b>Allwin E K</b>, a passionate Web Developer. I have a solid foundation in <b>HTML, CSS and JavaScript</b>, and I love creating user-friendly and responsive web interfaces. I'm currently pursuing a <b>B.E</b> in <b>Computer Science and Engineering</b> at <b>Ponjesly College of Engineering, Nagercoil</b>.
              <br /><br />
              I strongly believe in continuous learning and improving myself, so I try my best to learn in any situation possible, unfavorable or not.
            </figcaption>
            <button className="gradient-button" style={{  fontSize: '20px' }} onClick={handleDownload}>Download Resume</button>
          </figure>
        </div>
      </div>
    </>
  )
}
export default About;