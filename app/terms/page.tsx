import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern AI Mantra's website, design, development, and AI services.",
};

export default function TermsPage() {
  return (
    <main className="site-container section-padding max-w-3xl">
      <Link href="/" className="nav-link">
        ← Back to home
      </Link>
      <h1 className="mt-8 text-4xl font-semibold tracking-tight text-slate-900">Terms of Service</h1>
      <p className="mt-3 text-sm text-slate-500">Last updated: January 2026</p>

      <div className="mt-10 grid gap-8 text-sm leading-7 text-slate-600">
        <section>
          <h2 className="text-xl font-semibold text-slate-900">1. Our Services</h2>
          <p className="mt-2">
            AI Mantra provides website design and development, AI automation, custom software, and UI/UX design
            services. Each project begins with an agreed scope, timeline, and investment shared with you in writing
            before work starts.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">2. Proposals & Payments</h2>
          <p className="mt-2">
            Proposals are valid for the period stated within them. Projects typically begin after an advance payment,
            with the remaining amount split across agreed milestones. Work outside the agreed scope is quoted
            separately.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">3. Revisions & Timelines</h2>
          <p className="mt-2">
            Each project includes the revision rounds described in its proposal. Timelines depend on timely feedback,
            content, and approvals from your side; delays in these may shift the delivery date.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">4. Intellectual Property</h2>
          <p className="mt-2">
            Once the project is fully paid for, ownership of the final deliverables created for you is transferred to
            you. AI Mantra retains the right to showcase the work in our portfolio unless you ask us not to.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">5. Third-Party Tools</h2>
          <p className="mt-2">
            Some projects use third-party services (such as hosting, domains, APIs, or AI providers). Their own terms,
            pricing, and availability apply, and we are not responsible for changes made by those providers.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">6. Cancellation</h2>
          <p className="mt-2">
            Either party may end a project with written notice. Work completed up to that point remains payable, and
            completed deliverables for paid work are handed over to you.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">7. Limitation of Liability</h2>
          <p className="mt-2">
            Our services are provided with professional care. To the maximum extent permitted by law, AI Mantra is not
            liable for indirect or consequential losses arising from the use of delivered work or third-party services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">8. Contact</h2>
          <p className="mt-2">
            Questions about these terms? Email us at{" "}
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
