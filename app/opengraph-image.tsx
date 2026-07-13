import { ImageResponse } from "next/og";

export const alt =
  "Harsh Photo State - Printing Shop in Budh Bazar, Moradabad";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(135deg, #eff6ff, #ffffff, #fff7ed)",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 420,
            height: 420,
            left: -120,
            top: -130,
            borderRadius: "50%",
            background: "rgba(59,130,246,0.18)",
          }}
        />

        <div
          style={{
            position: "absolute",
            width: 420,
            height: 420,
            right: -130,
            bottom: -160,
            borderRadius: "50%",
            background: "rgba(249,115,22,0.18)",
          }}
        />

        <div
          style={{
            width: "100%",
            padding: "70px 85px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              width: 710,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: 25,
                fontWeight: 700,
                color: "#ea580c",
              }}
            >
              Budh Bazar, Moradabad
            </div>

            <div
              style={{
                marginTop: 24,
                display: "flex",
                flexDirection: "column",
                fontSize: 72,
                fontWeight: 900,
                lineHeight: 1.03,
              }}
            >
              <span style={{ color: "#1d4ed8" }}>HARSH</span>
              <span style={{ color: "#f97316" }}>PHOTO STATE</span>
            </div>

            <div
              style={{
                marginTop: 25,
                fontSize: 31,
                fontWeight: 700,
                color: "#0f172a",
              }}
            >
              Print • Copy • Create
            </div>

            <div
              style={{
                marginTop: 24,
                fontSize: 25,
                lineHeight: 1.5,
                color: "#475569",
              }}
            >
              Printing • Photocopy • Binding • Lamination • PVC Cards
            </div>

            <div
              style={{
                marginTop: 34,
                display: "flex",
                padding: "16px 26px",
                alignSelf: "flex-start",
                borderRadius: 18,
                background: "#16a34a",
                color: "white",
                fontSize: 23,
                fontWeight: 800,
              }}
            >
              Send PDF on WhatsApp
            </div>
          </div>

          <div
            style={{
              width: 330,
              height: 330,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 65,
              background: "linear-gradient(135deg, #1d4ed8, #172554)",
              boxShadow: "0 30px 60px rgba(30,64,175,0.3)",
            }}
          >
            <div style={{ fontSize: 135 }}>🖨️</div>

            <div
              style={{
                marginTop: 18,
                fontSize: 40,
                fontWeight: 900,
                color: "white",
              }}
            >
              HPS
            </div>

            <div
              style={{
                marginTop: 12,
                width: 90,
                height: 9,
                borderRadius: 999,
                background: "#f97316",
              }}
            />
          </div>
        </div>
      </div>
    ),
    size
  );
}