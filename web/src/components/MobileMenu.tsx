"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { navigationLinks, siteIdentity } from "@/data/site";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close menu on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden relative z-50 flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 backdrop-blur transition hover:bg-white/20"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <div className="flex flex-col gap-1.5">
          <span
            className={`block h-0.5 w-5 bg-white transition-all duration-300 ${
              isOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-white transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-white transition-all duration-300 ${
              isOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </div>
      </button>

      {/* Backdrop Overlay */}
      {isOpen && (
        <div
          className="mobile-menu-backdrop fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Slide-in Menu Panel */}
      <div
        className={`mobile-menu-panel fixed right-0 top-0 z-50 h-full w-80 max-w-[85vw] transform bg-white shadow-2xl transition-transform duration-300 ease-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Menu Header */}
          <div className="flex items-center justify-between border-b border-gray-200 bg-gradient-to-r from-emerald-50 to-white px-6 py-5">
            <h2 className="text-lg font-bold text-gray-900">Menu</h2>
            <button
              onClick={closeMenu}
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100 text-gray-600 transition hover:bg-gray-200"
              aria-label="Close menu"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto px-4 py-6">
            <ul className="space-y-1">
              {navigationLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className="mobile-menu-link group flex items-center justify-between rounded-xl px-4 py-4 text-base font-semibold text-gray-700 transition hover:bg-emerald-50 hover:text-emerald-700"
                  >
                    <span>{item.label}</span>
                    <svg
                      className="h-5 w-5 text-gray-400 transition group-hover:translate-x-1 group-hover:text-emerald-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Footer */}
          <div className="border-t border-gray-200 bg-gradient-to-r from-emerald-50 to-white px-6 py-5">
            <Link
              href={siteIdentity.cta.href}
              onClick={closeMenu}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-emerald-600 to-emerald-700 px-6 py-3.5 text-base font-semibold text-white shadow-lg transition hover:shadow-xl"
            >
              {siteIdentity.cta.label}
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
