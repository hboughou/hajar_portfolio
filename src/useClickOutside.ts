import { EventHandler, useEffect, useRef } from "react";

let useClickOutside = (handler: EventHandler<any>) => {
  let domNode = useRef<any>();

  useEffect(() => {
    let maybeHandler = (event: Event) => {
      if (!domNode.current.contains(event.target)) {
        handler(event);
      }
    };

    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });

  return domNode;
};

export default useClickOutside;
