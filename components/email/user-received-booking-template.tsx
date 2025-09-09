import React from "react";

interface UserReceivedBookingProps {
  name: string;
  email: string;
  time?: string;
  date?: string;
}

export const UserReceivedBookingTemplate = ({
  name,
  email,
  time,
  date,
}: UserReceivedBookingProps) => {
  return (
    <div
      style={{
        backgroundColor: "#f5f7fa",
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
        padding: "40px 20px",
        lineHeight: "1.6",
        color: "#1a202c",
      }}
    >
      {/* Preheader */}
      <div
        style={{
          display: "none",
          maxWidth: 0,
          maxHeight: 0,
          overflow: "hidden",
          fontSize: "1px",
          lineHeight: "1px",
          color: "#f5f7fa",
          opacity: 0,
        }}
      >
        Your consultation booking request has been received
      </div>

      {/* Main Container */}
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Header */}
        <div
          style={{
            backgroundColor: "#04306e",
            padding: "18px",
            textAlign: "center",
          }}
        >
          <img
            style={{
              width: "80px",
              margin: "0 auto",
              display: "block",
            }}
            src="https://res.cloudinary.com/doyix74kc/image/upload/v1744979117/logo_vbfvsy.png"
            alt="Gusto Professionals Logo"
          />
        </div>

        {/* Content */}
        <div style={{ padding: "32px" }}>
          <h1
            style={{
              fontSize: "24px",
              fontWeight: 700,
              color: "#04306e",
              margin: "0 0 16px",
              textAlign: "center",
            }}
          >
            Consultation Booking Received
          </h1>
          <p
            style={{
              fontSize: "16px",
              color: "#4a5568",
              margin: "0 0 16px",
            }}
          >
            Dear {name},
          </p>
          <p
            style={{
              fontSize: "16px",
              color: "#4a5568",
              margin: "0 0 24px",
            }}
          >
            Thank you for booking a consultation with Gusto Professionals! We
            have received your request and our team will contact you soon to
            confirm your appointment details.
          </p>

          {/* Booking Details */}
          <div
            style={{
              backgroundColor: "#f7fafc",
              padding: "16px",
              borderRadius: "8px",
              margin: "0 0 24px",
            }}
          >
            <p
              style={{
                fontSize: "16px",
                color: "#1a202c",
                margin: "0 0 8px",
              }}
            >
              <strong>Email:</strong> {email}
            </p>
            {date && (
              <p
                style={{
                  fontSize: "16px",
                  color: "#1a202c",
                  margin: "0 0 8px",
                }}
              >
                <strong>Preferred Date:</strong> {date}
              </p>
            )}
            {time && (
              <p
                style={{
                  fontSize: "16px",
                  color: "#1a202c",
                  margin: "0 0 8px",
                }}
              >
                <strong>Preferred Time:</strong> {time}
              </p>
            )}
          </div>

          <p
            style={{
              fontSize: "16px",
              color: "#4a5568",
              margin: "0 0 24px",
            }}
          >
            If you need to update or cancel your request, please reach out to us
            at{" "}
            <a
              href="mailto:info.gustoprofessionals@gmail.com"
              style={{ color: "#04306e", textDecoration: "underline" }}
            >
              info.gustoprofessionals@gmail.com
            </a>
            .
          </p>

          {/* Signature */}
          <p
            style={{
              fontSize: "14px",
              color: "#718096",
              margin: "24px 0 0",
            }}
          >
            Best regards,
            <br />
            The Gusto Professionals Team
          </p>
        </div>

        {/* Footer */}
        <div
          style={{
            backgroundColor: "#f7fafc",
            padding: "16px",
            textAlign: "center",
            fontSize: "12px",
            color: "#718096",
            borderTop: "1px solid #e2e8f0",
          }}
        >
          <p style={{ margin: "0 0 8px" }}>
            You received this email because you booked a consultation with Gusto
            Professionals.
          </p>
          <p style={{ margin: "0" }}>
            If you did not make this request, please{" "}
            <a
              href="mailto:info.gustoprofessionals@gmail.com"
              style={{ color: "#04306e", textDecoration: "underline" }}
            >
              contact us
            </a>
            .
          </p>
          <p style={{ margin: "8px 0 0" }}>
            © 2025 Gusto Professionals. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};
