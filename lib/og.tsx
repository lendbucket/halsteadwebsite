import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };

export function makeOgImage(title: string, subtitle?: string) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
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
              width: "40px",
              height: "40px",
              borderRadius: "8px",
              backgroundColor: "#C9A547",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="24"
              height="24"
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
              fontSize: "24px",
              fontWeight: 700,
              color: "rgba(244, 241, 234, 0.7)",
              letterSpacing: "-0.01em",
            }}
          >
            Halstead Security
          </span>
        </div>
        <div
          style={{
            fontSize: "52px",
            fontWeight: 800,
            color: "#F4F1EA",
            lineHeight: 1.15,
            letterSpacing: "-0.03em",
            maxWidth: "900px",
          }}
        >
          {title}
        </div>
        {subtitle && (
          <div
            style={{
              marginTop: "24px",
              fontSize: "22px",
              color: "rgba(244, 241, 234, 0.65)",
              lineHeight: 1.4,
              maxWidth: "800px",
            }}
          >
            {subtitle}
          </div>
        )}
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
    { ...OG_SIZE }
  );
}
