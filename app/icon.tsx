import { ImageResponse } from "next/og";

export const size = {
  width: 512,
  height: 512,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1d4ed8, #172554)",
        }}
      >
        <div
          style={{
            width: 360,
            height: 360,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 90,
            background: "white",
            boxShadow: "0 25px 60px rgba(0,0,0,0.25)",
          }}
        >
          <div
            style={{
              fontSize: 150,
              lineHeight: 1,
            }}
          >
            🖨️
          </div>

          <div
            style={{
              marginTop: 18,
              fontSize: 54,
              fontWeight: 900,
              color: "#1d4ed8",
            }}
          >
            HPS
          </div>

          <div
            style={{
              marginTop: 8,
              width: 110,
              height: 12,
              borderRadius: 999,
              background: "#f97316",
            }}
          />
        </div>
      </div>
    ),
    size
  );
}