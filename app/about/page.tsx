import type { Metadata } from 'next';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About — Jiibe',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{ background: '#faf9f7' }}>
      <Nav />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
            style={{ background: 'rgba(26,71,49,0.08)', color: '#1a4731', border: '1px solid rgba(26,71,49,0.15)' }}>
            About Jiibe
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight mb-6">
            About Jiibe
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Employer-funded lifestyle benefits, chosen by employees.
          </p>
        </div>
      </section>

      {/* What we do */}
      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What we do</h2>
          <p className="text-gray-600 leading-relaxed">
            Jiibe is an employer-funded lifestyle-benefits marketplace. HR sets a monthly per-employee benefits budget, and employees choose from a curated catalog of lifestyle benefits across 15 categories, redeeming them directly in their Jiibe account. HR sees aggregate participation only — never individual employee selections.
          </p>
        </div>
      </section>

      {/* What Jiibe is — and isn't */}
      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">What Jiibe is — and isn&apos;t</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl" style={{ background: 'rgba(26,71,49,0.06)', border: '1px solid rgba(26,71,49,0.15)' }}>
              <p className="text-sm font-semibold text-green-800 mb-3">✅ Jiibe IS</p>
              <ul className="text-sm text-green-800 space-y-2">
                <li>• Lifestyle-benefits software for employers</li>
                <li>• A curated catalog across 15 categories</li>
                <li>• Employer-funded monthly budgets</li>
                <li>• Aggregate-only reporting for HR</li>
                <li>• Transactional account alerts</li>
              </ul>
            </div>
            <div className="p-6 rounded-2xl" style={{ background: 'rgba(239,68,68,0.05)', border: '1px solid rgba(239,68,68,0.2)' }}>
              <p className="text-sm font-semibold text-red-800 mb-3">❌ Jiibe IS NOT</p>
              <ul className="text-sm text-red-700 space-y-2">
                <li>• A bank, lender, or insurer</li>
                <li>• A healthcare provider</li>
                <li>• A consumer or public signup service</li>
                <li>• Affiliated with or endorsed by third-party brands</li>
                <li>• A sender of marketing texts</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">How it works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: '1', title: 'HR sets a budget', desc: 'Employers set a monthly per-employee benefits budget.' },
              { step: '2', title: 'Employees choose and redeem', desc: 'Employees choose benefits and redeem them in their Jiibe account.' },
              { step: '3', title: 'HR sees aggregate participation', desc: 'HR sees aggregate participation — never individual selections.' },
            ].map(item => (
              <div key={item.step} className="glass-card p-6 text-center">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white mb-4 mx-auto"
                  style={{ background: '#1a4731' }}>
                  {item.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who can use Jiibe */}
      <section className="pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Who can use Jiibe</h2>
          <p className="text-gray-600 leading-relaxed">
            Only employees of companies enrolled in a Jiibe benefits program, using a Company ID from their employer.
          </p>
        </div>
      </section>

      {/* Text alerts */}
      <section className="pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Text alerts</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Jiibe&apos;s SMS program is optional and opt-in, sending only transactional account alerts — never marketing or promotional texts:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
            <li>Account registration and onboarding confirmations</li>
            <li>Benefit redemption confirmations and access code notices</li>
            <li>Monthly budget reminders and reset notices</li>
            <li>Account security and sign-in alerts</li>
          </ul>
          <p className="text-gray-600 leading-relaxed">
            Learn more on our <Link href="/sms" className="font-semibold underline" style={{ color: '#1a4731' }}>SMS Program</Link> page, or review the SMS disclosures in our <Link href="/terms#sms" className="font-semibold underline" style={{ color: '#1a4731' }}>Terms of Service</Link> and <Link href="/privacy" className="font-semibold underline" style={{ color: '#1a4731' }}>Privacy Policy</Link>.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="glass-card p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact</h2>
            <div className="space-y-2">
              <p className="text-gray-600"><strong>Jiibe LLC</strong></p>
              <p className="text-gray-600">213 N Market Street #1150, Wilmington, DE 19801</p>
              <p className="text-gray-600">Phone: <a href="tel:+13023024972" className="font-semibold hover:underline" style={{ color: '#1a4731' }}>(302) 302-4972</a></p>
              <p className="text-gray-600">Email: <a href="mailto:support@jiibe.com" className="font-semibold hover:underline" style={{ color: '#1a4731' }}>support@jiibe.com</a></p>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs text-gray-400 text-center leading-relaxed">
            Available benefits vary by employer program. Jiibe is not a bank, lender, insurer, or healthcare provider. Third-party brand names are trademarks of their respective owners; Jiibe is not affiliated with or endorsed by any third-party brand.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
