import { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {

    const [, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "f0f6cea6-3cbf-41a5-a454-141e8f4e102e");

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
        <form onSubmit={onSubmit}>
            <div className='input-field'>
                <label>Name</label>
                <input name="name" type='text' className='field' placeholder='Enter your name' required />
            </div>
            <div className='input-field'>
                <label>Email</label>
                <input name="email" type='email' className='field' placeholder='Enter your email' required />
            </div>
            <div className='input-field'>
                <label>Message</label>
                <textarea name='message' type='text' className='field message-box' placeholder='Enter your message' required />
            </div>
            <button type='submit'>Send Message</button>
        </form>
    )
}

export default ContactForm;