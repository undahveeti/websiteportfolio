import React, {useState} from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8215400c-55dd-454e-803b-ea02b7219a27");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div id='contact' className='w-full min-h-screen bg-gray-50 dark:bg-darkTheme px-6 lg:px-12 py-20 
                                bg-[url("/footer-bg-color.png")] dark:bg-none bg-no-repeat bg-center bg-[length:90%_auto]'>
      <div className='max-w-[1400px] mx-auto'>
        <div className='text-center mb-16'>
          <h4 className='text-lg text-gray-600 dark:text-gray-400 mb-2'>Connect with me</h4>
          <h2 className='text-5xl font-semibold dark:text-white'>Get in touch</h2>
          <p className='text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mt-8'>
            I'd love to hear from you! If you have any questions, comments, or feedback, please use the form below!
          </p>
        </div>

        <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
          <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
            <input 
              type="text" 
              placeholder='Enter your name' 
              className='flex-1 p-3 outline-none border border-gray-400 dark:border-gray-600 
                       rounded-md bg-white dark:bg-darkTheme dark:text-white 
                       placeholder:text-gray-500 dark:placeholder:text-gray-400' 
              name='name'
            />
            <input 
              type="email" 
              placeholder='Enter your email' 
              className='flex-1 p-3 outline-none border border-gray-400 dark:border-gray-600 
                       rounded-md bg-white dark:bg-darkTheme dark:text-white 
                       placeholder:text-gray-500 dark:placeholder:text-gray-400' 
              name='email'
            />
          </div>
          <textarea 
            rows='6' 
            placeholder='Enter your message' 
            className='w-full p-4 outline-none border border-gray-400 dark:border-gray-600 
                     rounded-md bg-white dark:bg-darkTheme dark:text-white mb-6
                     placeholder:text-gray-500 dark:placeholder:text-gray-400' 
            name='message'
          ></textarea>
          
          <button 
            type='submit' 
            className='py-3 px-8 w-max flex items-center justify-center gap-2 
                     bg-black/80 dark:bg-white/90 text-white dark:text-black 
                     rounded-full mx-auto hover:bg-black dark:hover:bg-white duration-500'
          >
            Submit now
            <Image src={assets.right_arrow_white} alt='' className='w-4'></Image>
          </button>
          <p className='mt-4 text-center dark:text-white'>{result}</p>
        </form>
      </div>
    </div>
  )
}

export default Contact
