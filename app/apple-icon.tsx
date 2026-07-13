import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
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
            width: 132,
            height: 132,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 34,
            background: "white",
          }}
        >
          <div style={{ fontSize: 54 }}>🖨️</div>

          <div
            style={{
              marginTop: 5,
              fontSize: 25,
              fontWeight: 900,
              color: "#1d4ed8",
            }}
          >
            HPS
          </div>

          <div
            style={{
              marginTop: 5,
              width: 42,
              height: 5,
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