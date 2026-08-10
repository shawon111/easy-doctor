export default function ChamberTwo() {
  return (
    <section className="py-[120px] px-[20px] md:px-[64px] bg-white">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-[24px] items-center">
        <div className="md:col-span-5 space-y-8">
          <h2 className="dstwo-headline-md text-[#1a1c1e] italic">
            The Harley Street Registry
          </h2>
          <p className="dstwo-body-md text-[#44474e]">
            Located in the historic heart of London&apos;s medical excellence,
            our chambers provide a serene, private environment for executive
            consultation.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <span className="dstwo-material-symbols text-[#2563eb] mt-1">
                location_on
              </span>
              <div>
                <h4 className="dstwo-label-caps text-[#1a1c1e]">Private Chambers</h4>
                <p className="text-sm text-[#44474e]">
                  12B Harley Street, Marylebone
                  <br />
                  London W1G 9PG
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="dstwo-material-symbols text-[#2563eb] mt-1">
                schedule
              </span>
              <div>
                <h4 className="dstwo-label-caps text-[#1a1c1e]">Visiting Hours</h4>
                <p className="text-sm text-[#44474e]">
                  Mon – Fri: 09:00 - 18:00
                  <br />
                  Emergency Executive Line: 24/7
                </p>
              </div>
            </div>
          </div>

          <button className="text-[#2563eb] dstwo-label-caps border-b border-[#2563eb] pb-1 hover:text-[#1a1c1e] hover:border-[#1a1c1e] transition-all">
            Get Directions
          </button>
        </div>

        <div className="md:col-span-7 h-[450px] rounded-[16px] overflow-hidden dstwo-glass-card relative group border-[#c4c6cf] shadow-lg">
          <div className="w-full h-full bg-[#e6e8ea] relative overflow-hidden">
            <img
              className="w-full h-full object-cover grayscale opacity-30 contrast-125 group-hover:scale-105 transition-transform duration-[4000ms]"
              alt="Vector map of Harley Street area."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuClqAmDaJPpOfZQ4FtOCxYCJZ9HEPYePeXq5yVOmzi_wx6xuD_yD906ZhIowQriEDGsscyHACNI7GovoqA6bO8nWSXhL73ndsnA8SDc72Ofpt3aRu5Xon7LU1omSI5ZCU51AqIU93HV5tmOvu_yb8J-93u4Rko6RsUqc3niWwOxHWUCyFjIa4AAsrhJnwn-FX9P2YwePI5NblitXMxUufqU50vqtmXKYl71-gQr9zRG4TFxjVRC7L93rA"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#f7f9fb] via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
