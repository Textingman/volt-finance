'use client';

import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function ForEmployersPage() {
  return (
    <div style={{ background: 'var(--ivory)', color: 'var(--charcoal)' }}>
      <Nav />

      {/* ── HERO ── */}
      <section
        className="relative pt-48 pb-28 px-6"
        style={{ background: 'var(--forest)' }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-mono-label mb-8" style={{ color: 'rgba(245,243,235,0.45)', fontSize: '0.65rem' }}>
            For Employers
          </p>
          <h1 className="headline-xl text-white mb-8">
            <em className="italic-accent">Why</em> employers choose
            <br />
            Verdant Finance
          </h1>
          <p style={{ color: 'rgba(245,243,235,0.65)', fontSize: '1.1rem', lineHeight: 1.8, maxWidth: '520px', margin: '0 auto 2.5rem' }}>
            Trusted by forward-thinking companies to deliver measurable impact in employee financial wellness.
          </p>
          <Link href="/talk-to-sales" className="btn-primary">
            Get Started
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ── PILLARS ── */}
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
                desc: 'Employers see only aggregate wellness trends — never individual employee financial data.',
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                ),
                title: 'Built for every team',
                desc: 'From 10 employees to 10,000 — Verdant Finance scales with your organization and adapts to every workforce.',
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                    <polyline points="16 7 22 7 22 13" />
                  </svg>
                ),
                title: 'Measurable impact',
                desc: 'Track engagement, financial wellness scores, and program adoption — with clear reporting for leadership.',
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

      {/* ── 4 FEATURES (Origin-inspired) ── */}
      <section className="py-28 px-6" style={{ background: 'var(--ivory)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-mono-label mb-6" style={{ color: 'var(--olive)', fontSize: '0.65rem' }}>
              Why Verdant Finance
            </p>
            <h2 className="headline-lg" style={{ color: 'var(--forest)' }}>
              Built for the way
              <br />
              <em className="italic-accent">modern companies work.</em>
            </h2>
          </div>

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
              <div key={i} className="card-feature p-8" style={{ minHeight: '280px' }}>
                <p className="font-mono-label mb-6" style={{ color: 'var(--olive)', fontSize: '0.6rem', lineHeight: 1.5 }}>
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

      {/* ── HOW IT WORKS FOR EMPLOYERS ── */}
      <section className="py-28 px-6" style={{ background: 'var(--white)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <p className="font-mono-label mb-6" style={{ color: 'var(--olive)', fontSize: '0.65rem' }}>
              Simple Rollout
            </p>
            <h2 className="headline-lg" style={{ color: 'var(--forest)' }}>
              Launch in days,
              <br />
              <em className="italic-accent">not months.</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                num: '01',
                title: 'Set Up Your Program',
                desc: 'Work with our success team to configure your financial wellness program. Choose your benefit tier, set up your company profile, and define your rollout plan.',
              },
              {
                num: '02',
                title: 'Invite Your Employees',
                desc: 'Send a simple invite link or integrate with your existing HR systems. Employees sign up in minutes and immediately access their personalized financial dashboard.',
              },
              {
                num: '03',
                title: 'Track Impact',
                desc: 'Monitor aggregate engagement, satisfaction scores, and financial wellness trends from your employer dashboard — while individual employee data stays completely private.',
              },
            ].map((step, i) => (
              <div key={step.num}>
                <p className="font-mono-label mb-4" style={{ color: 'rgba(24,37,27,0.25)', fontSize: '0.65rem' }}>
                  {step.num}
                </p>
                <h3 className="font-serif mb-3" style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--forest)' }}>
                  {step.title}
                </h3>
                <p style={{ color: 'rgba(24,37,27,0.6)', fontSize: '0.9rem', lineHeight: 1.75 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EMPLOYER DASHBOARD ── */}
      <section className="py-28 px-6" style={{ background: 'var(--forest)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-mono-label mb-6" style={{ color: 'rgba(245,243,235,0.4)', fontSize: '0.65rem' }}>
                Employer Dashboard
              </p>
              <h2 className="headline-lg text-white mb-6">
                Measure what
                <br />
                <em className="italic-accent">actually matters.</em>
              </h2>
              <p style={{ color: 'rgba(245,243,235,0.65)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>
                See aggregate financial wellness trends across your workforce. Understand program engagement, track improvement over time, and demonstrate ROI to leadership — all without ever seeing individual employee data.
              </p>
              <div className="space-y-4">
                {[
                  'Aggregate financial wellness scores',
                  'Program engagement and adoption rates',
                  'Goal completion trends',
                  'Satisfaction and NPS tracking',
                  'ROI reporting for leadership',
                ].map(item => (
                  <div key={item} className="flex items-center gap-3">
                    <div
                      className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(245,243,235,0.15)' }}
                    >
                      <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p style={{ color: 'rgba(245,243,235,0.75)', fontSize: '0.9rem' }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Dashboard mockup */}
            <div
              className="rounded-2xl p-6"
              style={{ background: 'rgba(245,243,235,0.06)', border: '1px solid rgba(245,243,235,0.1)' }}
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
                  <div key={stat.label} className="rounded-xl p-4" style={{ background: 'rgba(245,243,235,0.05)' }}>
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
      </section>

      {/* ── CTA ── */}
      <section className="py-28 px-6" style={{ background: 'var(--ivory)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-mono-label mb-8" style={{ color: 'var(--olive)', fontSize: '0.65rem' }}>
            Get Started
          </p>
          <h2 className="headline-lg mb-8" style={{ color: 'var(--forest)' }}>
            Build a financially
            <br />
            <em className="italic-accent">resilient workforce.</em>
          </h2>
          <p style={{ color: 'rgba(24,37,27,0.55)', fontSize: '1rem', lineHeight: 1.8, maxWidth: '420px', margin: '0 auto 2.5rem' }}>
            Join companies delivering measurable financial wellness impact with Verdant Finance.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/talk-to-sales" className="btn-forest">
              Get Started
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/product" className="btn-outline" style={{ color: 'var(--forest)', borderColor: 'rgba(24,37,27,0.3)' }}>
              See the Product
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
