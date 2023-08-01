'use client';

import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

import { fadeIn } from "@/variants";

const Form = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [ form , setForm ] = useState({
    name:'',
    email:'',
    message:'',
  });
  // loading when we click send
  const [loading, setLoading] = useState(false);

  // for typing in form
  const handleChange = (e: React.ChangeEvent<any>) =>{
    // SO WE CAN TYPE
    // extract the target
    const { name, value } = e.target;
    setForm({ ...form, [name]: value })
  };

  // IMP
  // When we click send button
  const handleSubmit = (e: React.ChangeEvent<any>) =>{
    // to not let browser refresh it
    e.preventDefault();
    setLoading(true);
    // EMAIL JS 
    emailjs.send(
      // form email js id
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
      // parameter along with send
      // we send the sender name, email, message
      {
        form_name: form.name,
        to_name: 'Rajeeb',
        fom_email: form.email,
        to_email: 'starsgazer321@gmail.com',
        message: form.message,
      },
      // public key
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string,

    )
    .then(() => {
      setLoading(false);
      alert('Thank you. I will get back to you as soon as possible.');

      // reseting the form
      setForm({
        name: '',
        email: '',
        message: '',
      })
    },
      // for error
      (error: React.ChangeEvent<any>) => {
        setLoading(false);
        console.log(error);
        alert('Something went wrong.')
      }
    )
  };

  return (
    <motion.form 
      ref={formRef}
      onSubmit={handleSubmit}
      variants={fadeIn('up', 0.4)}
      initial="hidden"
      animate="show"
      className="
      flex-1 
      flex
      flex-col 
      gap-6 
      w-full
      mx-auto
      "
    >
      <div
        className="
        flex
        gap-x-6
        w-full
        "
      >
        <input 
          name='name'
          type="text" 
          value={form.name}
          onChange={handleChange}
          placeholder="name" 
          className="input" 
        />
        <input 
          name='email'
          type="text" 
          placeholder="email" 
          typeof="email" 
          value={form.email}
          onChange={handleChange}
          className="input"
        />
      </div>
      <textarea 
        name='message'
        rows={7}
        placeholder="message"
        value={form.message}
        onChange={handleChange}
        className="textarea"
      />
      <button
        type='submit'
        className="
        btn
        rounded-full
        bg-white/20
        max-w-[170px]
        px-8
        transition-all
        duration-300
        flex
        border-white/70
        border-2
        items-center
        justify-center
        overflow-hidden
        hover:border-accent
        group
        "
      >

      {loading ? "Sending..." : 
        <>
          <span
          className="
          group-hover:-translate-y-[120%] 
          group-hover:opacity-0 
          transtion-all duration-500  
          
          "
          >
            Send
          </span>
          <BsArrowRight 
            className="
            translate-y-[120%]
            opacity-0
            group-hover:flex
            group-hover:translate-y-0
            group-hover:opacity-100
            transition-all
            duration-300
            absolute
            text-[22px]
            "
          />
        </>
        }
      </button>
    </motion.form>
  )
}

export default Form;