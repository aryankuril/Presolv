'use client';

import React, { useState } from 'react';
import Button from '../components/Button';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    questions: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Thank you for your interest! We will contact you shortly.');
    setFormData({
      name: '',
      phone: '',
      questions: ''
    });
  };

  return (
    <div className='container odr-course-bg ellipse-bg py-15 px-15 flex flex-col items-center gap-9.5 justify-center mt-5 mb-10 mx-auto max-sm:px-5 max-sm:py-10'>
    <div>
      <h2 className='text-center'>
        Have Questions? We&apos;re Here to Help!
      </h2>
      <p className='text-center pt-5'>
        Share your name and phone number, and we&apos;ll reach out with all the course details.
        Start your ODR journey today!
      </p>
    </div>
    <form className='flex flex-col gap-2.5 items-center max-sm:w-full'>
      <div className='flex flex-row flex-wrap gap-8 w-full max-sm:flex-col max-sm:gap-2'>
        <input type='text' placeholder='Name' className='w-[22%] border-b border-[#C3C3C3] pb-2 bg-transparent max-sm:w-[100%]'></input>
        <input type='text' placeholder='Phone Number' className='w-[22%] border-b border-[#C3C3C3] pb-2 bg-transparent max-sm:w-[100%]'></input>
        <input type='text' placeholder='Email' className='w-[22%] border-b border-[#C3C3C3] pb-2 bg-transparent max-sm:w-[100%]'></input>
        <input type='text' placeholder='Any Questions ?' className='w-[22%] border-b border-[#C3C3C3] pb-2 bg-transparent max-sm:w-[100%]'></input>
      </div>
      <Button type='submit' className='custom-btn-primary relative text-center mt-4'>SUBMIT</Button>
    </form>
  </div>
  );
} 