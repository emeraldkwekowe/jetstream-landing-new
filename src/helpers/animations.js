import { keyframes } from "styled-components";

export const slideInLeft = keyframes`
from {
  opacity: 0;
  transform: translate3d(6%, 0, 0);
}

to {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}
`;

export const slideInUp = keyframes`
from {
  opacity: 0;
  transform: translate3d(0, 7%, 0);
}

to {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}
`;

export const slideInDown = keyframes`
from {
  opacity: 0;
  transform: translate3d(0, -7%, 0);
}

to {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}
`;

export const fadeIn = keyframes`
from {
  opacity: 0;
}

to {
  opacity: 1;
}
`;

export const fadeOut = keyframes`
from {
  opacity: 1;
}

to {
  opacity: 0;
}
`;

export const zoomOut = keyframes`
from {
  opacity: 1;
}

50% {
  opacity: 0;
  transform: scale3d(3.3, 3.3, 3.3) translate3d(0, 0, 0);
}

to {
  opacity: 0;
}
`;

export const fadeInOut = keyframes`
from{
  opacity:0;
}
50% { 
  opacity:1; 
}
to {
  opacity: 0;
}
`;
