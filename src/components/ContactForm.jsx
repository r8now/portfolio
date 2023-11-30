import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import SectionTitle from "./SectionTitle";


const ContactForm = () => {
  const form = useRef();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fg2gv1f",
        "template_jt6kemg",
        form.current,
        "kL6aukFM7IoCaT-lB"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsFormSubmitted(true);
          setTimeout(() => {
            setIsFormSubmitted(false);
            form.current.reset();
          }, 3000); // Reset form and hide message after 3 seconds
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="w-full  bg-sky-100  mx-auto p-4 border-solid  border-sky-500">
      <div className="text-center">
        <SectionTitle text="Contact me" />
      </div>

      {isFormSubmitted ? (
        <p className="text-green-600 font-bold text-center">
          Thank you for your submission! The form will reset shortly.
        </p>
      ) : (
        <form
          className="max-w-md m-auto lg:max-w-xl"
          ref={form}
          onSubmit={sendEmail}
        >
          <div className="mb-4">
            <label
              htmlFor="user_name"
              className="block  text-gray-700 text-sm font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              className="w-full px-3 py-2 border rounded-md shadow appearance-none"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="user_email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              required
              className="w-full px-3 py-2 border rounded-md shadow appearance-none"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              className="w-full px-3 py-2 border rounded-md shadow appearance-none"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
            >
              Send
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
