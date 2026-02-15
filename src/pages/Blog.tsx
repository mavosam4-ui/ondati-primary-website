import { Calendar, Clock, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import SectionHeading from "@/components/SectionHeading";

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "Preparing for KCPE 2026: Tips for Parents and Students",
    excerpt: "As the national examinations approach, here are practical strategies to help your child prepare effectively while maintaining a healthy balance.",
    date: "January 28, 2026",
    category: "Academics",
  },
  {
    title: "Ondati Primary Shines at County Athletics Competition",
    excerpt: "Our students represented the school with pride at the Homabay County athletics meet, bringing home multiple medals in track and field events.",
    date: "January 15, 2026",
    category: "Sports",
  },
  {
    title: "CBC Implementation: What Parents Need to Know",
    excerpt: "Understanding the Competency-Based Curriculum and how it benefits your child's holistic development at Ondati Primary School.",
    date: "December 10, 2025",
    category: "Education",
  },
  {
    title: "Tree Planting Day: Greening Our School Compound",
    excerpt: "Students, teachers, and community members came together to plant over 200 indigenous trees in our school compound as part of environmental conservation efforts.",
    date: "November 25, 2025",
    category: "Environment",
  },
  {
    title: "Annual Science Fair Showcases Student Innovation",
    excerpt: "From solar-powered water pumps to organic pest control solutions, our students demonstrated remarkable creativity at this year's science fair.",
    date: "October 18, 2025",
    category: "Academics",
  },
  {
    title: "New Library Opens Its Doors to Students",
    excerpt: "Thanks to generous community donations, our new library now houses over 2,000 books covering various subjects and reading levels.",
    date: "September 5, 2025",
    category: "School News",
  },
];

const categoryColors: Record<string, string> = {
  Academics: "bg-primary text-primary-foreground",
  Sports: "bg-secondary text-secondary-foreground",
  Education: "bg-accent text-accent-foreground",
  Environment: "bg-earth text-earth-foreground",
  "School News": "bg-primary text-primary-foreground",
};

const Blog = () => {
  return (
    <Layout>
      <PageBanner
        title="Blog & News"
        subtitle="Stay updated with the latest happenings at Ondati Primary School."
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <article
                key={i}
                className="bg-card rounded-lg border border-border shadow-sm overflow-hidden hover:shadow-md transition-all group opacity-0 animate-fade-in"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="hero-gradient h-2" />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${categoryColors[post.category] || "bg-muted text-muted-foreground"}`}>
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1 text-muted-foreground text-xs">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </div>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-foreground mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold group-hover:gap-2 transition-all cursor-pointer">
                    Read More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
