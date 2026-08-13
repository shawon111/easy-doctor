const CHAMBER_IMAGE_FALLBACK =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuClqAmDaJPpOfZQ4FtOCxYCJZ9HEPYePeXq5yVOmzi_wx6xuD_yD906ZhIowQriEDGsscyHACNI7GovoqA6bO8nWSXhL73ndsnA8SDc72Ofpt3aRu5Xon7LU1omSI5ZCU51AqIU93HV5tmOvu_yb8J-93u4Rko6RsUqc3niWwOxHWUCyFjIa4AAsrhJnwn-FX9P2YwePI5NblitXMxUufqU50vqtmXKYl71-gQr9zRG4TFxjVRC7L93rA";

export default function ChamberTwoDark({ content = {} }) {
  const location = content.location;
  const imageSrc = content.image || CHAMBER_IMAGE_FALLBACK;

  return (
    <section className="py-[120px] px-5 md:px-16">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-5 space-y-8">
          <h2 className="font-headline-md text-headline-md text-on-surface italic">{content.heading}</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">{content.subheading}</p>
          {location ? (
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-tertiary mt-1">location_on</span>
                <div>
                  <h4 className="font-label-caps text-label-caps text-on-surface">{location.name}</h4>
                  <p className="text-sm text-on-surface-variant">{location.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-tertiary mt-1">schedule</span>
                <div>
                  <h4 className="font-label-caps text-label-caps text-on-surface">Visiting Hours</h4>
                  <p className="text-sm text-on-surface-variant">{location.hours}</p>
                </div>
              </div>
            </div>
          ) : null}
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
              alt={content.imageAlt || ""}
              src={imageSrc}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
