'use client';

import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

export default function PrivacyPage() {
  return (
    <div style={{ background: 'var(--ivory)', color: 'var(--charcoal)' }}>
      <Nav />

      {/* ── HERO ── */}
      <section className="pt-40 pb-20 px-6" style={{ background: 'var(--forest)' }}>
        <div className="max-w-4xl mx-auto">
          <p className="font-mono-label mb-6" style={{ color: 'rgba(245,243,235,0.45)', fontSize: '0.65rem' }}>
            Legal
          </p>
          <h1 className="headline-xl text-white mb-4" style={{ maxWidth: '560px' }}>
            Privacy Policy
          </h1>
          <p style={{ color: 'rgba(245,243,235,0.5)', fontSize: '0.85rem' }}>
            Last Updated: {today}
          </p>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className="py-20 px-6" style={{ background: 'var(--ivory)' }}>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-10" style={{ fontSize: '0.92rem', lineHeight: 1.8, color: 'rgba(24,37,27,0.75)' }}>

            {/* Intro */}
            <div>
              <p>
                Verdant Finance ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered financial wellness platform and website at <strong>verdantfinance.com</strong>. By using our service, you agree to the collection and use of information in accordance with this policy.
              </p>
            </div>

            {/* 1. Information We Collect */}
            <div>
              <h2 className="font-serif mb-4" style={{ fontSize: '1.3rem', fontWeight: 600, color: 'var(--forest)' }}>
                1. Information We Collect
              </h2>
              <p className="mb-3">When you create an account or use our service, we may collect:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Full name and work email address</li>
                <li>Employer ID (provided by your employer or HR team)</li>
                <li>Mobile phone number (if you opt in to SMS notifications)</li>
                <li>Financial account information you choose to connect (e.g., bank accounts, investment accounts)</li>
                <li>Financial goals, spending categories, and preferences you set within the platform</li>
                <li>Questions and conversations you have with Verdant AI</li>
                <li>SMS opt-in consent preferences</li>
                <li>Usage data and device information (browser type, IP address, pages visited)</li>
              </ul>
            </div>

            {/* 2. SMS Messaging */}
            <div>
              <h2 className="font-serif mb-4" style={{ fontSize: '1.3rem', fontWeight: 600, color: 'var(--forest)' }}>
                2. SMS Messaging
              </h2>
              <p className="mb-3">
                Verdant Finance uses SMS messaging to deliver AI-powered financial alerts and account notifications to employees who opt in. The following terms apply to our SMS program:
              </p>

              <div className="space-y-4">
                <div>
                  <p className="font-mono-label mb-2" style={{ color: 'var(--olive)', fontSize: '0.6rem' }}>Program Description</p>
                  <p>
                    Verdant Finance sends two types of SMS messages:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li><strong>Transactional Account Notifications:</strong> Personalized financial insights from Verdant AI, goal milestone alerts, spending summaries, budget reminders, and account updates related to your financial wellness program.</li>
                    <li><strong>Promotional Marketing Messages:</strong> Special offers, product updates, and exclusive content related to Verdant Finance's financial wellness services.</li>
                  </ul>
                </div>

                <div>
                  <p className="font-mono-label mb-2" style={{ color: 'var(--olive)', fontSize: '0.6rem' }}>Opt-In</p>
                  <p>
                    You may opt in to receive SMS messages during the employee onboarding process by checking the applicable consent boxes. Opting in is entirely optional and is not required to use Verdant Finance's financial wellness platform. Consent is not a condition of purchasing any products or services.
                  </p>
                </div>

                <div>
                  <p className="font-mono-label mb-2" style={{ color: 'var(--olive)', fontSize: '0.6rem' }}>Message Frequency</p>
                  <p>
                    Message frequency varies based on your financial activity, goals, and account settings. You may receive up to several messages per week depending on your preferences and financial events.
                  </p>
                </div>

                <div>
                  <p className="font-mono-label mb-2" style={{ color: 'var(--olive)', fontSize: '0.6rem' }}>Opt-Out</p>
                  <p>
                    You may opt out of SMS messages at any time by replying <strong>STOP</strong> to any message. You will receive a confirmation and no further messages will be sent. To re-enroll, reply <strong>START</strong>.
                  </p>
                </div>

                <div>
                  <p className="font-mono-label mb-2" style={{ color: 'var(--olive)', fontSize: '0.6rem' }}>Help</p>
                  <p>
                    Reply <strong>HELP</strong> to any message for assistance, or contact us at <a href="mailto:support@verdantfinance.com" style={{ color: 'var(--olive)', textDecoration: 'underline' }}>support@verdantfinance.com</a>.
                  </p>
                </div>

                <div>
                  <p className="font-mono-label mb-2" style={{ color: 'var(--olive)', fontSize: '0.6rem' }}>Rates</p>
                  <p>
                    Message and data rates may apply. Check with your mobile carrier for details.
                  </p>
                </div>

                <div
                  className="rounded-xl p-4"
                  style={{ background: 'rgba(72,82,56,0.06)', border: '1px solid rgba(72,82,56,0.15)' }}
                >
                  <p style={{ fontWeight: 600, color: 'var(--forest)', marginBottom: '0.5rem' }}>
                    No Mobile Data Sharing
                  </p>
                  <p>
                    <strong>No mobile information will be shared with or sold to third parties for marketing or promotional purposes.</strong> Your mobile number is used solely to deliver the SMS messages you have opted into through Verdant Finance.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. How We Use Your Information */}
            <div>
              <h2 className="font-serif mb-4" style={{ fontSize: '1.3rem', fontWeight: 600, color: 'var(--forest)' }}>
                3. How We Use Your Information
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To create and manage your Verdant Finance account</li>
                <li>To connect your account to your employer's financial wellness program</li>
                <li>To provide personalized AI-powered financial guidance and insights</li>
                <li>To send SMS messages you have opted into (financial alerts, account notifications, or promotional messages)</li>
                <li>To track your financial goals and progress</li>
                <li>To provide aggregate, anonymized wellness metrics to your employer (never individual financial data)</li>
                <li>To improve our platform and AI capabilities</li>
                <li>To comply with legal obligations</li>
              </ul>
            </div>

            {/* 4. Employer Data Sharing */}
            <div>
              <h2 className="font-serif mb-4" style={{ fontSize: '1.3rem', fontWeight: 600, color: 'var(--forest)' }}>
                4. Employer Data Sharing
              </h2>
              <p className="mb-3">
                Verdant Finance is designed with employee privacy at its core. Your employer will never see your individual financial data, account balances, spending details, or conversations with Verdant AI.
              </p>
              <p>
                Employers receive only <strong>aggregate, anonymized wellness metrics</strong> — such as overall program engagement rates, average financial wellness scores across the workforce, and goal completion trends. These metrics cannot be traced back to any individual employee.
              </p>
            </div>

            {/* 5. Data Security */}
            <div>
              <h2 className="font-serif mb-4" style={{ fontSize: '1.3rem', fontWeight: 600, color: 'var(--forest)' }}>
                5. Data Security
              </h2>
              <p>
                We implement industry-standard security measures to protect your information, including encryption in transit and at rest, access controls, and regular security reviews. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            {/* 6. Your Rights */}
            <div>
              <h2 className="font-serif mb-4" style={{ fontSize: '1.3rem', fontWeight: 600, color: 'var(--forest)' }}>
                6. Your Rights
              </h2>
              <p className="mb-3">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your account and associated data</li>
                <li>Opt out of SMS communications at any time by replying STOP</li>
                <li>Disconnect financial accounts you have connected to the platform</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, contact us at <a href="mailto:support@verdantfinance.com" style={{ color: 'var(--olive)', textDecoration: 'underline' }}>support@verdantfinance.com</a>.
              </p>
            </div>

            {/* 7. Contact */}
            <div>
              <h2 className="font-serif mb-4" style={{ fontSize: '1.3rem', fontWeight: 600, color: 'var(--forest)' }}>
                7. Contact Us
              </h2>
              <p>
                If you have questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="mt-3 space-y-1">
                <p><strong>Verdant Finance</strong></p>
                <p>Email: <a href="mailto:support@verdantfinance.com" style={{ color: 'var(--olive)', textDecoration: 'underline' }}>support@verdantfinance.com</a></p>
                <p>Website: <a href="https://verdantfinance.com" style={{ color: 'var(--olive)', textDecoration: 'underline' }}>verdantfinance.com</a></p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
