import React, { useState, useEffect } from "react";

const Carousel = ({ images, interval = 2000 }) => {
  const [index, setIndex] = useState(0);

  // Auto-slide every `interval` milliseconds
  useEffect(() => {
    const slide = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(slide); // Cleanup on unmount
  }, [images.length, interval]);

  const prev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div style={{ maxWidth: "1200px", margin: "auto", position: "relative" }}>
      <img
        src={images[index]}
        alt={`Slide ${index}`}
        style={{
          width: "1050px",
          height: "800px",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />
      <button onClick={prev} style={buttonStyle1("left")}>❮</button>
      <button onClick={next} style={buttonStyle2("right")}>❯</button>
    </div>
  );
};

const buttonStyle1 = (pos) => ({
  position: "relative",
  bottom: "470px",
  [pos]: "10px",
  transform: "translateY(-50%)",
  fontSize: "30px",
  background: "#fff",
  border: "none",
  borderRadius: "50%",
  padding: "8px 12px",
  cursor: "pointer",
  boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
});

const buttonStyle2 = (pos) => ({
    position: "relative",
    left: "1030px",
    bottom: "470px",
    [pos]: "10px",
    transform: "translateY(-50%)",
    fontSize: "30px",
    background: "#fff",
    border: "none",
    borderRadius: "50%",
    padding: "8px 12px",
    cursor: "pointer",
    boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
  });

export default Carousel;







/*

import React, { useState } from "react";

const Carousel = ({ images }) => {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((index - 1 + images.length) % images.length);
  };

  const next = () => {
    setIndex((index + 1) % images.length);
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto", position: "relative" }}>
      <img
        src={images[index]}
        alt={`Slide ${index}`}
        style={{ width: "100%", height: "300px", objectFit: "cover", borderRadius: "8px" }}
      />
      <button onClick={prev} style={buttonStyle("left")}>❮</button>
      <button onClick={next} style={buttonStyle("right")}>❯</button>
    </div>
  );
};

const buttonStyle = (position) => ({
  position: "absolute",
  top: "50%",
  [position]: "10px",
  transform: "translateY(-50%)",
  fontSize: "24px",
  background: "#fff",
  border: "none",
  borderRadius: "50%",
  padding: "8px 12px",
  cursor: "pointer",
  boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
});

export default Carousel;
*/