const CHAMBERS = [
  {
    label: "Main Suite",
    title: "Diagnostic Wing",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDk24SNQthuLjBKAmJ1CFMXV88nS99mQydKhBIX19e-BQnvnnIolq1QRxjWynCTrgJ7vIKNkCUT9nVFtn0D9qtj1gIrCFPLQe5JATCqU1FbGxYBohr3FE-aJTJzKBxS1b1eFZ5pdscBc3BHs2riBsNhVYrjyCEIMHGbTbosyEMJ3rdxHTRdm2G-dZYkQsD3dqZ5idDBEx2ePba9rew7eBCtbTSuggQCI0dsFXnrP7y1qrG3ipbR1glbQA",
    alt: "Medical examination room",
    className: "",
  },
  {
    label: "Comfort",
    title: "Executive Patient Lounge",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDiwPrxudWT4RfHTl82-Y_5SIOEW4BDpFAD9Ixx0szciSMvTRYqJzMiJ8tpoi7duC_r1sb1J9Iw0Wt1UlyK_vwI7WbYFcn6nNCoeSZg3qdmeor7MERuK__tbSbTQDZJm2EEKI9ejJrT7Yh4N2HDOg56H4oCKQg8WF3qC7RIpBEpzsSPVBurFv8IL1wvxw1MIaK7lIPBUgIM3FFmVUxvULavZPbXjjBQ9PR4fXVqXGtD-Y5kk2uf9W-8Hg",
    alt: "Patient waiting lounge",
    className: "lg:col-span-2",
  },
  {
    label: "Digital",
    title: "Tele-Health Hub",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAcl6mLzqZjssiesaJobXZzV-IYQ9l6Epm1-lBlKvz7wTYIn7jjhUIbk6BK6emIH9kuOUiSIDDf4un4dxNmK3gKJk1KP4T8cuUR5BLHYJCKo8Er2-mdgPQmsVYCwOn0LIhe6BYGVO9KiDhpoGacHSn4CeGANC8ROw96KJnrKDkYNF17Vl-ks1AI1mJc-fa84xx22g81XCBsnsYTH5440VcfLZkxhnZxLwMrfd4ifZEvX3jZjdzF6ssd6A",
    alt: "Telemedicine hub",
    className: "",
  },
];

export default function AppointmentChambersThree() {
  return (
    <section className="mb-24">
      <h2 className="font-headline-lg text-headline-lg mb-10 text-center">World-Class Chambers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {CHAMBERS.map((chamber) => (
          <div
            key={chamber.title}
            className={`relative h-64 md:h-80 rounded-2xl overflow-hidden group border border-outline-variant ${chamber.className}`}
          >
            <img
              alt={chamber.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src={chamber.image}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="font-label-sm text-label-sm text-primary-container mb-1 uppercase">{chamber.label}</p>
              <h4 className="font-headline-md text-[20px]">{chamber.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
