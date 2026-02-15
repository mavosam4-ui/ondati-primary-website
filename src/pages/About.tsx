import { MapPin, Target, Eye, Heart } from "lucide-react";
import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import SectionHeading from "@/components/SectionHeading";
import aerialImage from "@/assets/school-aerial.jpg";

const timelineEvents = [
  {
    year: "1990",
    title: "School Founded",
    description:
      "Ondati Primary School was established to serve the local community in Koguta Location.",
  },
  {
    year: "1998",
    title: "First KCPE Candidates",
    description:
      "Our first class sat for the Kenya Certificate of Primary Education, achieving commendable results.",
  },
  {
    year: "2005",
    title: "Infrastructure Expansion",
    description:
      "New classrooms and a library were constructed to accommodate the growing student population.",
  },
  {
    year: "2012",
    title: "ICT Integration",
    description:
      "The school introduced computer literacy programs to prepare students for the digital age.",
  },
  {
    year: "2018",
    title: "Sports Excellence",
    description:
      "Students represented Homabay County in national athletics and football competitions.",
  },
  {
    year: "2024",
    title: "Continued Growth",
    description:
      "Ondati Primary continues to excel in academics and community development under CBC curriculum.",
  },
];

const values = [
  {
    icon: Target,
    title: "Excellence",
    description:
      "We strive for the highest standards in education and character development.",
  },
  {
    icon: Eye,
    title: "Integrity",
    description:
      "We uphold honesty, transparency, and accountability in all our endeavors.",
  },
  {
    icon: Heart,
    title: "Community",
    description:
      "We foster strong bonds between students, parents, teachers, and the wider community.",
  },
];

const About = () => {
  return (
    <Layout>
      <PageBanner
        title="About Us"
        subtitle="Discover our mission, history, and the values that guide Ondati Primary School."
        backgroundImage={aerialImage}
      />

      {/* Mission & Vision */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-card rounded-lg p-8 border border-border shadow-sm">
              <div className="w-12 h-12 rounded-lg hero-gradient flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground mb-3">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide quality, inclusive education that nurtures the
                intellectual, moral, social, and physical development of every
                learner, preparing them to become responsible and productive
                citizens of Kenya and the world.
              </p>
            </div>
            <div className="bg-card rounded-lg p-8 border border-border shadow-sm">
              <div className="w-12 h-12 rounded-lg warm-gradient flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground mb-3">
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To be a centre of excellence in primary education, producing
                well-rounded individuals who contribute positively to society
                and embrace lifelong learning.
              </p>
            </div>
          </div>

          <div className="text-center mb-8">
            <p className="font-heading font-bold text-lg text-primary">
              School Motto
            </p>
            <p className="font-heading font-extrabold text-2xl text-foreground mt-2">
              "Strive for excellence"
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-alt py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Core Values"
            subtitle="The principles that guide our school community every day."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <div
                key={i}
                className="text-center opacity-0 animate-fade-in"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div className="w-16 h-16 rounded-full hero-gradient flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our History"
            subtitle="A journey of growth, dedication, and academic excellence."
          />
          <div className="max-w-3xl mx-auto">
            {timelineEvents.map((event, i) => (
              <div
                key={i}
                className="flex gap-6 mb-8 last:mb-0 opacity-0 animate-slide-in-left"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full hero-gradient flex items-center justify-center text-primary-foreground font-heading font-bold text-sm shrink-0">
                    {event.year}
                  </div>
                  {i < timelineEvents.length - 1 && (
                    <div className="w-0.5 flex-1 bg-border mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="font-heading font-bold text-lg text-foreground">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground mt-1">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="section-alt py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Location"
            subtitle="Find us in the heart of Homabay County."
          />
          <div className="max-w-2xl mx-auto bg-card rounded-lg p-8 border border-border shadow-sm text-center">
            <MapPin className="w-10 h-10 text-primary mx-auto mb-4" />
            <div className="space-y-1 text-muted-foreground">
              <p className="font-semibold text-foreground text-lg">
                Ondati Primary School
              </p>
              <p>Ondati Village, Koguta Location</p>
              <p>Pala Ward, Ndhiwa Sub County</p>
              <p>Homabay County, Kenya</p>
            </div>
            <div className="mt-6 rounded-lg overflow-hidden border border-border">
              <iframe
                title="Ondati Primary School Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127672.0!2d34.4!3d-0.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwNDUnMDAuMCJTIDM0wrAyNCcwMC4wIkU!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
