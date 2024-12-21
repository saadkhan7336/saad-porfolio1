import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the form from submitting if it's invalid

    // Check if all fields are filled
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields before submitting the form. Running on localhost!');
      return; // Stop the form from being submitted
    }

    // If all fields are filled, proceed with the email submission
    emailjs
      .sendForm('service_z9mgkvb', 'template_ml70u7m', form.current, '4o2IgYMy34kv1rbzP')
      .then(
        (result) => {
          alert('Message sent successfully!');
          console.log(result.text);
        },
        (error) => {
          alert('Error sending message');
          console.log(error.text);
        }
      );

    // Reset the form after submission
    form.current.reset();
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div name="contact" className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4">
      <form ref={form} onSubmit={handleSubmit} className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">Contact</p>
          <p className="text-gray-300 py-4">// Submit the form below or shoot me an email - saadahmadkhan627@gmail.com</p>
        </div>
        <input
          className="bg-[#303b61] p-2 rounded-lg"
          type="text"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          className="my-4 p-2 bg-[#303b61] rounded-lg"
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          className="bg-[#303b61] p-2 rounded-lg p-2"
          name="message"
          rows="10"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button
          type="submit"
          className="text-white border-2 rounded-lg hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center"
          disabled={!formData.name || !formData.email || !formData.message}  // Disable button if any field is empty
          style={{
            cursor: !formData.name || !formData.email || !formData.message ? 'not-allowed' : 'pointer',
          }}  // Change cursor when button is disabled
        >
          Let's Collaborate
        </button>
      </form>
    </div>
  );
}

export default Contact;
