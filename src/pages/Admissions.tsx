import { FileText, CheckCircle, Download, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";

const requirements = [
  "Birth certificate (original and copy)",
  "Immunization records",
  "Passport-size photographs (2)",
  "Previous school report card (for transfers)",
  "Parent/Guardian National ID copy",
  "Medical fitness certificate from a registered clinic",
];

const feeItems = [
  { item: "Tuition Fee", amount: "Per Government Guidelines" },
  { item: "Activity Fee", amount: "KES 500 / Term" },
  { item: "Lunch Program (Optional)", amount: "KES 1,500 / Term" },
  { item: "Examination Fee", amount: "KES 300 / Term" },
  { item: "ICT Levy", amount: "KES 200 / Term" },
];

const steps = [
  { step: "1", title: "Get Information", description: "Visit the school or contact us to learn about our programs and requirements." },
  { step: "2", title: "Prepare Documents", description: "Gather all required documents as listed in the admission requirements below." },
  { step: "3", title: "Submit Application", description: "Fill out the application form and submit it along with required documents." },
  { step: "4", title: "Assessment", description: "New students undergo a placement assessment to determine the appropriate class level." },
  { step: "5", title: "Enrollment", description: "Upon acceptance, complete the enrollment process and pay applicable fees." },
];

const Admissions = () => {
  return (
    <Layout>
      <PageBanner
        title="Admissions"
        subtitle="Join the Ondati Primary School family. We welcome learners who are eager to grow."
      />

      {/* Process Steps */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Admission Process"
            subtitle="Follow these simple steps to enroll your child at Ondati Primary."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {steps.map((s, i) => (
              <div
                key={i}
                className="text-center opacity-0 animate-fade-in"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-full hero-gradient flex items-center justify-center text-primary-foreground font-heading font-extrabold text-xl mx-auto mb-3">
                  {s.step}
                </div>
                <h3 className="font-heading font-bold text-foreground mb-1">{s.title}</h3>
                <p className="text-muted-foreground text-sm">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="section-alt py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionHeading title="Admission Requirements" centered={false} />
              <div className="space-y-3">
                {requirements.map((req, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 bg-card rounded-md p-4 border border-border"
                  >
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground">{req}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionHeading title="Fees Structure" centered={false} />
              <div className="bg-card rounded-lg border border-border overflow-hidden">
                <div className="hero-gradient p-4">
                  <h4 className="text-primary-foreground font-heading font-bold text-center">
                    Fee Breakdown (Per Term)
                  </h4>
                </div>
                <div className="divide-y divide-border">
                  {feeItems.map((fee, i) => (
                    <div key={i} className="flex justify-between items-center p-4">
                      <span className="text-foreground font-medium">{fee.item}</span>
                      <span className="text-muted-foreground text-sm">{fee.amount}</span>
                    </div>
                  ))}
                </div>
                <div className="p-4 bg-muted text-center">
                  <p className="text-xs text-muted-foreground">
                    * Tuition is subsidized by the Government of Kenya under the Free Primary Education program.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 text-center">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Ready to Join Us?"
            subtitle="Contact us today to begin the enrollment process for your child."
          />
          <Button asChild size="lg" className="font-heading font-bold text-base px-8">
            <Link to="/contact">Contact Us <ArrowRight className="ml-2 w-4 h-4" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Admissions;
