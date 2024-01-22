import React, { useState } from "react";

const Contact = () => {
  const [form, setform] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = () => {};
  const handleFocus = () => {};
  const handleBlur = () => {};
  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in touch</h1>
        <form action="" className="w-full flex flex-col gap-7 mt-14">
          <label htmlFor="name" className="text-black-500 font-semibold">
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="your name"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <label htmlFor="email" className="text-black-500 font-semibold">
            Your email
            <input
              type="email"
              name="email"
              className="input"
              placeholder="your mail"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label htmlFor="message" className="text-black-500 font-semibold">
            Your email
            <textarea
              rows={4}
              type="message"
              name="message"
              className="textarea"
              placeholder="Give me some news ..."
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
            type="submit"
            className="btn"
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? "Sending ..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
