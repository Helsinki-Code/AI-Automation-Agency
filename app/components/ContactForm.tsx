"use client";
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import { Calendar, Send } from 'lucide-react';







const formSchema = z.object({



  name: z.string().min(2, 'Name must be at least 2 characters'),



  email: z.string().email('Invalid email address'),



  phone: z.string().optional(),



  service: z.string().min(1, 'Please select a service'),



  date: z.string().min(1, 'Please select a date'),



  message: z.string().min(10, 'Message must be at least 10 characters'),



});







type FormData = z.infer<typeof formSchema>;







const services = [



  "AI Agents Development",



  "Fine-Tuning & Training LLMs",



  "Predictive Analytics",



  "Workflow Automation",



  "Custom AI Systems"



];







export function ContactForm() {



  const [isSubmitting, setIsSubmitting] = useState(false);







  const {



    register,



    handleSubmit,



    reset,



    formState: { errors },



  } = useForm<FormData>({



    resolver: zodResolver(formSchema),



  });







  const onSubmit = async (data: FormData) => {



    setIsSubmitting(true);



    try {



      const response = await fetch('/api/contact', {



        method: 'POST',



        headers: {



          'Content-Type': 'application/json',



        },



        body: JSON.stringify(data),



      });







      if (!response.ok) {



        throw new Error('Failed to send message');



      }







      toast.success('Message sent successfully! We\'ll get back to you soon.');



      reset();



    } catch (error) {



      toast.error('Failed to send message. Please try again later.');



      console.error('Submission error:', error);



    } finally {



      setIsSubmitting(false);



    }



  };







  return (



    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">



      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">



        <div>



          <label htmlFor="name" className="block text-sm font-medium text-gray-700">



            Full Name



          </label>



          <input



            {...register('name')}



            type="text"



            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"



            placeholder="John Doe"



          />



          {errors.name && (



            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>



          )}



        </div>







        <div>



          <label htmlFor="email" className="block text-sm font-medium text-gray-700">



            Email



          </label>



          <input



            {...register('email')}



            type="email"



            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"



            placeholder="john@example.com"



          />



          {errors.email && (



            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>



          )}



        </div>



      </div>







      <div>



        <label htmlFor="service" className="block text-sm font-medium text-gray-700">



          Service



        </label>



        <select



          {...register('service')}



          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"



        >



          <option value="">Select a service</option>



          {services.map((service) => (



            <option key={service} value={service}>



              {service}



            </option>



          ))}



        </select>



        {errors.service && (



          <p className="mt-1 text-sm text-red-600">{errors.service.message}</p>



        )}



      </div>







      <div>



        <label htmlFor="date" className="block text-sm font-medium text-gray-700">



          Preferred Date



        </label>



        <input



          {...register('date')}



          type="date"



          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"



        />



        {errors.date && (



          <p className="mt-1 text-sm text-red-600">{errors.date.message}</p>



        )}



      </div>







      <div>



        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">



          Phone (Optional)



        </label>



        <input



          {...register('phone')}



          type="tel"



          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"



          placeholder="+44 20 1234 5678"



        />



      </div>







      <div>



        <label htmlFor="message" className="block text-sm font-medium text-gray-700">



          Message



        </label>



        <textarea



          {...register('message')}



          rows={4}



          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"



          placeholder="Tell us about your project..."



        />



        {errors.message && (



          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>



        )}



      </div>







      <button



        type="submit"



        disabled={isSubmitting}



        className="w-full flex items-center justify-center px-6 py-3 rounded-md bg-purple-600 text-white font-medium hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed"



      >



        {isSubmitting ? (



          'Sending...'



        ) : (



          <>



            <Send className="w-5 h-5 mr-2" />



            Send Message



          </>



        )}



      </button>



    </form>



  );



}
