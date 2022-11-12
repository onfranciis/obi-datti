import React from "react";

export const useClickOutside = (ref, callback, burger) => {
  const handleClick = (e) => {
    if (
      ref.current &&
      !ref.current.contains(e.target) &&
      !burger.current.contains(e.target)
    ) {
      callback();
    }
  };
  React.useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};

export const useClickOutsideDropdown = (ref, callback, parentRef) => {
  const handleClick = (e) => {
    if (
      ref.current &&
      !ref.current.contains(e.target) &&
      !parentRef.current.contains(e.target)
    ) {
      callback();
    }
  };
  React.useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};
