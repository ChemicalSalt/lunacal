import React from "react";
import TabsOverview from "./components/TabsOverview";
import GalleryBox from "./components/GalleryBox";

function App() {
  return (
    <div
      className="w-full h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #373E44 -100%, #191B1F 100%)",
        boxShadow: "10px 10px 40px 10px #00000080",
      }}
    >
      {/* Outer frame */}
      <div
        className="relative flex flex-col items-end justify-start"
        style={{
          width: "1728px",
          height: "895px",
          borderRadius: "28px",
          position: "relative",
          overflow: "visible",
        }}
      >
        {/* Right-side container pushed down */}
        <div
          className="flex flex-col items-end justify-start gap-6"
          style={{
            transformOrigin: "center right",
            transform: "scale(0.80)", // slightly smaller so all fits
            paddingRight: "80px",
            marginTop: "110px", // space on top
          }}
        >
          {/* Top Box */}
          <div style={{ width: "720px", height: "316px" }}>
            <TabsOverview />
          </div>

          {/* Divider between boxes */}
          <div
            style={{
              width: "640px",
              height: "4px",
              borderRadius: "12px",
              alignSelf: "center",
              background:
                "linear-gradient(180deg, rgba(40,40,40,0.1) 0%, rgba(248,248,248,0.1) 100%), linear-gradient(0deg, rgba(255,255,255,0.05), rgba(255,255,255,0.05))",
              backdropFilter: "blur(9.837px)",
              boxShadow: "0px 4px 4px 0px #00000054",
            }}
          />

          {/* Bottom Box with its divider */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
            <div style={{ width: "720px", height: "330px" }}>
              <GalleryBox />
            </div>

            {/* Divider below bottom box */}
            <div
              style={{
                width: "640px",
                height: "4px",
                borderRadius: "12px",
                background:
                  "linear-gradient(180deg, rgba(40,40,40,0.1) 0%, rgba(248,248,248,0.1) 100%), linear-gradient(0deg, rgba(255,255,255,0.05), rgba(255,255,255,0.05))",
                backdropFilter: "blur(9.837px)",
                boxShadow: "0px 4px 4px 0px #00000054",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
