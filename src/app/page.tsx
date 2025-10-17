// app/page.tsx
import LatestPosts from "@/components/blogcard";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen font-mono bg-gradient-to-b from-neutral-950 via-neutral-900 to-black text-neutral-50">
      {/* Container */}
      <div className="mx-auto max-w-6xl px-6 py-16">
        {/* Header */}
        <header className="flex items-center justify-between pb-6">
          <div className="flex items-center gap-3">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-violet-500 font-bold text-black">
              G
            </div>
            <div>
              <h1 className="text-lg font-semibold">Gript / SideHustle Newsletter</h1>
              <p className="text-xs text-neutral-400">
                Actionable guides for makers & hustlers
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-6 sm:flex">
            <Link
              href="/About"
              className="text-sm text-neutral-300 hover:text-white"
            >
              About
            </Link>
            <Link
              href="/products"
              className="text-sm text-neutral-300 hover:text-white"
            >
              Products
            </Link>
            <Link
              href="/courses"
              className="text-sm text-neutral-300 hover:text-white"
            >
              Courses
            </Link>
            <Link
              href="/contact"
              className="rounded-md bg-neutral-800/50 px-3 py-2 text-sm hover:bg-neutral-800"
            >
              Contact
            </Link>
          </nav>

          <div className="sm:hidden">
            <Link href="/menu" className="text-sm text-neutral-300">
              Menu
            </Link>
          </div>
        </header>

        {/* Hero */}
        <section className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
              Build a Sidehustle that earns —{" "}
              <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
                Let Hunt or Be Hunted
              </span>
            </h2>
            <p className="mt-4 max-w-xl text-neutral-300">
              Practical guides, tested growth strategies, micro-products, and
              simple systems to turn content into income — affiliate, digital
              products, courses, and freelance leads.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="#how"
                className="rounded-md bg-blue-500 px-5 py-2 text-sm font-medium text-black hover:opacity-95"
              >
                How it works
              </Link>
              <Link
                href="#monetize"
                className="rounded-md border border-neutral-700 px-5 py-2 text-sm text-neutral-200 hover:bg-neutral-800/50"
              >
                Monetize ideas
              </Link>
              <a
                href="#newsletter"
                className="rounded-md px-5 py-2 text-sm ring-1 ring-neutral-700 hover:bg-neutral-800/40"
              >
                Join newsletter
              </a>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-neutral-400">
                <span className="inline-block h-8 w-8 rounded-full bg-neutral-800/40" />
                <span>7+ subscribers</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-neutral-400">
                <span className="inline-block h-8 w-8 rounded-full bg-neutral-800/40" />
                <span>20+ income guides</span>
              </div>
            </div>
          </div>

          {/* Hero visual / quick stats */}
          <aside className="order-first md:order-last">
            <div className="rounded-xl border border-neutral-800/60 bg-neutral-900/30 p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-neutral-400">
                    Monthly revenue example ( The best Notifiaction Ever )
                  </p>
                  <p className="mt-2 text-2xl font-semibold">
                    $1,750
                    <span className="text-sm text-neutral-400"> / month</span>
                  </p>
                </div>
                <div className="rounded-md bg-neutral-800/60 px-3 py-2 text-xs">
                  Case study
                </div>
              </div>

              <ul className="mt-4 flex flex-col gap-2 text-sm text-neutral-300">
                <li className="flex items-center justify-between">
                  <span>Affiliate links</span>
                  <strong>$820</strong>
                </li>
                <li className="flex items-center justify-between">
                  <span>Mini courses</span>
                  <strong>$560</strong>
                </li>
                <li className="flex items-center justify-between">
                  <span>Freelance leads</span>
                  <strong>$370</strong>
                </li>
              </ul>

              <div className="mt-4 border-t border-neutral-800/40 pt-3 text-xs text-neutral-400">
                <span>Based on a small niche; Let Hunt or Be Hunted</span>
              </div>
            </div>
          </aside>
        </section>

        {/* Latest posts */}
        <section className="mt-5 mb-5">
        <LatestPosts />
        </section>

        {/* Features / Value props */}
        <section className="mt-12 grid gap-6 md:grid-cols-3">
          <FeatureCard
            title="Actionable guides"
            desc="Step-by-step tutorials you can apply in a weekend — SEO, funnels, and growth loops."
          />
          <FeatureCard
            title="Build product-first"
            desc="From mini-courses to templates — monetize while you build an audience."
          />
          <FeatureCard
            title="Measured growth"
            desc="Simple analytics + experiment framework. Double down on what converts."
          />
        </section>

        {/* How it works */}
        <section
          id="how"
          className="mt-14 rounded-xl border border-neutral-800/40 bg-neutral-900/40 p-6"
        >
          <h3 className="text-xl font-semibold">
            How it works — 3 simple steps
          </h3>
          <ol className="mt-4 grid gap-4 md:grid-cols-3">
            <Step
              number={1}
              title="Choose a niche"
              text="Pick a small niche with clear buyer intent. Validate with keyword search and simple polls."
            />
            <Step
              number={2}
              title="Publish mini-guides"
              text="Write focused, high-intent guides and add a small product or lead magnet."
            />
            <Step
              number={3}
              title="Monetize & iterate"
              text="Add affiliate links, create a micro-course, sell templates, and track conversions."
            />
          </ol>
        </section>

        {/* Monetization ideas */}
        <section id="monetize" className="mt-14 grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Monetization paths</h3>
            <p className="text-neutral-300">
              You don’t need a massive audience. Combine two or three small
              income streams for reliable revenue.
            </p>

            <ul className="mt-4 grid gap-3">
              <MonetizeItem
                title="Affiliate guides"
                desc="Honest product reviews and how-to posts with affiliate links."
              />
              <MonetizeItem
                title="Mini-courses"
                desc="Record short courses and sell them for $10–50 each."
              />
              <MonetizeItem
                title="Templates & tools"
                desc="Sell downloadable templates, checklists, or Notion kits."
              />
            </ul>

            <div className="mt-4 flex gap-3">
              <Link
                href="/products"
                className="rounded-md bg-violet-500 px-4 py-2 text-sm font-medium text-black"
              >
                View products
              </Link>
              <Link
                href="/consult"
                className="rounded-md border border-neutral-700 px-4 py-2 text-sm"
              >
                Hire me
              </Link>
            </div>
          </div>

          <div className="rounded-xl border border-neutral-800/40 bg-gradient-to-b from-neutral-900/40 to-transparent p-6">
            <h4 className="text-sm font-medium text-neutral-300">
              Example funnel
            </h4>
            <div className="mt-3 space-y-3 text-sm text-neutral-300">
              <p>
                <strong>
                  Lead magnet → Email series → Mini-course → Upsell
                </strong>
              </p>
              <p>
                Start with a targeted checklist, capture emails, then nurture
                and sell a paid course or template.
              </p>
            </div>

            <div className="mt-6">
              <div className="rounded-md bg-neutral-800/40 p-4">
                <p className="text-sm text-neutral-300">Conversion snapshot</p>
                <div className="mt-2 flex items-end gap-4">
                  <div className="text-center">
                    <p className="text-lg font-semibold">3.2%</p>
                    <p className="text-xs text-neutral-400">lead → buyer</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-semibold">18%</p>
                    <p className="text-xs text-neutral-400">open rate</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-semibold">$15</p>
                    <p className="text-xs text-neutral-400">avg order</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mt-14">
          <h3 className="text-lg font-semibold">What readers say</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <Testimonial
              name="Sara K."
              quote="I turned my blog into a small side-income in 3 months using the mini-course approach."
            />
            <Testimonial
              name="Bilal R."
              quote="Clear, practical, and focused. The templates saved me hours."
            />
            <Testimonial
              name="Nora F."
              quote="The email sequences taught here doubled my conversions."
            />
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 border-t border-neutral-800/40 pt-8 text-sm text-neutral-400">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row">
            <div>
              <h4 className="text-sm font-semibold text-white">Gript</h4>
              <p className="mt-2 max-w-sm text-xs">
                Actionable guides & micro-products for makers who want income
                from content.
              </p>
            </div>

            <div className="flex gap-6">
              <div>
                <h5 className="text-xs font-medium text-neutral-300">
                  Product
                </h5>
                <ul className="mt-2 space-y-2">
                  <li>
                    <Link href="/products" className="text-xs hover:underline">
                      Templates
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses" className="text-xs hover:underline">
                      Courses
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/affiliates"
                      className="text-xs hover:underline"
                    >
                      Affiliate Toolkit
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h5 className="text-xs font-medium text-neutral-300">
                  Company
                </h5>
                <ul className="mt-2 space-y-2">
                  <li>
                    <Link href="/about" className="text-xs hover:underline">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-xs hover:underline">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy" className="text-xs hover:underline">
                      Privacy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between border-t border-neutral-800/30 pt-6 text-xs">
            <div>© {new Date().getFullYear()} Gript — Built for makers.</div>
            <div className="flex items-center gap-3 text-neutral-400">
              <a href="#" aria-label="Twitter" className="hover:text-white">
                Twitter
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-white">
                YouTube
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-white">
                Instagram
              </a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}

