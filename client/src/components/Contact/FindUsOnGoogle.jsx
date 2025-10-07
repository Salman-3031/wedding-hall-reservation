import React from "react";
import Title from "../Title/Title";

const FindUsOnGoogle = () => {
  return (
    <section className="w-full bg-bglight dark:bg-bgdark">
       <Title title={"Find Us on Google"} description={"Click below to view our location on Google Maps."}/>
      <div className="container text-center ">
       
        <a
          href="https://maps.app.goo.gl/xuat3LdWgZynQuy37"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-primary/90 transition duration-300"
        >
          View on Google Maps
        </a>

        {/* Optional: Embed Google Map preview */}
        <div className="mt-10">
          <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d623.5021757855934!2d72.44127016296456!3d34.85155886356759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dc3b0072656433%3A0xd48ab3f2214d4853!2sTechnoSphereX%20Software%20House!5e1!3m2!1sen!2s!4v1759746697623!5m2!1sen!2s" 
          width="100%" height="450" 
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </section>
  );
};

export default FindUsOnGoogle;
