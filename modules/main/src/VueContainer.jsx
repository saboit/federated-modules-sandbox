import React, { useRef, useEffect, useLayoutEffect } from "react";
import app from "vue/App";
const container = document.createElement("div");

function VueContainer() {
  const ref = useRef();
  useEffect(() => {
    const currentRef = ref.current;
    if (currentRef) {
      currentRef.appendChild(container);
      app.$mount(container);
      console.log(app);
      console.log(app._vnode);
      app.$node = app._vnode.elm.innerText;
    }
    return () => {
      container.remove();
      //app.$destroy();
    };
  }, [ref]);
  return <div ref={ref}></div>;
}

export default VueContainer;
