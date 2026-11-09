import type { Metadata } from 'next';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'For HR Teams — Jiibe',
};

export default function ForHRPage() {
  return (
    <div className="min-h-screen" style={{ background: '#faf9f7' }}>
      <Nav />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
                style={{ background: 'rgba(26,71,49,0.08)', color: '#1a4731', border: '1px solid rgba(26,71,49,0.15)' }}>
                For HR Teams
              </div>
              <h1 className="text-5xl font-bold text-gray-900 tracking-tight mb-6">
                Set a budget, let employees choose, and see aggregate participation
                <span style={{ display: 'block', background: 'linear-gradient(135deg, #1a4731, #2d6a4f, #40916c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  without managing a dozen vendors.
                </span>
              </h1>
              <p className="text-xl text-gray-500 mb-8 leading-relaxed">
                Stop managing complicated benefit packages that half your team ignores. Jiibe gives every employee a monthly benefits budget to spend on the benefits they actually want.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/demo"
                  className="px-8 py-4 text-base font-semibold text-white rounded-2xl shadow-lg hover:opacity-90 transition-all text-center"
                  style={{ background: 'linear-gradient(135deg, #1a4731, #2d6a4f)' }}>
                  Book a Demo
                </Link>
                <Link href="/pricing"
                  className="px-8 py-4 text-base font-semibold text-gray-700 rounded-2xl border border-gray-200 bg-white hover:bg-gray-50 transition-all text-center">
                  See Pricing →
                </Link>
              </div>
            </div>
            <div className="glass-card p-8">
              <p className="text-xs text-gray-400 uppercase tracking-wider font-medium mb-6">HR Dashboard <span className="text-gray-300 normal-case">· Sample dashboard</span> — October 2026</p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { label: 'Active Employees', value: '247', change: '+12 this month', icon: '👥' },
                  { label: 'Participation', value: 'Aggregate', change: 'View in dashboard', icon: '📈' },
                  { label: 'Categories Used', value: '15', change: 'Full catalog', icon: '📦' },
                  { label: 'Budget Utilized', value: '$34.2K', change: 'of $37K budget', icon: '💰' },
                ].map(stat => (
                  <div key={stat.label} className="p-4 rounded-2xl" style={{ background: 'rgba(0,0,0,0.03)' }}>
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="text-sm">{stat.icon}</span>
                      <p className="text-xs text-gray-400">{stat.label}</p>
                    </div>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-xs text-green-600 font-medium mt-1">{stat.change}</p>
                  </div>
                ))}
              </div>
              <div className="p-4 rounded-xl" style={{ background: 'rgba(26,71,49,0.06)', border: '1px solid rgba(26,71,49,0.12)' }}>
                <p className="text-xs font-semibold text-green-800">🏆 Top category this month: Food delivery (68% of employees)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why HR Teams Love It */}
      <section className="py-24 px-6 section-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why HR teams choose Jiibe</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              We built Jiibe to solve the problems HR teams actually face with traditional benefits.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                problem: 'The old way',
                solution: 'The Jiibe way',
                old: 'Spend weeks selecting benefit packages. Negotiate with vendors. Manage annual enrollment windows. Deal with employees who never use their benefits.',
                new: 'Set a monthly budget quickly. Employees choose from a curated catalog across 15 categories. No enrollment windows.',
                icon: '⚡',
              },
              {
                problem: 'The old way',
                solution: 'The Jiibe way',
                old: 'Pay for benefits whether employees use them or not. Complicated invoicing. Hard to track ROI. Employees complain about benefits they don\'t want.',
                new: 'Only pay for what employees actually redeem. Unused budget rolls back. Aggregate dashboards for reporting.',
                icon: '💰',
              },
              {
                problem: 'The old way',
                solution: 'The Jiibe way',
                old: 'Manual HRIS updates when employees join or leave. Separate logins for each benefit vendor. Hours spent on benefits administration every month.',
                new: 'Automatic HRIS sync. One platform instead of many vendor contracts. Benefits administration takes minutes, not hours.',
                icon: '🔗',
              },
            ].map((item, i) => (
              <div key={i} className="glass-card p-6">
                <span className="text-3xl mb-4 block">{item.icon}</span>
                <div className="mb-4">
                  <p className="text-xs font-semibold text-red-500 uppercase tracking-wider mb-2">❌ {item.problem}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.old}</p>
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#1a4731' }}>✅ {item.solution}</p>
                  <p className="text-sm text-gray-700 leading-relaxed font-medium">{item.new}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Setup Process */}
      <section className="py-24 px-6 section-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Quick to set up. Manage in seconds.</h2>
              <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                We designed Jiibe for HR teams who are already stretched thin. Setup is fast, management is minimal, and employees handle the rest themselves.
              </p>
              <div className="space-y-5">
                {[
                  { step: '1', title: 'Connect your HRIS', desc: 'We connect with your HRIS. Employees are automatically enrolled.' },
                  { step: '2', title: 'Set your budget', desc: 'Choose a monthly per-employee budget. You can set different amounts for different employee groups.' },
                  { step: '3', title: 'Invite your team', desc: 'Employees receive an email with instructions to access their benefits.' },
                  { step: '4', title: 'Employees choose benefits', desc: 'Employees choose their own benefits and redeem them in their Jiibe account.' },
                ].map(item => (
                  <div key={item.step} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                      style={{ background: 'linear-gradient(135deg, #1a4731, #2d6a4f)' }}>
                      {item.step}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">{item.title}</p>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-card p-8">
              <p className="text-xs text-gray-400 uppercase tracking-wider font-medium mb-6">Admin Setup Checklist <span className="text-gray-300 normal-case">· Sample</span></p>
              <div className="space-y-4">
                {[
                  { label: 'Connect your HRIS', done: true },
                  { label: 'Set monthly budget ($150/employee)', done: true },
                  { label: 'Configure employee groups', done: true },
                  { label: 'Send employee invitations', done: true },
                  { label: 'Employees activate accounts', done: false },
                ].map(item => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${item.done ? 'text-white' : 'border-2 border-gray-200 text-gray-400'}`}
                      style={item.done ? { background: '#1a4731' } : {}}>
                      {item.done ? '✓' : ''}
                    </div>
                    <span className={`text-sm ${item.done ? 'text-gray-900 font-medium' : 'text-gray-400'}`}>{item.label}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 rounded-xl" style={{ background: 'rgba(26,71,49,0.06)', border: '1px solid rgba(26,71,49,0.12)' }}>
                <p className="text-sm font-semibold text-green-800">⚡ Quick setup</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature cards */}
      <section className="py-24 px-6 section-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Know exactly what&apos;s working</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Aggregate dashboards give you the data you need to optimize your benefits program.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Employees pick what they\'ll actually use', desc: 'A curated catalog across 15 categories means employees choose benefits that fit their life.' },
              { title: 'Pay only for what\'s redeemed', desc: 'Unused monthly budget rolls back to the employer at the end of the month.' },
              { title: 'Different budgets for different groups', desc: 'Set different monthly budgets for different employee groups.' },
              { title: 'Aggregate-only reporting', desc: 'HR sees aggregate participation — never individual employee selections.' },
            ].map(card => (
              <div key={card.title} className="glass-card p-6">
                <h3 className="font-semibold text-gray-900 text-sm mb-2">{card.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6" style={{ background: '#1a2e1f' }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to transform your benefits program?</h2>
          <p className="text-gray-400 mb-8 text-lg">Book a 20-minute demo. We&apos;ll show you exactly how Jiibe works and answer all your questions.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/demo"
              className="px-8 py-4 text-base font-semibold text-gray-900 rounded-2xl bg-white hover:opacity-90 transition-all">
              Book a Demo
            </Link>
            <Link href="/pricing"
              className="px-8 py-4 text-base font-semibold text-white rounded-2xl transition-all hover:bg-white/10"
              style={{ border: '1px solid rgba(255,255,255,0.3)' }}>
              See Pricing →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
