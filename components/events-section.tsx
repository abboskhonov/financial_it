import Link from "next/link";
import Image from "next/image";
import { IconArrowRight, IconMapPin, IconCalendar } from "@tabler/icons-react";

const events = [
  {
    id: "1",
    title: "AI in Risk Management for Financial Institutions",
    date: "Jun 15, 2025",
    location: "London, UK",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop",
    href: "/events/ai-risk-management-financial-institutions",
  },
  {
    id: "2",
    title: "10th Edition Operational Resilience for Financial Institutions",
    date: "Jul 22, 2025",
    location: "New York, USA",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&h=300&fit=crop",
    href: "/events/10th-edition-operational-resilience-financial-institutions",
  },
  {
    id: "3",
    title: "Africa Payments & RegTech Forum",
    date: "Aug 5, 2025",
    location: "Cape Town, South Africa",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&h=300&fit=crop",
    href: "/events/africa-payments-regtechforum",
  },
];

export function EventsSection() {
  return (
    <section className="mt-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-heading text-sm font-semibold uppercase tracking-[0.55px]">
          Upcoming Events
        </h2>
        <Link
          href="/events"
          className="flex items-center gap-1 font-sans text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          View all
          <IconArrowRight size={14} stroke={1.5} />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <article key={event.id} className="group">
            <Link href={event.href} className="block">
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </Link>
            <div className="mt-3">
              <div className="flex items-center gap-3 mb-1.5 font-sans text-[10px] font-medium uppercase tracking-[0.55px] text-muted-foreground">
                <span className="flex items-center gap-1">
                  <IconCalendar size={12} stroke={1.5} />
                  {event.date}
                </span>
                <span className="flex items-center gap-1">
                  <IconMapPin size={12} stroke={1.5} />
                  {event.location}
                </span>
              </div>
              <Link href={event.href}>
                <h3 className="font-heading text-sm font-semibold leading-snug tracking-tight group-hover:text-muted-foreground transition-colors line-clamp-2">
                  {event.title}
                </h3>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
