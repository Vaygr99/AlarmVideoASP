import { useEffect } from "react";

// Hook to hide the menu depending on the click area
function useOutsideClick(refs, handler) {
  useEffect(() => {
    function listener(e) {
      // Determine the area of the pointer click
      const clickedInside = refs.some(
        (ref) => ref.current && ref.current.contains(e.target)
      );
      // if area of pointer click is inside the menu
      if (clickedInside) return;
      handler(e);
    }
    document.addEventListener("pointerdown", listener);
    return () => {
      document.removeEventListener("pointerdown", listener);
    };
  }, [refs, handler]);
}

export default useOutsideClick;
