import React, { Suspense, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Fox } from "../models/Fox";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import useAlert from "../hooks/useAlert";
import { Alert } from "../components";

const Contact = () => {
  const formRef = useRef(null);
  const [form, setform] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");
  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };
  const handleFocus = () => setCurrentAnimation("walk");
  const handleBlur = () => setCurrentAnimation("idle");

  const { alert, showAlert, hideAlert } = useAlert();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation("hit");
    emailjs
      .send(
        "service_0wnzdjs",
        "template_du5ofi4",
        {
          from_name: form.name,
          to_name: "Mouss",
          from_email: form.email,
          to_email: "moussa.sagna@hotmail.fr",
          message: form.message,
        },
        "T91fzU-uAju9boNX6"
      )
      .then(() => {
        setIsLoading(false);
        showAlert({
          show: true,
          text: "Message sent successfully!",
          type: "succes",
        });

        setTimeout(() => {
          hideAlert()
          setCurrentAnimation("idle");
          setform({ name: "", email: "", message: "" });
        }, 3000);

        // TODO Show succes messsage
      })
      .catch((error) => {
        setIsLoading(false);
        showAlert({
          show: true,
          text: "I didn't recive yout message",
          type: "danger",
        });
        console.log(error);
      });
  };
  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      {alert.show && <Alert {...alert} />}
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in touch</h1>
        <form
          action=""
          className="w-full flex flex-col gap-7 mt-14"
          onSubmit={handleSubmit}
        >
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
      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight position={[0, 0, 1]} intensity={2.5} />
          <ambientLight intensity={1} />
          <pointLight position={[5, 10, 0]} intensity={2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />

          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.629, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
