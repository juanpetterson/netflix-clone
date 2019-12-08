import { useState, useEffect, useRef } from 'react';

const PADDINGS = 110;

function useSliding(elementWidth, countElements) {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [distance, setDistance] = useState(0);
  const [totalInViewport, setTotalInViewPort] = useState(0);
  const [viewed, setViewed] = useState(0);

  useEffect(() => {
    if (containerRef && containerRef.current) {
      const containerWidth = containerRef.current.clientWidth - PADDINGS;
      setContainerWidth(containerWidth);
      setTotalInViewPort(Math.floor(containerWidth / elementWidth));
    }
  }, [containerRef.current]);

  const handlePrev = () => {
    setViewed(viewed - totalInViewport);
    setDistance(distance + containerWidth);
  };

  const handleNext = () => {
    setViewed(viewed + totalInViewport);
    setDistance(distance - containerWidth);
  };

  const slideProps = {
    style: { transform: `translate3d(${distance})px, 0, 0` },
  };

  const hasPrev = distance < 0;
  const hasNext = viewed + totalInViewport < countElements;

  return 0;
}

export default useSliding;
