import React from 'react'

const France = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 512 512"
    >
      <mask id="circleFlagsFr0">
        <circle cx="256" cy="256" r="256" fill="#fff" />
      </mask>
      <g mask="url(#circleFlagsFr0)">
        <path fill="#eee" d="M167 0h178l25.9 252.3L345 512H167l-29.8-253.4z" />
        <path fill="#0052b4" d="M0 0h167v512H0z" />
        <path fill="#d80027" d="M345 0h167v512H345z" />
      </g>
    </svg>
  );
}

export default France

