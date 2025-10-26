import React from "react";
import TabsOverview from "./components/tabsOverview";
import GalleryBox from "./components/GalleryBox";

function App() {
  return (
    <div
      className="w-full h-screen flex items-center justify-center overflow-auto bg-gradient-to-b from-[#373E44] to-[#191B1F]"
      style={{
        boxShadow: "10px 10px 40px 10px #00000080",
      }}
    >
      {/* Outer frame */}
      <div
        className="relative flex flex-col items-end justify-start"
        style={{
          maxWidth: "90vw",
          width: "1728px",
          height: "auto",
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
            transform: "scale(0.8)", // slightly smaller for desktop
            paddingRight: "80px",
            marginTop: "110px",
          }}
        >
          {/* Top Box */}
          <div className="w-full max-w-[720px] h-auto">
            <TabsOverview />
          </div>

          {/* Divider between boxes */}
          <div
            className="w-full max-w-[640px] h-[4px] rounded-[12px] self-center"
            style={{
              background:
                "linear-gradient(180deg, rgba(40,40,40,0.1) 0%, rgba(248,248,248,0.1) 100%), linear-gradient(0deg, rgba(255,255,255,0.05), rgba(255,255,255,0.05))",
              backdropFilter: "blur(9.837px)",
              boxShadow: "0px 4px 4px 0px #00000054",
            }}
          />

          {/* Bottom Box with its divider */}
          <div className="flex flex-col items-center gap-5 w-full">
            <div className="w-full max-w-[720px] h-auto">
              <GalleryBox />
            </div>

            {/* Divider below bottom box */}
            <div
              className="w-full max-w-[640px] h-[4px] rounded-[12px]"
              style={{
                background:
                  "linear-gradient(180deg, rgba(40,40,40,0.1) 0%, rgba(248,248,248,0.1) 100%), linear-gradient(0deg, rgba(255,255,255,0.05), rgba(255,255,255,0.05))",
                backdropFilter: "blur(9.837px)",
                boxShadow: "0px 4px 4px 0px #00000054",
              }}
            />
          </div>
        </div>
      </div>

      {/* Responsive adjustments */}
      <style>
        {`
          @media (max-width: 1440px) {
            .flex-col.items-end > div {
              transform: scale(0.7) !important;
              padding-right: 40px !important;
              margin-top: 80px !important;
            }
          }

          @media (max-width: 1280px) {
            .flex-col.items-end > div {
              transform: scale(0.6) !important;
              padding-right: 20px !important;
              margin-top: 60px !important;
            }
          }

          @media (max-width: 1024px) {
            .flex-col.items-end > div {
              transform: scale(0.5) !important;
              padding-right: 10px !important;
              margin-top: 40px !important;
            }
          }

          @media (max-width: 768px) {
            .flex-col.items-end {
              align-items: center !important;
              transform: scale(0.45) !important;
              padding-right: 0 !important;
              margin-top: 20px !important;
            }
          }
        `}
      </style>
    </div>
  );
}

export default App;
