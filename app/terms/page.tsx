'use client';

import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

export default function TermsPage() {
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
            Terms of Service
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
                These Terms of Service ("Terms") govern your access to and use of Verdant Finance's AI-powered financial wellness platform, website at <strong>verdantfinance.com</strong>, and related services (collectively, the "Service"). By accessing or using the Service, you agree to be bound by these Terms. If you do not agree, you may not use the Service.
              </p>
            </div>

            {/* 1. Description of Service */}
            <div>
              <h2 className="font-serif mb-4" style={{ fontSize: '1.3rem', fontWeight: 600, color: 'var(--forest)' }}>
                1. Description of Service
              </h2>
              <p className="mb-3">
                Verdant Finance provides an AI-powered financial wellness platform designed for employees participating in employer-sponsored financial wellness programs. The Service includes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>A personalized financial dashboard showing net worth, goals, and spending insights</li>
                <li>Verdant AI — an AI financial advisor that provides personalized guidance based on your financial situation</li>
                <li>Goal planning and tracking tools for emergency funds, debt payoff, retirement, and more</li>
                <li>SMS-based financial alerts and notifications (for users who opt in)</li>
                <li>Employer-connected wellness program participation</li>
              </ul>
              <p className="mt-3">
                The Service is intended for informational and educational purposes. Verdant AI does not constitute licensed financial, investment, legal, or tax advice. Always consult a qualified professional for decisions specific to your financial situation.
              </p>
            </div>

            {/* 2. Eligibility */}
            <div>
              <h2 className="font-serif mb-4" style={{ fontSize: '1.3rem', fontWeight: 600, color: 'var(--forest)' }}>
                2. Eligibility
              </h2>
              <p>
                To use the Service, you must be at least 18 years of age and an employee of an organization that has enrolled in Verdant Finance's employer financial wellness program. You must have a valid Employer ID provided by your HR or benefits team to create an account.
              </p>
            </div>

            {/* 3. Account Registration */}
            <div>
              <h2 className="font-serif mb-4" style={{ fontSize: '1.3rem', fontWeight: 600, color: 'var(--forest)' }}>
                3. Account Registration
              </h2>
              <p className="mb-3">
                To access the Service, you must create an account by providing accurate and complete information, including your name, work email address, Employer ID, and mobile phone number (if opting into SMS). You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account.
              </p>
              <p>
                You agree to notify us immediately at <a href="mailto:support@verdantfinance.com" style={{ color: 'var(--olive)', textDecoration: 'underline' }}>support@verdantfinance.com</a> if you suspect unauthorized access to your account.
              </p>
            </div>

            {/* 4. SMS Communications */}
            <div>
              <h2 className="font-serif mb-4" style={{ fontSize: '1.3rem', fontWeight: 600, color: 'var(--forest)' }}>
                4. SMS Communications
              </h2>
              <p className="mb-3">
                Verdant Finance offers optional SMS messaging to deliver AI-powered financial alerts and account notifications. By opting in to SMS communications during onboarding, you agree to the following:
              </p>

              <div className="space-y-4">
                <div>
                  <p className="font-mono-label mb-2" style={{ color: 'var(--olive)', fontSize: '0.6rem' }}>Types of Messages</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><strong>Transactional Account Notifications:</strong> Personalized financial insights from Verdant AI, goal milestone alerts, spending summaries, budget reminders, and account updates.</li>
                    <li><strong>Promotional Marketing Messages:</strong> Special offers, product updates, and exclusive content related to Verdant Finance's financial wellness services.</li>
                  </ul>
                </div>

                <div>
                  <p className="font-mono-label mb-2" style={{ color: 'var(--olive)', fontSize: '0.6rem' }}>Consent</p>
                  <p>
                    Opting in to SMS is entirely voluntary and is not required to use the Service. Consent is not a condition of purchasing any products or services. You may opt in to one or both message types independently.
                  </p>
                </div>

                <div>
                  <p className="font-mono-label mb-2" style={{ color: 'var(--olive)', fontSize: '0.6rem' }}>Opt-Out</p>
                  <p>
                    You may opt out of SMS messages at any time by replying <strong>STOP</strong> to any message. You will receive a one-time confirmation and no further messages will be sent. To re-enroll, reply <strong>START</strong>.
                  </p>
                </div>

                <div>
                  <p className="font-mono-label mb-2" style={{ color: 'var(--olive)', fontSize: '0.6rem' }}>Help</p>
                  <p>
                    Reply <strong>HELP</strong> to any message for assistance, or contact us at <a href="mailto:support@verdantfinance.com" style={{ color: 'var(--olive)', textDecoration: 'underline' }}>support@verdantfinance.com</a>.
                  </p>
                </div>

                <div>
                  <p className="font-mono-label mb-2" style={{ color: 'var(--olive)', fontSize: '0.6rem' }}>Rates & Frequency</p>
                  <p>
                    Standard message and data rates may apply. Message frequency varies based on your financial activity and account settings.
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
                    No mobile information will be shared with or sold to third parties for marketing or promotional purposes. Your mobile number is used solely to deliver the SMS messages you have opted into.
                  </p>
                </div>
              </div>
            </div>

            {/* 5. Financial Information Disclaimer */}
            <div>
              <h2 className="font-serif mb-4" style={{ fontSize: '1.3rem', fontWeight: 600, color: 'var(--forest)' }}>
                5. Financial Information Disclaimer
              </h2>
              <p className="mb-3">
                Verdant AI provides personalized financial insights and guidance based on the information you provide. This guidance is for informational and educational purposes only and does not constitute:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Licensed financial planning or investment advice</li>
                <li>Legal or tax advice</li>
                <li>A guarantee of financial outcomes</li>
              </ul>
              <p className="mt-3">
                You should consult a licensed financial advisor, attorney, or tax professional before making significant financial decisions. Verdant Finance is not responsible for any financial decisions you make based on information provided through the Service.
              </p>
            </div>

            {/* 6. Privacy */}
            <div>
              <h2 className="font-serif mb-4" style={{ fontSize: '1.3rem', fontWeight: 600, color: 'var(--forest)' }}>
                6. Privacy
              </h2>
              <p>
                Your use of the Service is also governed by our <Link href="/privacy" style={{ color: 'var(--olive)', textDecoration: 'underline' }}>Privacy Policy</Link>, which is incorporated into these Terms by reference. Your employer will never have access to your individual financial data — only aggregate, anonymized wellness metrics.
              </p>
            </div>

            {/* 7. Acceptable Use */}
            <div>
              <h2 className="font-serif mb-4" style={{ fontSize: '1.3rem', fontWeight: 600, color: 'var(--forest)' }}>
                7. Acceptable Use
              </h2>
              <p className="mb-3">You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the Service for any unlawful purpose</li>
                <li>Attempt to gain unauthorized access to any part of the Service</li>
                <li>Provide false or misleading information during registration</li>
                <li>Use another person's Employer ID or account credentials</li>
                <li>Interfere with or disrupt the integrity or performance of the Service</li>
              </ul>
            </div>

            {/* 8. Termination */}
            <div>
              <h2 className="font-serif mb-4" style={{ fontSize: '1.3rem', fontWeight: 600, color: 'var(--forest)' }}>
                8. Termination
              </h2>
              <p>
                We reserve the right to suspend or terminate your account at any time for violation of these Terms or at the request of your employer. You may also delete your account at any time by contacting us at <a href="mailto:support@verdantfinance.com" style={{ color: 'var(--olive)', textDecoration: 'underline' }}>support@verdantfinance.com</a>.
              </p>
            </div>

            {/* 9. Limitation of Liability */}
            <div>
              <h2 className="font-serif mb-4" style={{ fontSize: '1.3rem', fontWeight: 600, color: 'var(--forest)' }}>
                9. Limitation of Liability
              </h2>
              <p>
                To the fullest extent permitted by law, Verdant Finance shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use the Service, including any financial decisions made based on information provided by Verdant AI.
              </p>
            </div>

            {/* 10. Changes to Terms */}
            <div>
              <h2 className="font-serif mb-4" style={{ fontSize: '1.3rem', fontWeight: 600, color: 'var(--forest)' }}>
                10. Changes to These Terms
              </h2>
              <p>
                We may update these Terms from time to time. We will notify you of material changes by updating the "Last Updated" date at the top of this page. Continued use of the Service after changes constitutes acceptance of the updated Terms.
              </p>
            </div>

            {/* 11. Contact */}
            <div>
              <h2 className="font-serif mb-4" style={{ fontSize: '1.3rem', fontWeight: 600, color: 'var(--forest)' }}>
                11. Contact Us
              </h2>
              <p>
                For questions about these Terms, please contact us:
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
