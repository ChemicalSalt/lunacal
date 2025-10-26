import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import questionMark from "../assets/questionMark.svg";
import gridIcon from "../assets/gridIcon.svg";
import arrowLeft2 from "../assets/arrowLeft2.svg";
import arrowRight2 from "../assets/arrowRight2.svg";
import sample1 from "../assets/sample1.jpg";
import sample2 from "../assets/sample2.jpg";
import sample3 from "../assets/sample3.jpg";

const GalleryBox = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [images, setImages] = useState([
    { id: 1, src: sample1 },
    { id: 2, src: sample2 },
    { id: 3, src: sample3 },
  ]);
  const [highlightId, setHighlightId] = useState(null);
  const [showUploadOptions, setShowUploadOptions] = useState(false);
  const [showUrlInput, setShowUrlInput] = useState(false);
  const [urlValue, setUrlValue] = useState("");
  const dropdownRef = useRef(null);

  // Add Image button toggle
  const handleAddImage = () => setShowUploadOptions((prev) => !prev);

  // Upload File
  const handleUploadFile = () => {
    setShowUploadOptions(false);
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (event) => {
        const newImg = { id: Date.now(), src: event.target.result };
        setImages((prev) => [...prev, newImg]);
        setHighlightId(newImg.id);
        setTimeout(() => setHighlightId(null), 1000);
      };
      reader.readAsDataURL(file);
    };
    input.click();
  };

  // Paste URL submit
  const handleUrlSubmit = () => {
    if (!urlValue) return;
    const newImg = { id: Date.now(), src: urlValue };
    setImages((prev) => [...prev, newImg]);
    setHighlightId(newImg.id);
    setUrlValue("");
    setShowUrlInput(false);
    setTimeout(() => setHighlightId(null), 1000);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowUploadOptions(false);
        setShowUrlInput(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleRemoveImage = (id) => {
    setImages((prev) => prev.filter((img) => img.id !== id));
  };

  return (
    <div
      className="relative rounded-[18.89px] flex flex-col items-center justify-start pt-10 px-6"
      style={{
        width: "720px",
        height: "330px",
        backgroundColor: "#363C43",
        boxShadow: "5.67px 5.67px 3.78px rgba(0, 0, 0, 0.4)",
      }}
    >
      {/* Top-left question icon */}
      <img
        src={questionMark}
        alt="help icon"
        className="absolute top-6 left-6 w-6 h-6"
      />

      {/* Top header */}
      <div className="flex items-center justify-between w-full max-w-[640px]">
        <button
          className="w-[150px] h-[60px] rounded-[20px] flex items-center justify-center"
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 500,
            fontSize: "20px",
            color: "#FFFFFF",
            background: "#171717",
            boxShadow: "inset 0px 4px 10px 2px #00000040",
            border: "none",
            transform: "translate(23px, -16px)",
          }}
        >
          Gallery
        </button>

        {/* Add Image Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={handleAddImage}
            className="px-7 h-[45px] rounded-full text-center uppercase relative z-30"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: "12px",
              color: "#FFFFFF",
              background: "#FFFFFF08",
              backdropFilter: "blur(104.56px)",
              boxShadow: `
                0px 3.26px 3.26px 0px #FFFFFF26 inset,
                0px 0px 48.91px 0px #FFFFFF0D inset,
                9px 10px 7.1px 0px #00000066,
                -0.5px -0.5px 6.9px 0px #FFFFFF40
              `,
              border: "none",
              transform: "translate(95px, -16px)",
            }}
          >
            + ADD IMAGE
          </button>

          <AnimatePresence>
            {showUploadOptions && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.25 }}
                className="absolute right-0 flex flex-col gap-2 p-3 rounded-2xl z-50"
                style={{
                  bottom: "55px",
                  background: "rgba(255,255,255,0.08)",
                  backdropFilter: "blur(20px)",
                  boxShadow: `
                    inset 0 1px 4px rgba(255,255,255,0.3),
                    0 4px 20px rgba(0,0,0,0.6)
                  `,
                  border: "1px solid rgba(255,255,255,0.15)",
                  minWidth: "190px",
                }}
              >
                <button
                  onClick={handleUploadFile}
                  className="w-full py-2 rounded-lg text-white font-semibold tracking-wide hover:bg-white/15 transition-all duration-200 flex items-center justify-center gap-2"
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255,255,255,0.2)",
                  }}
                >
                  📂 Upload File
                </button>

                {!showUrlInput ? (
                  <button
                    onClick={() => setShowUrlInput(true)}
                    className="w-full py-2 rounded-lg text-white font-semibold tracking-wide hover:bg-white/15 transition-all duration-200 flex items-center justify-center gap-2"
                    style={{
                      background: "rgba(255,255,255,0.1)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255,255,255,0.2)",
                    }}
                  >
                    🔗 Paste URL
                  </button>
                ) : (
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={urlValue}
                      onChange={(e) => setUrlValue(e.target.value)}
                      placeholder="Paste image URL"
                      className="flex-1 px-2 py-1 rounded-lg text-black font-medium outline-none"
                      style={{ border: "1px solid rgba(255,255,255,0.3)" }}
                    />
                    <button
                      onClick={handleUrlSubmit}
                      className="px-3 rounded-lg bg-white/20 hover:bg-white/30 text-white font-semibold transition-all"
                    >
                      Add
                    </button>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Left / Right arrows */}
        <div
          className="relative w-[50px] h-[50px] rounded-full cursor-pointer hover:scale-105 transition-transform duration-200"
          style={{
            background:
              "linear-gradient(139.14deg, #303439 12.4%, #161718 94.96%)",
            boxShadow:
              "4px 5px 30px 5px #101213, -5px -3px 30px -10px #96BEE7, inset 1px 1px 2px rgba(255,255,255,0.15)",
            transform: "translate(40px, -14px)",
          }}
        >
          <img
            src={arrowLeft2}
            alt="left"
            className="absolute inset-0 m-auto w-[18px] h-[18px]"
            style={{ filter: "brightness(1.15)" }}
          />
        </div>

        <div
          className="relative w-[50px] h-[50px] rounded-full cursor-pointer hover:scale-105 transition-transform duration-200"
          style={{
            background:
              "linear-gradient(139.14deg, #303439 12.4%, #161718 94.96%)",
            boxShadow:
              "4px 5px 30px 5px #101213, -5px -3px 30px -10px #96BEE7, inset 1px 1px 2px rgba(255,255,255,0.15)",
            transform: "translate(-30px, -14px)",
          }}
        >
          <img
            src={arrowRight2}
            alt="right"
            className="absolute inset-0 m-auto w-[18px] h-[18px]"
            style={{ filter: "brightness(1.15)" }}
          />
        </div>
      </div>

      {/* Gallery images */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "24px",
          marginTop: "10px",
          position: "relative",
          zIndex: 5,
        }}
      >
        {images.map((img, index) => {
          const isHovered = hoveredIndex === index;
          const isHighlighted = highlightId === img.id;
          return (
           <motion.div
  key={img.id}
  className="relative cursor-pointer"
  onMouseEnter={() => setHoveredIndex(index)}
  onMouseLeave={() => setHoveredIndex(null)}
  initial={{ rotateY: 0, rotateX: 0 }}
  animate={{
    rotateY: isHighlighted ? -6 : 0, // tilt top-right & bottom-right up
    rotateX: isHighlighted ? 2 : 0,  // slight vertical lift for right edge
  }}
  transition={{ type: "spring", stiffness: 300, damping: 25 }}
  style={{ display: "inline-block", transformStyle: "preserve-3d", perspective: 600 }}
>
  <img
    src={img.src}
    alt={`gallery ${index + 1}`}
    style={{
      width: "180px",
      height: "180px",
      borderRadius: "24px",
      transform: isHovered
        ? "scale(1.04) translate(6px, -6px)"
        : "scale(1) translate(0, 0)",
      filter: isHovered ? "grayscale(0%)" : "grayscale(100%)",
      outline: isHighlighted ? "3px solid rgba(255,255,255,0.7)" : "none",
      transition:
        "transform 0.4s ease, filter 0.4s ease, outline 0.3s ease",
    }}
  />
</motion.div>

          );
        })}
      </div>

      <img
        src={gridIcon}
        alt="grid icon"
        className="absolute left-6 opacity-90 z-10"
        style={{ bottom: "170px", width: "30px", height: "35px" }}
      />
    </div>
  );
};

export default GalleryBox;
