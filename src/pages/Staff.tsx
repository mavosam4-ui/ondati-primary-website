import { Mail, User } from "lucide-react";
import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import SectionHeading from "@/components/SectionHeading";

interface StaffMember {
  name: string;
  role: string;
  message: string;
}

const staffMembers: StaffMember[] = [
  {
    name: "Md.Eucabeth Onono",
    role: "Head Teacher",
    message:
      "Education is the most powerful tool we can use to change the world. Together, we are shaping the leaders of tomorrow.",
  },
  {
    name: "Mr.Nicanor Onjwang'",
    role: "Deputy Head Teacher",
    message:
      "Every child has unique potential. Our mission is to discover and nurture that potential every single day.",
  },
  {
    name: "Mr. Tonic Ongor",
    role: "Senior Teacher – Upper Primary",
    message:
      "I believe in creating an engaging learning environment where students are excited to learn and grow.",
  },
  {
    name: "Mrs. Seline Ochieng",
    role: "Senior Teacher – Lower Primary",
    message:
      "The early years are the most critical. I am dedicated to giving our youngest learners the best start possible.",
  },
  {
    name: "Mr. Wickliff Ouma",
    role: "Mathematics & Science Teacher",
    message:
      "Mathematics is the language of the universe. I strive to make it accessible and enjoyable for every student.",
  },
  {
    name: "Mrs. Joyce Ouma",
    role: "Languages Teacher",
    message:
      "Language is the foundation of all learning. Strong communication skills open doors to endless opportunities.",
  },
  {
    name: "Mrs.Salone Otieno",
    role: "Sports & Physical Education",
    message:
      "A healthy body nurtures a healthy mind. Sports teach teamwork, discipline, and perseverance.",
  },
  {
    name: "Mrs. Mildren Ouma",
    role: "Creative Arts Teacher",
    message:
      "Art allows children to express themselves freely. Every child is an artist in their own unique way.",
  },
];

const Staff = () => {
  return (
    <Layout>
      <PageBanner
        title="Our Staff"
        subtitle="Meet the dedicated team of educators committed to your child's success."
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Message from Our Staff"
            subtitle="Our teachers bring passion, experience, and dedication to every classroom."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {staffMembers.map((member, i) => (
              <div
                key={i}
                className="bg-card rounded-lg border border-border shadow-sm overflow-hidden hover:shadow-md transition-shadow opacity-0 animate-fade-in"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="hero-gradient p-6 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-card/20 flex items-center justify-center">
                    <User className="w-10 h-10 text-primary-foreground" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-bold text-foreground text-base">
                    {member.name}
                  </h3>
                  <p className="text-secondary font-semibold text-sm mb-3">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed italic">
                    "{member.message}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Staff;
