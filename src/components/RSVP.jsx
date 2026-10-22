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
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="
        w-full
        mt-4
        px-6
        md:px-3
        lg:px-5
        py-8
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
          py-8
          lg:py-10
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
              mb-1
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
              mb-2
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
              mb-5
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
              gap-3
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

            {/* Family / Full Name */}
            <div>
              <label
                className="
                  block
                  font-serif
                  text-[11px]
                  uppercase
                  tracking-widest
                  text-[#7e445f]
                  mb-1
                "
              >
                Full Name / Family Name
              </label>

              <input
                required
                type="text"
                name="name"
                placeholder="e.g., Mr. & Mrs. Perera"
                className="
                  w-full
                  bg-white/80
                  border
                  border-white
                  rounded-xl
                  px-4
                  py-3
                  text-sm
                  font-serif
                  text-gray-800
                  focus:outline-none
                  focus:border-[#7e445f]
                "
              />
            </div>

            {/* Attendance (Full-square block selection style) */}
            <div>
              <label
                className="
                  block
                  font-serif
                  text-[11px]
                  uppercase
                  tracking-widest
                  text-[#7e445f]
                  mb-1
                "
              >
                Will you attend?
              </label>

              <div className="flex gap-3">
                <label
                  className="
                    flex-1
                    text-center
                    py-3
                    rounded-xl
                    bg-white/70
                    cursor-pointer
                    text-sm
                    font-serif
                    text-gray-700
                    shadow-sm
                    has-[:checked]:bg-[#7e445f]
                    has-[:checked]:text-white
                    transition-colors
                  "
                >
                  <input
                    defaultChecked
                    type="radio"
                    name="attending"
                    value="Joyfully Accepts"
                    className="hidden"
                  />
                  Accepts
                </label>

                <label
                  className="
                    flex-1
                    text-center
                    py-3
                    rounded-xl
                    bg-white/70
                    cursor-pointer
                    text-sm
                    font-serif
                    text-gray-700
                    shadow-sm
                    has-[:checked]:bg-[#7e445f]
                    has-[:checked]:text-white
                    transition-colors
                  "
                >
                  <input
                    type="radio"
                    name="attending"
                    value="Regretfully Declines"
                    className="hidden"
                  />
                  Declines
                </label>
              </div>
            </div>

            {/* Joining Side Selection (Clean row alignment with toggle dots) */}
            <div>
              <label
                className="
                  block
                  font-serif
                  text-[11px]
                  uppercase
                  tracking-widest
                  text-[#7e445f]
                  mb-1
                "
              >
                Joining From
              </label>

              <div className="flex gap-6 items-center px-2 py-1">
                <label className="flex items-center gap-2 cursor-pointer text-xs font-serif text-gray-700">
                  <input
                    defaultChecked
                    type="radio"
                    name="wedding_side"
                    value="Bride's Side"
                    className="accent-[#7e445f] w-4 h-4 cursor-pointer"
                  />
                  <span>Bride's Side</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer text-xs font-serif text-gray-700">
                  <input
                    type="radio"
                    name="wedding_side"
                    value="Groom's Side"
                    className="accent-[#7e445f] w-4 h-4 cursor-pointer"
                  />
                  <span>Groom's Side</span>
                </label>
              </div>
            </div>

            {/* Guests & Children Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label
                  className="
                    block
                    font-serif
                    text-[11px]
                    uppercase
                    tracking-widest
                    text-[#7e445f]
                    mb-1
                  "
                >
                  Guests
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
                    py-3
                    text-sm
                    font-serif
                    text-gray-800
                    focus:outline-none
                    focus:border-[#7e445f]
                  "
                >
                  {[1,2,3,4,5,6,7,8].map(num => (
                    <option key={num}>
                      {num} Adult{num > 1 ? "s" : ""}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  className="
                    block
                    font-serif
                    text-[11px]
                    uppercase
                    tracking-widest
                    text-[#7e445f]
                    mb-1
                  "
                >
                  Children (For Family Invites)
                </label>

                <select
                  name="children_count"
                  className="
                    w-full
                    bg-white/80
                    border
                    border-white
                    rounded-xl
                    px-4
                    py-3
                    text-sm
                    font-serif
                    text-gray-800
                    focus:outline-none
                    focus:border-[#7e445f]
                  "
                >
                  {[0,1,2,3,4,5].map(num => (
                    <option key={num} value={num}>
                      {num === 0 ? "No Children" : `${num} Child${num > 1 ? "ren" : ""}`}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Meal Preference (Clean row alignment with toggle dots) */}
            <div>
              <label
                className="
                  block
                  font-serif
                  text-[11px]
                  uppercase
                  tracking-widest
                  text-[#7e445f]
                  mb-1
                "
              >
                Meal Preference
              </label>

              <div className="flex gap-6 items-center px-2 py-1">
                <label className="flex items-center gap-2 cursor-pointer text-xs font-serif text-gray-700">
                  <input
                    type="radio"
                    name="meal_preference"
                    value="Vegetarian"
                    className="accent-[#7e445f] w-4 h-4 cursor-pointer"
                  />
                  <span>Vegetarian</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer text-xs font-serif text-gray-700">
                  <input
                    defaultChecked
                    type="radio"
                    name="meal_preference"
                    value="Non-Vegetarian"
                    className="accent-[#7e445f] w-4 h-4 cursor-pointer"
                  />
                  <span>Non-Vegetarian</span>
                </label>
              </div>
            </div>

            {/* Message / Wishes Section */}
            <div>
              <label
                className="
                  block
                  font-serif
                  text-[11px]
                  uppercase
                  tracking-widest
                  text-[#7e445f]
                  mb-1
                "
              >
                Wishes / Message for the Couple
              </label>

              <textarea
                name="message"
                rows="2"
                placeholder="Write your wishes here..."
                className="
                  w-full
                  bg-white/80
                  border
                  border-white
                  rounded-xl
                  px-4
                  py-3
                  text-sm
                  font-serif
                  text-gray-800
                  focus:outline-none
                  focus:border-[#7e445f]
                  resize-none
                "
              />
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
                mt-1
                w-full
                py-3.5
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