import React from 'react';

function LikeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140">
      <circle fill="#fff" cx="70" cy="70" r="70" className="cls-like" />
      <g>
        <path
          fill="#e30613"
          d="M640,2662.7v1.49c0,21.23-38.511,48.81-38.511,48.81S560,2685.42,560,2664.19v-1.49c0-11.43,9.844-20.7,21.289-20.7a21.5,21.5,0,0,1,19.822,13.05A20.241,20.241,0,0,1,620,2642C631.445,2642,640,2651.27,640,2662.7Z"
          transform="translate(-530 -2602)" className="icon-like__path"
        />
        <path
          fill="#fff"
          d="M568.889,2666.41a2.224,2.224,0,0,1-2.222-2.22,15.556,15.556,0,0,1,15.555-15.53,2.215,2.215,0,1,1,0,4.43,11.119,11.119,0,0,0-11.111,11.1A2.224,2.224,0,0,1,568.889,2666.41Z"
          transform="translate(-530 -2602)" className="icon-like__path"
        />
      </g>
    </svg>
  );
}

export default LikeIcon;
