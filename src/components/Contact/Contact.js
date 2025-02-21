import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  // Success & Error Notifications
  const notifySuccess = () => toast.success("Message sent successfully!");
  const notifyError = (msg) => toast.error(`Failed to send message: ${msg}`);

  // Handle Form Input Change
  const handleChange = (name, value) => {
    // const { name, value } = event.target;
    console.log({ name, value });
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle Form Submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    // Load environment variables
    const serviceId = "service_8eyv5z8";
    const templateId = "template_ntu90ag";
    const userId = "41LseswCEaTaksK_z";

    

    // Check if env variables are loaded correctly
    if (!serviceId || !templateId || !userId) {
      console.error("Missing EmailJS environment variables.");
      notifyError("EmailJS configuration error. Check .env file.");
      setLoading(false);
      return;
    }

    const emailJsUrl = "https://api.emailjs.com/api/v1.0/email/send";
    const emailData = {
      service_id: serviceId,
      template_id: templateId,
      user_id: userId,
      template_params: {
        to_name: "Aman",
        user_name: formData.name,
        user_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
    };

    console.log("Sending request to EmailJS with data:", emailData);

    try {
      const response = await axios.post(emailJsUrl, emailData, {
        headers: { "Content-Type": "application/json" },
      });

      console.log("Response:", response);

      if (response.status === 200) {
        notifySuccess();
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        notifyError(`Unexpected response: ${response.status}`);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      notifyError(error.response?.data || "Network error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen p-8 bg-white dark:bg-gray-800">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100">
        Contact Me
      </h1>
      <div className="flex-grow flex items-center justify-center">
        <form onSubmit={handleSubmit} className="w-full max-w-3xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="mb-6">
              <label className="block text-lg font-medium text-gray-700 dark:text-gray-300">
                Name*
              </label>
              <input
                type="text"
                
                value={formData.name}
                onChange={(e) => handleChange("name", e?.target?.value)}
                required
                className="mt-2 block w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none"
              />
            </div>
            <div className="mb-6">
              <label className="block text-lg font-medium text-gray-700 dark:text-gray-300">
                Email*
              </label>
              <input
                type="email"
                
                value={formData.email}
                onChange={(e) => handleChange("email", e?.target?.value)}
                required
                className="mt-2 block w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none"
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-lg font-medium text-gray-700 dark:text-gray-300">
              Subject*
            </label>
            <input
              type="text"
              
              value={formData.subject}
              onChange={(e) => handleChange("subject", e?.target?.value)}
              required
              className="mt-2 block w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none"
            />
          </div>
          <div className="mb-6">
            <label className="block text-lg font-medium text-gray-700 dark:text-gray-300">
              Message*
            </label>
            <textarea
             
              rows="6"
              value={formData.message}
              onChange={(e) => handleChange("message", e?.target?.value)}
              required
              className="mt-2 block w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md shadow-lg hover:bg-indigo-700 focus:outline-none text-lg"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Contact;
