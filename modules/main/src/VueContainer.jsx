import React, { useRef, useEffect, useLayoutEffect } from "react";
import app from "vue/App";
const container = document.createElement("div");

function VueContainer() {
  const ref = useRef();
  useEffect(() => {
    const currentRef = ref.current;
    const vueInstance = app();
    if (currentRef) {
      currentRef.appendChild(container);
      vueInstance.$mount(container);
      console.log(vueInstance);
    }
    return () => {
      vueInstance.$destroy();
      container.remove();
    };
  }, [ref]);
  return <div ref={ref}></div>;
}

export default VueContainer;
