export default function ChamberTwoDark() {
  return (
    <section className="py-[120px] px-5 md:px-16">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-5 space-y-8">
          <h2 className="font-headline-md text-headline-md text-on-surface italic">The Harley Street Registry</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Located in the historic heart of London&apos;s medical excellence, our chambers provide a serene, private
            environment for executive consultation.
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-tertiary mt-1">location_on</span>
              <div>
                <h4 className="font-label-caps text-label-caps text-on-surface">Private Chambers</h4>
                <p className="text-sm text-on-surface-variant">
                  12B Harley Street, Marylebone
                  <br />
                  London W1G 9PG
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-tertiary mt-1">schedule</span>
              <div>
                <h4 className="font-label-caps text-label-caps text-on-surface">Visiting Hours</h4>
                <p className="text-sm text-on-surface-variant">
                  Mon – Fri: 09:00 - 18:00
                  <br />
                  Emergency Executive Line: 24/7
                </p>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="text-tertiary font-label-caps text-label-caps border-b border-tertiary pb-1 hover:text-white hover:border-white transition-all"
          >
            Get Directions
          </button>
        </div>

        <div className="md:col-span-7 h-[450px] rounded-xl overflow-hidden glass-card relative group">
          <div className="w-full h-full bg-surface-container-high relative overflow-hidden">
            <img
              className="w-full h-full object-cover grayscale opacity-50 contrast-125 group-hover:scale-105 transition-transform duration-[4000ms]"
              alt="A minimalist, stylized map of the Harley Street area in London."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuClqAmDaJPpOfZQ4FtOCxYCJZ9HEPYePeXq5yVOmzi_wx6xuD_yD906ZhIowQriEDGsscyHACNI7GovoqA6bO8nWSXhL73ndsnA8SDc72Ofpt3aRu5Xon7LU1omSI5ZCU51AqIU93HV5tmOvu_yb8J-93u4Rko6RsUqc3niWwOxHWUCyFjIa4AAsrhJnwn-FX9P2YwePI5NblitXMxUufqU50vqtmXKYl71-gQr9zRG4TFxjVRC7L93rA"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
