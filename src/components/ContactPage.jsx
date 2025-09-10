import { useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

export default function ContactEmailJS() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    timeline: '',
    details: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const validateForm = () => {
    if (!form.name.trim()) return 'Name is required';
    if (!form.email.trim()) return 'Email is required';
    if (!/\S+@\S+\.\S+/.test(form.email)) return 'Email is invalid';
    if (!form.phone.trim()) return 'Phone number is required';
    if (!/^\d{10,15}$/.test(form.phone)) return 'Phone number must be between 10 to 15 digits';
    if (!form.service.trim()) return 'Service of interest is required';
    if (!form.timeline.trim()) return 'Expected timeline is required';
    if (!form.details.trim()) return 'Message is required';
    return null;
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const error = validateForm();
    if (error) {
      toast.error(error);
      return;
    }

    setLoading(true);

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      from_name: form.name,
      name: form.name,
      from_email: form.email,
      phone: form.phone,
      service: form.service,
      timeline: form.timeline,
      message: form.details,
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      toast.success('Message sent successfully 🚀');
      setForm({ name: '', email: '', phone: '', service: '', timeline: '', details: '' });
    } catch (err) {
      console.error('EmailJS error:', err);
      toast.error('Failed to send. Try again later ❌');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* <h2 className="text-4xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
          Contact Me
        </h2> */}
        <h2 className="text-3xl font-bold text-center mb-4 text-blue-400">Contact Me </h2>
        <p className="text-gray-400 mb-6 text-lg">Cultivating Connections: Reach Out And Connect With Me</p>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-900/60 backdrop-blur-md rounded-2xl shadow-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-6 border border-gray-800">
          <input
            required
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name *"
            className="p-3 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />

          <input
            required
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email *"
            className="p-3 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />

          <input
            required
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="p-3 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />

          <select
            required
            name="service"
            value={form.service}
            onChange={handleChange}
            className="p-3 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-purple-500 focus:outline-none">
            <option value="">Service Of Interest</option>
            <option value="backend">Backend Development</option>
            <option value="frontend">Frontend Development</option>
            <option value="full-stack">Full-Stack Development</option>
            <option value="mobile">Mobile App</option>
          </select>

          <input
            required
            name="timeline"
            value={form.timeline}
            onChange={handleChange}
            placeholder="Expected Timeline (e.g. 2 weeks)"
            className="p-3 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-purple-500 focus:outline-none self-start"
          />

          <textarea
            name="details"
            value={form.details}
            onChange={handleChange}
            rows="1"
            placeholder="Project Details... *"
            className="p-3 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-purple-500 focus:outline-none md:col-span-1 self-start"
          />

          <div className="md:col-span-2 text-right">
            <button
              type="submit"
              disabled={loading}
              className="px-8 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-500 hover:scale-105 transform transition-all shadow-md hover:shadow-purple-500/40 disabled:opacity-50">
              {loading ? 'Sending...' : 'Send Message '}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
