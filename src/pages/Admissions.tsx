import { useState } from "react";
import { FileText, CheckCircle, Download, ArrowRight, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { saveApplication } from "@/lib/storage";

const applicationSchema = z.object({
  studentName: z.string().trim().min(2, "Student name is required").max(100),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  gender: z.enum(["male", "female"], { required_error: "Please select gender" }),
  previousSchool: z.string().trim().max(100).optional(),
  gradeApplying: z.string().min(1, "Please select a grade"),
  parentName: z.string().trim().min(2, "Parent/Guardian name is required").max(100),
  relationship: z.string().trim().min(2, "Relationship is required").max(50),
  phone: z.string().trim().min(10, "Valid phone number is required").max(15),
  email: z.string().trim().email("Valid email is required").max(255).optional().or(z.literal("")),
  address: z.string().trim().min(5, "Address is required").max(300),
  additionalInfo: z.string().trim().max(500).optional(),
});

type ApplicationFormData = z.infer<typeof applicationSchema>;

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
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
  });

  const onSubmit = (data: ApplicationFormData) => {
    saveApplication(data as any);
    toast({
      title: "Application Submitted!",
      description: `Thank you, ${data.parentName}. We have received the application for ${data.studentName}. We will contact you soon.`,
    });
    setSubmitted(true);
    reset();
  };

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

      {/* Application Form */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <SectionHeading
            title="Student Application Form"
            subtitle="Fill out the form below to apply for admission at Ondati Primary School."
          />

          {submitted ? (
            <div className="text-center bg-primary/10 border border-primary/30 rounded-lg p-8">
              <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="font-heading font-bold text-xl text-foreground mb-2">Application Received!</h3>
              <p className="text-muted-foreground mb-6">
                Thank you for applying. We will review the application and contact you shortly.
              </p>
              <Button onClick={() => setSubmitted(false)} variant="outline">
                Submit Another Application
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 bg-card border border-border rounded-lg p-6 md:p-8">
              {/* Student Information */}
              <div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-4 border-b border-border pb-2">
                  Student Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="studentName">Full Name *</Label>
                    <Input id="studentName" placeholder="e.g. John Otieno" {...register("studentName")} />
                    {errors.studentName && <p className="text-sm text-destructive">{errors.studentName.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                    <Input id="dateOfBirth" type="date" {...register("dateOfBirth")} />
                    {errors.dateOfBirth && <p className="text-sm text-destructive">{errors.dateOfBirth.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label>Gender *</Label>
                    <RadioGroup onValueChange={(val) => setValue("gender", val as "male" | "female")} className="flex gap-4 pt-1">
                      <div className="flex items-center gap-2">
                        <RadioGroupItem value="male" id="male" />
                        <Label htmlFor="male" className="cursor-pointer">Male</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <RadioGroupItem value="female" id="female" />
                        <Label htmlFor="female" className="cursor-pointer">Female</Label>
                      </div>
                    </RadioGroup>
                    {errors.gender && <p className="text-sm text-destructive">{errors.gender.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="gradeApplying">Grade Applying For *</Label>
                    <Select onValueChange={(val) => setValue("gradeApplying", val)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select grade" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="PP1">Pre-Primary 1 (PP1)</SelectItem>
                        <SelectItem value="PP2">Pre-Primary 2 (PP2)</SelectItem>
                        <SelectItem value="Grade 1">Grade 1</SelectItem>
                        <SelectItem value="Grade 2">Grade 2</SelectItem>
                        <SelectItem value="Grade 3">Grade 3</SelectItem>
                        <SelectItem value="Grade 4">Grade 4</SelectItem>
                        <SelectItem value="Grade 5">Grade 5</SelectItem>
                        <SelectItem value="Grade 6">Grade 6</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.gradeApplying && <p className="text-sm text-destructive">{errors.gradeApplying.message}</p>}
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="previousSchool">Previous School (if transferring)</Label>
                    <Input id="previousSchool" placeholder="Name of previous school" {...register("previousSchool")} />
                  </div>
                </div>
              </div>

              {/* Parent/Guardian Information */}
              <div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-4 border-b border-border pb-2">
                  Parent / Guardian Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="parentName">Full Name *</Label>
                    <Input id="parentName" placeholder="e.g. Mary Akinyi" {...register("parentName")} />
                    {errors.parentName && <p className="text-sm text-destructive">{errors.parentName.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="relationship">Relationship to Student *</Label>
                    <Input id="relationship" placeholder="e.g. Mother, Father, Guardian" {...register("relationship")} />
                    {errors.relationship && <p className="text-sm text-destructive">{errors.relationship.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" type="tel" placeholder="e.g. 0710790013" {...register("phone")} />
                    {errors.phone && <p className="text-sm text-destructive">{errors.phone.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="e.g. parent@email.com" {...register("email")} />
                    {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="address">Residential Address *</Label>
                    <Textarea id="address" placeholder="Village, Location, Sub County" {...register("address")} />
                    {errors.address && <p className="text-sm text-destructive">{errors.address.message}</p>}
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="space-y-2">
                <Label htmlFor="additionalInfo">Additional Information</Label>
                <Textarea
                  id="additionalInfo"
                  placeholder="Any medical conditions, special needs, or other relevant information"
                  {...register("additionalInfo")}
                />
              </div>

              <Button type="submit" size="lg" className="w-full font-heading font-bold text-base" disabled={isSubmitting}>
                <Send className="w-4 h-4 mr-2" /> Submit Application
              </Button>
            </form>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 text-center">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Need Help?"
            subtitle="Contact us if you have any questions about the admission process."
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
