
import React, { useState } from "react";

const Testing = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const preMadePackages = [
    {
      id: "luxury",
      packageName: "Luxury",
      description:
        "Our premium package with exquisite menu, elegant decoration, and shared beverages for your guests.",
      pricePerHead: 220,
      foodItems: [
        "Chicken Biryani",
        "Mutton Karahi",
        "Barbecue Platter",
        "Mix Dessert",
        "Salad & Raita",
      ],
      sharedItems: [
        { name: "Soft Drinks", perPeople: 4 },
        { name: "Mineral Water (1.5L)", perPeople: 6 },
      ],
      features: [
        "Premium Hall Decoration",
        "Live Music Performance",
        "Professional Photography (4 hours)",
      ],
    },
    {
      id: "classic",
      packageName: "Classic",
      description:
        "A simple yet elegant package with balanced menu and shared beverages.",
      pricePerHead: 100,
      foodItems: ["Chicken Curry", "Seekh Kabab", "Sweet Dish", "Naan & Rice"],
      sharedItems: [{ name: "Soft Drinks", perPeople: 4 }],
      features: ["Standard Decoration", "Basic Sound System"],
    },
    {
      id: "royal",
      packageName: "Royal Gold",
      description:
        "A royal experience with a lavish menu, luxury services, and personalized attention.",
      pricePerHead: 300,
      foodItems: [
        "Mutton Biryani",
        "Chicken Malai Boti",
        "Fish Fry",
        "Dessert Bar",
        "Naan & Salad",
      ],
      sharedItems: [
        { name: "Soft Drinks", perPeople: 4 },
        { name: "Mineral Water", perPeople: 5 },
      ],
      features: [
        "Royal Theme Decoration",
        "Full Event Management",
        "Candle Light Stage Setup",
      ],
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-pink-50 to-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          Our Wedding Packages
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Choose from our exclusive packages designed to make your special day
          unforgettable — from classic simplicity to royal grandeur.
        </p>

        {/* Packages grid */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
          {preMadePackages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 cursor-pointer border border-pink-100"
              onClick={() => setSelectedPackage(pkg)}
            >
              <h3 className="text-2xl font-semibold text-pink-600 mb-2">
                {pkg.packageName}
              </h3>
              <p className="text-gray-600 mb-4">{pkg.description}</p>
              <p className="text-lg font-medium text-gray-800">
                Rs. {pkg.pricePerHead}/-
                <span className="text-sm text-gray-500"> per head</span>
              </p>
              <button className="mt-4 bg-gradient-to-r from-pink-500 to-rose-400 text-white px-6 py-2 rounded-full hover:scale-105 transition-transform">
                View Details
              </button>
            </div>
          ))}
        </div>

        {/* Package Details Modal */}
        {selectedPackage && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50 px-4">
            <div className="bg-white rounded-2xl p-6 w-full max-w-lg shadow-xl relative">
              <button
                className="absolute top-3 right-4 text-gray-500 hover:text-gray-700 text-xl"
                onClick={() => setSelectedPackage(null)}
              >
                &times;
              </button>

              <h3 className="text-3xl font-bold text-pink-600 mb-2">
                {selectedPackage.packageName}
              </h3>
              <p className="text-gray-600 mb-4">
                {selectedPackage.description}
              </p>

              <p className="text-xl font-semibold text-gray-800 mb-4">
                Rs. {selectedPackage.pricePerHead}/-
                <span className="text-sm text-gray-500"> per head</span>
              </p>

              <div className="text-left">
                <h4 className="font-semibold text-gray-700 mb-2">
                  Menu Highlights
                </h4>
                <ul className="list-disc pl-5 text-gray-600 space-y-1">
                  {selectedPackage.foodItems.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                {selectedPackage.sharedItems &&
                  selectedPackage.sharedItems.length > 0 && (
                    <div className="mt-4">
                      <h4 className="font-semibold text-gray-700 mb-2">
                        Shared Items (per group)
                      </h4>
                      <ul className="list-disc pl-5 text-gray-600 space-y-1">
                        {selectedPackage.sharedItems.map((item, i) => (
                          <li key={i}>
                            {item.name} —{" "}
                            <span className="text-gray-500">
                              1 per {item.perPeople} people
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                {selectedPackage.features &&
                  selectedPackage.features.length > 0 && (
                    <div className="mt-4">
                      <h4 className="font-semibold text-gray-700 mb-2">
                        Features
                      </h4>
                      <ul className="list-disc pl-5 text-gray-600 space-y-1">
                        {selectedPackage.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  )}
              </div>

              <button
                onClick={() => setSelectedPackage(null)}
                className="mt-6 w-full bg-gradient-to-r from-pink-500 to-rose-400 text-white py-2 rounded-full hover:scale-105 transition-transform"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testing;
