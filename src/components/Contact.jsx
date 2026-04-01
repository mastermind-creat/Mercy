import { useState } from "react";
import SectionWrapper from "./SectionWrapper.jsx";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // Create WhatsApp message
    const whatsappMessage = `*New Portfolio Contact*\n\n*Name:* ${form.name}\n*Email:* ${form.email}\n*Subject:* ${form.subject}\n\n*Message:*\n${form.message}`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // WhatsApp number (replace with actual number)
    const whatsappNumber = "+254702384736"; // Mercy's number

    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${whatsappNumber.replace(/[^\d]/g, '')}?text=${encodedMessage}`;

    // Open WhatsApp in new tab
    window.open(whatsappURL, '_blank');

    setSubmitted(true);
    setForm(initialForm);

    // Reset submitted state after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <SectionWrapper
      id="contact"
      title="Contact"
      subtitle="Have a role or project in mind? Send a message and let's collaborate."
    >
      <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 md:p-8 dark:border-slate-800 dark:bg-slate-900">
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <input
              name="name"
              value={form.name}
              onChange={onChange}
              required
              placeholder="Your Name"
              className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-500 dark:border-slate-700 dark:bg-slate-950"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={onChange}
              required
              placeholder="Your Email"
              className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-500 dark:border-slate-700 dark:bg-slate-950"
            />
          </div>
          <input
            name="subject"
            value={form.subject}
            onChange={onChange}
            required
            placeholder="Subject"
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-500 dark:border-slate-700 dark:bg-slate-950"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={onChange}
            required
            rows={5}
            placeholder="Message"
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-500 dark:border-slate-700 dark:bg-slate-950"
          />
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.27-.099-.471-.149-.67.15-.197.297-.401.748-.401.748-.274.449-.663.893-.663.893-.238.149-.464.149-.69.0-.237-.011-1.025-.011-1.025-.449.486-.896.486-1.025 0-1.434-.896-2.582-.896-2.582-.896-1.434 0-2.582.896-2.582.896-.149 0-.449.011-.69.011-.224 0-.471.149-.67.149-.198 0-.352-.224-.748-.401-.748-.401-.272-.099-1.733-.818-2.03-.967-.272-.149-.471-.149-.671.149-.196.297-.401.748-.401.748-.274.449-.663.893-.663.893z" />
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-2.902-1.083-1.002 2.717c-.312.748-1.088.748-1.088.748l1.088-2.717-2.902 1.083c-.547.31-.939.15-1.084-.508l-1.97-9.28c-.145-.658.149-1.013.698-1.013h11.443c.547 0 .842.355.698 1.013z" />
            </svg>
            Send via WhatsApp
          </button>
          {submitted && (
            <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Opening WhatsApp... Message sent successfully!
            </p>
          )}
        </form>
      </div>
    </SectionWrapper>
  );
}

export default Contact;
