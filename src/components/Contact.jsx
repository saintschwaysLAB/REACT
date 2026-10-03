import './Contact.css';

function Contact() {
  return (
    <section>
      <h2>Contact</h2>
      <p>Want to say hi? Drop me a message!</p>
      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Your name" />
        <input type="email" placeholder="Your email" />
        <textarea placeholder="Your message" rows="4" />
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;