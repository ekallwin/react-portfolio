import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
const LandscapeWarning = () => {
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    const checkConditions = () => {
        const isMobileDevice = /Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);
  
        const isDesktopMode = window.innerWidth > 1024 && window.devicePixelRatio > 1.5;
  
        const isPortrait = window.matchMedia("(orientation: portrait)").matches;
  
        setShowWarning(isMobileDevice && isDesktopMode && isPortrait);
      };
  
      checkConditions();
      window.addEventListener("resize", checkConditions);
      window.addEventListener("orientationchange", checkConditions);
  
      return () => {
        window.removeEventListener("resize", checkConditions);
        window.removeEventListener("orientationchange", checkConditions);
      };
    }, []);

  return (
    showWarning && (
      <div
        style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh",background: "#ececec", color: "red", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "16px", textAlign: "center", zIndex: 10000,}}> 
        <FontAwesomeIcon icon={faTriangleExclamation} size="lg" style={{color: "#FFD43B", marginRight: "2px"}} /> 
        <p>This website is only viewable in landscape mode</p>
      </div>
    )
  );
};

export default LandscapeWarning;
