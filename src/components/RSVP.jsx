import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function RSVP() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle'); // 'idle' | 'success' | 'error'
  
  const [formData, setFormData] = useState({ 
    name: '', 
    attending: 'yes', 
    guests: '1', 
    dietary: '', 
    message: '' 
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const payload = {
      // ⚠️ Add your Web3Forms Access Key here
      access_key: "3c2b6575-366b-4b10-b9cd-dd28b265323b", 
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
    <div className="py-20 md:py-32 px-6 bg-white">
      <div className="max-w-md md:max-w-2xl mx-auto text-center">
        <motion.h3 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-cursive text-6xl md:text-8xl text-blush-500 mb-4 md:mb-6"
        >
          Please RSVP
        </motion.h3>
        <p className="text-lg md:text-xl text-gray-500 mb-10 md:mb-16 tracking-wide font-light">
          Kindly confirm your attendance by November 1st, 2026.
        </p>
        
        <AnimatePresence mode="wait">
          {/* STATE 1: INITIAL BUTTON */}
          {!isFormOpen && submitStatus === 'idle' && (
            <motion.button 
              key="rsvp-btn"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ scale: 1.05, boxShadow: "0px 15px 30px rgba(208,106,142,0.3)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsFormOpen(true)}
              className="w-full md:w-2/3 mx-auto block py-5 bg-gradient-to-r from-blush-400 to-blush-500 text-white rounded-full text-base md:text-lg uppercase tracking-widest font-semibold shadow-xl transition-all"
            >
              RSVP Now
            </motion.button>
          )}

          {/* STATE 2: SUCCESS MESSAGE */}
          {submitStatus === 'success' && (
            <motion.div 
              key="success-msg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="bg-blush-50/50 p-12 md:p-20 rounded-[3rem] shadow-[0_20px_40px_rgba(208,106,142,0.1)] text-center"
            >
              <h4 className="font-cursive text-5xl md:text-7xl text-blush-500 mb-6">Thank You!</h4>
              <p className="text-gray-600 text-xl md:text-2xl font-light leading-relaxed">
                Your RSVP has been successfully sent. <br/>
                We can't wait to celebrate with you!
              </p>
            </motion.div>
          )}

          {/* STATE 3: THE FORM */}
          {isFormOpen && submitStatus !== 'success' && (
            <motion.form 
              key="rsvp-form"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              onSubmit={handleSubmit} 
              className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_20px_60px_rgba(208,106,142,0.15)] text-left"
            >
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 text-red-600 text-sm rounded-xl text-center border border-red-100">
                  Oops! Something went wrong. Please try again.
                </div>
              )}

              <div className="md:grid md:grid-cols-2 md:gap-8">
                {/* NAME */}
                <div className="mb-6 md:mb-0">
                  <label className="block text-sm uppercase tracking-widest text-gray-400 mb-3 ml-2">Full Name</label>
                  <input 
                    type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="e.g. Lahiru Ashan"
                    className="w-full px-6 py-4 bg-gray-50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blush-300 text-gray-700 transition-all placeholder:text-gray-300 border-none"
                  />
                </div>

                {/* ATTENDING */}
                <div className="mb-6 md:mb-0">
                  <label className="block text-sm uppercase tracking-widest text-gray-400 mb-3 ml-2">Will you attend?</label>
                  <div className="flex gap-8 h-[60px] items-center px-6 bg-gray-50 rounded-2xl">
                    <label className="flex items-center gap-3 text-gray-700 text-lg cursor-pointer hover:text-blush-500 transition">
                      <input type="radio" name="attending" value="yes" checked={formData.attending === 'yes'} onChange={handleChange} className="accent-blush-500 w-5 h-5"/> Yes
                    </label>
                    <label className="flex items-center gap-3 text-gray-700 text-lg cursor-pointer hover:text-blush-500 transition">
                      <input type="radio" name="attending" value="no" checked={formData.attending === 'no'} onChange={handleChange} className="accent-blush-500 w-5 h-5"/> No
                    </label>
                  </div>
                </div>

                {/* GUEST COUNT & DIETARY (Only show if attending) */}
                <AnimatePresence>
                  {formData.attending === 'yes' && (
                    <>
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
                        className="mb-6 md:mb-0 overflow-hidden"
                      >
                        <label className="block text-sm uppercase tracking-widest text-gray-400 mb-3 ml-2">Number of Guests</label>
                        <input 
                          type="number" name="guests" min="1" max="10" required value={formData.guests} onChange={handleChange}
                          className="w-full px-6 py-4 bg-gray-50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blush-300 text-gray-700 transition-all border-none"
                        />
                      </motion.div>
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
                        className="mb-6 md:mb-0 overflow-hidden"
                      >
                        <label className="block text-sm uppercase tracking-widest text-gray-400 mb-3 ml-2">Dietary Restrictions</label>
                        <input 
                          type="text" name="dietary" value={formData.dietary} onChange={handleChange} placeholder="e.g. Vegetarian"
                          className="w-full px-6 py-4 bg-gray-50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blush-300 text-gray-700 transition-all placeholder:text-gray-300 border-none"
                        />
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>

              {/* MESSAGE */}
              <div className="mb-8 mt-6">
                <label className="block text-sm uppercase tracking-widest text-gray-400 mb-3 ml-2">Message for the couple</label>
                <textarea 
                  name="message" value={formData.message} onChange={handleChange} rows="4" placeholder="Leave a little note..."
                  className="w-full px-6 py-4 bg-gray-50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blush-300 text-gray-700 transition-all resize-none border-none placeholder:text-gray-300"
                ></textarea>
              </div>

              {/* ACTION BUTTONS */}
              <div className="flex flex-col md:flex-row gap-4 mt-4">
                <motion.button 
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  type="submit" disabled={isSubmitting}
                  className="w-full md:w-2/3 py-5 bg-gradient-to-r from-blush-400 to-blush-500 text-white rounded-2xl text-base md:text-lg uppercase tracking-widest font-semibold shadow-lg hover:shadow-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Confirm Details'}
                </motion.button>
                
                <button 
                  type="button" disabled={isSubmitting} onClick={() => setIsFormOpen(false)}
                  className="w-full md:w-1/3 py-5 text-gray-400 bg-transparent hover:bg-gray-50 rounded-2xl text-sm uppercase tracking-widest transition-colors disabled:opacity-50"
                >
                  Cancel
                </button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>

        {/* FOOTER */}
        <div className="mt-20 text-xs md:text-sm uppercase tracking-widest text-gray-300 flex flex-col items-center gap-2">
          <p>Made with love</p>
          <motion.span 
            animate={{ scale: [1, 1.2, 1] }} 
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-blush-200 text-2xl md:text-3xl"
          >
            ♥
          </motion.span>
        </div>
      </div>
    </div>
  );
}