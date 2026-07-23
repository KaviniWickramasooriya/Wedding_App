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
      "3c2b6575-366b-4b10-b9cd-dd28b265323b"
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
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
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
          from-lavender-200
          via-lavender-300
          to-lavender-400

          text-center
          rounded-[2.5rem]

          relative
          overflow-hidden

          shadow-[0_20px_55px_rgba(145,109,177,0.28)]

          border
          border-white/80
        "
      >


        {/* Soft Glow */}
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
            bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.25),transparent_65%)]
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
                bg-white/40
                text-[#d4af37]
                flex
                items-center
                justify-center
                text-2xl
                mb-5
              "
            >
              ✓
            </div>


            <h2
              className="
                font-serif
                text-3xl
                text-lavender-900
                mb-3
              "
            >
              Thank You!
            </h2>


            <p
              className="
                font-serif
                text-sm
                text-lavender-800
              "
            >
              Your RSVP has been beautifully received.
              We can't wait to celebrate with you!
            </p>

          </motion.div>


        ) : (


        <motion.div key="form">


          <p
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
          </p>


          <h2
            className="
              font-serif
              text-2xl
              lg:text-4xl
              text-lavender-900
              tracking-wider
              mb-3
            "
          >
            Will You Join Us?
          </h2>


          <p
            className="
              font-serif
              text-xs
              lg:text-sm
              text-lavender-800
              mb-7
              leading-relaxed
            "
          >
            Your presence is our greatest gift.
            Please let us know if you will be joining our celebration.
          </p>



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
                  text-lavender-800
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
                  bg-white/70
                  border
                  border-white/70
                  rounded-xl
                  px-4
                  py-3.5
                  lg:py-4
                  text-sm
                  font-serif
                  text-lavender-900
                  focus:outline-none
                  focus:border-[#d4af37]
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
                  text-lavender-800
                  mb-2
                "
              >
                Will you attend?
              </label>


              <div className="flex gap-3">


                <label
                  className="
                    flex-1
                    text-center
                    py-3.5
                    rounded-xl
                    bg-white/50
                    cursor-pointer
                    text-sm
                    has-[:checked]:bg-[#d1ab3c]
                    has-[:checked]:text-white
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
                </label>


                <label
                  className="
                    flex-1
                    text-center
                    py-3.5
                    rounded-xl
                    bg-white/50
                    cursor-pointer
                    text-sm
                    has-[:checked]:bg-lavender-700
                    has-[:checked]:text-white
                  "
                >
                  <input
                    hidden
                    type="radio"
                    name="attending"
                    value="Regretfully Declines"
                  />
                  Declines
                </label>


              </div>

            </div>



            {/* Guests */}

            <select
              name="guest_count"
              className="
                w-full
                bg-white/70
                border
                border-white/70
                rounded-xl
                px-4
                py-3.5
                lg:py-4
                text-sm
                font-serif
              "
            >

              {[1,2,3,4,5,6,7,8,9,10].map(num => (
                <option key={num}>
                  {num} Guest{num > 1 ? "s" : ""}
                </option>
              ))}

            </select>



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
                scale:1.04
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

                bg-gradient-to-r
                from-[#d1ab3c]
                to-[#d1ab3c]

                text-white
                text-xs
                uppercase
                tracking-[0.25em]
                font-bold

                shadow-[0_8px_20px_rgba(212,175,55,0.3)]
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