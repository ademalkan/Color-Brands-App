import React from "react";
import ContentLoader from "react-content-loader";

function Loader() {
  return (
    <ContentLoader
      speed={2}
      width={720}
      height={120}
      viewBox="0 0 720 120"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
     
    >
      <rect x="2" y="8" rx="3" ry="3" width="88" height="20" />
      <rect x="2" y="56" rx="0" ry="0" width="120" height="40" />
      <rect x="139" y="56" rx="0" ry="0" width="120" height="40" />
      <rect x="442" y="56" rx="0" ry="0" width="120" height="40" />
      <rect x="296" y="56" rx="0" ry="0" width="120" height="40" />
    </ContentLoader>
  );
}

export default Loader;
