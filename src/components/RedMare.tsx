import { ComponentProps, FC } from "react";

interface RedMareProps {
  fill?: string;
}

export const RedMare: FC<RedMareProps & ComponentProps<"svg">> = ({
  fill = "#000000",
  ...props
}) => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="900.000000pt"
      height="900.000000pt"
      viewBox="0 0 900.000000 900.000000"
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <g
        transform="translate(0.000000,900.000000) scale(0.100000,-0.100000)"
        fill={fill}
        stroke="none"
      >
        <path
          d="M3965 8315 l-210 -175 -33 -88 c-18 -48 -49 -132 -69 -187 -91 -253
-241 -563 -640 -1320 -214 -406 -300 -563 -450 -825 -155 -269 -639 -1027
-777 -1215 -491 -675 -709 -924 -1068 -1224 -73 -62 -95 -87 -83 -99 10 -11
58 24 252 186 467 389 699 623 994 1003 250 323 600 824 781 1119 36 58 110
177 165 265 249 396 797 1403 1055 1938 28 59 55 107 59 107 20 0 156 -481
180 -632 6 -43 10 -128 7 -195 -5 -129 -23 -189 -89 -299 -29 -48 -49 -64
-139 -120 -58 -36 -179 -103 -270 -149 -159 -80 -173 -90 -365 -252 l-200
-169 -7 -59 c-4 -33 -12 -116 -17 -185 -6 -69 -22 -188 -35 -265 -33 -191
-151 -833 -171 -925 -20 -94 -61 -323 -86 -475 -17 -109 -29 -473 -18 -580 14
-141 51 -283 106 -404 77 -170 96 -207 148 -286 112 -170 325 -394 448 -472
22 -14 80 -55 130 -92 84 -62 206 -144 298 -199 20 -12 107 -59 195 -105 157
-82 217 -115 445 -248 249 -145 430 -305 593 -522 87 -118 108 -149 226 -341
70 -113 90 -140 205 -264 236 -256 613 -252 970 12 114 85 427 350 514 436
214 212 417 574 486 864 29 125 41 315 26 406 -32 182 -124 389 -286 645 -414
655 -475 769 -540 1005 -51 188 -75 334 -75 458 1 218 53 760 77 808 6 10 13
44 17 74 3 30 9 75 13 99 5 41 4 43 -16 36 -56 -17 -498 311 -648 482 -111
127 -253 332 -253 366 0 7 -11 28 -24 46 -13 18 -29 45 -36 61 -11 27 -9 30
32 66 191 167 288 309 357 526 44 138 55 255 43 425 -10 124 -41 281 -61 308
-4 5 -24 53 -45 106 -20 53 -60 135 -88 183 -57 95 -162 226 -181 226 -12 0
-281 -222 -354 -292 -47 -46 -82 -128 -158 -368 -85 -267 -125 -480 -125 -667
0 -145 51 -458 95 -583 l14 -38 -42 -8 c-23 -4 -95 -7 -159 -7 l-117 0 -185
-154 c-102 -85 -186 -159 -186 -164 0 -5 28 -10 63 -10 237 -6 428 35 612 130
39 20 73 37 77 39 4 2 26 -35 49 -83 50 -104 165 -278 253 -383 156 -186 374
-365 638 -525 25 -15 26 -18 16 -59 -6 -24 -11 -86 -13 -138 -1 -52 -10 -151
-18 -220 -77 -626 -59 -886 87 -1228 79 -186 117 -252 366 -647 288 -454 361
-603 401 -813 37 -194 -40 -531 -187 -817 -54 -106 -181 -299 -221 -336 -57
-54 -240 -109 -364 -109 -172 0 -272 43 -396 173 -47 50 -91 105 -99 122 -14
35 -117 198 -219 350 -161 237 -316 409 -483 535 -101 76 -299 198 -417 258
-33 16 -107 53 -165 82 -335 168 -549 306 -780 505 -280 241 -478 518 -539
756 -11 41 -24 87 -30 102 -6 15 -13 46 -16 67 -3 22 -10 73 -17 112 -6 40
-12 161 -12 268 -1 227 18 407 70 680 20 102 40 208 45 235 5 28 14 73 19 100
6 28 17 86 25 130 8 44 37 201 65 350 41 219 100 587 100 624 0 5 48 39 108
76 135 86 221 151 447 340 353 295 457 414 506 582 43 147 36 300 -26 549 -53
218 -109 380 -177 515 -62 122 -153 258 -173 259 -6 0 -105 -79 -220 -175z
m1764 -975 c66 -253 77 -417 41 -602 -17 -89 -48 -191 -67 -222 -17 -27 -92
254 -118 436 -17 125 -20 343 -4 438 5 36 12 79 15 95 21 139 23 140 65 50 21
-44 51 -132 68 -195z"
        />
      </g>
    </svg>
  );
};
