'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#1a2e1f] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <Image
                src="/jiibe-logo.png"
                alt="Jiibe"
                width={100}
                height={36}
                style={{ objectFit: 'contain', height: '32px', width: 'auto', filter: 'brightness(0) invert(1)' }}
              />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs mb-6">
              Employer-funded lifestyle benefits, chosen by employees.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {/* LinkedIn */}
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-white/10"
                style={{ background: 'rgba(255,255,255,0.08)' }}
                aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#0A66C2">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Platform */}
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Platform</p>
            <ul className="space-y-3">
              {[
                { label: 'Benefits Marketplace', href: '/benefits' },
                { label: 'How It Works', href: '/platform' },
                { label: 'For HR Teams', href: '/for-hr' },
                { label: 'Pricing', href: '/pricing' },
                { label: 'Book a Demo', href: '/demo' },
              ].map(item => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-gray-400 hover:text-white transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Benefits</p>
            <ul className="space-y-3">
              {[
                { label: 'Entertainment', href: '/benefits#entertainment' },
                { label: 'Food & Dining', href: '/benefits#food' },
                { label: 'Travel', href: '/benefits#travel' },
                { label: 'Family & Childcare', href: '/benefits#family' },
                { label: 'Wellness', href: '/benefits#wellness' },
                { label: 'Learning', href: '/benefits#learning' },
              ].map(item => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-gray-400 hover:text-white transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Legal</p>
            <ul className="space-y-3">
              {[
                { label: 'Privacy Policy', href: '/privacy' },
                { label: 'Terms of Service', href: '/terms' },
                { label: 'SMS Program', href: '/sms' },
                { label: 'About', href: '/about' },
                { label: 'Contact', href: '/contact' },
              ].map(item => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-gray-400 hover:text-white transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs text-gray-500 text-center md:text-left">
            <p>Jiibe LLC · 213 N Market Street #1150, Wilmington, DE 19801 · <a href="tel:+13023024972" className="hover:text-white transition-colors">(302) 302-4972</a> · <a href="mailto:support@jiibe.com" className="hover:text-white transition-colors">support@jiibe.com</a></p>
            <p className="mt-1">© 2026 Jiibe LLC. All rights reserved.</p>
          </div>
          <div className="text-xs text-gray-600 text-center md:text-right max-w-md">
            <p>SMS opt-in is optional. Reply STOP to opt out, HELP for help. Msg &amp; data rates may apply. No mobile information or opt-in consent is shared with or sold to third parties.</p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-white/10 pt-6 mt-6">
          <p className="text-[11px] text-gray-600 text-center leading-relaxed max-w-3xl mx-auto">
            Available benefits vary by employer program. Jiibe is not a bank, lender, insurer, or healthcare provider. Third-party brand names are trademarks of their respective owners; Jiibe is not affiliated with or endorsed by any third-party brand.
          </p>
        </div>
      </div>
    </footer>
  );
}
