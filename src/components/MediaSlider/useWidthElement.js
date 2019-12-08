import { useState, useEffect, useRef } from 'react';

function useWidthElement() {
  const elementRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    console.log(elementRef);
    setWidth(elementRef.current.clientWidth);
  }, [elementRef.current]);

  return { width, elementRef };
}

export default useWidthElement;
