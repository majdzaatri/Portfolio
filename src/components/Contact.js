import React from 'react'
import emailjs from "emailjs-com"

const Contact = () => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm("service_05gyzed", "template_40ln3o7", e.target, "user_DD9vdPhuqIJMUO1meX77e")
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    }

    return(
    <section className="contact-page" id="contactSection">
        <article className="contact-form">
            <h3>Get In Touch</h3>
            <form onSubmit={sendEmail}>
                <div className="form-group">
                    <input type="text" name="name" className="form-control" placeholder="Full Name" />
                    <input type="email" name="email" className="form-control" placeholder="Email" />
                    <textarea name="message" className="form-control" rows="5" placeholder="Message" />
                </div>
                <button type="submit" value="Send" className="btn submit-btn">submit</button>
            </form>
        </article>
    </section>
    )
}

export default Contact