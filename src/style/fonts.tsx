import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
  @font-face{font-family:inter;font-style:normal;font-weight:400;src:local('Inter'),url(https://fonts.cdnfonts.com/s/19795/Inter[slnt,wght].woff) format('woff')}`}
  />
);

export default Fonts;
