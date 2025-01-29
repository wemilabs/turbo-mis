import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  position: string;
  coverLetter: string;
}

// TODO: Create an email address for Turbo where we'll receive job applications
// TODO: Sign in with Google with the email and Create a new API KEY
// TODO: Replace the API KEY in the .env file

export function EmailTemplate({
  name,
  email,
  position,
  coverLetter,
}: EmailTemplateProps) {
  return (
    <div>
      <h1>New Job Application Received</h1>
      <p>A new candidate has applied for a position at Turbo MIS.</p>

      <div style={{ margin: "24px 0" }}>
        <h2>Candidate Details:</h2>
        <p>
          <strong>Name:</strong> {name}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
        <p>
          <strong>Position:</strong> {position}
        </p>
      </div>

      <div style={{ margin: "24px 0" }}>
        <h2>Cover Letter:</h2>
        <p style={{ whiteSpace: "pre-wrap" }}>{coverLetter}</p>
      </div>

      <hr
        style={{
          margin: "24px 0",
          border: "none",
          borderTop: "1px solid #eaeaea",
        }}
      />

      <p style={{ color: "#666", fontSize: "14px" }}>
        This is an automated email from the Turbo MIS recruitment system.
      </p>
    </div>
  );
}
