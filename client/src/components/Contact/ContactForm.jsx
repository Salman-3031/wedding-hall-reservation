import React from 'react'
import Title from '../Title/Title'

const ContactForm = () => {
  return (
    <div className="w-full bg-bglight dark:bg-bgdark">
      <Title title="Send Us a Message" description="Fill out the form below and we'll get back to you as soon as possible."/>

     <div className="container  pb-10">
       <form className="max-w-3xl border p-5 rounded-sm border-lightpara dark:border-darkpara  mx-auto space-y-6">
        <div>
          <label className="block text-left text-gray-700 dark:text-gray-200 mb-1">
            Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block text-left text-gray-700 dark:text-gray-200 mb-1">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block text-left text-gray-700 dark:text-gray-200 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="Enter your phone number"
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block text-left text-gray-700 dark:text-gray-200 mb-1">
            Message
          </label>
          <textarea
            rows="4"
            placeholder="Write your message..."
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-all"
        >
          Send Message
        </button>
      </form>
     </div>
    </div>
  )
}

export default ContactForm
