import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function RSVP() {
  const [formStatus, setFormStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("submitting");

    const formData = new FormData(e.target);

    formData.append(
      "access_key",
      "76a06888-3fa6-44ba-bf1b-a1623be6938c"
    );

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {
        setFormStatus("success");
      } else {
        setFormStatus("error");
      }

    } catch {
      setFormStatus("error");
    }
  };


  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      // Re-triggers smooth animation every time it comes back into view on scroll or page refresh
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="
        w-full
        mt-8
        px-6
        md:px-3
        lg:px-5
        py-12
        flex
        justify-center
      "
    >


      <motion.div
        whileHover={{
          scale: 1.015,
        }}
        transition={{
          duration: 0.4,
        }}
        className="
          w-full
          max-w-sm
          lg:max-w-xl

          py-10
          lg:py-14

          px-6
          lg:px-14

          bg-gradient-to-br
          from-gray-200
          via-gray-300
          to-slate-300

          text-center
          rounded-[2.5rem]

          relative
          overflow-hidden

          shadow-[0_20px_55px_rgba(126,68,95,0.2)]

          border
          border-white/90
        "
      >


        {/* Soft Glow with pink & purple touch */}
        <motion.div
          animate={{
            opacity:[0.3,0.55,0.3],
            scale:[1,1.12,1],
          }}
          transition={{
            duration:5,
            repeat:Infinity,
          }}
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.6),transparent_65%)]
          "
        />


        <div className="relative z-10">


        <AnimatePresence mode="wait">

        {formStatus === "success" ? (

          <motion.div
            key="success"
            initial={{
              opacity:0,
              scale:0.8
            }}
            animate={{
              opacity:1,
              scale:1
            }}
            transition={{
              type:"spring",
              stiffness:200
            }}
            className="py-6 flex flex-col items-center"
          >

            <div
              className="
                w-16
                h-16
                rounded-full
                bg-white/80
                text-[#7e445f]
                flex
                items-center
                justify-center
                text-2xl
                mb-5
                shadow-sm
              "
            >
              ✓
            </div>


            <h2
              className="
                font-serif
                text-3xl
                text-[#7e445f]
                mb-3
              "
            >
              Thank You!
            </h2>


            <p
              className="
                font-serif
                text-sm
                text-gray-700
              "
            >
              Your RSVP has been beautifully received.
              We can't wait to celebrate with you!
            </p>

          </motion.div>


        ) : (


        <motion.div key="form">


          <motion.p
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="
              font-serif
              text-[11px]
              tracking-[0.35em]
              uppercase
              text-[#d4af37]
              mb-2
              font-bold
            "
          >
            Kindly Reply
          </motion.p>


          <motion.h2
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="
              font-serif
              text-2xl
              lg:text-4xl
              text-[#7e445f]
              tracking-wider
              mb-3
            "
          >
            Will You Join Us?
          </motion.h2>


          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="
              font-serif
              text-xs
              lg:text-sm
              text-gray-700
              mb-7
              leading-relaxed
            "
          >
            Your presence is our greatest gift.
            Please let us know if you will be joining our celebration.
          </motion.p>



          <form
            onSubmit={handleSubmit}
            className="
              flex
              flex-col
              gap-4
              text-left
            "
          >

            <input
              type="hidden"
              name="subject"
              value="New RSVP for Anu & Yasith's Wedding!"
            />

            <input
              type="hidden"
              name="from_name"
              value="Wedding RSVP System"
            />



            {/* Name */}
            <div>

              <label
                className="
                  block
                  font-serif
                  text-[11px]
                  uppercase
                  tracking-widest
                  text-[#7e445f]
                  mb-2
                "
              >
                Full Name
              </label>


              <input
                required
                type="text"
                name="name"
                placeholder="Mr. & Mrs. Family"
                className="
                  w-full
                  bg-white/80
                  border
                  border-white
                  rounded-xl
                  px-4
                  py-3.5
                  lg:py-4
                  text-sm
                  font-serif
                  text-gray-800
                  focus:outline-none
                  focus:border-[#7e445f]
                "
              />

            </div>



            {/* Attendance */}

            <div>

              <label
                className="
                  block
                  font-serif
                  text-[11px]
                  uppercase
                  tracking-widest
                  text-[#7e445f]
                  mb-2
                "
              >
                Will you attend?
              </label>


              <div className="flex gap-3">


                <motion.label
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                  className="
                    flex-1
                    text-center
                    py-3.5
                    rounded-xl
                    bg-white/70
                    cursor-pointer
                    text-sm
                    font-serif
                    text-gray-700
                    has-[:checked]:bg-[#7e445f]
                    has-[:checked]:text-white
                    shadow-sm
                    transition-colors
                  "
                >
                  <input
                    hidden
                    defaultChecked
                    type="radio"
                    name="attending"
                    value="Joyfully Accepts"
                  />
                  Accepts
                </motion.label>


                <motion.label
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                  className="
                    flex-1
                    text-center
                    py-3.5
                    rounded-xl
                    bg-white/70
                    cursor-pointer
                    text-sm
                    font-serif
                    text-gray-700
                    has-[:checked]:bg-[#7e445f]
                    has-[:checked]:text-white
                    shadow-sm
                    transition-colors
                  "
                >
                  <input
                    hidden
                    type="radio"
                    name="attending"
                    value="Regretfully Declines"
                  />
                  Declines
                </motion.label>


              </div>

            </div>



            {/* Guests */}

            <div>
              <label
                className="
                  block
                  font-serif
                  text-[11px]
                  uppercase
                  tracking-widest
                  text-[#7e445f]
                  mb-2
                "
              >
                Number of Guests
              </label>

              <select
                name="guest_count"
                className="
                  w-full
                  bg-white/80
                  border
                  border-white
                  rounded-xl
                  px-4
                  py-3.5
                  lg:py-4
                  text-sm
                  font-serif
                  text-gray-800
                  focus:outline-none
                  focus:border-[#7e445f]
                "
              >

                {[1,2,3,4,5,6,7,8].map(num => (
                  <option key={num}>
                    {num} Guest{num > 1 ? "s" : ""}
                  </option>
                ))}

              </select>
            </div>



            {/* Meal Preference */}

            <div>

              <label
                className="
                  block
                  font-serif
                  text-[11px]
                  uppercase
                  tracking-widest
                  text-[#7e445f]
                  mb-2
                "
              >
                Meal Preference
              </label>

              <div className="flex gap-3">

                <motion.label
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                  className="
                    flex-1
                    text-center
                    py-3.5
                    rounded-xl
                    bg-white/70
                    cursor-pointer
                    text-sm
                    font-serif
                    text-gray-700
                    has-[:checked]:bg-[#7e445f]
                    has-[:checked]:text-white
                    shadow-sm
                    transition-colors
                  "
                >
                  <input
                    hidden
                    type="radio"
                    name="meal_preference"
                    value="Vegetarian"
                  />
                  Vegetarian
                </motion.label>

                <motion.label
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                  className="
                    flex-1
                    text-center
                    py-3.5
                    rounded-xl
                    bg-white/70
                    cursor-pointer
                    text-sm
                    font-serif
                    text-gray-700
                    has-[:checked]:bg-[#7e445f]
                    has-[:checked]:text-white
                    shadow-sm
                    transition-colors
                  "
                >
                  <input
                    hidden
                    defaultChecked
                    type="radio"
                    name="meal_preference"
                    value="Non-Vegetarian"
                  />
                  Non-Vegetarian
                </motion.label>

              </div>

            </div>



            {formStatus === "error" && (
              <p
                className="
                  text-red-700
                  bg-red-100
                  text-xs
                  text-center
                  py-2
                  rounded-lg
                "
              >
                Something went wrong. Please try again.
              </p>
            )}



            <motion.button
              whileHover={{
                scale:1.04,
                backgroundColor: "#6b3a51"
              }}
              whileTap={{
                scale:0.97
              }}
              disabled={formStatus==="submitting"}
              className="
                mt-2
                w-full
                py-4
                rounded-xl

                bg-[#7e445f]

                text-white
                text-xs
                uppercase
                tracking-[0.25em]
                font-bold

                shadow-[0_8px_20px_rgba(126,68,95,0.3)]
                transition-colors
              "
            >
              {
                formStatus==="submitting"
                ? "Sending Response..."
                : "Send RSVP"
              }

            </motion.button>


          </form>


        </motion.div>

        )}

        </AnimatePresence>

        </div>

      </motion.div>

    </motion.section>
  );
}