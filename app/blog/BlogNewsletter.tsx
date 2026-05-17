"use client";
import { useState } from "react";

export default function BlogNewsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <div style={{ marginTop: "64px", borderRadius: "24px", padding: "48px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", display: "flex", flexWrap: "wrap", gap: "32px", alignItems: "center", justifyContent: "space-between" }}>
      <div>
        <h3 style={{ fontSize: "22px", fontWeight: 800, color: "#ffffff", margin: "0 0 8px 0" }}>Get print guides delivered</h3>
        <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.45)", margin: 0, lineHeight: 1.6 }}>New material guides and print tips, straight to your inbox. No spam.</p>
      </div>
      {subscribed ? (
        <p style={{ fontSize: "14px", color: "#4ade80", fontWeight: 600 }}>✓ You&apos;re subscribed!</p>
      ) : (
        <form onSubmit={(e) => { e.preventDefault(); setSubscribed(true); }} style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <input type="email" placeholder="your@email.com" required value={email} onChange={(e) => setEmail(e.target.value)}
            style={{ padding: "13px 18px", borderRadius: "9999px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", color: "#ffffff", fontSize: "14px", outline: "none", minWidth: "220px", fontFamily: "inherit" }} />
          <button type="submit" style={{ padding: "13px 22px", borderRadius: "9999px", background: "linear-gradient(135deg,#ec4899,#f97316)", color: "#ffffff", fontWeight: 700, fontSize: "14px", border: "none", cursor: "pointer", fontFamily: "inherit", whiteSpace: "nowrap" }}>
            Subscribe →
          </button>
        </form>
      )}
    </div>
  );
}
