import { useState, useEffect, useRef } from "react";

export default function useNavbar() {
  const [activePopup, setActivePopup] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const prevIsMobileView = useRef(
    window.matchMedia("(max-width: 1024px)").matches
  );
  const [initialX, setInitialX] = useState(0);
  const navOverlayRef = useRef(null);

  const openOverlay = (popupName) => {
    setActivePopup(popupName);
  };

  const closeOverlay = () => {
    setActivePopup(null);
  };

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  // Disables background scrolling whenever activePopup or isActive is true
  useEffect(() => {
    const shouldDisableScroll =
      (activePopup || isActive) &&
      window.matchMedia("(max-width: 1024px)").matches;

    if (shouldDisableScroll) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [activePopup, isActive]);

  // Reset isActive and activePopup on screen size change
  useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.matchMedia("(max-width: 1024px)").matches;

      if (isMobileView !== prevIsMobileView.current) {
        setActivePopup(false);
        setIsActive(false);
      }

      prevIsMobileView.current = isMobileView;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Close nav-overlay when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navOverlayRef.current &&
        !navOverlayRef.current.contains(event.target)
      ) {
        closeOverlay();
      }
    };

    if (activePopup) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activePopup]);

  // Update initialX based on screen size
  useEffect(() => {
    const updateInitialX = () => {
      setInitialX(window.innerWidth <= 1024 ? 500 : 0);
    };

    updateInitialX();
    window.addEventListener("resize", updateInitialX);

    return () => {
      window.removeEventListener("resize", updateInitialX);
    };
  }, []);

  return {
    activePopup,
    isActive,
    initialX,
    navOverlayRef,
    openOverlay,
    closeOverlay,
    toggleMenu,
  };
}
