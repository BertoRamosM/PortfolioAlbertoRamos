
import React from 'react'

const Catalonia = ({ width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 512 512"
    >
      <mask id="circleFlagsEsCt0">
        <circle cx="256" cy="256" r="256" fill="#fff" />
      </mask>
      <g mask="url(#circleFlagsEsCt0)">
        <path
          fill="#ffda44"
          d="M0 0v57l32 29l-32 28v57l32 29l-32 28v57l32 28l-32 28v57l32 29l-32 28v57h512v-57l-32-28l32-29v-57l-32-28l32-28v-57l-32-28l32-29v-57l-32-28l32-29V0z"
        />
        <path
          fill="#d80027"
          d="M0 57h512v57H0Zm0 114h512v57H0Zm0 114h512v56H0Zm0 113h512v57H0Z"
        />
      </g>
    </svg>
  );
};

export default Catalonia