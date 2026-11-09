import type { Metadata } from 'next';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'SMS Program — Jiibe',
};

const triggerRows = [
  { event: 'Account activated', message: 'Confirmation' },
  { event: 'Benefit selected', message: 'Selection confirmation' },
  { event: 'Budget resets soon', message: 'Reminder' },
  { event: 'New sign-in', message: 'Security alert' },
];

const sampleMessages = [
  'Jiibe: Your benefits account is active. Reply HELP for help, STOP to opt out. Msg & data rates may apply.',
  'Jiibe: Your benefit selection is confirmed. View details in your Jiibe account. Reply STOP to opt out.',
  'Jiibe: Your monthly perks budget resets on Nov 1. Reply STOP to opt out, HELP for help.',
  'Jiibe: New sign-in to your account. If this wasn\'t you, contact support@jiibe.com. Reply STOP to opt out.',
];

export default function SmsProgramPage() {
  return (
    <div className="min-h-screen" style={{ background: '#faf9f7' }}>
      <Nav />

      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
            style={{ background: 'rgba(26,71,49,0.08)', color: '#1a4731', border: '1px solid rgba(26,71,49,0.15)' }}>
            SMS Program
          </div>
          <h1 className="text-5xl font-bold text-gray-900 tracking-tight mb-4">Jiibe SMS Program</h1>
          <p className="text-xl text-gray-500">Transactional account alerts from the Jiibe benefits platform.</p>
        </div>
      </section>

      {/* At a glance */}
      <section className="pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">At a glance</h2>
          <div className="glass-card overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                <tr className="border-b border-gray-100"><td className="p-4 font-semibold text-gray-900 w-1/3 align-top">Program name</td><td className="p-4 text-gray-600">Jiibe Account Alerts</td></tr>
                <tr className="border-b border-gray-100"><td className="p-4 font-semibold text-gray-900 align-top">Sender</td><td className="p-4 text-gray-600">Jiibe LLC</td></tr>
                <tr className="border-b border-gray-100"><td className="p-4 font-semibold text-gray-900 align-top">What it is</td><td className="p-4 text-gray-600">Automated, system-triggered transactional alerts. No marketing or promotional messages.</td></tr>
                <tr className="border-b border-gray-100"><td className="p-4 font-semibold text-gray-900 align-top">Who receives messages</td><td className="p-4 text-gray-600">Employees of enrolled companies who opt in during signup</td></tr>
                <tr className="border-b border-gray-100"><td className="p-4 font-semibold text-gray-900 align-top">How to opt in</td><td className="p-4 text-gray-600">Optional, unchecked checkbox on /signup (step 2)</td></tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-semibold text-gray-900 align-top">Message types</td>
                  <td className="p-4 text-gray-600">
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Account registration and onboarding confirmations</li>
                      <li>Benefit redemption confirmations and access code notices</li>
                      <li>Monthly budget reminders and reset notices</li>
                      <li>Account security and sign-in alerts</li>
                    </ul>
                  </td>
                </tr>
                <tr className="border-b border-gray-100"><td className="p-4 font-semibold text-gray-900 align-top">Frequency</td><td className="p-4 text-gray-600">Varies based on account activity</td></tr>
                <tr className="border-b border-gray-100"><td className="p-4 font-semibold text-gray-900 align-top">Cost</td><td className="p-4 text-gray-600">Message and data rates may apply</td></tr>
                <tr className="border-b border-gray-100"><td className="p-4 font-semibold text-gray-900 align-top">Opt out</td><td className="p-4 text-gray-600">Reply STOP</td></tr>
                <tr className="border-b border-gray-100"><td className="p-4 font-semibold text-gray-900 align-top">Resubscribe</td><td className="p-4 text-gray-600">Reply START</td></tr>
                <tr className="border-b border-gray-100"><td className="p-4 font-semibold text-gray-900 align-top">Help</td><td className="p-4 text-gray-600">Reply HELP or email support@jiibe.com</td></tr>
                <tr className="border-b border-gray-100"><td className="p-4 font-semibold text-gray-900 align-top">Consent</td><td className="p-4 text-gray-600">Not a condition of purchase</td></tr>
                <tr><td className="p-4 font-semibold text-gray-900 align-top">Data sharing</td><td className="p-4 text-gray-600">Mobile information and opt-in consent are never shared with or sold to third parties, including benefit providers</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Trigger table */}
      <section className="pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">When messages are sent</h2>
          <div className="glass-card overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 text-left">
                  <th className="p-4 font-semibold text-gray-900">Event</th>
                  <th className="p-4 font-semibold text-gray-900">Message</th>
                </tr>
              </thead>
              <tbody>
                {triggerRows.map((row, i) => (
                  <tr key={row.event} className={i < triggerRows.length - 1 ? 'border-b border-gray-100' : ''}>
                    <td className="p-4 text-gray-600">{row.event}</td>
                    <td className="p-4 text-gray-600">{row.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Sample messages */}
      <section className="pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Sample messages</h2>
          <div className="space-y-2">
            {sampleMessages.map(msg => (
              <p key={msg} className="text-sm text-gray-600 font-mono bg-white rounded-lg p-4 border border-gray-100">{msg}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Links */}
      <section className="pb-24 px-6">
        <div className="max-w-4xl mx-auto flex flex-wrap gap-6 text-sm font-semibold" style={{ color: '#1a4731' }}>
          <Link href="/terms#sms" className="hover:underline">Terms of Service (SMS section) →</Link>
          <Link href="/privacy" className="hover:underline">Privacy Policy →</Link>
          <Link href="/contact" className="hover:underline">Contact →</Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
