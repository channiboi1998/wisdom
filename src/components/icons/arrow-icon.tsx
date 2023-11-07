import React, { SVGProps } from "react";
type Props = SVGProps<SVGSVGElement>;

const ArrowIcon = (props: Props) => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500.000000 434.000000"
      preserveAspectRatio="xMidYMid meet"
      height={props.height ?? 20}
      width={props.width ?? 20}
      className={props.className}
    >
      <g
        transform="translate(0.000000,434.000000) scale(0.100000,-0.100000)"
        fill={props.fill}
        stroke="none"
      >
        <path
          d="M2659 4322 c-31 -11 -76 -33 -100 -50 -24 -17 -159 -147 -300 -289
-275 -277 -302 -311 -320 -422 -11 -70 3 -156 38 -225 17 -34 80 -106 189
-217 172 -173 186 -196 146 -232 -16 -15 -111 -17 -1022 -19 l-1005 -3 -62
-29 c-76 -35 -153 -113 -191 -193 l-27 -58 0 -415 0 -415 33 -67 c40 -82 119
-157 200 -190 l57 -23 1005 -5 c553 -3 1011 -9 1018 -13 6 -5 12 -22 12 -40 0
-27 -22 -53 -164 -197 -176 -178 -210 -226 -227 -329 -12 -73 4 -159 42 -232
41 -76 552 -585 620 -617 65 -31 148 -46 214 -37 122 15 96 -9 1164 1056 933
930 989 989 1006 1038 21 65 15 127 -19 185 -14 23 -466 480 -1005 1016 -883
878 -987 978 -1043 1004 -79 38 -178 45 -259 18z"
        />
      </g>
    </svg>
  );
};

export default ArrowIcon;
