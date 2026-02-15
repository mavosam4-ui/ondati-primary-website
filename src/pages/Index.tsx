import { Link } from "react-router-dom";
import {
  BookOpen,
  Users,
  Calendar,
  ClipboardList,
  ArrowRight,
  Phone,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import QuickLinkCard from "@/components/QuickLinkCard";
import SectionHeading from "@/components/SectionHeading";
import heroImage from "@/assets/hero-school.jpg";
import classroomImage from "@/assets/classroom.jpg";
import studentsImage from "@/assets/students-playing.jpg";

const quickLinks = [
  {
    icon: ClipboardList,
    title: "Admissions",
    description:
      "Apply for enrollment and learn about our admission requirements.",
    to: "/admissions",
  },
  {
    icon: BookOpen,
    title: "Academics",
    description: "Explore our curriculum from Lower to Upper Primary levels.",
    to: "/academics",
  },
  {
    icon: Calendar,
    title: "Events",
    description:
      "Stay updated with school events, activities, and important dates.",
    to: "/events",
  },
  {
    icon: Users,
    title: "Our Staff",
    description: "Meet the dedicated teachers and staff shaping our students.",
    to: "/staff",
  },
];

const highlights = [
  { number: "500+", label: "Students Enrolled" },
  { number: "25+", label: "Dedicated Teachers" },
  { number: "30+", label: "Years of Excellence" },
  { number: "95%", label: "KCPE Pass Rate" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/30" />
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-2xl">
            <div className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold mb-6 animate-fade-in">
              🏫 Welcome to Ondati Primary School
            </div>
            <h1
              className="font-heading font-black text-4xl md:text-6xl lg:text-7xl text-card mb-6 leading-tight animate-fade-in"
              style={{ animationDelay: "100ms" }}
            >
              Nurturing <span className="text-secondary">Future</span> Leaders
            </h1>
            <p
              className="text-card/80 text-lg md:text-xl mb-8 leading-relaxed animate-fade-in max-w-lg"
              style={{ animationDelay: "200ms" }}
            >
              Providing quality education rooted in moral values and community
              spirit in the heart of Homabay County, Kenya.
            </p>
            <div
              className="flex flex-wrap gap-4 animate-fade-in"
              style={{ animationDelay: "300ms" }}
            >
              <Button
                asChild
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-heading font-bold text-base px-8"
              >
                <Link to="/admissions">
                  Apply Now <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-card/30 text-card hover:bg-card/10 font-heading font-bold text-base px-8"
              >
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="hero-gradient py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {highlights.map((stat, i) => (
              <div
                key={i}
                className="opacity-0 animate-fade-in"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="font-heading font-black text-3xl md:text-4xl text-secondary">
                  {stat.number}
                </div>
                <div className="text-primary-foreground/80 text-sm font-medium mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Explore Our School"
            subtitle="Discover what makes Ondati Primary School a great place for your child's education."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, i) => (
              <QuickLinkCard key={link.to} {...link} delay={i * 100} />
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-alt py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                title="About Our School"
                subtitle=""
                centered={false}
              />
              <p className="text-muted-foreground leading-relaxed mb-4">
                Ondati Primary School is located in the scenic Ondati Village,
                Koguta Location, Pala Ward, Ndhiwa Sub County, Homabay County.
                For over three decades, we have been committed to providing
                quality education that empowers learners to become responsible
                citizens.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our mission is to nurture every child's potential through a
                balanced curriculum, dedicated teaching, and strong community
                partnerships.
              </p>
              <Button asChild className="font-heading font-bold">
                <Link to="/about">
                  Read Our Story <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src={classroomImage}
                alt="Students learning in classroom"
                className="rounded-lg shadow-md w-full h-48 object-cover"
              />
              <img
                src={studentsImage}
                alt="Students playing outdoors"
                className="rounded-lg shadow-md w-full h-48 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <SectionHeading
            title="Get in Touch"
            subtitle="We'd love to hear from you. Visit us or give us a call."
          />
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="flex items-center gap-3 text-foreground">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <span className="font-medium">0710 790 013</span>
            </div>
            <div className="flex items-center gap-3 text-foreground">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <span className="font-medium">
                Ondati Village, Homabay County
              </span>
            </div>
          </div>
          <div className="mt-8">
            <Button
              asChild
              size="lg"
              className="font-heading font-bold text-base px-8"
            >
              <Link to="/contact">
                Contact Us <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
