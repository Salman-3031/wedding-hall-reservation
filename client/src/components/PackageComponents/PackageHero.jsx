import React, { useState } from "react";
import Title from "../Title/Title";
import { CircleCheckBig, Minus, UsersRound, Utensils } from "lucide-react";

const preMadePackages = [
    {
        id: "luxury",
        packageName: "Luxury",
        description:
            "Our premium package with exquisite menu, elegant decoration, and shared beverages for your guests.",
        originalPrice: 250,
        // pricePerHead: 220,
        discount: 12,
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
        originalPrice: 120,
        // pricePerHead: 100,
        discount: 17,
        foodItems: ["Chicken Curry", "Seekh Kabab", "Sweet Dish", "Naan & Rice"],
        sharedItems: [{ name: "Soft Drinks", perPeople: 4 }],
        features: ["Standard Decoration", "Basic Sound System"],
    },
    {
        id: "royal",
        packageName: "Royal Gold",
        description:
            "A royal experience with a lavish menu, luxury services, and personalized attention.",
        originalPrice: 340,
        // pricePerHead: 300,
          discount: 12,
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

const PackageHero = () => {
    // Calculate discounted price for each package
    const packagesWithDiscountedPrice = preMadePackages.map((pkg) => {
        if (pkg.discount) {
            const discountedPrice = pkg.originalPrice - (pkg.originalPrice * pkg.discount / 100);
            return {
                ...pkg,
                discountedPrice: Math.round(discountedPrice)
            };
        }
        return {
            ...pkg,
            discountedPrice: pkg.originalPrice 
        };
    });

    return (
        <section className="pt-[80px] pb-10">
            <Title 
                title="Our Wedding Packages" 
                description="Choose from our exclusive packages designed to make your special day unforgettable — from classic simplicity to royal grandeur."
            />

            <div className="container">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
                    {packagesWithDiscountedPrice.map((pkg) => (
                        <div
                            key={pkg.id}
                            className="relative bg-background rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-5 border border-secondary/50"
                        >
                            {/* Package discount badge */}
                            {pkg.discount && (
                                <span className="absolute top-4 right-4 bg-secondary text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                                    {pkg.discount}% OFF
                                </span>
                            )}
                            
                            {/* Package name */}
                            <h3 className="text-2xl font-semibold mb-2">
                                {pkg.packageName}
                            </h3>
                            
                            {/* Package description */}
                            <p className="text-para mb-4 line-clamp-3">{pkg.description}</p>

                            <div className="mb-4">
                                {/* Original price with strikethrough */}
                               {pkg.discount &&  <p className="text-gray-400 line-through text-sm">
                                    Rs. {pkg.originalPrice}/-
                                </p>}
                                
                                {/* Discounted price */}
                                <p className="text-2xl font-bold text-gray-800">
                                    Rs. {pkg.discountedPrice}/-
                                    <span className="text-sm text-para ml-1">per head</span>
                                </p>
                        
                            </div>

                            <div className="text-left mb-4">
                                <h4 className="font-semibold mb-2 flex items-center gap-1">
                                    <Utensils className="w-5 h-5 text-gray-700" />Food Menu
                                </h4>
                                {/* Package menu items */}
                                <ul className="text-para list-disc pl-5 space-y-1">
                                    {pkg.foodItems.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="text-left mb-4">
                                <h4 className="font-semibold mb-2 flex items-center gap-1">
                                    <UsersRound className="w-5 h-5 text-orange-600" /> Shared Items
                                </h4>
                                {/* Package shared items */}
                                <ul className="text-para list-disc pl-5 space-y-1">
                                    {pkg.sharedItems.map((item, i) => (
                                        <li key={i}>
                                            {item.name} - (1 per {item.perPeople} people)
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="text-left mb-4">
                                <h4 className="font-semibold mb-2 flex items-center gap-1">
                                    <CircleCheckBig className="text-green-500 w-5 h-5" />
                                    Services Included
                                </h4>
                                {/* Package features */}
                                <ul className="text-para list-disc marker:text-green-600 pl-5 space-y-1">
                                    {pkg.features.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            <button className="common-button mt-4 w-full !rounded-lg">
                                Select Package
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PackageHero;