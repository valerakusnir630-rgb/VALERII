// A conservative first-frame warning, not a guarantee of video quality or privacy.
export function appearsBlack(rgba){if(!rgba?.length)return true;let brightness=0,pixels=0;for(let i=0;i<rgba.length;i+=4){brightness+=(rgba[i]+rgba[i+1]+rgba[i+2])/3;pixels++;}return brightness/pixels<4;}
