"use client";
import { useState } from "react";

interface Props {
  productName: string;
}

const finishOptions = ["Gloss", "Matte", "Satin", "Soft-touch", "Foil", "Other"];
const turnaroundOptions = ["Standard (5–7 days)", "Express (3–4 days)", "Rush (1–2 days)"];

export default function ProductQuoteForm({ productName }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "",
    quantity: "", size: "", finish: "",
    turnaround: "", notes: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "13px 16px",
    borderRadius: "12px",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    color: "#ffffff",
    fontSize: "14px",
    outline: "none",
    transition: "border-color 0.2s ease",
    fontFamily: "inherit",
  };

  const labelStyle: React.CSSProperties = {
    fontSize: "12px",
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    color: "rgba(255,255,255,0.42)",
    marginBottom: "6px",
    display: "block",
  };

  if (submitted) {
    return (
      <div style={{ padding: "48px 32px", borderRadius: "24px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(74,222,128,0.25)", textAlign: "center" }}>
        <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: "rgba(74,222,128,0.15)", border: "1px solid rgba(74,222,128,0.35)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 style={{ fontSize: "20px", fontWeight: 800, color: "#ffffff", margin: "0 0 8px 0" }}>Quote request sent!</h3>
        <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", margin: 0 }}>We'll get back to you within 24 hours with a tailored quote for your {productName} order.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "36px 32px", borderRadius: "24px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
      <h2 style={{ fontSize: "22px", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.02em", margin: "0 0 6px 0" }}>Get a quote for {productName}</h2>
      <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.42)", margin: "0 0 28px 0" }}>Fill in your requirements and we'll respond within 24 hours.</p>

      <form onSubmit={handleSubmit}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }} className="form-2col">
          <div>
            <label style={labelStyle}>Your Name *</label>
            <input required name="name" value={form.name} onChange={handleChange} placeholder="Name" style={inputStyle}
              onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(168,85,247,0.5)")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")} />
          </div>
          <div>
            <label style={labelStyle}>Email Address *</label>
            <input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@company.com" style={inputStyle}
              onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(168,85,247,0.5)")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")} />
          </div>
          <div>
            <label style={labelStyle}>Phone Number</label>
            <input name="phone" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" style={inputStyle}
              onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(34,211,238,0.5)")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")} />
          </div>
          <div>
            <label style={labelStyle}>Quantity *</label>
            <input required name="quantity" value={form.quantity} onChange={handleChange} placeholder="e.g. 50" style={inputStyle}
              onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(34,211,238,0.5)")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")} />
          </div>
          <div>
            <label style={labelStyle}>Size / Dimensions</label>
            <input name="size" value={form.size} onChange={handleChange} placeholder="e.g. 24×36 inches" style={inputStyle}
              onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(244,114,182,0.5)")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")} />
          </div>
          <div>
            <label style={labelStyle}>Preferred Finish</label>
            <select name="finish" value={form.finish} onChange={handleChange} style={{ ...inputStyle, cursor: "pointer" }}
              onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(244,114,182,0.5)")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}>
              <option value="">Select finish…</option>
              {finishOptions.map((f) => <option key={f} value={f}>{f}</option>)}
            </select>
          </div>
          <div style={{ gridColumn: "1/-1" }}>
            <label style={labelStyle}>Turnaround Time</label>
            <select name="turnaround" value={form.turnaround} onChange={handleChange} style={{ ...inputStyle, cursor: "pointer" }}
              onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(74,222,128,0.5)")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}>
              <option value="">Select turnaround…</option>
              {turnaroundOptions.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
          <div style={{ gridColumn: "1/-1" }}>
            <label style={labelStyle}>Additional Notes</label>
            <textarea name="notes" value={form.notes} onChange={handleChange} placeholder="Describe any special requirements, artwork details, or questions…" rows={3}
              style={{ ...inputStyle, resize: "vertical", minHeight: "80px" } as React.CSSProperties}
              onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(168,85,247,0.5)")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")} />
          </div>
        </div>

        {/* Hidden product field */}
        <input type="hidden" name="product" value={productName} />

        <button type="submit" style={{ width: "100%", padding: "15px 24px", borderRadius: "9999px", background: "linear-gradient(135deg,#ec4899,#f97316)", color: "#ffffff", fontWeight: 700, fontSize: "15px", border: "none", cursor: "pointer", letterSpacing: "-0.01em", transition: "transform 0.2s ease, box-shadow 0.2s ease" }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(236,72,153,0.35)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
          Send Quote Request →
        </button>
        <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.28)", textAlign: "center", marginTop: "12px", marginBottom: 0 }}>
          We respond within 24 hours. No spam, ever.
        </p>
      </form>
    </div>
  );
}
