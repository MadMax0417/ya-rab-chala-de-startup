import { ImageResponse } from "next/og";

export const alt =
  "Ya Rab Chala de Startups — India's most unnecessarily ambitious startup. Current MRR: ₹0.";
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
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#F4F0E8",
          color: "#14130F",
          padding: "50px 62px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "2px solid #14130F",
            paddingBottom: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 21,
              fontWeight: 800,
              letterSpacing: "-0.5px",
            }}
          >
            YA RAB CHALA DE STARTUPS
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 12,
              letterSpacing: "2.4px",
              color: "#6E675B",
            }}
          >
            A SATIRICAL STARTUP / EST. LAST WEEK
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flex: 1,
            maxWidth: 990,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 82,
              fontWeight: 800,
              lineHeight: 0.94,
              letterSpacing: "-4.5px",
            }}
          >
            We&apos;re building the future. We just don&apos;t know which future
            yet.
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 22,
              fontSize: 22,
              color: "#6E675B",
            }}
          >
            AI-powered. Spiritually backed. Commercially theoretical.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            borderTop: "2px solid #14130F",
            paddingTop: "18px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                fontSize: 11,
                letterSpacing: "2.2px",
                color: "#6E675B",
              }}
            >
              CURRENT MRR
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 56,
                fontWeight: 800,
                lineHeight: 1,
                letterSpacing: "-2px",
              }}
            >
              ₹0
            </div>
          </div>
          <div
            style={{
              display: "flex",
              backgroundColor: "#B42318",
              color: "#F4F0E8",
              padding: "13px 20px",
              fontSize: 12,
              letterSpacing: "1.4px",
            }}
          >
            INDIA&apos;S MOST UNNECESSARILY AMBITIOUS STARTUP
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
