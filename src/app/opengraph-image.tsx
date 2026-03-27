import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Homepic - Every moment of your home, captured";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #0D9488 0%, #0F766E 100%)",
        fontFamily: "sans-serif",
      }}
    >
      {/* 로고 */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          marginBottom: 40,
        }}
      >
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: 16,
            background: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 32,
          }}
        >
          🏠
        </div>
        <span
          style={{
            fontSize: 48,
            fontWeight: 800,
            color: "white",
            letterSpacing: -1,
          }}
        >
          Homepic
        </span>
      </div>

      {/* 헤드라인 */}
      <div
        style={{
          fontSize: 56,
          fontWeight: 800,
          color: "white",
          textAlign: "center",
          lineHeight: 1.2,
          letterSpacing: -2,
          marginBottom: 20,
        }}
      >
        Every moment of your home,
        <br />
        captured.
      </div>

      {/* 서브라인 */}
      <div
        style={{
          fontSize: 24,
          color: "rgba(255,255,255,0.7)",
          textAlign: "center",
          maxWidth: 700,
        }}
      >
        AI-powered home management — from move-in to move-out
      </div>

      {/* 하단 키워드 */}
      <div
        style={{
          display: "flex",
          gap: 16,
          marginTop: 48,
        }}
      >
        {["🔍 Inspect", "📸 Capture", "🤖 AI Analysis", "📄 Report"].map(
          (item) => (
            <div
              key={item}
              style={{
                background: "rgba(255,255,255,0.15)",
                borderRadius: 100,
                padding: "10px 24px",
                fontSize: 18,
                color: "white",
                fontWeight: 600,
              }}
            >
              {item}
            </div>
          ),
        )}
      </div>
    </div>,
    { ...size },
  );
}
