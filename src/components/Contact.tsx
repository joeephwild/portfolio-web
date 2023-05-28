import StarWrapper from "@/hoc/StarWrapper";
import React, { useState, useRef} from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { slideIn } from "@/utils/motion";
import EarthCanvas from "./canvas/EarthCanvas";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
  
    const serviceId = "YOUR_EMAILJS_SERVICE_ID";
    const templateId = "YOUR_EMAILJS_TEMPLATE_ID";
    const publicKey = "YOUR_EMAILJS_PUBLIC_KEY";
  
    emailjs
      .send(serviceId, templateId, {
        from_name: form.name,
        to_name: "Joseph Omotade",
        from_email: form.email,
        to_email: "josephomotade4@gmail.com",
        message: form.message,
      }, publicKey)
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
  
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
  
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };
  return (
    <>
      <div
        className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black p-8 rounded-2xl"
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>
            <span className="mt-3 text-[#fff] text-[17px] font-Nunito-Black max-w-3xl leading-[30px]">
              Let`s connect and discuss how we can work together. Whether you`re
              looking to collaborate, partner, or hire remotely, I`m ready to
              help bring your project to life. Get in touch today!
            </span>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className="bg-transparent py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border border-[#D5FF40] font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your web address?"
                className="bg-transparent py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border border-[#D5FF40] font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What you want to say?"
                className="bg-transparent py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border border-[#D5FF40] font-medium"
              />
            </label>

            <button
              type="submit"
              className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-[#D5FF40] font-bold shadow-md shadow-primary"
            >
              {loading ? "Sending" : "Send Message"}
            </button>
          </form>
        </motion.div>
      </div>
    </>
  );
};

export default StarWrapper(Contact, "contact");
