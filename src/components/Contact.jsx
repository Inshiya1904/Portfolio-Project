import React, { useRef, useState } from "react";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [showMessage, setShowMessage] = useState(false);
  const [submittedName, setSubmittedName] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_s0n39v8",       // your service ID
        "template_7exo47v",      // your template ID
        form.current,
        "S6lOC2AhhCug2GXZE"      // your public key
      )
      .then(
        (result) => {
          console.log("SUCCESS:", result.text);

          setSubmittedName(formData.name); // fix name bug
          setShowMessage(true);

          form.current.reset();

          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
        },
        (error) => {
          console.error("FAILED:", error.text);
          alert(error.text || "Failed to send enquiry");
        }
      );
  };

  const handleClose = () => {
    setShowMessage(false);
  };

  return (
    <section className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-16">
          Contact Me
        </h2>

        <div className="flex flex-col md:flex-row gap-12">

          {/* LEFT SIDE */}
          <div className="flex-1">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-4">
              Let's Talk
            </h3>

            <p className="text-gray-300">
              I'm open to discussing web development projects or partnership opportunities.
            </p>

            <div className="mt-8 space-y-4 text-gray-300">
              <div>
                <FaEnvelope className="inline mr-2 text-green-400" />
                <a href="mailto:sonashekhu09@gmail.com" className="hover:underline">
                  sonashekhu09@gmail.com
                </a>
              </div>

              <div>
                <FaPhone className="inline mr-2 text-green-400" />
                <span>+91 9665315607</span>
              </div>

              <div>
                <FaMapMarkedAlt className="inline mr-2 text-green-400" />
                <span>Nagpur, India</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="flex-1 w-full max-w-lg">
            <form ref={form} onSubmit={sendEmail} className="space-y-4">

              {/* NAME */}
              <input
                type="text"
                name="name"
                value={formData.name}
                required
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Enter Your Name"
                className="w-full p-3 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
              />

              {/* EMAIL */}
              <input
                type="email"
                name="email"
                value={formData.email}
                required
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="Enter Your Email"
                className="w-full p-3 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
              />

              {/* PHONE */}
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                required
                maxLength="10"
                onChange={(e) => {
                  const value = e.target.value;
                  if (/^\d*$/.test(value)) {
                    setFormData({ ...formData, phone: value });
                  }
                }}
                placeholder="Enter Your Phone Number"
                className="w-full p-3 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
              />

              {/* MESSAGE */}
              <textarea
                name="message"
                value={formData.message}
                required
                rows="5"
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Enter Your Message"
                className="w-full p-3 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
              />

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full py-3 rounded-full bg-gradient-to-r from-green-400 to-blue-500 hover:scale-105 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* SUCCESS POPUP */}
      {showMessage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white text-black p-6 rounded-md shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
            <p>Thank you, {submittedName}. Your message has been sent.</p>

            <button
              onClick={handleClose}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;