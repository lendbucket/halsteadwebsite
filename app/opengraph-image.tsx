import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Halstead Security: Professional Home Security, Locally Installed";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#0F1B2D",
          padding: "60px 80px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "8px",
              backgroundColor: "#C9A547",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
          </div>
          <span
            style={{
              fontSize: "32px",
              fontWeight: 700,
              color: "#F4F1EA",
              letterSpacing: "-0.02em",
            }}
          >
            Halstead Security
          </span>
        </div>
        <div
          style={{
            fontSize: "56px",
            fontWeight: 800,
            color: "#F4F1EA",
            textAlign: "center",
            lineHeight: 1.15,
            letterSpacing: "-0.03em",
            maxWidth: "900px",
          }}
        >
          Professional Home Security,
        </div>
        <div
          style={{
            fontSize: "56px",
            fontWeight: 800,
            color: "#C9A547",
            textAlign: "center",
            lineHeight: 1.15,
            letterSpacing: "-0.03em",
          }}
        >
          Locally Installed.
        </div>
        <div
          style={{
            marginTop: "40px",
            fontSize: "20px",
            color: "rgba(244, 241, 234, 0.7)",
            textAlign: "center",
          }}
        >
          Plans from $30/mo · No 36-month contracts · Free quote
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            height: "6px",
            backgroundColor: "#C9A547",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
