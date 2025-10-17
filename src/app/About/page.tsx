// app/about/page.tsx
import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-900 to-black text-neutral-50">
      <div className="mx-auto max-w-6xl px-6 py-16">
        {/* Header / Back link */}
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-violet-500 font-bold text-black">
              G
            </div>
            <div>
              <h1 className="text-lg font-semibold">About Gript</h1>
              <p className="text-xs text-neutral-400">Actionable guides for makers & hustlers</p>
            </div>
          </div>

          <nav className="hidden items-center gap-6 sm:flex">
            <Link href="/" className="text-sm text-neutral-300 hover:text-white">Home</Link>
            <Link href="/products" className="text-sm text-neutral-300 hover:text-white">Products</Link>
            <Link href="/contact" className="rounded-md bg-neutral-800/50 px-3 py-2 text-sm hover:bg-neutral-800">Contact</Link>
          </nav>
        </div>

        {/* Hero */}
        <section className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
              We help creators turn expertise into small, reliable income streams
            </h2>
            <p className="mt-4 max-w-xl text-neutral-300">
              Gript started as a notebook of experiments — quick guides, small paid products, and newsletter funnels that worked. We share what actually converts so you can build a sustainable side income.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="#mission" className="rounded-md bg-blue-500 px-5 py-2 text-sm font-medium text-black hover:opacity-95">Our mission</Link>
              <Link href="#team" className="rounded-md border border-neutral-700 px-5 py-2 text-sm text-neutral-200 hover:bg-neutral-800/50">Meet the team</Link>
              <a href="#contact" className="rounded-md px-5 py-2 text-sm ring-1 ring-neutral-700 hover:bg-neutral-800/40">Work with us</a>
            </div>
          </div>

          <aside className="order-first md:order-last">
            <div className="rounded-xl border border-neutral-800/60 bg-neutral-900/30 p-5 shadow-sm">
              <p className="text-xs text-neutral-400">In short</p>
              <p className="mt-2 text-lg font-semibold">Practical → Small bets → Repeat</p>
              <p className="mt-3 text-sm text-neutral-300">
                We test tiny product ideas, document results, and publish lean playbooks so you can replicate them without guesswork.
              </p>
            </div>
          </aside>
        </section>

        {/* Mission / Vision */}
        <section id="mission" className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-neutral-800/40 bg-neutral-900/30 p-6">
            <h3 className="text-xl font-semibold">Our mission</h3>
            <p className="mt-3 text-neutral-300">
              To help creators and small business builders turn knowledge into income — with minimal overhead and clear, repeatable steps.
            </p>

            <ul className="mt-4 grid gap-3 text-sm text-neutral-300">
              <li>Share experiments with honest results.</li>
              <li>Ship small products that solve a niche problem.</li>
              <li>Teach systems (not hacks) that scale predictably.</li>
            </ul>
          </div>

          <div className="rounded-xl border border-neutral-800/40 bg-neutral-900/20 p-6">
            <h3 className="text-xl font-semibold">Our vision</h3>
            <p className="mt-3 text-neutral-300">
              A world where creators can earn steady income without VC pressure — through focused content, useful products, and ethical monetization.
            </p>
            <div className="mt-4 flex gap-3">
              <Link href="/newsletter" className="rounded-md bg-violet-500 px-4 py-2 text-sm font-medium text-black">Join newsletter</Link>
              <Link href="/products" className="rounded-md border border-neutral-700 px-4 py-2 text-sm">See products</Link>
            </div>
          </div>
        </section>

        {/* Story / Timeline */}
        <section className="mt-14">
          <h3 className="text-xl font-semibold">Our story</h3>
          <p className="mt-3 max-w-3xl text-neutral-300">
            Gript began as a handful of experiments — a guide here, a mini-course there. After validating a few small funnels and seeing repeatable revenue, we decided to share the process. We focus on reproducible micro-products, honest affiliate reviews, and short courses priced for quick wins.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <TimelineItem year="2022" title="First mini-course" desc="A short course that earned its first $1,200 in two months." />
            <TimelineItem year="2023" title="Newsletter launch" desc="Built an email sequence that converted readers into paying customers." />
            <TimelineItem year="2024" title="Product toolkit" desc="Released templates and kits that saved readers hours of work." />
          </div>
        </section>

        {/* Team */}
        <section id="team" className="mt-14 rounded-xl border border-neutral-800/40 bg-neutral-900/30 p-6">
          <h3 className="text-xl font-semibold">Team</h3>
          <p className="mt-3 text-neutral-300">Small, distributed, and focused on shipping. We value clarity, speed, and honesty.</p>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <PersonCard name="Ashar" role="Founder & Writer" bio="Builds, writes, and experiments. Focused on funnels, micro-products & growth." />
            <PersonCard name="Ayesha" role="Product" bio="Designs templates and course experiences that convert." />
            <PersonCard name="Omar" role="Community & Ops" bio="Handles partnerships, support, and behind-the-scenes ops." />
          </div>
        </section>

        {/* Values */}
        <section className="mt-14 grid gap-6 md:grid-cols-3">
          <ValueCard title="Transparency" text="Share results — wins and losses — so others can learn faster." />
          <ValueCard title="Practicality" text="Actionable, short guides that produce outcomes, not just theory." />
          <ValueCard title="Sustainability" text="Build income streams that last without burnout." />
        </section>

        {/* FAQ */}
        <section className="mt-14 rounded-xl border border-neutral-800/40 bg-neutral-900/20 p-6">
          <h3 className="text-xl font-semibold">FAQ</h3>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <Faq q="Who is Gript for?" a="Creators, freelancers, and small business builders who want repeatable income from content." />
            <Faq q="Do you offer coaching?" a="We offer occasional consults and productized services — see /consult for availability." />
            <Faq q="Can I sell my product on your site?" a="We occasionally feature partner products. Fill the contact form and we'll review." />
            <Faq q="Where do you get your case study data?" a="From experiments we run on small niche blogs and customer feedback." />
          </div>
        </section>

        {/* Contact / CTA */}
        <section id="contact" className="mt-14 rounded-xl border border-neutral-800/40 bg-neutral-900/30 p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-lg font-semibold">Want to collaborate or sponsor?</h3>
              <p className="text-sm text-neutral-300">We partner on ethical affiliate placements, sponsorships, and micro-product collaborations.</p>
            </div>

            <div className="mt-3 md:mt-0">
              <Link href="/contact" className="rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-black">Contact us</Link>
            </div>
          </div>
        </section>

        {/* Footer small */}
        <footer className="mt-16 border-t border-neutral-800/40 pt-8 text-sm text-neutral-400">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row">
            <div>
              <h4 className="text-sm font-semibold text-white">Gript</h4>
              <p className="mt-2 max-w-sm text-xs">Actionable guides & micro-products for makers who want income from content.</p>
            </div>

            <div className="flex gap-6">
              <div>
                <h5 className="text-xs font-medium text-neutral-300">Company</h5>
                <ul className="mt-2 space-y-2">
                  <li><Link href="/about" className="text-xs hover:underline">About</Link></li>
                  <li><Link href="/contact" className="text-xs hover:underline">Contact</Link></li>
                  <li><Link href="/privacy" className="text-xs hover:underline">Privacy</Link></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between border-t border-neutral-800/30 pt-6 text-xs">
            <div>© {new Date().getFullYear()} Gript — Built for makers.</div>
            <div className="flex items-center gap-3 text-neutral-400">
              <a href="#" aria-label="Twitter" className="hover:text-white">Twitter</a>
              <a href="#" aria-label="YouTube" className="hover:text-white">YouTube</a>
              <a href="#" aria-label="Instagram" className="hover:text-white">Instagram</a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}

