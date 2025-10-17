// components/LatestPosts.tsx
import React from "react";
import Link from "next/link";

type Post = {
  id: string;
  title: string;
  excerpt: string;
  date: string; // ISO date string
  tags: string[];
};

export default function LatestPosts() {

const posts: Post[] = [
    {
      id: "page_1",

      title: "Ultimate Guide: How to Start a Social Media Agency as a Side Hustle or Startup and Earn Big",
      excerpt:
        "Discover the step-by-step process to launch your own social media agency, even with limited time and resources. Learn how to attract clients, build a strong portfolio, and scale your business for maximum profits.",
      date: "2025-09-01",
      tags: ["Social Media Agency"],
    },
    {
      id: "page_2",
      title: "Ultimate Guide: How to Start an Online Course Business as a Side Hustle or Startup and Earn Big",
      excerpt:
        "Learn how to create, market, and sell online courses effectively. This guide covers everything from course creation to building a loyal student base and maximizing your revenue streams.",
      date: "2025-08-20",
      tags: ["Online Course Business"],
    },
    {
      id: "page_3",
      title: "Ultimate Guide: How to Start a Freelance Hub as a Side Hustle or Startup and Earn Big",
      excerpt:
        "Explore the essentials of starting a freelance hub, including finding talented freelancers, managing projects, and attracting clients to build a thriving business.",
      date: "2025-07-15",
      tags: ["Freelance Hub"],
    },
    {
      id: "page_4",
      title: "Ultimate Guide: How to Start a Niche E-Commerce Store as a Side Hustle or Startup and Earn Big",
      excerpt:
        "Dive into the world of niche e-commerce with this comprehensive guide. Learn how to identify profitable niches, source products, and implement effective marketing strategies to grow your online store.",
      date: "2025-07-15",
      tags: ["E-Commerce"],
    },
    {
      id: "page_5",
      title: "Ultimate Guide: How to Start a Mobile App Business as a Side Hustle or Startup and Earn Big",
      excerpt:
        "Unlock the potential of mobile app development with this guide. From idea validation to app launch and marketing, discover how to create a successful mobile app business.",
      date: "2025-07-15",
      tags: ["Mobile App Business"],
    },
    {
      id: "page_6",
      title: "Ultimate Guide: How to Start a YouTube Studio as a Side Hustle or Startup and Earn Big",
      excerpt:
        "Master the art of video content creation and channel management with this guide. Learn how to produce engaging videos, grow your subscriber base, and monetize your YouTube channel effectively.",
      date: "2025-07-15",
      tags: ["Youtube Studio"],
    },
    {
      id: "page_7",
      title: "Ultimate Guide: How to Start a Podcast Business as a Side Hustle or Startup and Earn Big",
      excerpt:
        "Step into the world of podcasting with this comprehensive guide. Learn how to plan, produce, and promote your podcast to build a loyal audience and generate income.",
      date: "2025-07-15",
      tags: ["Podcast Business"],
    },
    {
      id: "page_8",
      title: "Ultimate Guide: How to Start a Business or Side Hustle to Earn Big –  digital products  With or Without Investment",
      excerpt:
        "Explore various business ideas and side hustles that can be started with minimal or no investment. This guide provides practical tips and strategies to help you succeed in your entrepreneurial journey.",
      date: "2025-07-15",
      tags: [" digital products "],
    },
    {
      id: "page_9",
      title: "Ultimate Guide to Building a Blogging Empire: Start a Business With or Without Investment",
      excerpt:
        "Learn how to create a successful blogging business from scratch. This guide covers content creation, audience building, monetization strategies, and more to help you turn your blog into a profitable venture.",
      date: "2025-07-15",
      tags: ["Blogging"],
    },
    {
      id: "page_10",
      title: "Launching Your AI Tools Startup: A No-BS Guide to Bootstrapping or Funding Your Way to Big Bucks",
      excerpt:
        "Discover how to start an AI tools business with practical advice on bootstrapping, securing funding, and scaling your startup for success in the competitive AI market.",
      date: "2025-07-15",
      tags: ["AI Tools"],
    },
    {
      id: "page_11",
      title: "Launching Your Web & SaaS Startup: A No-Nonsense Guide to Building a Cash-Generating Business",
      excerpt:
        "Learn the essentials of launching a successful web and SaaS startup. This guide provides actionable steps for product development, customer acquisition, and revenue generation to help you build a thriving business.",
      date: "2025-07-15",
      tags: ["AI & Saas Tools"],
    },
    {
      id: "page_12",
      title: "Ultimate Guide: How to Start an AI Chatbot Business as a Side Hustle or Startup and Earn Big",
      excerpt:
        "Discover the steps to launch an AI chatbot business, from concept to deployment. Learn how to attract clients, customize solutions, and scale your operations for maximum profitability.",
      date: "2025-07-15",
      tags: ["AI Chatbot Business"],
    },
    {
      id: "page_13",
      title: "Ultimate Guide to Starting a Cybersecurity Firm: Build a Business With or Without Investment",
      excerpt:
        "Learn how to establish a cybersecurity firm from the ground up. This guide covers essential topics such as service offerings, client acquisition, and industry best practices to help you succeed in the cybersecurity market.",
      date: "2025-07-15",
      tags: ["Cybersecurity"],
    },
    {
      id: "page_14",
      title: "Ultimate Guide to Starting a Data Insights Business: Launch Your Side Hustle or Startup With or Without Investment",
      excerpt:
        "Discover how to start a data insights business, offering valuable analytics and insights to clients. This guide provides practical steps for service development, marketing, and scaling your business.",
      date: "2025-07-15",
      tags: ["Data Insights"],
    },
    {
      id: "page_15",
      title: "Ultimate Guide to Starting an AR/VR Business: Build a Side Hustle or Startup With or Without Investment",
      excerpt:
        "Explore the opportunities in the AR/VR industry with this comprehensive guide. Learn how to create immersive experiences, attract clients, and grow your AR/VR business successfully.",
      date: "2025-07-15",
      tags: ["AR/VR"],
    },
    {
      id: "page_16",
      title: "Ultimate Guide: How to Start a Branding Agency as a Side Hustle or Startup and Earn Big",
      excerpt:
        "Discover the essentials of launching a branding agency, from developing brand strategies to attracting clients. This guide provides actionable steps to help you build a successful branding business.",
      date: "2025-07-15",
      tags: ["Branding Agency"],
    },
    {
      id: "page_17",
      title: "Ultimate Guide: How to Start a Virtual Assistant Business as a Side Hustle or Startup and Earn Big",
      excerpt:
        "Learn how to create a thriving virtual assistant business with this comprehensive guide. Discover strategies for client acquisition, service offerings, and business growth to maximize your earnings.",
      date: "2025-07-15",
      tags: ["Virtual Assistant Business"],
    },
    {
      id: "page_18",
      title: "Ultimate Guide: How to Start an Online Coaching Business as a Side Hustle or Startup and Earn Big",
      excerpt:
        "Explore the steps to launch a successful online coaching business. This guide covers niche selection, client acquisition, and effective coaching techniques to help you build a profitable venture.",
      date: "2025-07-15",
      tags: ["Online Coaching Business"],
    },
    {
      id: "page_19",
      title: "Ultimate Guide: How to Start an Event Planning Business as a Side Hustle or Startup and Earn Big",
      excerpt:
        "Discover how to launch an event planning business with this step-by-step guide. Learn about client management, vendor relationships, and marketing strategies to create memorable events and grow your business.",
      date: "2025-07-15",
      tags: ["Event Planning Business"],
    },
    {
      id: "page_20",
      title: "Ultimate Guide: How to Start a Subscription Box Business as a Side Hustle or Startup and Earn Big",
      excerpt:
        "Learn how to create and grow a successful subscription box business. This guide covers product selection, marketing strategies, and customer retention techniques to help you build a loyal subscriber base.",
      date: "2025-07-15",
      tags: ["Subscription Box Business"],
    },
  ];

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

  return (
    <section className="w-full max-w-5xl">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Latest posts</h2>
        <Link href="/page_one" className="text-sm text-blue-500 hover:underline">
          View all
        </Link>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.id}
            className="flex flex-col overflow-hidden rounded-lg border border-neutral-800 bg-neutral-900/50 transition hover:shadow-lg"
            aria-labelledby={`post-${post.id}-title`}
          >
           
            <div className="flex grow flex-col gap-3 p-4">
              <div className="flex items-center justify-between text-xs text-neutral-400">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <div className="flex gap-2">
                  {post.tags.slice(0, 2).map((t) => (
                    <span
                      key={t}
                      className="rounded bg-neutral-800/60 px-2 py-0.5 text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <h3
                id={`post-${post.id}-title`}
                className="text-lg font-medium leading-tight"
              >
                <Link href={`${post.id}`} className="block hover:underline">
                  {post.title}
                </Link>
              </h3>

              <p className="text-sm text-neutral-300/90 line-clamp-3">
                {post.excerpt}
              </p>

              <div className="mt-auto">
                <Link
                  href={`${post.id}`}
                  className="inline-block text-sm font-medium text-blue-400 hover:underline"
                >
                  Read more →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
