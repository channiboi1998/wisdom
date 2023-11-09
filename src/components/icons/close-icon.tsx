import React, { SVGProps } from "react";
type Props = SVGProps<SVGSVGElement>;

const CloseIcon = (props: Props) => {
  return (
    <svg
      className={props.className}
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width={props.width ?? 20}
      height={props.height ?? 20}
      viewBox="0 0 324.000000 322.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,322.000000) scale(0.100000,-0.100000)"
        fill={props.fill ?? "#000000"}
        stroke="none"
      >
        <path
          d="M337 2892 l-317 -317 480 -480 480 -480 -480 -480 -480 -480 320
-320 320 -321 480 481 480 480 480 -480 480 -481 320 321 320 320 -480 480
-480 480 480 480 480 480 -320 320 -320 320 -480 -480 -480 -480 -478 478
c-262 262 -479 477 -482 477 -3 0 -148 -143 -323 -318z"
        />
      </g>
    </svg>
  );
};

export default CloseIcon;