/* --- Small helper UI components (kept in same file for convenience) --- */

function TimelineItem({ year, title, desc }: { year: string; title: string; desc: string }) {
  return (
    <div className="rounded-md border border-neutral-800/30 bg-neutral-900/20 p-4">
      <p className="text-xs text-neutral-400">{year}</p>
      <h4 className="mt-2 text-sm font-semibold">{title}</h4>
      <p className="mt-1 text-sm text-neutral-300">{desc}</p>
    </div>
  );
}

function PersonCard({ name, role, bio }: { name: string; role: string; bio: string }) {
  return (
    <div className="rounded-md border border-neutral-800/30 bg-neutral-900/20 p-4">
      <div className="flex items-center gap-3">
        <div className="h-12 w-12 rounded-full bg-neutral-800/40" aria-hidden />
        <div>
          <h5 className="text-sm font-semibold">{name}</h5>
          <p className="text-xs text-neutral-400">{role}</p>
        </div>
      </div>
      <p className="mt-3 text-sm text-neutral-300">{bio}</p>
    </div>
  );
}

function ValueCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-lg border border-neutral-800/30 bg-neutral-900/20 p-4">
      <h4 className="text-sm font-semibold">{title}</h4>
      <p className="mt-2 text-sm text-neutral-300">{text}</p>
    </div>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <details className="rounded-md border border-neutral-800/30 bg-neutral-900/10 p-3">
      <summary className="cursor-pointer text-sm font-medium">{q}</summary>
      <p className="mt-2 text-sm text-neutral-300">{a}</p>
    </details>
  );
}
