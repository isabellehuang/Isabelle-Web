import styled from 'styled-components';
import React, { useEffect, useRef } from 'react';

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

function TextAnimation({ children }) {
  const element = useRef(null);
  useEffect(() => {
    let chars = children.split('');
    let timeout;
    function animate() {
      element.current.innerText = chars.shift();
      if (chars.length) {
        timeout = setTimeout(animate, 75);
      }
    }
    animate();
    return () => clearTimeout(timeout);
  }, [children]);
  return <div ref={element}></div>;
}

function App() {
  return (
    <div className="App">
      <TextAnimation>Hello World!</TextAnimation>
    </div>
  );
}