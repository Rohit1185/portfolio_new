import { useState } from "react";
import axios from "axios";
import '../assets/contact.css';

export default function Contact() {
    const [result, setResult] = useState("");
    const ipstackApiKey = import.meta.env.VITE_IPSTACK_API_KEY;
    const web3formsApiKey = "4f3e705a-29c5-4dbd-ac9a-57db97728c7a"; // Make sure this is a valid key from web3forms.com

    const onSubmit = async (event) => {
        event.preventDefault();
        console.log(ipstackApiKey)
        setResult("Sending....");

        const formData = new FormData(event.target);

        // Prevent bot submission using honeypot field
        const websiteField = formData.get('website');
        if (websiteField) {
            setResult("Bot detected");
            return;
        }

        try {
            // Get IP/location info
            const ipRes = await axios.get(`https://api.ipstack.com/check?access_key=${ipstackApiKey}`);
            console.log("IP DATA",ipRes.data)
            
            const ipData = ipRes.data;

            // Append IP/location info to form
            formData.append("ip", ipData.ip || "");
            formData.append("city", ipData.city || "");
            formData.append("region", ipData.region_name || "");
            formData.append("country", ipData.country_name || "");
            formData.append("user_agent", navigator.userAgent);

            // Add Web3Forms API key
            formData.append("access_key", web3formsApiKey);

            // Submit to Web3Forms
            const response = await axios.post("https://api.web3forms.com/submit", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });

            const data = response.data;
            if (data.success) {
                setResult("Form Submitted Successfully");
                event.target.reset();
            } else {
                console.log("Web3Forms Error:", data);
                setResult(data.message || "Submission failed.");
            }
        } catch (error) {
            console.log("Submission Error:", error);
            setResult("Something went wrong!");
        }
    };

    return (
        <div className="contact-container">
            <form className="contact-form" onSubmit={onSubmit}>
                <h1>Contact <strong>Me</strong></h1>
                <input className="contact-input" type="text" name="name" placeholder="Your Name" required />
                <input className="contact-input" type="email" name="email" placeholder="Your Email" required />
                <textarea className="contact-textarea" name="message" placeholder="Your Message" required></textarea>
                <input type="text" name="website" style={{ display: "none" }} placeholder="Leave this field blank" />
                <button className="contact-button" type="submit">Submit Form</button>
            </form>
            <span className="contact-result">{result}</span>
        </div>
    );
}
