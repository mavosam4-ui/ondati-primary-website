import { BookOpen, Award, Image as ImageIcon } from "lucide-react";
import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import classroomImage from "@/assets/classroom.jpg";
import studentsImage from "@/assets/students-playing.jpg";

interface AcademicSection {
  id: string;
  title: string;
  grades: string;
  overview: string;
  curriculum: string[];
  excellence: string;
  image: string;
}

const sections: AcademicSection[] = [
  {
    id: "lower",
    title: "Lower Primary",
    grades: "Grade 1 – Grade 3",
    overview:
      "Our Lower Primary section provides a nurturing environment where young learners build a strong foundation in literacy, numeracy, and social skills through the Competency-Based Curriculum (CBC).",
    curriculum: [
      "Literacy & Indigenous Languages",
      "Kiswahili Language Activities",
      "English Language Activities",
      "Mathematical Activities",
      "Environmental Activities",
      "Creative Arts",
      "Religious Education",
    ],
    excellence:
      "Our lower primary learners consistently demonstrate strong foundational skills, with 90% meeting or exceeding benchmark assessments. We emphasize play-based learning and discovery.",
    image: classroomImage,
  },
  {
    id: "middle",
    title: "Middle Primary",
    grades: "Grade 4 – Grade 5",
    overview:
      "The Middle Primary section bridges foundational learning with more advanced academic concepts, developing critical thinking and collaborative skills under the CBC framework.",
    curriculum: [
      "English",
      "Kiswahili",
      "Mathematics",
      "Science & Technology",
      "Social Studies",
      "Agriculture & Nutrition",
      "Creative Arts & Sports",
      "Religious Education",
    ],
    excellence:
      "Middle primary students engage in science fairs, mathematics competitions, and inter-school debates. Our integrated approach ensures holistic development.",
    image: studentsImage,
  },
  {
    id: "upper",
    title: "Upper Primary",
    grades: "Grade 6 – Grade 8",
    overview:
      "Upper Primary prepares students for the transition to junior secondary school through rigorous academics, leadership development, and co-curricular activities.",
    curriculum: [
      "English",
      "Kiswahili",
      "Mathematics",
      "Integrated Science",
      "Social Studies & CRE",
      "Pre-Technical Studies",
      "Agriculture",
      "Creative Arts & Sports",
      "Business Studies",
    ],
    excellence:
      "Our upper primary students achieve outstanding results in KCPE and national competitions. We pride ourselves on a 95% transition rate to quality secondary schools across Kenya.",
    image: classroomImage,
  },
];

const Academics = () => {
  return (
    <Layout>
      <PageBanner
        title="Academics"
        subtitle="Our comprehensive curriculum prepares students for success at every stage of their educational journey."
        backgroundImage={classroomImage}
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="lower" className="w-full">
            <TabsList className="grid w-full max-w-lg mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="lower" className="font-heading font-bold">Lower Primary</TabsTrigger>
              <TabsTrigger value="middle" className="font-heading font-bold">Middle Primary</TabsTrigger>
              <TabsTrigger value="upper" className="font-heading font-bold">Upper Primary</TabsTrigger>
            </TabsList>

            {sections.map((section) => (
              <TabsContent key={section.id} value={section.id} className="animate-fade-in">
                <div className="max-w-5xl mx-auto">
                  {/* Header */}
                  <div className="text-center mb-12">
                    <h2 className="font-heading font-extrabold text-3xl text-foreground">{section.title}</h2>
                    <p className="text-secondary font-heading font-bold text-lg mt-1">{section.grades}</p>
                  </div>

                  {/* Overview */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <BookOpen className="w-6 h-6 text-primary" />
                        <h3 className="font-heading font-bold text-xl text-foreground">Overview</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{section.overview}</p>
                    </div>
                    <div>
                      <img
                        src={section.image}
                        alt={`${section.title} students`}
                        className="rounded-lg shadow-md w-full h-56 object-cover"
                      />
                    </div>
                  </div>

                  {/* Curriculum */}
                  <div className="bg-card rounded-lg p-8 border border-border shadow-sm mb-12">
                    <div className="flex items-center gap-3 mb-6">
                      <BookOpen className="w-6 h-6 text-primary" />
                      <h3 className="font-heading font-bold text-xl text-foreground">Curriculum Subjects</h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {section.curriculum.map((subject, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 bg-muted rounded-md p-3"
                        >
                          <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                          <span className="text-foreground font-medium text-sm">{subject}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Academic Excellence */}
                  <div className="bg-primary/5 rounded-lg p-8 border border-primary/20">
                    <div className="flex items-center gap-3 mb-4">
                      <Award className="w-6 h-6 text-secondary" />
                      <h3 className="font-heading font-bold text-xl text-foreground">Academic Excellence</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{section.excellence}</p>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default Academics;
