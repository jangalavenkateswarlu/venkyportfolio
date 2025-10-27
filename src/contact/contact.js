
import './contact.css';
import React, { useRef,useState} from 'react';
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
const Contact = ()=>{
    const form = useRef();
     const [status, setStatus] = useState("");
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_oan4rgn', 'template_f9xddbb', form.current, 'Fp1Vj5tcxj_2bwMnR')
    .then(
        (result) => {
          console.log('SUCCESS!',result.text);
          e.target.reset();
          setStatus("success"); // show success message
          setTimeout(() => setStatus(""), 5000);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setStatus("error"); // show error message
          setTimeout(() => setStatus(""), 5000);
        }
      );
  };


         return(
           <section id="contactpage">
            <div id="contact">
            <h1 className="contacttit">CONTACT ME</h1>
            <span className="contdes"> Please fill out the form below to dicuss any work opportunities.</span>
            <form className="contactform" ref={form} onSubmit={sendEmail}>
                <p>
                 <FontAwesomeIcon icon={faPhone} /> 6301628844
                </p>
                <p>
                  <FontAwesomeIcon icon={faEnvelope} /> jangalav58@gmail.com
                </p>
                <input type="text"  name="user_name"  className="name" placeholder="Enter Your Name" required/>
                <input type="email" name="user_email"  className="email" placeholder="Enter Your Email" required/>
                <textarea className="msg" name='message' cols="10" rows="10" placeholder="Enter Your Message" required></textarea>
                <button type="submit"  value="send" className="submitbtn" >submit</button>
            </form>
             {status === "success" && (
          <p className="mt-4 text-green-600 font-semibold animate-fadeIn">
            ✅ Your email has been sent successfully!
          </p>
        )}
        {status === "error" && (
          <p className="mt-4 text-red-600 font-semibold animate-fadeIn">
            ❌ Failed to send email. Please try again later.
          </p>
        )}
            </div>
           </section>

         )

}
export default Contact;