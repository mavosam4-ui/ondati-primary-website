import { Calendar, Clock, MapPin } from "lucide-react";
import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import SectionHeading from "@/components/SectionHeading";

interface SchoolEvent {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  type: "academic" | "sports" | "cultural" | "community";
}

const events: SchoolEvent[] = [
  {
    title: "Term 1 Opening Day",
    date: "February 3, 2026",
    time: "7:30 AM",
    location: "School Assembly Ground",
    description:
      "Welcome back students for the new academic year. Parents are encouraged to accompany new students.",
    type: "academic",
  },
  {
    title: "Parents' Day & Academic Workshop",
    date: "March 14, 2026",
    time: "9:00 AM – 1:00 PM",
    location: "School Main Forest",
    description:
      "Engage with teachers, review student progress, and participate in workshops on supporting learning at home.",
    type: "academic",
  },
  {
    title: "Inter-Class Sports Tournament",
    date: "March 28, 2026",
    time: "8:00 AM – 4:00 PM",
    location: "School Playground",
    description:
      "Annual inter-class competition featuring athletics, football, netball, and volleyball. All students participate.",
    type: "sports",
  },
  {
    title: "Cultural Day Celebration",
    date: "April 11, 2026",
    time: "9:00 AM – 2:00 PM",
    location: "School Assembly Ground",
    description:
      "A celebration of Kenyan cultural diversity with traditional dances, songs, food, and storytelling.",
    type: "cultural",
  },
  {
    title: "Science & Innovation Fair",
    date: "May 9, 2026",
    time: "10:00 AM – 3:00 PM",
    location: "School Classrooms",
    description:
      "Students showcase their science projects and innovations. Open to parents and community members.",
    type: "academic",
  },
  {
    title: "Community Clean-Up & Tree Planting",
    date: "June 5, 2026",
    time: "8:00 AM – 12:00 PM",
    location: "School Compound & Surroundings",
    description:
      "Join us for World Environment Day activities. Bring your own gardening tools if possible.",
    type: "community",
  },
];

const typeStyles: Record<string, string> = {
  academic: "bg-primary text-primary-foreground",
  sports: "bg-secondary text-secondary-foreground",
  cultural: "bg-accent text-accent-foreground",
  community: "bg-earth text-earth-foreground",
};

const typeLabels: Record<string, string> = {
  academic: "Academic",
  sports: "Sports",
  cultural: "Cultural",
  community: "Community",
};

const Events = () => {
  return (
    <Layout>
      <PageBanner
        title="Events & Activities"
        subtitle="Stay informed about upcoming school events, activities, and important dates."
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Upcoming Events"
            subtitle="Mark your calendar for these exciting school activities."
          />

          <div className="max-w-4xl mx-auto space-y-6">
            {events.map((event, i) => (
              <div
                key={i}
                className="bg-card rounded-lg border border-border shadow-sm overflow-hidden hover:shadow-md transition-shadow opacity-0 animate-fade-in"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="flex flex-col md:flex-row">
                  <div className="hero-gradient p-6 md:w-40 flex flex-col items-center justify-center text-center shrink-0">
                    <Calendar className="w-6 h-6 text-primary-foreground mb-2" />
                    <span className="text-primary-foreground font-heading font-bold text-sm">
                      {event.date}
                    </span>
                  </div>
                  <div className="p-6 flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="font-heading font-bold text-lg text-foreground">
                        {event.title}
                      </h3>
                      <span
                        className={`text-xs font-bold px-3 py-1 rounded-full ${typeStyles[event.type]}`}
                      >
                        {typeLabels[event.type]}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      {event.description}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" /> {event.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" /> {event.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Events;
