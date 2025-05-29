import React from 'react'


const About = () => {
  return (
    <div className="min-h-screen bg-[#0f0b0b] text-white p-6 md:p-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
          <p className="text-lg text-white">
            We movies often explore the complexities of relationships, particularly marriage, and the journeys individuals take to rekindle or understand their connections. They can also delve into themes of love, loss, and the search for self-discovery within a couple's dynamic. 
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-100 p-4 rounded-xl shadow">
              <h3 className="font-bold text-xl">Jane Doe</h3>
              <p className="text-gray-600">CEO & Founder</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-xl shadow">
              <h3 className="font-bold text-xl">John Smith</h3>
              <p className="text-gray-600">Lead Developer</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-xl shadow">
              <h3 className="font-bold text-xl">Emily Rose</h3>
              <p className="text-gray-600">UX Designer</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
          <p className="text-lg text-white mb-2">
            Got questions or want to work with us? Reach out anytime!
          </p>
          <p className="text-blue-500">contact@example.com</p>
        </section>
      </div>
    </div>
  );
};
 export default About