/* --- Small helper components --- */

function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-lg border border-neutral-800/40 bg-neutral-900/30 p-5">
      <h4 className="text-sm font-semibold">{title}</h4>
      <p className="mt-2 text-sm text-neutral-300">{desc}</p>
    </div>
  );
}

function Step({
  number,
  title,
  text,
}: {
  number: number;
  title: string;
  text: string;
}) {
  return (
    <li className="rounded-md border border-neutral-800/40 bg-neutral-900/30 p-4">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-800/50 font-medium">
          {number}
        </div>
        <div>
          <h5 className="text-sm font-semibold">{title}</h5>
          <p className="mt-1 text-sm text-neutral-300">{text}</p>
        </div>
      </div>
    </li>
  );
}

function MonetizeItem({ title, desc }: { title: string; desc: string }) {
  return (
    <li className="rounded-md border border-neutral-800/30 bg-neutral-900/20 p-3">
      <h6 className="text-sm font-medium">{title}</h6>
      <p className="mt-1 text-sm text-neutral-300">{desc}</p>
    </li>
  );
}

function Testimonial({ name, quote }: { name: string; quote: string }) {
  return (
    <blockquote className="rounded-md border border-neutral-800/30 bg-neutral-900/20 p-4 text-sm">
      <p className="text-neutral-300">“{quote}”</p>
      <footer className="mt-3 text-xs text-neutral-400">— {name}</footer>
    </blockquote>
  );
}

// import LatestPosts from "@/components/blogcard";

// export default function Page() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <h1 className="text-4xl font-bold">Welcome to the Home Page</h1>
//        < LatestPosts/>
//     </main>
//   );
// }
