import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
const LandscapeWarning = () => {
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    const checkOrientation = () => {
      const isDesktopMode = window.innerWidth > 1024; // Assuming desktop mode
      const isMobileDevice = /Mobi|Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);
      const isPortrait = window.innerHeight > window.innerWidth;

      setShowWarning(isMobileDevice && isDesktopMode && isPortrait);
    };

    checkOrientation();
    window.addEventListener("resize", checkOrientation);
    window.addEventListener("orientationchange", checkOrientation);

    return () => {
      window.removeEventListener("resize", checkOrientation);
      window.removeEventListener("orientationchange", checkOrientation);
    };
  }, []);

  return (
    showWarning && (
      <div
        style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh",background: "#ececec", color: "red", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "1.5rem", textAlign: "center", zIndex: 10000,}}> 
        <FontAwesomeIcon icon={faTriangleExclamation} size="lg" style={{color: "#FFD43B", marginRight: "10px"}} /> 
        <p>This website is only viewable in landscape mode</p>
      </div>
    )
  );
};

export default LandscapeWarning;
