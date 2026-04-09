import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function RSVP() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle'); 
  
  const [formData, setFormData] = useState({ 
    name: '', attending: 'yes', guests: '1', dietary: '', message: '' 
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const payload = {
      access_key: "YOUR_WEB3FORMS_KEY", // Make sure to re-insert your key
      subject: `Wedding RSVP - ${formData.name}`,
      from_name: "Wedding Invite App",
      Name: formData.name,
      Attending: formData.attending === 'yes' ? 'Yes' : 'No',
      Guest_Count: formData.attending === 'yes' ? formData.guests : '0',
      Dietary_Restrictions: formData.dietary || 'None',
      Message: formData.message || 'None'
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (result.success) setSubmitStatus('success');
      else setSubmitStatus('error');
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-24 md:py-40 px-6 bg-transparent">
      <div className="max-w-lg md:max-w-3xl mx-auto text-center">
        <motion.h3 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-cursive text-7xl md:text-9xl text-lavender-500 mb-6 md:mb-10 drop-shadow-sm"
        >
          Please Respond
        </motion.h3>
        <p className="text-xl md:text-2xl text-gray-400 mb-14 md:mb-20 tracking-wide font-light">
          Kindly confirm your attendance by November 1st, 2026.
        </p>
        
        <AnimatePresence mode="wait">
          {!isFormOpen && submitStatus === 'idle' && (
            <motion.button 
              key="rsvp-btn"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ scale: 1.04, boxShadow: "0px 20px 40px rgba(145,109,177,0.3)" }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setIsFormOpen(true)}
              className="w-full md:w-3/5 mx-auto block py-6 bg-gradient-to-r from-lavender-400 to-lavender-500 text-white rounded-full text-sm md:text-base uppercase tracking-[0.2em] font-semibold shadow-2xl transition-all"
            >
              RSVP Now
            </motion.button>
          )}

          {submitStatus === 'success' && (
            <motion.div 
              key="success-msg"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 80 }}
              className="bg-white/80 backdrop-blur-lg p-16 md:p-24 rounded-[3rem] shadow-[0_25px_60px_rgba(145,109,177,0.12)] border border-white text-center"
            >
              <h4 className="font-cursive text-6xl md:text-8xl text-lavender-500 mb-8">Thank You!</h4>
              <p className="text-gray-500 text-xl md:text-3xl font-light leading-relaxed">
                Your RSVP has been successfully sent. <br className="hidden md:block"/>
                We can't wait to celebrate with you.
              </p>
            </motion.div>
          )}

          {isFormOpen && submitStatus !== 'success' && (
            <motion.form 
              key="rsvp-form"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              onSubmit={handleSubmit} 
              className="bg-white/90 backdrop-blur-xl p-10 md:p-16 rounded-[3rem] shadow-[0_30px_80px_rgba(145,109,177,0.15)] border border-white text-left"
            >
              {submitStatus === 'error' && (
                <div className="mb-8 p-5 bg-red-50 text-red-500 text-sm rounded-2xl text-center border border-red-100 font-medium tracking-wide">
                  Oops! Something went wrong. Please try again.
                </div>
              )}

              <div className="md:grid md:grid-cols-2 md:gap-10">
                <div className="mb-8 md:mb-0">
                  <label className="block text-xs md:text-sm uppercase tracking-[0.2em] text-gray-400 mb-4 ml-3 font-semibold">Full Name</label>
                  <input 
                    type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="e.g. Lahiru Ashan"
                    className="w-full px-6 py-5 bg-lavender-50/50 rounded-3xl focus:outline-none focus:ring-2 focus:ring-lavender-300 text-gray-700 transition-all placeholder:text-gray-300 border border-transparent focus:border-lavender-200 focus:bg-white text-lg font-light"
                  />
                </div>

                <div className="mb-8 md:mb-0">
                  <label className="block text-xs md:text-sm uppercase tracking-[0.2em] text-gray-400 mb-4 ml-3 font-semibold">Will you attend?</label>
                  <div className="flex gap-8 h-[68px] items-center px-8 bg-lavender-50/50 rounded-3xl border border-transparent transition-all">
                    <label className="flex items-center gap-4 text-gray-600 text-lg md:text-xl font-light cursor-pointer hover:text-lavender-500 transition group">
                      <input type="radio" name="attending" value="yes" checked={formData.attending === 'yes'} onChange={handleChange} className="accent-lavender-500 w-5 h-5 transition-transform group-hover:scale-110"/> Yes
                    </label>
                    <label className="flex items-center gap-4 text-gray-600 text-lg md:text-xl font-light cursor-pointer hover:text-lavender-500 transition group">
                      <input type="radio" name="attending" value="no" checked={formData.attending === 'no'} onChange={handleChange} className="accent-lavender-500 w-5 h-5 transition-transform group-hover:scale-110"/> No
                    </label>
                  </div>
                </div>

                <AnimatePresence>
                  {formData.attending === 'yes' && (
                    <>
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
                        className="mb-8 md:mb-0 overflow-hidden"
                      >
                        <div className="pt-2">
                            <label className="block text-xs md:text-sm uppercase tracking-[0.2em] text-gray-400 mb-4 ml-3 font-semibold">Number of Guests</label>
                            <input 
                            type="number" name="guests" min="1" max="10" required value={formData.guests} onChange={handleChange}
                            className="w-full px-6 py-5 bg-lavender-50/50 rounded-3xl focus:outline-none focus:ring-2 focus:ring-lavender-300 text-gray-700 transition-all border border-transparent focus:border-lavender-200 focus:bg-white text-lg font-light"
                            />
                        </div>
                      </motion.div>
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
                        className="mb-8 md:mb-0 overflow-hidden"
                      >
                         <div className="pt-2">
                            <label className="block text-xs md:text-sm uppercase tracking-[0.2em] text-gray-400 mb-4 ml-3 font-semibold">Dietary Restrictions</label>
                            <input 
                            type="text" name="dietary" value={formData.dietary} onChange={handleChange} placeholder="e.g. Vegetarian"
                            className="w-full px-6 py-5 bg-lavender-50/50 rounded-3xl focus:outline-none focus:ring-2 focus:ring-lavender-300 text-gray-700 transition-all placeholder:text-gray-300 border border-transparent focus:border-lavender-200 focus:bg-white text-lg font-light"
                            />
                        </div>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>

              <div className="mb-10 mt-4 md:mt-8">
                <label className="block text-xs md:text-sm uppercase tracking-[0.2em] text-gray-400 mb-4 ml-3 font-semibold">Message for the couple</label>
                <textarea 
                  name="message" value={formData.message} onChange={handleChange} rows="4" placeholder="Leave a little note..."
                  className="w-full px-6 py-6 bg-lavender-50/50 rounded-3xl focus:outline-none focus:ring-2 focus:ring-lavender-300 text-gray-700 transition-all resize-none border border-transparent focus:border-lavender-200 focus:bg-white placeholder:text-gray-300 text-lg font-light"
                ></textarea>
              </div>

              <div className="flex flex-col md:flex-row gap-5">
                <motion.button 
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  type="submit" disabled={isSubmitting}
                  className="w-full md:w-3/4 py-6 bg-gradient-to-r from-lavender-400 to-lavender-500 text-white rounded-[2rem] text-sm md:text-base uppercase tracking-[0.2em] font-semibold shadow-[0_15px_30px_rgba(145,109,177,0.3)] hover:shadow-[0_20px_40px_rgba(145,109,177,0.4)] transition-all disabled:opacity-70 disabled:cursor-not-allowed border border-lavender-300/50"
                >
                  {isSubmitting ? 'Sending...' : 'Confirm Details'}
                </motion.button>
                
                <button 
                  type="button" disabled={isSubmitting} onClick={() => setIsFormOpen(false)}
                  className="w-full md:w-1/4 py-6 text-gray-400 bg-transparent hover:bg-gray-50/50 hover:text-gray-600 rounded-[2rem] text-xs md:text-sm uppercase tracking-[0.2em] font-semibold transition-all disabled:opacity-50"
                >
                  Cancel
                </button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>

        <div className="mt-28 text-xs md:text-sm uppercase tracking-[0.3em] text-gray-300 flex flex-col items-center gap-4">
          <p>Made with love</p>
          <motion.span 
            animate={{ scale: [1, 1.3, 1] }} 
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            className="text-lavender-300 text-2xl md:text-3xl"
          >
            ♥
          </motion.span>
        </div>
      </div>
    </div>
  );
}