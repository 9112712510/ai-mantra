import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How AI Mantra collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <main className="site-container section-padding max-w-3xl">
      <Link href="/" className="nav-link">
        ← Back to home
      </Link>
      <h1 className="mt-8 text-4xl font-semibold tracking-tight text-slate-900">Privacy Policy</h1>
      <p className="mt-3 text-sm text-slate-500">Last updated: January 2026</p>

      <div className="mt-10 grid gap-8 text-sm leading-7 text-slate-600">
        <section>
          <h2 className="text-xl font-semibold text-slate-900">1. Information We Collect</h2>
          <p className="mt-2">
            When you contact us through email, WhatsApp, or our website, we may collect your name, email address, phone
            number, and any details you share about your project. We only collect what we need to respond to you and
            deliver our services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">2. How We Use Your Information</h2>
          <p className="mt-2">We use your information to:</p>
          <ul className="mt-2 list-disc pl-6">
            <li>Respond to your enquiries and consultation requests</li>
            <li>Prepare proposals, scopes, and project timelines</li>
            <li>Deliver, support, and improve our services</li>
            <li>Send important project or service updates</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">3. Cookies & Analytics</h2>
          <p className="mt-2">
            Our website may use basic analytics to understand how visitors use the site. These tools use cookies and
            collect anonymous, aggregated data such as pages visited and general device information.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">4. Data Sharing</h2>
          <p className="mt-2">
            We do not sell or rent your personal information. We only share data with trusted tools required to run our
            business (such as email or hosting providers), and only to the extent needed to serve you.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">5. Data Security & Retention</h2>
          <p className="mt-2">
            We take reasonable steps to protect your information and keep it only for as long as needed to fulfil the
            purposes above, or as required by law.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">6. Your Rights</h2>
          <p className="mt-2">
            You can ask us to access, correct, or delete your personal information at any time by contacting us.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">7. Contact</h2>
          <p className="mt-2">
            Questions about this policy? Email us at{" "}
            <a href="mailto:prathameshkanse09@gmail.com" className="text-blue-600 underline">
              prathameshkanse09@gmail.com
            </a>{" "}
            or call{" "}
            <a href="tel:+919112712510" className="text-blue-600 underline">
              +91 91127 12510
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
