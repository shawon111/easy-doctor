const QUICK_LINKS = ["Home", "About", "Medical Services", "Patient Portal"];
const PATIENT_RESOURCES = ["Clinic Locations", "Privacy Policy", "New Patient Forms", "FAQs"];

export default function FooterOne() {
  return (
    <footer className="bg-surface-container-low w-full rounded-t-xl pt-section-padding pb-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-desktop py-stack-lg max-w-container-max mx-auto">
        <div className="col-span-1 md:col-span-1">
          <div className="text-headline-md font-headline-md font-bold text-primary mb-6">
            Dr. Julian Vance
          </div>
          <p className="text-on-surface-variant text-body-md mb-6">
            Precision medicine for a life lived to its fullest potential. Clinical
            elegance, personal connection.
          </p>
          <div className="flex gap-4">
            <a
              className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-all"
              href="#"
            >
              <span className="material-symbols-outlined">share</span>
            </a>
            <a
              className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-all"
              href="#"
            >
              <span className="material-symbols-outlined">call</span>
            </a>
          </div>
        </div>

        <div className="col-span-1">
          <h4 className="font-bold text-on-surface mb-6">Quick Links</h4>
          <ul className="space-y-4">
            {QUICK_LINKS.map((link) => (
              <li key={link}>
                <a className="text-on-surface-variant hover:text-primary transition-colors text-body-md" href="#">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-1">
          <h4 className="font-bold text-on-surface mb-6">Patient Resources</h4>
          <ul className="space-y-4">
            {PATIENT_RESOURCES.map((link) => (
              <li key={link}>
                <a className="text-on-surface-variant hover:text-primary transition-colors text-body-md" href="#">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-1">
          <h4 className="font-bold text-on-surface mb-6">Office Hours</h4>
          <p className="text-on-surface-variant text-body-md mb-2">Mon - Fri: 8:00 - 18:00</p>
          <p className="text-on-surface-variant text-body-md mb-2">Saturday: 9:00 - 13:00</p>
          <p className="text-on-surface-variant text-body-md mb-6">Sunday: Closed</p>
          <div className="bg-primary/5 p-4 rounded-xl border border-primary/10">
            <p className="text-primary font-bold text-body-md">Urgent Care Line:</p>
            <p className="text-on-surface font-headline-md">+1 (555) 012-3456</p>
          </div>
        </div>
      </div>

      <div className="max-w-container-max mx-auto px-margin-desktop pt-8 mt-8 border-t border-outline-variant/30 text-center">
        <p className="text-on-surface-variant text-body-md">
          © 2024 Dr. Julian Vance. All Rights Reserved. Clinical Elegance in Practice.
        </p>
      </div>
    </footer>
  );
}
