import type { Metadata } from 'next';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Link from 'next/link';
import { CategoryIcon } from '../components/BrandLogo';

export const metadata: Metadata = {
  title: 'Perks — Jiibe',
};

const categories = [
  {
    id: 'entertainment',
    label: 'Entertainment',
    key: 'entertainment',
    offerings: [
      { name: 'Streaming video', desc: 'Movies, shows, and original series' },
      { name: 'Music streaming', desc: 'Music and podcasts' },
      { name: 'Audiobooks', desc: 'Audiobooks and digital reading' },
      { name: 'Live sports and events', desc: 'Sports and event streaming' },
    ],
  },
  {
    id: 'food',
    label: 'Food & Dining',
    key: 'food',
    offerings: [
      { name: 'Restaurant delivery', desc: 'Delivery from local restaurants' },
      { name: 'Grocery delivery', desc: 'Groceries delivered to your door' },
      { name: 'Meal kits', desc: 'Pre-portioned meal kit delivery' },
      { name: 'Prepared meals', desc: 'Ready-to-eat healthy meals' },
    ],
  },
  {
    id: 'travel',
    label: 'Travel & Transportation',
    key: 'travel',
    offerings: [
      { name: 'Rideshare', desc: 'Rides for commutes and errands' },
      { name: 'Lodging', desc: 'Travel accommodations' },
      { name: 'Flights', desc: 'Flight booking and credits' },
      { name: 'Car rental', desc: 'Car rental for business and leisure' },
    ],
  },
  {
    id: 'family',
    label: 'Family & Childcare',
    key: 'family',
    offerings: [
      { name: 'Babysitting', desc: 'Trusted babysitters and sitters' },
      { name: 'Childcare search', desc: 'Childcare search and booking' },
      { name: 'Family support services', desc: 'Senior care and family support' },
      { name: 'Activity kits', desc: 'Activity kits for kids' },
    ],
  },
  {
    id: 'pets',
    label: 'Pets',
    key: 'pets',
    offerings: [
      { name: 'Dog walking', desc: 'On-demand dog walking' },
      { name: 'Pet sitting', desc: 'Pet sitting and boarding' },
      { name: 'Pet supplies', desc: 'Pet food, supplies, and accessories' },
      { name: 'Grooming', desc: 'Pet grooming services' },
    ],
  },
  {
    id: 'wellness',
    label: 'Wellness & Fitness',
    key: 'wellness',
    offerings: [
      { name: 'Fitness classes', desc: 'Classes at studios near you' },
      { name: 'Home workouts', desc: 'Home fitness programs and equipment access' },
      { name: 'Meditation apps', desc: 'Meditation, sleep, and stress relief' },
      { name: 'Nutrition tracking', desc: 'Nutrition and activity tracking' },
    ],
  },
  {
    id: 'learning',
    label: 'Learning',
    key: 'learning',
    offerings: [
      { name: 'Online courses', desc: 'Courses from universities and instructors' },
      { name: 'Professional skills', desc: 'Business and professional skill-building' },
      { name: 'Language learning', desc: 'Language learning apps' },
      { name: 'Technical training', desc: 'Developer and technical skill courses' },
    ],
  },
  {
    id: 'shopping',
    label: 'Shopping',
    key: 'shopping',
    offerings: [
      { name: 'Everyday essentials', desc: 'Credits for everyday essentials' },
      { name: 'Household goods', desc: 'Household goods and supplies' },
      { name: 'Apparel', desc: 'Clothing and footwear' },
      { name: 'Handmade and gifts', desc: 'Handmade and unique gifts' },
    ],
  },
  {
    id: 'home',
    label: 'Home & Lifestyle',
    key: 'home',
    offerings: [
      { name: 'Home cleaning', desc: 'Home cleaning services' },
      { name: 'Handyman services', desc: 'Repairs and handyman help' },
      { name: 'Home goods', desc: 'Furniture and home decor' },
      { name: 'Eco-friendly products', desc: 'Natural home and cleaning products' },
    ],
  },
  {
    id: 'commuter',
    label: 'Commuter',
    key: 'commuter',
    offerings: [
      { name: 'Transit passes', desc: 'Public transit passes and credits' },
      { name: 'Parking', desc: 'Parking reservations and credits' },
      { name: 'EV charging', desc: 'EV charging network credits' },
      { name: 'Bike and scooter share', desc: 'Bike and scooter sharing credits' },
    ],
  },
  {
    id: 'beauty',
    label: 'Beauty & Personal Care',
    key: 'beauty',
    offerings: [
      { name: 'Skincare', desc: 'Skincare products and subscriptions' },
      { name: 'Hair care', desc: 'Hair care products' },
      { name: 'Cosmetics', desc: 'Cosmetics and fragrance' },
      { name: 'Salon services', desc: 'Salon and grooming services' },
    ],
  },
  {
    id: 'sports',
    label: 'Sports & Recreation',
    key: 'sports',
    offerings: [
      { name: 'Athletic gear', desc: 'Athletic shoes and apparel' },
      { name: 'Outdoor equipment', desc: 'Outdoor and adventure gear' },
      { name: 'Performance wear', desc: 'Performance athletic wear' },
      { name: 'Sustainable footwear', desc: 'Sustainable footwear and apparel' },
    ],
  },
  {
    id: 'tech',
    label: 'Tech & Productivity',
    key: 'tech',
    offerings: [
      { name: 'Productivity software', desc: 'Workspace and note-taking tools' },
      { name: 'Creative tools', desc: 'Design and creative software' },
      { name: 'Cloud storage', desc: 'Cloud storage and file sharing' },
      { name: 'Security tools', desc: 'Password management and security tools' },
    ],
  },
  {
    id: 'giving',
    label: 'Charitable Giving',
    key: 'giving',
    offerings: [
      { name: 'Donations to nonprofits', desc: 'Donate to any registered nonprofit' },
      { name: 'Donor-advised funds', desc: 'Donor-advised fund contributions' },
      { name: 'Community projects', desc: 'Support community projects worldwide' },
    ],
  },
  {
    id: 'budgeting',
    label: 'Budgeting & Tax Tools',
    key: 'budgeting',
    offerings: [
      { name: 'Tax filing software', desc: 'Tax preparation and filing software' },
      { name: 'Budgeting apps', desc: 'Budget tracking and planning apps' },
      { name: 'Savings tools', desc: 'Automated savings tools' },
    ],
  },
];

