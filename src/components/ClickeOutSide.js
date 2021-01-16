import React, { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as actions from "./../redux/actions/actions";

/**
 * This Component isn't mine I just wanted a quick fix
 * https://stackoverflow.com/questions/32553158/detect-click-outside-react-component
 */

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(ref) {
  const dispatch = useDispatch();
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        dispatch(actions.toggleMenu(false));
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);
}

/**
 * Component that alerts if you click outside of it
 */
export default function ClickeOutSide(props) {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return <div ref={wrapperRef}>{props.children}</div>;
}
