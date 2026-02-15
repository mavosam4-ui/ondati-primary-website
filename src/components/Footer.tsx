import { Link } from "react-router-dom";
import { GraduationCap, Phone, MapPin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="hero-gradient text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-secondary-foreground" />
              </div>
              <span className="font-heading font-extrabold text-lg">
                Ondati Primary
              </span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Nurturing future leaders through quality education, moral values,
              and community engagement in Homabay County, Kenya.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-base mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "About Us", path: "/about" },
                { label: "Academics", path: "/academics" },
                { label: "Admissions", path: "/admissions" },
                { label: "Events", path: "/events" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-base mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                <span className="text-primary-foreground/80">0710 790 013</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                <span className="text-primary-foreground/80">
                  info@ondatiprimary.ac.ke
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span className="text-primary-foreground/80">
                  Ondati Village, Koguta Location, Pala Ward, Ndhiwa Sub County,
                  Homabay County
                </span>
              </li>
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h4 className="font-heading font-bold text-base mb-4">Academics</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/academics"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  Lower Primary
                </Link>
              </li>
              <li>
                <Link
                  to="/academics"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  Middle Primary
                </Link>
              </li>
              <li>
                <Link
                  to="/academics"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  Upper Primary
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-10 pt-6 text-center text-sm text-primary-foreground/60">
          <p>
            © {new Date().getFullYear()} Ondati Primary School. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
