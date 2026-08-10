export default function FooterTwo() {
  return (
    <footer className="bg-white border-t border-[#c4c6cf]/30">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-[24px] px-[20px] md:px-[64px] py-[120px] max-w-[1200px] mx-auto">
        <div className="md:col-span-4 space-y-6">
          <div className="dstwo-headline-md text-[#2563eb]">Dr. Specialist</div>
          <p className="dstwo-body-md text-[#44474e] max-w-xs">
            Excellence in precision medicine and executive healthcare for the
            global elite.
          </p>
        </div>

        <div className="md:col-span-2 space-y-4">
          <h4 className="dstwo-label-caps text-[#1a1c1e] uppercase">Practice</h4>
          <ul className="space-y-2 dstwo-body-md text-[#44474e]">
            <li><a className="hover:text-[#2563eb] transition-colors" href="#">Our Approach</a></li>
            <li><a className="hover:text-[#2563eb] transition-colors" href="#">Specializations</a></li>
            <li><a className="hover:text-[#2563eb] transition-colors" href="#">Clinical Research</a></li>
            <li><a className="hover:text-[#2563eb] transition-colors" href="#">Patient Stories</a></li>
          </ul>
        </div>

        <div className="md:col-span-2 space-y-4">
          <h4 className="dstwo-label-caps text-[#1a1c1e] uppercase">Resources</h4>
          <ul className="space-y-2 dstwo-body-md text-[#44474e]">
            <li><a className="hover:text-[#2563eb] transition-colors" href="#">Patient Portal</a></li>
            <li><a className="hover:text-[#2563eb] transition-colors" href="#">Privacy Policy</a></li>
            <li><a className="hover:text-[#2563eb] transition-colors" href="#">Terms of Service</a></li>
            <li><a className="hover:text-[#2563eb] transition-colors" href="#">Careers</a></li>
          </ul>
        </div>

        <div className="md:col-span-4 space-y-4 md:text-right">
          <h4 className="dstwo-label-caps text-[#1a1c1e] uppercase">
            International Hotline
          </h4>
          <p className="dstwo-headline-sm text-[#1a1c1e]">+44 (0) 20 7946 0123</p>
          <div className="flex md:justify-end gap-4 mt-6">
            <a
              className="w-10 h-10 rounded-full border border-[#c4c6cf] flex items-center justify-center hover:border-[#2563eb] text-[#44474e] hover:text-[#2563eb] transition-all"
              href="#"
            >
              <span className="dstwo-material-symbols text-sm">language</span>
            </a>
            <a
              className="w-10 h-10 rounded-full border border-[#c4c6cf] flex items-center justify-center hover:border-[#2563eb] text-[#44474e] hover:text-[#2563eb] transition-all"
              href="#"
            >
              <span className="dstwo-material-symbols text-sm">mail</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-[20px] md:px-[64px] py-8 border-t border-[#c4c6cf]/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs dstwo-label-caps text-[#44474e]/60">
        <div>© 2024 Dr. Specialist. Excellence in Precision Medicine.</div>
        <div className="flex gap-8">
          <span>GMC Reg No. 1234567</span>
          <span>Fellow of the Royal Society of Medicine</span>
        </div>
      </div>
    </footer>
  );
}
