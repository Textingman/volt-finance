'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Nav from './components/Nav';
import Footer from './components/Footer';

// ─── Animated Counter ──────────────────────────────────────────────────────────
function Counter({ target, prefix = '', suffix = '' }: { target: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        let start = 0;
        const step = target / 60;
        const timer = setInterval(() => {
          start += step;
          if (start >= target) { setCount(target); clearInterval(timer); }
          else setCount(Math.floor(start));
        }, 16);
        observer.disconnect();
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);
  return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>;
}

// ─── App UI: Dashboard Mockup ──────────────────────────────────────────────────
function DashboardMockup() {
  return (
    <div className="app-card p-6 w-full max-w-sm mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="font-mono-label" style={{ color: 'var(--olive)', fontSize: '0.6rem' }}>Good morning</p>
          <p style={{ fontWeight: 600, color: 'var(--forest)', fontSize: '1rem' }}>Jordan, here&apos;s your overview</p>
        </div>
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold"
          style={{ background: 'var(--forest)', color: 'var(--ivory)' }}
        >
          J
        </div>
      </div>

      {/* Net Worth Card */}
      <div
        className="rounded-2xl p-4 mb-4"
        style={{ background: 'var(--forest)', color: 'var(--ivory)' }}
      >
        <p className="font-mono-label mb-1" style={{ color: 'rgba(245,243,235,0.5)', fontSize: '0.6rem' }}>Net Worth</p>
        <p style={{ fontSize: '1.75rem', fontWeight: 700, letterSpacing: '-0.02em' }}>$48,240</p>
        <p style={{ color: 'rgba(245,243,235,0.6)', fontSize: '0.75rem', marginTop: '0.25rem' }}>
          <span style={{ color: '#7EC8A0' }}>↑ $1,240</span> this month
        </p>
      </div>

      {/* Goals */}
      <div className="space-y-3 mb-4">
        {[
          { label: 'Emergency Fund', current: 4200, goal: 6000, pct: 70, color: '#485238' },
          { label: 'Student Loan Payoff', current: 8400, goal: 12000, pct: 70, color: '#18251B' },
          { label: 'Retirement (401k)', current: 18600, goal: 25000, pct: 74, color: '#485238' },
        ].map(g => (
          <div key={g.label}>
            <div className="flex justify-between items-center mb-1">
              <span style={{ fontSize: '0.78rem', color: 'var(--charcoal)', fontWeight: 500 }}>{g.label}</span>
              <span className="font-mono-label" style={{ color: 'var(--olive)', fontSize: '0.6rem' }}>{g.pct}%</span>
            </div>
            <div className="rounded-full h-1.5" style={{ background: 'rgba(24,37,27,0.1)' }}>
              <div
                className="h-1.5 rounded-full"
                style={{ width: `${g.pct}%`, background: g.color, transition: 'width 1s ease' }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* AI Insight */}
      <div
        className="rounded-xl p-3 flex items-start gap-3"
        style={{ background: 'rgba(72,82,56,0.1)', border: '1px solid rgba(72,82,56,0.2)' }}
      >
        <div
          className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
          style={{ background: 'var(--olive)' }}
        >
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
            <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 5v6m0 4h.01" />
          </svg>
        </div>
        <p style={{ fontSize: '0.72rem', color: 'var(--forest)', lineHeight: 1.5 }}>
          <strong>AI Insight:</strong> You&apos;re on track to fully fund your emergency fund by March. Consider increasing your 401k contribution by 2%.
        </p>
      </div>
    </div>
  );
}

// ─── App UI: AI Chat Mockup ────────────────────────────────────────────────────
function ChatMockup() {
  const messages = [
    { role: 'user', text: 'How much should I have in my emergency fund?' },
    { role: 'ai', text: 'Based on your monthly expenses of $3,200, a solid emergency fund is 3–6 months of expenses — so $9,600 to $19,200. You currently have $4,200 saved. You\'re 44% of the way to your minimum goal.' },
    { role: 'user', text: 'What\'s the fastest way to get there?' },
    { role: 'ai', text: 'Redirecting your $180/month dining budget by 30% would add $54/month. At that rate, you\'d hit $9,600 in about 10 months. Want me to set up an automatic transfer?' },
  ];

  return (
    <div className="app-card p-5 w-full max-w-sm mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Chat header */}
      <div className="flex items-center gap-3 mb-4 pb-4" style={{ borderBottom: '1px solid rgba(24,37,27,0.08)' }}>
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center"
          style={{ background: 'var(--forest)' }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M12 2C8 2 4 6 4 10c0 5 8 12 8 12s8-7 8-12c0-4-4-8-8-8z" fill="#F5F3EB" opacity="0.9" />
          </svg>
        </div>
        <div>
          <p style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--forest)' }}>Verdant AI</p>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
            <p className="font-mono-label" style={{ color: 'var(--olive)', fontSize: '0.55rem' }}>Online</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="space-y-3 mb-4">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className="rounded-2xl px-3 py-2 max-w-[85%]"
              style={{
                background: msg.role === 'user' ? 'var(--forest)' : 'rgba(72,82,56,0.1)',
                color: msg.role === 'user' ? 'var(--ivory)' : 'var(--charcoal)',
                fontSize: '0.72rem',
                lineHeight: 1.5,
                borderRadius: msg.role === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
              }}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div
        className="flex items-center gap-2 rounded-full px-4 py-2"
        style={{ background: 'rgba(24,37,27,0.06)', border: '1px solid rgba(24,37,27,0.1)' }}
      >
        <p style={{ fontSize: '0.72rem', color: 'rgba(24,37,27,0.35)', flex: 1 }}>Ask anything about your finances…</p>
        <div
          className="w-6 h-6 rounded-full flex items-center justify-center"
          style={{ background: 'var(--forest)' }}
        >
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
}

// ─── Main Page ─────────────────────────────────────────────────────────────────
export default function HomePage() {
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHeroLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ background: 'var(--ivory)', color: 'var(--charcoal)' }}>
      <Nav />

      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex items-center"
        style={{
          background: 'linear-gradient(135deg, #0D1526 0%, #1A2340 40%, #1E2D52 70%, #0D1526 100%)',
          overflow: 'hidden',
        }}
      >
        {/* Animated grid background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(61,90,138,0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(61,90,138,0.15) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Glow orbs */}
        <div
          className="absolute"
          style={{
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(61,90,138,0.25) 0%, transparent 70%)',
            top: '-100px',
            right: '-100px',
          }}
        />
        <div
          className="absolute"
          style={{
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(107,143,191,0.15) 0%, transparent 70%)',
            bottom: '100px',
            left: '-50px',
          }}
        />

        {/* Content */}
        <div
          className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-32 pb-20"
          style={{
            opacity: heroLoaded ? 1 : 0,
            transform: heroLoaded ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 1s ease, transform 1s ease',
          }}
        >
          <div className="max-w-3xl">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full"
              style={{
                background: 'rgba(61,90,138,0.2)',
                border: '1px solid rgba(61,90,138,0.4)',
              }}
            >
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#6B8FBF' }} />
              <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.8rem', fontWeight: 500 }}>
                AI-Powered Financial Wellness
              </span>
            </div>

            {/* Headline */}
            <h1
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                color: 'white',
                marginBottom: '1.5rem',
              }}
            >
              Financial security
              <br />
              <span style={{ color: '#6B8FBF' }}>for every employee,</span>
              <br />
              at every stage.
            </h1>

            {/* Subheading */}
            <p
              style={{
                color: 'rgba(255,255,255,0.6)',
                fontSize: '1.15rem',
                lineHeight: 1.7,
                maxWidth: '520px',
                marginBottom: '2.5rem',
              }}
            >
              Verdant Finance is an AI-powered financial wellness platform that helps your workforce budget, plan, invest, and build lasting financial confidence.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/talk-to-sales"
                className="inline-flex items-center gap-2"
                style={{
                  background: '#3D5A8A',
                  color: 'white',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  padding: '0.875rem 2rem',
                  borderRadius: '10px',
                  transition: 'background 0.2s, transform 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#4A6FA0'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#3D5A8A'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                Get Started Free
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/for-employers"
                className="inline-flex items-center gap-2"
                style={{
                  color: 'rgba(255,255,255,0.8)',
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  padding: '0.875rem 2rem',
                  borderRadius: '10px',
                  border: '1px solid rgba(255,255,255,0.2)',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; }}
              >
                For Employers
              </Link>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-6 mt-12">
              {[
                { value: '10,000+', label: 'Employees served' },
                { value: '94%', label: 'Satisfaction rate' },
                { value: '$2.39', label: 'ROI per $1 invested' },
              ].map(stat => (
                <div key={stat.label}>
                  <p style={{ color: 'white', fontWeight: 700, fontSize: '1.25rem', lineHeight: 1 }}>{stat.value}</p>
                  <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.75rem', marginTop: '0.25rem' }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PILLARS BAR ── */}
      <section style={{ background: 'var(--forest)', borderTop: '1px solid rgba(245,243,235,0.08)' }}>
        <div className="max-w-5xl mx-auto px-6 py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                ),
                title: 'Privacy by design',
                desc: 'Employees control their data. Employers see only aggregate trends — never individual finances.',
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 5v6m0 4h.01" />
                  </svg>
                ),
                title: 'AI that actually helps',
                desc: 'Personalized guidance based on each employee\'s real financial situation — not generic advice.',
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                    <polyline points="16 7 22 7 22 13" />
                  </svg>
                ),
                title: 'Built for every employee',
                desc: 'From entry-level to executive — Verdant Finance meets employees where they are, at every income and life stage.',
              },
            ].map((pillar, i) => (
              <div key={i} className="flex items-start gap-4">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(245,243,235,0.1)', color: 'rgba(245,243,235,0.7)' }}
                >
                  {pillar.icon}
                </div>
                <div>
                  <p style={{ color: 'var(--ivory)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.35rem' }}>
                    {pillar.title}
                  </p>
                  <p style={{ color: 'rgba(245,243,235,0.5)', fontSize: '0.82rem', lineHeight: 1.6 }}>
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EDITORIAL STATEMENT ── */}
      <section className="py-28 px-6" style={{ background: 'var(--ivory)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-mono-label mb-8" style={{ color: 'var(--olive)', fontSize: '0.65rem' }}>
            Why Verdant Finance
          </p>
          <h2 className="headline-lg mb-8" style={{ color: 'var(--forest)' }}>
            <em className="italic-accent">Why</em> employers choose
            <br />
            Verdant Finance
          </h2>
          <p style={{ color: 'rgba(24,37,27,0.6)', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: '520px', margin: '0 auto' }}>
            Trusted by forward-thinking companies to deliver measurable impact in employee financial wellness.
          </p>
        </div>
      </section>

      {/* ── FEATURES (Origin-inspired) ── */}
      <section className="pb-28 px-6" style={{ background: 'var(--ivory)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                label: 'One Platform for Every Employee',
                body: 'Support every financial journey—budgeting, investing, planning, and more—with a single, unified platform. Verdant Finance meets employees where they are, no matter their income, location, or life stage.',
              },
              {
                label: 'Global Access and Equity',
                body: 'Offer financial support that scales. Verdant Finance is built to serve teams in 70+ countries and 80+ languages, with culturally relevant guidance and localized experiences for true financial equity.',
              },
              {
                label: 'Flexible Pricing, Proven ROI',
                body: 'Get financial wellness that works—and works for your budget. Our pricing model scales with your team, delivering up to $2.39 in ROI for every $1 invested.',
              },
              {
                label: 'Dedicated Success Team',
                body: 'From onboarding to rollout to engagement campaigns, our customer success team is with you every step of the way—ensuring your program drives real adoption and impact.',
              },
            ].map((f, i) => (
              <div
                key={i}
                className="card-feature p-8"
                style={{ minHeight: '280px' }}
              >
                <p
                  className="font-mono-label mb-6"
                  style={{ color: 'var(--olive)', fontSize: '0.6rem', lineHeight: 1.5 }}
                >
                  {f.label}
                </p>
                <p style={{ color: 'var(--charcoal)', fontSize: '0.95rem', lineHeight: 1.75 }}>
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-28 px-6" style={{ background: 'var(--white)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <p className="font-mono-label mb-6" style={{ color: 'var(--olive)', fontSize: '0.65rem' }}>
              How It Works
            </p>
            <h2 className="headline-lg" style={{ color: 'var(--forest)' }}>
              Your employees&apos; financial lives,
              <br />
              <em className="italic-accent">finally supported.</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                num: '01',
                title: 'Connect',
                desc: 'Employees securely link their financial accounts — bank, investments, loans — in minutes. They control exactly what they share.',
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                  </svg>
                ),
              },
              {
                num: '02',
                title: 'Understand',
                desc: 'Verdant AI analyzes spending patterns, debt, savings gaps, and opportunities — giving each employee a clear picture of where they stand.',
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35" />
                  </svg>
                ),
              },
              {
                num: '03',
                title: 'Plan',
                desc: 'The AI builds personalized financial plans — emergency funds, debt payoff, retirement, home buying — tailored to each employee\'s goals.',
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9 11l3 3L22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                ),
              },
              {
                num: '04',
                title: 'Grow',
                desc: 'Employees track progress, ask questions anytime, and build lasting financial habits — while employers see aggregate wellness metrics.',
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                    <polyline points="16 7 22 7 22 13" />
                  </svg>
                ),
              },
            ].map((step, i) => (
              <div key={step.num} className="relative">
                <div
                  className="w-10 h-10 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: 'rgba(24,37,27,0.08)', color: 'var(--forest)' }}
                >
                  {step.icon}
                </div>
                <p
                  className="font-mono-label mb-3"
                  style={{ color: 'rgba(24,37,27,0.25)', fontSize: '0.65rem' }}
                >
                  {step.num}
                </p>
                <h3
                  className="font-serif mb-3"
                  style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--forest)' }}
                >
                  {step.title}
                </h3>
                <p style={{ color: 'rgba(24,37,27,0.6)', fontSize: '0.88rem', lineHeight: 1.7 }}>
                  {step.desc}
                </p>
                {i < 3 && (
                  <div className="hidden md:block absolute top-5 -right-3 z-10">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(24,37,27,0.2)" strokeWidth="1.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APP UI DEMO ── */}
      <section className="py-28 px-6" style={{ background: 'var(--ivory)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="font-mono-label mb-6" style={{ color: 'var(--olive)', fontSize: '0.65rem' }}>
              The Experience
            </p>
            <h2 className="headline-lg" style={{ color: 'var(--forest)' }}>
              A financial advisor
              <br />
              <em className="italic-accent">in every pocket.</em>
            </h2>
            <p
              style={{
                color: 'rgba(24,37,27,0.55)',
                fontSize: '1rem',
                lineHeight: 1.8,
                maxWidth: '440px',
                margin: '1.5rem auto 0',
              }}
            >
              Employees get a personalized dashboard and an AI they can ask anything — anytime.
            </p>
          </div>

          {/* Two-column UI demo */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left: Dashboard */}
            <div>
              <p className="font-mono-label mb-4" style={{ color: 'var(--olive)', fontSize: '0.6rem' }}>
                Financial Dashboard
              </p>
              <p
                className="headline-md mb-6"
                style={{ color: 'var(--forest)', fontSize: '1.5rem' }}
              >
                A clear view of every financial goal
              </p>
              <p style={{ color: 'rgba(24,37,27,0.55)', fontSize: '0.9rem', lineHeight: 1.75, marginBottom: '2rem' }}>
                Employees see their net worth, savings progress, debt payoff timeline, and AI-generated insights — all in one calm, organized view.
              </p>
              <div className="animate-float">
                <DashboardMockup />
              </div>
            </div>

            {/* Right: AI Chat */}
            <div>
              <p className="font-mono-label mb-4" style={{ color: 'var(--olive)', fontSize: '0.6rem' }}>
                AI Financial Advisor
              </p>
              <p
                className="headline-md mb-6"
                style={{ color: 'var(--forest)', fontSize: '1.5rem' }}
              >
                Ask anything. Get real answers.
              </p>
              <p style={{ color: 'rgba(24,37,27,0.55)', fontSize: '0.9rem', lineHeight: 1.75, marginBottom: '2rem' }}>
                Verdant AI understands each employee&apos;s unique financial situation and gives personalized, actionable guidance — not generic advice.
              </p>
              <div className="animate-float-delay">
                <ChatMockup />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EMPLOYER SECTION ── */}
      <section className="py-28 px-6" style={{ background: 'var(--forest)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-mono-label mb-6" style={{ color: 'rgba(245,243,235,0.4)', fontSize: '0.65rem' }}>
                For Employers
              </p>
              <h2 className="headline-lg text-white mb-6">
                Better financial wellness.
                <br />
                <em className="italic-accent">Without more overhead.</em>
              </h2>
              <p style={{ color: 'rgba(245,243,235,0.65)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>
                Launch a financial wellness benefit your employees will actually use. Verdant Finance handles everything — from onboarding to engagement — while you see aggregate impact metrics.
              </p>
              <div className="space-y-5">
                {[
                  { title: 'Simple rollout', desc: 'Deploy to your entire workforce in days, not months.' },
                  { title: 'Privacy by design', desc: 'Employers see aggregate data only. Individual finances stay private.' },
                  { title: 'Measurable ROI', desc: 'Track engagement, satisfaction, and financial health improvements.' },
                ].map(item => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: 'rgba(245,243,235,0.15)', border: '1px solid rgba(245,243,235,0.2)' }}
                    >
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p style={{ color: 'var(--ivory)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.2rem' }}>{item.title}</p>
                      <p style={{ color: 'rgba(245,243,235,0.55)', fontSize: '0.85rem' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Link href="/for-employers" className="btn-primary">
                  Learn More for Employers
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Employer dashboard mockup */}
            <div>
              <div
                className="rounded-2xl p-6"
                style={{
                  background: 'rgba(245,243,235,0.06)',
                  border: '1px solid rgba(245,243,235,0.1)',
                }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="font-mono-label" style={{ color: 'rgba(245,243,235,0.4)', fontSize: '0.6rem' }}>
                      Employer Dashboard
                    </p>
                    <p style={{ color: 'var(--ivory)', fontWeight: 600, marginTop: '0.25rem' }}>Q3 Wellness Overview</p>
                  </div>
                  <div
                    className="px-3 py-1 rounded-full font-mono-label"
                    style={{ background: 'rgba(126,200,160,0.2)', color: '#7EC8A0', fontSize: '0.6rem' }}
                  >
                    Live
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    { label: 'Active Employees', value: '847', change: '+12%' },
                    { label: 'Avg. Financial Score', value: '72', change: '+8 pts' },
                    { label: 'Goals Set', value: '2,341', change: 'this quarter' },
                    { label: 'Program Engagement', value: '91%', change: '+5%' },
                  ].map(stat => (
                    <div
                      key={stat.label}
                      className="rounded-xl p-4"
                      style={{ background: 'rgba(245,243,235,0.05)' }}
                    >
                      <p className="font-mono-label mb-2" style={{ color: 'rgba(245,243,235,0.35)', fontSize: '0.55rem' }}>
                        {stat.label}
                      </p>
                      <p style={{ color: 'var(--ivory)', fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.02em' }}>
                        {stat.value}
                      </p>
                      <p style={{ color: '#7EC8A0', fontSize: '0.72rem', marginTop: '0.2rem' }}>{stat.change}</p>
                    </div>
                  ))}
                </div>

                <div
                  className="rounded-xl p-4 flex items-start gap-3"
                  style={{ background: 'rgba(126,200,160,0.1)', border: '1px solid rgba(126,200,160,0.2)' }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7EC8A0" strokeWidth="2" className="flex-shrink-0 mt-0.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  <p style={{ color: 'rgba(245,243,235,0.7)', fontSize: '0.75rem', lineHeight: 1.5 }}>
                    <strong style={{ color: 'var(--ivory)' }}>Privacy protected:</strong> Employers see aggregate wellness trends — never individual financial data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-28 px-6" style={{ background: 'var(--ivory)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-mono-label mb-8" style={{ color: 'var(--olive)', fontSize: '0.65rem' }}>
            Get Started
          </p>
          <h2 className="headline-lg mb-8" style={{ color: 'var(--forest)' }}>
            Give your employees
            <br />
            <em className="italic-accent">financial peace of mind.</em>
          </h2>
          <p
            style={{
              color: 'rgba(24,37,27,0.55)',
              fontSize: '1rem',
              lineHeight: 1.8,
              maxWidth: '420px',
              margin: '0 auto 2.5rem',
            }}
          >
            Join companies building financially secure, confident, and resilient workforces with Verdant Finance.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/talk-to-sales" className="btn-forest">
              Get Started
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/for-employers" className="btn-outline" style={{ color: 'var(--forest)', borderColor: 'rgba(24,37,27,0.3)' }}>
              For Employers
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
