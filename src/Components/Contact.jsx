import { useState } from "react";
import '../assets/contact.css';

export default function Contact() {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "4f3e705a-29c5-4dbd-ac9a-57db97728c7a");

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
        <div className="contact-container">
            <form className="contact-form" onSubmit={onSubmit}>
                <h1>Conatact <strong>Me</strong></h1>
                <input className="contact-input" type="text" name="name" placeholder="Your Name" required />
                <input className="contact-input" type="email" name="email" placeholder="Your Email" required />
                <textarea className="contact-textarea" name="message" placeholder="Your Message" required></textarea>
                <button className="contact-button" type="submit">Submit Form</button>
            </form>
            <span className="contact-result">{result}</span>
        </div>
    );
}
