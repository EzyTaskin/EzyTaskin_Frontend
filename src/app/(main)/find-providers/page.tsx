"use client";
import { useState } from "react";
import ServicesProviderSearch from "src/app/(main)/find-providers/components/ServicesProviderSearch";
import ServiceCards from "src/app/(main)/find-providers/components/ServiceCards";

const allProviders = [
  {
    name: "Sparkling Cleaners",
    location: "Wollongong",
    rating: 4.9,
    reviews: 120,
    tags: ["Home Cleaning", "Eco-Friendly", "Verified"],
    description:
      "Expert in residential and commercial cleaning using eco-friendly supplies.",
  },
  {
    name: "FixIt Handyman",
    location: "Shellharbour",
    rating: 4.7,
    reviews: 88,
    tags: ["Handyman", "Repairs", "Affordable", "Local"],
    description:
      "From leaky taps to full repairs — quick and reliable handyman services.",
  },
  {
    name: "Quick Movers",
    location: "Nowra",
    rating: 4.5,
    reviews: 45,
    tags: ["Removalist", "Packing", "Heavy Lifting"],
    description:
      "Stress-free moving service with packaging and careful handling included.",
  },
  {
    name: "Pro Reno",
    location: "Wollongong",
    rating: 4.8,
    reviews: 101,
    tags: ["Home Renovation", "Interior", "Licensed", "High-End"],
    description:
      "Transform your space with expert design and renovation solutions.",
  },
  {
    name: "BizBoost Consulting",
    location: "Dapto",
    rating: 4.6,
    reviews: 63,
    tags: ["Business Services", "Startup", "Growth"],
    description:
      "Helping businesses scale smarter with expert marketing & process consulting.",
  },
  {
    name: "Tech Rescue",
    location: "Kiama",
    rating: 4.9,
    reviews: 145,
    tags: ["Tech Help", "Remote", "PC & Mac", "Data Recovery"],
    description:
      "Affordable tech support for home and business. Fast remote fixes available.",
  },
  {
    name: "OnTime Delivery",
    location: "Albion Park",
    rating: 4.4,
    reviews: 54,
    tags: ["Delivery", "Same-Day", "Courier"],
    description: "Local deliveries done right — same day, on time, every time.",
  },
  {
    name: "Green Gardeners",
    location: "Wollongong",
    rating: 4.7,
    reviews: 76,
    tags: ["Gardening", "Lawn Care", "Trimming"],
    description: "Garden maintenance and landscaping with a green touch.",
  },
  {
    name: "Flatpack Masters",
    location: "Shellharbour",
    rating: 4.8,
    reviews: 90,
    tags: ["Furniture Assembly", "IKEA", "Efficient", "Mobile"],
    description:
      "Let us build it for you — furniture assembly done fast and right.",
  },
];

export default function FindProviders() {
  const [searchTerm, setSearchTerm] = useState("");
  const [providers, setProviders] = useState(allProviders);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    const lowerTerm = term.toLowerCase();

    const filtered = allProviders.filter((p) => {
      const matchName = p.name.toLowerCase().includes(lowerTerm);
      const matchLocation = p.location.toLowerCase().includes(lowerTerm);
      const matchTags = p.tags.some((tag) =>
        tag.toLowerCase().includes(lowerTerm)
      );
      return matchName || matchLocation || matchTags;
    });

    setProviders(filtered);
  };

  return (
    <section className="py-28 border-b border-black-100">
      <ServicesProviderSearch onSearch={handleSearch} />
      <ServiceCards providers={providers} />
    </section>
  );
}
