import React from "react";

export default function Preview({ url, alt }) {
  const size = "64px";
  const br = "10px";
  //   const shadow = "0px 1px 13px #00000026";
  const shadow = "rgba(0, 0, 0, 0.15) 3px 6px 15px";
  return (
    <div
      style={{ width: size, height: size, borderRadius: br, boxShadow: shadow }}
    >
      <img style={{ width: size, height: size }} src={url} alt={alt} />
    </div>
  );
}
