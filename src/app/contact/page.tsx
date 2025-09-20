"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faMapMarkerAlt, faClock } from "@fortawesome/free-solid-svg-icons";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
    alert("✅ Your message has been sent! Our support team will contact you soon.");
  };

  return (
    <div className="min-h-screen w-full">
      <main className="sm:max-w-7xl mx-auto sm:p-6 pb-0 space-y-8">
        {/* Page Title */}
        <section className="text-center space-y-3">
          <h1 className="sm:text-5xl text-3xl font-extrabold text-accent">Contact Us</h1>
          <p className="text-text-primary">
            Have questions or need assistance? Fill out the form below or reach us via the contact info.
          </p>
        </section>

        {/* Main Section */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="flex flex-col">
            <form
              onSubmit={handleSubmit}
              className="flex-1 p-8 rounded-3xl shadow-md space-y-6 border border-text-secondary -200"
            >
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-text-secondary -300 p-3 focus:ring-2 focus:ring-accent outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-text-secondary -300 p-3 focus:ring-2 focus:ring-accent outline-none transition"
                />
              </div>

              <div className="flex-1 flex flex-col">
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  placeholder="Write your message..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="w-full flex-1 rounded-xl border border-text-secondary -300 p-3 focus:ring-2 focus:ring-accent outline-none transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-accent text-bg-primary py-3 rounded-xl font-semibold hover:opacity-90 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col">
            <div className="flex-1 flex flex-col justify-between p-8 rounded-3xl shadow-md space-y-6 border border-text-secondary -200">
              <div>
                <h2 className="text-text-primary text-2xl font-bold mb-3">Contact Info</h2>
                <p className="text-text-secondary mb-3">
                  Reach out to our support team via:
                </p>
                <ul className="space-y-3 text-text-secondary -800">
                  <li className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faEnvelope} className="text-accent w-5 h-5" />
                    <a
                      href="mailto:arshiapourfar@gmail.com"
                      className="hover:underline"
                    >
                      arshiapourfar@gmail.com
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faPhone} className="text-accent w-5 h-5" />
                    <span>+98 912 247 3093</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-accent w-5 h-5" />
                    <span>123 Example Street, New York, NY</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-text-primary text-2xl font-bold mb-3">Working Hours</h2>
                <p className="text-text-secondary flex items-start gap-2">
                  <FontAwesomeIcon icon={faClock} className="text-accent w-5 h-5 mt-1" />
                  <span>
                    Monday to Friday: 9 AM - 6 PM <br />
                    Saturday & Holidays: Email only
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
