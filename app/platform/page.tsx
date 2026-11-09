import type { Metadata } from 'next';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Link from 'next/link';
import { CategoryIcon } from '../components/BrandLogo';

export const metadata: Metadata = {
  title: 'Platform — Jiibe',
};

export default function PlatformPage() {
  return (
    <div className="min-h-screen" style={{ background: '#faf9f7' }}>
      <Nav />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
            style={{ background: 'rgba(26,71,49,0.08)', color: '#1a4731', border: '1px solid rgba(26,71,49,0.15)' }}>
            How It Works
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight mb-6">
            The simplest benefits platform<br />
            <span style={{ background: 'linear-gradient(135deg, #1a4731, #2d6a4f, #40916c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              your team will actually use.
            </span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Employees browse a curated catalog organized by category, redeem in their account, and can change selections every month.
          </p>
        </div>
      </section>

      {/* Product Mockup — Employee View */}
      <section className="py-20 px-6 section-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#1a4731' }}>Employee Experience</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">A marketplace employees actually want to use.</h2>
              <p className="text-lg text-gray-500 mb-6 leading-relaxed">
                Employees log in, browse the catalog organized by category, and redeem what fits their life in their Jiibe account.
              </p>
              <div className="space-y-3">
                {[
                  'Browse by category — streaming, food, travel, wellness, and more',
                  'See your monthly balance and remaining budget at a glance',
                  'Select a benefit and Jiibe confirms it in your account',
                  'Change selections every month with no lock-in',
                ].map(item => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: 'rgba(26,71,49,0.1)' }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#1a4731" strokeWidth="3">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Mockup */}
            <div className="glass-card p-6">
              {/* App header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">Your Benefits</p>
                  <p className="text-2xl font-bold text-gray-900 mt-0.5">$150 <span className="text-sm text-gray-400 font-normal">/ month</span></p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-400">Remaining</p>
                  <p className="text-lg font-bold text-green-700">$47.01</p>
                </div>
              </div>

              {/* Active benefits */}
              <p className="text-xs text-gray-400 uppercase tracking-wider font-medium mb-3">Active Benefits <span className="text-gray-300 normal-case">· Sample</span></p>
              <div className="space-y-2 mb-5">
                {[
                  { key: 'entertainment', name: 'Streaming subscription', cost: '$22.99', status: 'Active' },
                  { key: 'food', name: 'Food delivery credits', cost: '$40.00', status: 'Active' },
                  { key: 'pets', name: 'Dog walking', cost: '$40.00', status: 'Active' },
                ].map(b => (
                  <div key={b.key} className="flex items-center justify-between p-3 rounded-xl" style={{ background: 'rgba(0,0,0,0.03)' }}>
                    <div className="flex items-center gap-3">
                      <CategoryIcon category={b.key} size={32} />
                      <div>
                        <p className="text-sm font-semibold text-gray-900">{b.name}</p>
                        <p className="text-xs text-gray-400">{b.cost}/mo</p>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-green-600 px-2 py-1 rounded-full" style={{ background: 'rgba(26,71,49,0.08)' }}>
                      {b.status}
                    </span>
                  </div>
                ))}
              </div>

              {/* Browse section */}
              <p className="text-xs text-gray-400 uppercase tracking-wider font-medium mb-3">Browse More Benefits</p>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { key: 'wellness', name: 'Wellness' },
                  { key: 'learning', name: 'Learning' },
                  { key: 'travel', name: 'Travel' },
                ].map(b => (
                  <div key={b.key} className="p-3 rounded-xl text-center border border-gray-100 hover:border-gray-200 transition-colors cursor-pointer">
                    <CategoryIcon category={b.key} size={32} className="mx-auto mb-1.5" />
                    <p className="text-xs text-gray-600 font-medium">{b.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3-Step Process */}
      <section className="py-20 px-6" style={{ background: '#1a2e1f' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Three steps. That&apos;s it.</h2>
            <p className="text-gray-400 text-lg">From setup to happy employees in under 20 minutes.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                num: '01',
                title: 'HR sets the budget',
                desc: 'Choose a monthly per-employee budget. Connect your HRIS and employees are automatically enrolled.',
                detail: 'Quick setup',
              },
              {
                num: '02',
                title: 'Employees choose',
                desc: 'Employees log in and browse the lifestyle benefits catalog. They pick what fits their life. Selections can change every month.',
                detail: 'Redeemed in the employee\'s account',
              },
              {
                num: '03',
                title: 'Track and optimize',
                desc: 'Aggregate dashboards show participation rates, popular categories, and budget utilization.',
                detail: 'Aggregate-only reporting',
              },
            ].map((step, i) => (
              <div key={step.num} className="relative">
                <div className="text-7xl font-black mb-4" style={{ color: 'rgba(255,255,255,0.05)' }}>{step.num}</div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{step.desc}</p>
                <div className="p-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.06)' }}>
                  <p className="text-xs text-green-400 font-semibold">{step.detail}</p>
                </div>
                {i < 2 && (
                  <div className="hidden md:block absolute top-12 -right-4 z-10">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Mockup — HR Dashboard */}
      <section className="py-24 px-6 section-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* HR Dashboard Mockup */}
            <div className="glass-card p-6">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">HR Dashboard <span className="text-gray-300 normal-case">· Sample dashboard</span></p>
                  <p className="text-lg font-bold text-gray-900 mt-0.5">October 2026</p>
                </div>
                <span className="text-xs font-semibold px-3 py-1.5 rounded-full text-green-700" style={{ background: 'rgba(26,71,49,0.08)' }}>
                  247 employees
                </span>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                {[
                  { label: 'Participation', value: 'Aggregate', trend: 'View in dashboard' },
                  { label: 'Budget Utilized', value: '$34.2K', trend: 'of $37K budget' },
                  { label: 'Categories Used', value: '15', trend: 'Full catalog access' },
                  { label: 'Setup', value: 'Quick', trend: 'One-time setup' },
                ].map(stat => (
                  <div key={stat.label} className="p-3 rounded-xl" style={{ background: 'rgba(0,0,0,0.03)' }}>
                    <p className="text-xs text-gray-400 mb-1">{stat.label}</p>
                    <p className="text-xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-xs text-green-600 mt-0.5">{stat.trend}</p>
                  </div>
                ))}
              </div>

              {/* Top benefits */}
              <p className="text-xs text-gray-400 uppercase tracking-wider font-medium mb-3">Top Categories This Month</p>
              <div className="space-y-2">
                {[
                  { key: 'food', name: 'Food delivery', pct: 68 },
                  { key: 'entertainment', name: 'Entertainment', pct: 54 },
                  { key: 'travel', name: 'Travel', pct: 41 },
                ].map(b => (
                  <div key={b.key} className="flex items-center gap-3">
                    <CategoryIcon category={b.key} size={24} />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-xs font-medium text-gray-900">{b.name}</p>
                        <p className="text-xs text-gray-400">{b.pct}%</p>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-1.5">
                        <div className="h-1.5 rounded-full" style={{ width: `${b.pct}%`, background: '#1a4731' }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#1a4731' }}>HR Admin View</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Aggregate visibility into what&apos;s working.</h2>
              <p className="text-lg text-gray-500 mb-6 leading-relaxed">
                See aggregate participation and budget utilization in one dashboard. Know which categories employees choose most.
              </p>
              <div className="space-y-3">
                {[
                  'Aggregate participation by department and benefit category',
                  'Budget utilization and rollback tracking',
                  'Aggregate-only reporting — no individual employee selections shown',
                  'Export reports for leadership presentations',
                ].map(item => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: 'rgba(26,71,49,0.1)' }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#1a4731" strokeWidth="3">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HRIS Integrations */}
      <section className="py-24 px-6 section-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Works with your existing stack</h2>
            <p className="text-lg text-gray-500">Connects with common HRIS and SSO providers.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { key: 'tech', name: 'HRIS sync', category: 'Onboarding' },
              { key: 'tech', name: 'SSO', category: 'Sign-in' },
              { key: 'tech', name: 'Directory sync', category: 'Employees' },
              { key: 'tech', name: 'Notifications', category: 'Alerts' },
            ].map((integration, i) => (
              <div key={integration.name + i} className="glass-card p-5 text-center">
                <CategoryIcon category={integration.key} label={integration.name} size={40} className="mx-auto mb-3" />
                <p className="font-semibold text-gray-900 text-sm">{integration.name}</p>
                <p className="text-xs text-gray-400 mt-0.5">{integration.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-6 section-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Everything you need. Nothing you don&apos;t.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Curated Benefits Catalog', desc: '15 lifestyle categories covering entertainment, food, travel, family, pets, wellness, learning, and more.' },
              { title: 'Flexible Budgets', desc: 'Set any monthly budget per employee. Unused budget rolls back — you only pay for what employees actually redeem.' },
              { title: 'HRIS Integrations', desc: 'Connects with common HRIS and SSO providers. Onboarding and offboarding is automatic.' },
              { title: 'Aggregate Analytics', desc: 'See participation rates, popular categories, and budget utilization — aggregate only, never individual selections.' },
              { title: 'Monthly Flexibility', desc: 'Employees can change their benefit selections every month. No annual enrollment windows.' },
              { title: 'Account Redemption', desc: 'Employees select a benefit and Jiibe confirms it in their account.' },
              { title: 'Security', desc: 'Data encrypted in transit and at rest; SSO support.' },
              { title: 'Quick Setup', desc: 'Connect your HRIS and set a budget — employees are enrolled automatically.' },
              { title: 'Dedicated Support', desc: 'Every account has a named support contact.' },
            ].map(feature => (
              <div key={feature.title} className="glass-card p-6">
                <div className="w-8 h-8 rounded-lg mb-4 flex items-center justify-center"
                  style={{ background: 'rgba(26,71,49,0.1)' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1a4731" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 section-ivory">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">See it in action</h2>
          <p className="text-gray-500 mb-8 text-lg">Book a 20-minute demo and we&apos;ll show you exactly how Jiibe works for your team.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/demo"
              className="px-8 py-4 text-base font-semibold text-white rounded-2xl shadow-lg hover:opacity-90 transition-all"
              style={{ background: 'linear-gradient(135deg, #1a4731, #2d6a4f)' }}>
              Book a Demo
            </Link>
            <Link href="/for-hr"
              className="px-8 py-4 text-base font-semibold text-gray-700 rounded-2xl border border-gray-200 bg-white hover:bg-gray-50 transition-all">
              For HR Teams →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
