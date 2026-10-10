function Contact() {
  return (
    <section id="contact" className="max-w-3xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-4 text-slate-800 dark:text-blue-200">
        Contact
      </h2>
      <p className="text-black-700 dark:text-black-300 mb-5">
        Want to say hi? Drop me a message!
      </p>
      <form
        className="flex flex-col gap-3 max-w-md"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder="Your name"
          className="border border-gray-300 dark:border-gray-600 dark:bg-gray-800 rounded-md px-3 py-2.5"
        />
        <input
          type="email"
          placeholder="Your email"
          className="border border-gray-300 dark:border-gray-600 dark:bg-gray-800 rounded-md px-3 py-2.5"
        />
        <textarea
          placeholder="Your message"
          rows="4"
          className="border border-gray-300 dark:border-gray-600 dark:bg-gray-800 rounded-md px-3 py-2.5"
        />
        <button
          type="submit"
          className="bg-white-700 hover:bg-blue-800 text-white font-semibold py-3 rounded-md"
        >
          Send
        </button>
      </form>
    </section>
  );
}

export default Contact;