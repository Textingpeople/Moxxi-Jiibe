'use client';

import { useState } from 'react';
import Link from 'next/link';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { CategoryIcon } from './components/BrandLogo';

// ─── Category accent map ───────────────────────────────────────────────────
const catAccent: Record<string, { bg: string; text: string; dot: string }> = {
  Entertainment: { bg: '#fef3ec', text: '#8b3a0f', dot: '#f5a97f' },
  Food:          { bg: '#fdf5e4', text: '#6b4a0f', dot: '#d4a84b' },
  Travel:        { bg: '#edf6fb', text: '#1a4a6b', dot: '#7ab8d4' },
  Family:        { bg: '#fbeef1', text: '#7a1f30', dot: '#d47a8a' },
  Wellness:      { bg: '#eef6f1', text: '#1e5c35', dot: '#7aab8a' },
  Learning:      { bg: '#f2f0fb', text: '#3d2f7a', dot: '#a89fd4' },
  Pets:          { bg: '#e8f8f7', text: '#1a5c58', dot: '#4ab8b0' },
  Shopping:      { bg: '#fdf5e4', text: '#6b4a0f', dot: '#d4a84b' },
};

// ─── Sample benefit tiles for hero (categories, not brands) ───────────────
const heroPerks = [
  { id: 'streaming',    key: 'entertainment', name: 'Streaming', cat: 'Entertainment', catAccent: '#fef3ec', catText: '#8b3a0f' },
  { id: 'fooddelivery', key: 'food',          name: 'Food delivery', cat: 'Food',      catAccent: '#fdf5e4', catText: '#6b4a0f' },
  { id: 'dogwalking',   key: 'pets',          name: 'Dog walking', cat: 'Pets',        catAccent: '#e8f8f7', catText: '#1a5c58' },
  { id: 'rideshare',    key: 'travel',        name: 'Rideshare', cat: 'Travel',        catAccent: '#edf6fb', catText: '#1a4a6b' },
  { id: 'babysitting',  key: 'family',        name: 'Babysitting', cat: 'Family',      catAccent: '#fbeef1', catText: '#7a1f30' },
  { id: 'music',        key: 'entertainment', name: 'Music', cat: 'Entertainment',     catAccent: '#fef3ec', catText: '#8b3a0f' },
  { id: 'fitness',      key: 'wellness',      name: 'Fitness classes', cat: 'Wellness', catAccent: '#eef6f1', catText: '#1e5c35' },
  { id: 'courses',      key: 'learning',      name: 'Online courses', cat: 'Learning', catAccent: '#f2f0fb', catText: '#3d2f7a' },
  { id: 'lodging',      key: 'travel',        name: 'Lodging', cat: 'Travel',          catAccent: '#edf6fb', catText: '#1a4a6b' },
  { id: 'mealkits',     key: 'food',          name: 'Meal kits', cat: 'Food',          catAccent: '#fdf5e4', catText: '#6b4a0f' },
  { id: 'meditation',   key: 'wellness',      name: 'Meditation apps', cat: 'Wellness', catAccent: '#eef6f1', catText: '#1e5c35' },
  { id: 'household',    key: 'shopping',      name: 'Household goods', cat: 'Shopping', catAccent: '#fdf5e4', catText: '#6b4a0f' },
];

// ─── FAQ Item ──────────────────────────────────────────────────────────────
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4">
        <span className="font-semibold text-gray-900 text-sm">{q}</span>
        <span className={`text-gray-400 transition-transform flex-shrink-0 ${open ? 'rotate-45' : ''}`}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </span>
      </button>
      {open && <p className="text-sm text-gray-500 leading-relaxed pb-5">{a}</p>}
    </div>
  );
}

