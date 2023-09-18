import React from 'react'

const Contact = () => {
  return (
    <section>
      <div className="px-4 mx-auto max-w-screen-md">
      {/* ============ Heading =========== */}
        <h2 className="heading text-center">Center</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text_para">Got a technical issue?  Want to send feedback about a beta feature? Let Us Know</p>
      
      {/* ============== contact form ========== */}
        <form action="#" className="space-y-8 ">
          <div>
          <label htmlFor="email" className="form_label">Your Email</label>
        <input
        id='email'
        type="email"
        placeholder='example@gmail.com'
        className="form_input mt- rounded-md"
        />
          </div>
          <div>
          <label htmlFor="subject" className="form_label">How we can help you</label>
        <input
        id='subject'
        type="text"
        placeholder='How we can help you'
        className="form_input mt-1 rounded-md"
        />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" 
            className="form_label">your Message</label>

            <textarea  rounded-md
            name="message"
            type="text"
            id="message"            
            rows="4"
            placeholder='Leave a comment'
            className='w-full form_input mt-3 rounded-md'
            ></textarea>
          </div>
          <button className="btn rounded-md">
            Submit
          </button>
      </form>
      </div>
      
    </section>
  )
}

export default Contact