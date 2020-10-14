import React from 'react'
import emailjs from "emailjs-com"


var Recaptcha = require('react-recaptcha');

const Contact = () => {

    function sendEmail(e) {
        e.preventDefault();
        if(isVerified){
            updateIsSent(true)
            emailjs.sendForm("service_05gyzed", "template_40ln3o7", e.target, "user_DD9vdPhuqIJMUO1meX77e")
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset();
        }
    }
    const [isVerified, updateVerification] = React.useState(false);
    const [isSent, updateIsSent] = React.useState(false);

   
  // specifying verify callback function
    var verifyCallback = function (response) {
        if(response){
            updateVerification(true);
            console.log(isVerified);
        }
    };

    var checkVerification = function () {
        if(!isVerified){
            alert("Oops, you have to check the recaptcha !!");
        }
    }

    return(
    <section className="contact-page" id="contactSection">
        <article className="contact-form">
            <h3>Get In Touch</h3>
            { !isSent && <form onSubmit={sendEmail}>
                <div className="form-group">
                    <input type="text" name="name" className="form-control" placeholder="Full Name" required/>
                    <input type="email" name="email" className="form-control" placeholder="Email" required/>
                    <textarea name="message" className="form-control" rows="5" placeholder="Message" required/>
                </div> 
                <div className="recaptcha">
                    <Recaptcha 
                        elementID="recaptcha"
                        sitekey="6LeZNNUZAAAAABC8iIy8wZ9-ZudRof-tSrLbGwNn"
                        render="explicit" 
                        verifyCallback={verifyCallback}
                    />
                </div>
                <button type="submit" value="Send" className="btn submit-btn" onClick={checkVerification}>submit</button> 
            </form> }
            {isSent && <div><h4> Thank you for cantacting me <br />
            I'll will be in touch with you ASAP</h4></div>}
        </article>
    </section>
    )
}


export default Contact