// ─── Audience Tab ──────────────────────────────────────────────────────────
function AudienceTab({ active, label, onClick }: { active: boolean; label: string; onClick: () => void }) {
  return (
    <button onClick={onClick}
      className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all ${active ? 'text-white shadow-md' : 'text-gray-600 hover:text-gray-900 bg-white border border-gray-200'}`}
      style={active ? { background: '#1a4731' } : {}}>
      {label}
    </button>
  );
}

// ─── Main Page ─────────────────────────────────────────────────────────────
export default function HomePage() {
  const [activeTab, setActiveTab] = useState<'employees' | 'hr'>('employees');
  const [selectedPerks, setSelectedPerks] = useState<string[]>(['streaming', 'dogwalking', 'fooddelivery']);

  const togglePerk = (key: string) => {
    setSelectedPerks(prev =>
      prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]
    );
  };

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: '#faf8f4' }}>
      <Nav />

      {/* ── HERO ── */}
      <section className="pt-28 pb-20 px-6" style={{ background: '#faf8f4' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* Left: Copy */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-8"
                style={{ background: '#eef6f1', color: '#1e5c35', border: '1px solid #c3e6d0' }}>
                <div className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse" />
                Employee lifestyle perks
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-6">
                Perks that fit<br />
                <span className="gradient-text-brand">every life.</span>
              </h1>

              <p className="text-xl text-gray-500 leading-relaxed mb-4">
                Your employer sets a monthly perks budget. You choose from a curated catalog of lifestyle perks — streaming, food delivery, childcare, pet care, fitness, learning, and more.
              </p>
              <p className="text-base text-gray-400 mb-6">
                No one-size-fits-all package. Just perks people actually use.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/demo"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-bold text-white rounded-2xl transition-all hover:opacity-90 hover:-translate-y-0.5"
                  style={{ background: '#1a4731' }}>
                  Book a Demo
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link href="/benefits"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-bold text-gray-700 rounded-2xl transition-all hover:bg-gray-100"
                  style={{ background: 'white', border: '1.5px solid rgba(0,0,0,0.1)' }}>
                  Browse all perks
                </Link>
              </div>
              <p className="text-xs text-gray-400 mt-4">
                Available to employees of companies enrolled in a Jiibe perks program.
              </p>

              {/* Category tags — horizontal scrollable row */}
              <div className="mt-10">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">15 perk categories</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: '🎬 Entertainment', bg: '#fef3ec', text: '#8b3a0f' },
                    { label: '🍕 Food & Dining',  bg: '#fdf5e4', text: '#6b4a0f' },
                    { label: '✈️ Travel',          bg: '#edf6fb', text: '#1a4a6b' },
                    { label: '👨‍👩‍👧 Family',         bg: '#fbeef1', text: '#7a1f30' },
                    { label: '🧘 Wellness',        bg: '#eef6f1', text: '#1e5c35' },
                    { label: '📚 Learning',        bg: '#f2f0fb', text: '#3d2f7a' },
                    { label: '🐾 Pets',            bg: '#e8f8f7', text: '#1a5c58' },
                    { label: '🛍️ Shopping',        bg: '#fdf5e4', text: '#6b4a0f' },
                  ].map(tag => (
                    <span key={tag.label}
                      className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold"
                      style={{ background: tag.bg, color: tag.text }}>
                      {tag.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Interactive marketplace preview */}
            <div className="relative">
              <div className="glass-card p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">Your monthly perks <span className="text-gray-300 normal-case">· Sample</span></p>
                    <p className="text-2xl font-bold text-gray-900">Choose what you love</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-400">Balance</p>
                    <p className="text-lg font-bold" style={{ color: '#1a4731' }}>$150</p>
                  </div>
                </div>

                {/* Perk grid — static display, no interaction */}
                <div className="grid grid-cols-3 gap-2.5 mb-4">
                  {heroPerks.map(perk => {
                    const isSelected = selectedPerks.includes(perk.id);
                    return (
                      <div key={perk.id}
                        className="marketplace-card text-left p-3 relative"
                        style={isSelected ? {
                          borderColor: '#1a4731',
                          boxShadow: '0 0 0 2px rgba(26,71,49,0.12)',
                          cursor: 'default',
                        } : { cursor: 'default' }}>
                        {isSelected && (
                          <div className="absolute top-2 right-2 w-4 h-4 rounded-full flex items-center justify-center"
                            style={{ background: '#1a4731' }}>
                            <svg width="8" height="8" viewBox="0 0 12 12" fill="none">
                              <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                        )}
                        <CategoryIcon category={perk.key} size={28} className="mb-2" />
                        <p className="text-xs font-semibold text-gray-900 leading-tight">{perk.name}</p>
                        <span className="cat-pill mt-1 inline-flex"
                          style={{ background: perk.catAccent, color: perk.catText, fontSize: '9px', padding: '2px 6px' }}>
                          {perk.cat}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Summary bar — static, no links */}
                <div className="p-3 rounded-xl flex items-center justify-between"
                  style={{ background: '#eef6f1', border: '1px solid #c3e6d0' }}>
                  <div>
                    <p className="text-xs font-semibold" style={{ color: '#1e5c35' }}>
                      {selectedPerks.length} perks selected this month
                    </p>
                    <p className="text-xs text-gray-500">$103 of $150 used</p>
                  </div>
                  <span className="text-xs font-bold text-white px-4 py-2 rounded-xl"
                    style={{ background: '#1a4731', cursor: 'default' }}>
                    Active
                  </span>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 glass-card p-3 float-animation" style={{ zIndex: 20 }}>
                <p className="text-xs text-gray-400 mb-1">Perk categories</p>
                <p className="text-xl font-bold text-gray-900">15</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── AT A GLANCE ── */}
      <section className="py-20 px-6" style={{ background: '#faf8f4' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#1a4731' }}>At a Glance</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Employer-funded lifestyle perks, chosen by employees.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { title: 'What it is', desc: 'A perks marketplace employers offer their teams, with a curated catalog across 15 lifestyle categories.' },
              { title: 'How it works', desc: 'HR sets a monthly budget. Employees choose perks and redeem them in their Jiibe account. HR sees aggregate participation.' },
              { title: 'Text alerts', desc: 'Optional and opt-in. Account and redemption confirmations only — never marketing texts.' },
            ].map(card => (
              <div key={card.title} className="glass-card p-6">
                <h3 className="font-bold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 text-center leading-relaxed max-w-2xl mx-auto mb-4">
            Available benefits vary by employer program. Jiibe is not a bank, lender, insurer, or healthcare provider. Third-party brand names are trademarks of their respective owners; Jiibe is not affiliated with or endorsed by any third-party brand.
          </p>
          <div className="flex items-center justify-center gap-6 text-sm font-semibold" style={{ color: '#1a4731' }}>
            <Link href="/about" className="hover:underline">About Jiibe →</Link>
            <Link href="/sms" className="hover:underline">SMS Program →</Link>
          </div>
        </div>
      </section>

      {/* ── CATEGORY SHOWCASE ── */}
      <section className="py-20 px-6" style={{ background: '#ffffff' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight mb-3">
              Perks for every kind of life.
            </h2>
            <p className="text-lg text-gray-500">
              From streaming to childcare, fitness to food — employees choose what actually matters to them.
            </p>
          </div>

          {/* Category bento grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {[
              { cat: 'Entertainment', emoji: '🎬', bg: '#fef3ec', text: '#8b3a0f', dot: '#f5a97f', desc: 'Streaming and entertainment subscriptions — movies, shows, music, audiobooks' },
              { cat: 'Food & Dining', emoji: '🍕', bg: '#fdf5e4', text: '#6b4a0f', dot: '#d4a84b', desc: 'Food delivery, groceries, and meal kits' },
              { cat: 'Family', emoji: '👨‍👩‍👧', bg: '#fbeef1', text: '#7a1f30', dot: '#d47a8a', desc: 'Childcare, babysitting, and family support' },
              { cat: 'Travel', emoji: '✈️', bg: '#edf6fb', text: '#1a4a6b', dot: '#7ab8d4', desc: 'Rideshare, travel, and lodging' },
            ].map(item => (
              <div key={item.cat} className="glass-card p-5 cursor-pointer"
                style={{ borderTop: `3px solid ${item.dot}` }}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">{item.emoji}</span>
                  <span className="text-sm font-bold text-gray-900">{item.cat}</span>
                </div>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { cat: 'Wellness', emoji: '🧘', bg: '#eef6f1', text: '#1e5c35', dot: '#7aab8a', desc: 'Fitness classes, home workouts, and meditation apps' },
              { cat: 'Pets', emoji: '🐾', bg: '#e8f8f7', text: '#1a5c58', dot: '#4ab8b0', desc: 'Dog walking, pet sitting, and pet supplies' },
              { cat: 'Learning', emoji: '📚', bg: '#f2f0fb', text: '#3d2f7a', dot: '#a89fd4', desc: 'Online courses, professional skills, and language learning' },
              { cat: 'Shopping', emoji: '🛍️', bg: '#fdf5e4', text: '#6b4a0f', dot: '#d4a84b', desc: 'Everyday essentials and household goods' },
            ].map(item => (
              <div key={item.cat} className="glass-card p-5 cursor-pointer"
                style={{ borderTop: `3px solid ${item.dot}` }}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">{item.emoji}</span>
                  <span className="text-sm font-bold text-gray-900">{item.cat}</span>
                </div>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/benefits" className="btn-secondary">
              See all 15 categories →
            </Link>
          </div>
        </div>
      </section>

      {/* ── EMPLOYEE / EMPLOYER TABS ── */}
      <section className="py-24 px-6" style={{ background: '#faf8f4' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
              Built for everyone on your team.
            </h2>
            <p className="text-lg text-gray-500 mb-8">See how Jiibe works for employees and HR teams alike.</p>
            <div className="flex items-center justify-center gap-3">
              <AudienceTab active={activeTab === 'employees'} label="For Your People" onClick={() => setActiveTab('employees')} />
              <AudienceTab active={activeTab === 'hr'} label="For Your HR Team" onClick={() => setActiveTab('hr')} />
            </div>
          </div>

          {activeTab === 'employees' ? (
            <div className="grid md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Perks that fit your life.</h3>
                <div className="space-y-5">
                  {[
                    { title: 'Choose what you love', desc: 'Browse the catalog across 15 categories and pick what fits your life — streaming, food, childcare, travel, pets, and more.' },
                    { title: 'Monthly budget, your way', desc: 'Your employer sets a monthly budget. You decide how to spend it across any perks you want.' },
                    { title: 'Redeem in your account', desc: 'Selections are confirmed and redeemed directly in your Jiibe account.' },
                    { title: 'Change anytime', desc: 'Switch your perk selections month to month. No lock-in.' },
                  ].map((item, i) => (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold text-white flex-shrink-0 mt-0.5"
                        style={{ background: '#1a4731' }}>
                        {i + 1}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">{item.title}</p>
                        <p className="text-sm text-gray-500">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="glass-card p-6">
                <p className="text-xs text-gray-400 uppercase tracking-wider font-medium mb-4">Employee Dashboard <span className="text-gray-300 normal-case">· Sample</span></p>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-2xl font-bold text-gray-900">$150</p>
                    <p className="text-xs text-gray-400">Monthly balance</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold" style={{ color: '#1a4731' }}>$47 remaining</p>
                    <p className="text-xs text-gray-400">Resets Nov 1</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {[
                    { key: 'entertainment', name: 'Streaming',    cost: '$22.99', cat: 'Entertainment', catBg: '#fef3ec', catText: '#8b3a0f' },
                    { key: 'food',          name: 'Food delivery', cost: '$40.00', cat: 'Food',          catBg: '#fdf5e4', catText: '#6b4a0f' },
                    { key: 'family',        name: 'Babysitting',  cost: '$40.00', cat: 'Family',        catBg: '#fbeef1', catText: '#7a1f30' },
                  ].map(b => (
                    <div key={b.name} className="flex items-center justify-between p-3 rounded-xl" style={{ background: 'rgba(0,0,0,0.02)' }}>
                      <div className="flex items-center gap-2">
                        <CategoryIcon category={b.key} size={24} />
                        <div>
                          <span className="text-sm font-medium text-gray-900">{b.name}</span>
                          <span className="cat-pill ml-2" style={{ background: b.catBg, color: b.catText, fontSize: '9px', padding: '2px 6px' }}>{b.cat}</span>
                        </div>
                      </div>
                      <span className="text-sm text-gray-600 font-medium">{b.cost}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Simple to set up. Easy to manage.</h3>
                <div className="space-y-5">
                  {[
                    { title: 'Set your budget', desc: 'Choose a monthly per-employee budget. No complicated perk packages to manage.' },
                    { title: 'Track participation', desc: 'See aggregate dashboards showing which perk categories employees choose most.' },
                    { title: 'HRIS integrations', desc: 'Connects with common HRIS and SSO providers. Onboarding is automatic.' },
                    { title: 'Only pay for what\'s used', desc: 'Unused budget rolls back. You never pay for perks employees don\'t redeem.' },
                  ].map((item, i) => (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold text-white flex-shrink-0 mt-0.5"
                        style={{ background: '#1a4731' }}>
                        {i + 1}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">{item.title}</p>
                        <p className="text-sm text-gray-500">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="glass-card p-6">
                <p className="text-xs text-gray-400 uppercase tracking-wider font-medium mb-4">HR Dashboard <span className="text-gray-300 normal-case">· Sample</span></p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    { label: 'Active Employees', value: '247' },
                    { label: 'Participation', value: 'Aggregate' },
                    { label: 'Categories Used', value: '15' },
                    { label: 'Budget Used', value: '$34.2K' },
                  ].map(stat => (
                    <div key={stat.label} className="p-3 rounded-xl" style={{ background: 'rgba(0,0,0,0.03)' }}>
                      <p className="text-xs text-gray-400 mb-1">{stat.label}</p>
                      <p className="text-xl font-bold text-gray-900">{stat.value}</p>
                    </div>
                  ))}
                </div>
                <div className="p-3 rounded-xl" style={{ background: '#eef6f1', border: '1px solid #c3e6d0' }}>
                  <p className="text-xs font-semibold" style={{ color: '#1e5c35' }}>Top category this month: Food delivery (68% of employees)</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── 3-STEP WALKTHROUGH ── */}
      <section className="py-24 px-6 section-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
              Up and running in 3 steps.
            </h2>
            <p className="text-lg text-gray-400 max-w-xl mx-auto">
              No complicated setup. No perk consultants. Just perks your team will actually use.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                num: '01',
                title: 'Set your budget',
                desc: 'Choose a monthly per-employee budget — $50, $100, $200, or custom. Connect your HRIS and you\'re done.',
                preview: (
                  <div className="p-4 rounded-xl mt-4" style={{ background: 'rgba(255,255,255,0.08)' }}>
                    <p className="text-xs text-gray-400 mb-2">Monthly budget per employee</p>
                    <p className="text-2xl font-bold text-white">$150</p>
                    <div className="flex gap-2 mt-3">
                      {['$50', '$100', '$150', '$200'].map(amt => (
                        <span key={amt} className="text-xs px-2 py-1 rounded-lg"
                          style={{ background: amt === '$150' ? '#2d6a4f' : 'rgba(255,255,255,0.06)', color: amt === '$150' ? 'white' : '#9ca3af' }}>
                          {amt}
                        </span>
                      ))}
                    </div>
                  </div>
                )
              },
              {
                num: '02',
                title: 'Employees choose',
                desc: 'Employees browse the catalog and pick the perks that fit their life — streaming, pet care, food delivery, their call.',
                preview: (
                  <div className="p-4 rounded-xl mt-4" style={{ background: 'rgba(255,255,255,0.08)' }}>
                    <p className="text-xs text-gray-400 mb-3">Sample selections this month</p>
                    <div className="space-y-2">
                      {[
                        { key: 'entertainment', n: 'Streaming', a: '$22.99', catBg: 'rgba(245,169,127,0.2)', catText: '#f5a97f' },
                        { key: 'pets',          n: 'Pet sitting', a: '$35.00', catBg: 'rgba(74,184,176,0.2)',  catText: '#4ab8b0' },
                      ].map(b => (
                        <div key={b.n} className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <CategoryIcon category={b.key} size={20} />
                            <span className="text-xs text-gray-300">{b.n}</span>
                          </div>
                          <span className="text-xs text-gray-400">{b.a}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              },
              {
                num: '03',
                title: 'Track participation',
                desc: 'See aggregate dashboards. Know which perk categories employees choose. Adjust budgets anytime.',
                preview: (
                  <div className="p-4 rounded-xl mt-4" style={{ background: 'rgba(255,255,255,0.08)' }}>
                    <p className="text-xs text-gray-400 mb-2">Participation this month</p>
                    <div className="flex items-end gap-1 h-10">
                      {[60, 80, 70, 90, 85, 92, 92].map((h, i) => (
                        <div key={i} className="flex-1 rounded-t-sm"
                          style={{ height: `${h}%`, background: i === 6 ? '#40916c' : 'rgba(255,255,255,0.15)' }} />
                      ))}
                    </div>
                    <p className="text-xs mt-2 font-semibold" style={{ color: '#7aab8a' }}>Sample participation trend</p>
                  </div>
                )
              },
            ].map((step, i) => (
              <div key={step.num} className="relative">
                <div className="text-6xl font-black mb-4" style={{ color: 'rgba(255,255,255,0.06)' }}>{step.num}</div>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold text-white mb-4"
                  style={{ background: '#2d6a4f' }}>
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
                {step.preview}
                {i < 2 && (
                  <div className="hidden md:block absolute top-16 -right-4 z-10">
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

      {/* ── ALTERNATING STORY SECTIONS ── */}
      <section className="py-24 px-6 section-white">
        <div className="max-w-7xl mx-auto space-y-24">
          {/* Story 1: Employee choice */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#1a4731' }}>Employee Choice</p>
              <h2 className="text-4xl font-bold text-gray-900 tracking-tight mb-6">
                One person&apos;s perk is another&apos;s must-have.
              </h2>
              <p className="text-lg text-gray-500 mb-6 leading-relaxed">
                A parent covers a babysitter. A dog owner covers dog walking. A remote worker covers streaming and lunch delivery. Why give everyone the same thing?
              </p>
              <p className="text-gray-500 mb-8">
                Jiibe lets every employee choose the perks that actually fit their life — not a one-size-fits-all package that half your team ignores.
              </p>
              <Link href="/benefits" className="inline-flex items-center gap-2 font-semibold text-sm" style={{ color: '#1a4731' }}>
                Browse all perks →
              </Link>
            </div>
            <div className="glass-card p-8">
              <p className="text-xs text-gray-400 uppercase tracking-wider font-medium mb-6">What employees are choosing <span className="text-gray-300 normal-case">· Sample</span></p>
              <div className="space-y-3">
                {[
                  { name: 'Sample 1', role: 'Software Engineer', perk: 'Streaming + Music', cat: 'Entertainment', catBg: '#fef3ec', catText: '#8b3a0f' },
                  { name: 'Sample 2', role: 'Product Manager', perk: 'Food delivery + Dog walking', cat: 'Food & Pets', catBg: '#e8f8f7', catText: '#1a5c58' },
                  { name: 'Sample 3', role: 'HR Director', perk: 'Babysitting + Meditation app', cat: 'Family', catBg: '#fbeef1', catText: '#7a1f30' },
                  { name: 'Sample 4', role: 'Sales Lead', perk: 'Rideshare + Lodging', cat: 'Travel', catBg: '#edf6fb', catText: '#1a4a6b' },
                  { name: 'Sample 5', role: 'Designer', perk: 'Fitness classes + Online courses', cat: 'Wellness', catBg: '#eef6f1', catText: '#1e5c35' },
                ].map(emp => (
                  <div key={emp.name} className="flex items-start gap-4 p-3 rounded-xl" style={{ background: 'rgba(0,0,0,0.02)' }}>
                    <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                      style={{ background: '#1a4731' }}>
                      {emp.name.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-sm font-semibold text-gray-900">{emp.name}</p>
                        <p className="text-xs text-gray-400 flex-shrink-0">{emp.role}</p>
                      </div>
                      <div className="flex items-center gap-2 mt-0.5">
                        <p className="text-xs font-medium text-gray-700">{emp.perk}</p>
                        <span className="cat-pill" style={{ background: emp.catBg, color: emp.catText, fontSize: '9px', padding: '2px 6px' }}>{emp.cat}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Story 2: Simple admin */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="glass-card p-8">
                <p className="text-xs text-gray-400 uppercase tracking-wider font-medium mb-6">Admin Setup</p>
                <div className="space-y-4">
                  {[
                    { step: '1', label: 'Connect your HRIS', done: true },
                    { step: '2', label: 'Set monthly budget', done: true },
                    { step: '3', label: 'Invite employees', done: true },
                    { step: '4', label: 'Employees choose perks', done: false },
                  ].map(s => (
                    <div key={s.step} className="flex items-center gap-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${s.done ? 'text-white' : 'text-gray-400 border-2 border-gray-200'}`}
                        style={s.done ? { background: '#1a4731' } : {}}>
                        {s.done ? '✓' : s.step}
                      </div>
                      <span className={`text-sm font-medium ${s.done ? 'text-gray-900' : 'text-gray-400'}`}>{s.label}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 rounded-xl" style={{ background: '#eef6f1', border: '1px solid #c3e6d0' }}>
                  <p className="text-sm font-semibold" style={{ color: '#1e5c35' }}>Quick setup</p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#1a4731' }}>Simple Administration</p>
              <h2 className="text-4xl font-bold text-gray-900 tracking-tight mb-6">
                Quick to set up. Easy to run every month.
              </h2>
              <p className="text-lg text-gray-500 mb-6 leading-relaxed">
                No perk consultants. No complicated enrollment windows. No annual reviews. Just set a budget, connect your HRIS, and let employees do the rest.
              </p>
              <Link href="/for-hr" className="inline-flex items-center gap-2 font-semibold text-sm" style={{ color: '#1a4731' }}>
                See the HR experience →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 px-6" style={{ background: '#faf8f4' }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight mb-4">Frequently asked questions</h2>
          </div>
          <div className="glass-card p-8">
            {[
              { q: 'How does the monthly perks budget work?', a: 'Employers set a monthly per-employee budget. Employees can spend that budget on any perks in the catalog. Unused budget rolls back to the employer at the end of the month — employers only pay for what employees actually use.' },
              { q: 'Which HRIS systems does Jiibe connect with?', a: 'Jiibe connects with common HRIS and SSO providers. Employee onboarding and offboarding is automatic.' },
              { q: 'How do employees redeem their perks?', a: 'Employees log in to their Jiibe account, browse the catalog, and select a perk. Jiibe confirms the selection in their account.' },
              { q: 'Can employees change their selections each month?', a: 'Yes. Employees can change their perk selections every month. The flexibility is the whole point.' },
              { q: 'Is there a minimum number of employees?', a: 'Jiibe works for teams of all sizes. Pricing scales with your team size.' },
              { q: 'What happens to unused budget?', a: 'Unused monthly budget rolls back to the employer account at the end of each month. Employers never pay for perks employees don\'t redeem.' },
              { q: 'How does SMS communication work?', a: 'Employees who opt in to SMS receive transactional account alerts only: account registration and onboarding confirmations, benefit redemption confirmations and access code notices, monthly budget reminders and reset notices, and account security and sign-in alerts. SMS opt-in is always optional and separate from account access. Reply STOP to opt out at any time.' },
            ].map(faq => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-24 px-6" style={{ background: '#ffffff' }}>
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl p-12 md:p-16 text-center"
            style={{ background: '#1a2e1f' }}>
            <div className="absolute top-0 left-0 w-64 h-64 blob opacity-20"
              style={{ background: 'radial-gradient(circle, rgba(64,145,108,0.6) 0%, transparent 70%)' }} />
            <div className="absolute bottom-0 right-0 w-64 h-64 blob opacity-15"
              style={{ background: 'radial-gradient(circle, rgba(245,169,127,0.4) 0%, transparent 70%)' }} />

            <div className="relative z-10">
              <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: '#7aab8a' }}>Ready to get started?</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
                Give your team the freedom to choose.
              </h2>
              <p className="text-lg mb-10 max-w-2xl mx-auto leading-relaxed" style={{ color: '#c3e6d0' }}>
                Set a monthly perks budget and let employees choose from a curated catalog across 15 lifestyle categories.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/demo"
                  className="px-10 py-4 text-base font-bold text-gray-900 rounded-2xl shadow-xl hover:opacity-90 hover:-translate-y-0.5 transition-all bg-white">
                  Book a Demo
                </Link>
                <Link href="/signup"
                  className="px-10 py-4 text-base font-bold text-white rounded-2xl transition-all hover:bg-white/10"
                  style={{ border: '1px solid rgba(255,255,255,0.25)' }}>
                  Employee Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
