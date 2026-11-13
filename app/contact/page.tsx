'use client';

import { useState } from 'react';
import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => { setSubmitting(false); setSubmitted(true); }, 1200);
  };

  return (
    <div style={{ background: 'var(--ivory)', color: 'var(--charcoal)' }}>
      <Nav />

      {/* ── HERO ── */}
      <section
        className="pt-40 pb-20 px-6"
        style={{ background: 'var(--forest)' }}
      >
        <div className="max-w-4xl mx-auto">
          <p className="font-mono-label mb-6" style={{ color: 'rgba(245,243,235,0.45)', fontSize: '0.65rem' }}>
            Contact
          </p>
          <h1 className="headline-xl text-white mb-6" style={{ maxWidth: '560px' }}>
            We&apos;re here
            <br />
            <em className="italic-accent">to help.</em>
          </h1>
          <p style={{ color: 'rgba(245,243,235,0.6)', fontSize: '1rem', lineHeight: 1.8, maxWidth: '400px' }}>
            Reach out with any questions, concerns, or feedback. We respond within one to two business days.
          </p>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className="py-20 px-6" style={{ background: 'var(--ivory)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">

            {/* ── LEFT: Form ── */}
            <div>
              <p className="font-mono-label mb-6" style={{ color: 'var(--olive)', fontSize: '0.65rem' }}>
                Send a Message
              </p>

              {submitted ? (
                <div
                  className="rounded-2xl p-10 text-center"
                  style={{ background: 'rgba(72,82,56,0.08)', border: '1px solid rgba(72,82,56,0.15)' }}
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
                    style={{ background: 'rgba(72,82,56,0.12)' }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--olive)" strokeWidth="2">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-serif mb-3" style={{ fontSize: '1.4rem', color: 'var(--forest)' }}>
                    Message sent.
                  </h3>
                  <p style={{ color: 'rgba(24,37,27,0.55)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                    Thank you for reaching out. We&apos;ll get back to you within 1–2 business days.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="font-mono-label block mb-2" style={{ color: 'var(--olive)', fontSize: '0.6rem' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className="w-full px-4 py-3 rounded-xl text-sm"
                      style={{
                        background: 'rgba(24,37,27,0.04)',
                        border: '1px solid rgba(24,37,27,0.12)',
                        color: 'var(--charcoal)',
                        outline: 'none',
                        fontFamily: 'Inter, sans-serif',
                      }}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="font-mono-label block mb-2" style={{ color: 'var(--olive)', fontSize: '0.6rem' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      className="w-full px-4 py-3 rounded-xl text-sm"
                      style={{
                        background: 'rgba(24,37,27,0.04)',
                        border: '1px solid rgba(24,37,27,0.12)',
                        color: 'var(--charcoal)',
                        outline: 'none',
                        fontFamily: 'Inter, sans-serif',
                      }}
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="font-mono-label block mb-2" style={{ color: 'var(--olive)', fontSize: '0.6rem' }}>
                      Subject *
                    </label>
                    <select
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl text-sm"
                      style={{
                        background: 'rgba(24,37,27,0.04)',
                        border: '1px solid rgba(24,37,27,0.12)',
                        color: formData.subject ? 'var(--charcoal)' : 'rgba(24,37,27,0.35)',
                        outline: 'none',
                        fontFamily: 'Inter, sans-serif',
                      }}
                    >
                      <option value="" disabled>Select a topic…</option>
                      <option value="general">General Inquiry</option>
                      <option value="sms-optout">SMS Opt-Out Request</option>
                      <option value="sms-help">SMS Help</option>
                      <option value="privacy">Privacy / Data Request</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="font-mono-label block mb-2" style={{ color: 'var(--olive)', fontSize: '0.6rem' }}>
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      className="w-full px-4 py-3 rounded-xl text-sm resize-none"
                      style={{
                        background: 'rgba(24,37,27,0.04)',
                        border: '1px solid rgba(24,37,27,0.12)',
                        color: 'var(--charcoal)',
                        outline: 'none',
                        fontFamily: 'Inter, sans-serif',
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-forest w-full justify-center"
                    style={{ opacity: submitting ? 0.6 : 1, cursor: submitting ? 'not-allowed' : 'pointer' }}
                  >
                    {submitting ? 'Sending…' : 'Send Message'}
                    {!submitting && (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* ── RIGHT: Contact Info ── */}
            <div>
              <p className="font-mono-label mb-6" style={{ color: 'var(--olive)', fontSize: '0.65rem' }}>
                Contact Information
              </p>

              <div className="space-y-8">
                {/* Email */}
                <div>
                  <p className="font-mono-label mb-2" style={{ color: 'rgba(24,37,27,0.35)', fontSize: '0.6rem' }}>
                    Email
                  </p>
                  <a
                    href="mailto:support@verdantfinance.com"
                    style={{ color: 'var(--forest)', fontWeight: 600, fontSize: '0.95rem' }}
                  >
                    support@verdantfinance.com
                  </a>
                  <p style={{ color: 'rgba(24,37,27,0.45)', fontSize: '0.82rem', marginTop: '0.3rem' }}>
                    Response within 1–2 business days
                  </p>
                </div>

                {/* Phone */}
                <div>
                  <p className="font-mono-label mb-2" style={{ color: 'rgba(24,37,27,0.35)', fontSize: '0.6rem' }}>
                    Phone
                  </p>
                  <a
                    href="tel:+18005551234"
                    style={{ color: 'var(--forest)', fontWeight: 600, fontSize: '0.95rem' }}
                  >
                    (800) 555-1234
                  </a>
                </div>

                {/* Address */}
                <div>
                  <p className="font-mono-label mb-2" style={{ color: 'rgba(24,37,27,0.35)', fontSize: '0.6rem' }}>
                    Address
                  </p>
                  <p style={{ color: 'var(--charcoal)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                    1200 Financial Way Ste 400<br />Austin, TX 78701<br />United States
                  </p>
                </div>

                {/* SMS Support */}
                <div>
                  <p className="font-mono-label mb-2" style={{ color: 'rgba(24,37,27,0.35)', fontSize: '0.6rem' }}>
                    SMS Support
                  </p>
                  <p style={{ color: 'var(--charcoal)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                    Reply <strong>STOP</strong> to opt out of messages.
                    <br />
                    Reply <strong>HELP</strong> for assistance.
                    <br />
                    Message and data rates may apply.
                  </p>
                </div>

                {/* Divider */}
                <div style={{ borderTop: '1px solid rgba(24,37,27,0.1)', paddingTop: '2rem' }}>
                  <p className="font-mono-label mb-4" style={{ color: 'rgba(24,37,27,0.35)', fontSize: '0.6rem' }}>
                    FAQ
                  </p>
                  <div className="space-y-5">
                    {[
                      {
                        q: 'How do I opt out of SMS?',
                        a: 'Reply STOP to any message. You\'ll be removed immediately.',
                      },
                      {
                        q: 'Will my information be shared?',
                        a: 'No. We do not sell or share your mobile number with third parties for marketing.',
                      },
                      {
                        q: 'How do I request my data?',
                        a: 'Select "Privacy / Data Request" in the form and we\'ll respond within 5 business days.',
                      },
                    ].map((item, i) => (
                      <div key={i}>
                        <p style={{ fontWeight: 600, color: 'var(--forest)', fontSize: '0.88rem', marginBottom: '0.3rem' }}>
                          {item.q}
                        </p>
                        <p style={{ color: 'rgba(24,37,27,0.55)', fontSize: '0.82rem', lineHeight: 1.6 }}>
                          {item.a}{' '}
                          {i === 1 && (
                            <Link href="/privacy" style={{ color: 'var(--olive)', textDecoration: 'underline' }}>
                              See our Privacy Policy.
                            </Link>
                          )}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
