import React, { useEffect, useRef } from 'react';
import { SectionTitle} from '../../styles/GlobalComponents';

function TextAnimation({ children }) {
  const element = useRef(null);
  useEffect(() => {
    let chars = children.split('');
    let timeout;
    function animate() {
      let char = chars.shift();
      if (char === ' ') {
        element.current.innerHTML += '&nbsp;';
      } else {
        element.current.innerText += char;
      }
      if (chars.length) {
        timeout = setTimeout(animate, 80);
      }
    }
    animate();
    return () => clearTimeout(timeout);
  }, [children]);
  return <SectionTitle ref={element}></SectionTitle>;
}

export default TextAnimation;