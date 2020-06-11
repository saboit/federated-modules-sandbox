import React, { useRef, useEffect } from 'react';
import app from 'vue/App';
import Vue from 'vue';

function VueContainer() {
  const ref = useRef();
  useEffect(() => {
    if (ref.current) {
      console.log(app);
      app['$mount'](ref.current);
    }
  });
  return <div id="vue" ref={ref}></div>;
}

export default VueContainer;