export default function BenefitsPage() {
  return (
    <div className="min-h-screen" style={{ background: '#faf9f7' }}>
      <Nav />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
            style={{ background: 'rgba(26,71,49,0.08)', color: '#1a4731', border: '1px solid rgba(26,71,49,0.15)' }}>
            Perks Catalog
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight mb-6">
            Perks for every lifestyle.
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-4">
            A curated catalog of lifestyle perks across 15 categories. Employees choose what fits their life and redeem it in their Jiibe account.
          </p>
          <p className="text-sm text-gray-400 max-w-xl mx-auto mb-10">
            Available perks vary by employer program and region. Contact us to see the current catalog.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map(cat => (
              <a key={cat.id} href={`#${cat.id}`}
                className="px-4 py-2 rounded-full text-sm font-semibold transition-all hover:opacity-80 border border-gray-200 bg-white text-gray-700 hover:border-gray-300">
                {cat.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto space-y-20">
          {categories.map(cat => (
            <div key={cat.id} id={cat.id}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-2 h-2 rounded-full" style={{ background: '#1a4731' }} />
                <h2 className="text-2xl font-bold text-gray-900">{cat.label}</h2>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {cat.offerings.map(offering => (
                  <div key={offering.name} className="benefit-card p-6 group">
                    <div className="flex items-start gap-4 mb-4">
                      <CategoryIcon category={cat.key} size={48} />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-gray-900 text-sm">{offering.name}</h3>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed">{offering.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How redemption works */}
      <section className="py-20 px-6 section-ivory">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How redemption works</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Select a perk', desc: 'Employee selects a perk in their Jiibe account.' },
              { step: '2', title: 'Confirmation', desc: 'Jiibe confirms the selection in the employee\'s account.' },
              { step: '3', title: 'Budget deduction', desc: 'The amount is deducted from the employer-funded monthly perks budget.' },
              { step: '4', title: 'Unused budget returns', desc: 'Unused budget returns to the employer at the end of the month.' },
            ].map(item => (
              <div key={item.step} className="glass-card p-6">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white mb-4"
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

      {/* CTA */}
      <section className="py-20 px-6" style={{ background: '#1a2e1f' }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to give your team real perks?</h2>
          <p className="text-gray-400 mb-8 text-lg">Set a budget. Employees choose. HR sees aggregate participation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/demo"
              className="px-8 py-4 text-base font-semibold text-gray-900 rounded-2xl bg-white hover:opacity-90 transition-all">
              Book a Demo
            </Link>
            <Link href="/login"
              className="px-8 py-4 text-base font-semibold text-white rounded-2xl transition-all hover:bg-white/10"
              style={{ border: '1px solid rgba(255,255,255,0.3)' }}>
              Employee Login
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
