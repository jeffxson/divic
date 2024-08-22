import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
    @font-face{font-family:poppins;font-style:normal;font-weight:400;src:local('Poppins'),url(https://fonts.cdnfonts.com/s/16009/Poppins-Regular.woff) format('woff')} `}
  />
);

export default Fonts;
