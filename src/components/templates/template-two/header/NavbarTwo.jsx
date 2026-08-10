"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useRef } from "react";

export default function NavbarTwo() {
  // get the slug from the URL
  const params = useParams();
  const { slug } = params;
  const preUrl = `doctor/${slug}`;

  // handle scroll to hide and show the navbar
  const navRef = useRef(null);
  const lastScroll = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const nav = navRef.current;
      if (!nav) return;
      const currentScroll = window.pageYOffset;

      if (currentScroll <= 0) {
        nav.classList.remove("shadow-lg");
      } else if (currentScroll > lastScroll.current) {
        nav.style.transform = "translateY(-100%)";
      } else {
        nav.style.transform = "translateY(0)";
        nav.classList.add("shadow-lg");
      }
      lastScroll.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className="bg-white/80 backdrop-blur-xl border-b border-[#c4c6cf] shadow-sm flex justify-between items-center px-[20px] md:px-[64px] h-20 w-full z-50 top-0 sticky transition-transform duration-300"
    >
      <div className="dstwo-headline-sm text-[#1a1c1e] tracking-tight">
        Dr. Specialist
      </div>

      <div className="hidden md:flex space-x-8">
        <Link className="dstwo-label-caps text-[#44474e] hover:text-[#2563eb] transition-colors duration-300" href={`/${preUrl}/`}>
          Home
        </Link>
        <Link className="dstwo-label-caps text-[#44474e] hover:text-[#2563eb] transition-colors duration-300" href={`/${preUrl}/about`}>
          About
        </Link>
        <Link className="dstwo-label-caps text-[#44474e] hover:text-[#2563eb] transition-colors duration-300" href={`/${preUrl}/services`}>
          Services
        </Link>
      </div>

      <Link className="bg-[#2563eb] text-white dstwo-label-caps px-6 py-3 rounded-[8px] dstwo-luxury-btn-hover transition-all active:scale-95" href={`/${preUrl}/appointment`}>
        Book Appointment
      </Link>
    </nav>
  );
}
