import {useRef} from 'react';
import emailjs from '@emailjs/browser';
import './mailler.css';

const Mailer = () => {
        const form = useRef()

        const sendEmail = (e) => {
            e.preventDefault();
        
            emailjs
              .sendForm('service_6mmdd7q', 'template_3f2rtc7', form.current, {
                publicKey: 'j030aJPOgR8e4-EWp',
              })
              .then(
                () => {
                  console.log('SUCCESS!');
                },
                (error) => {
                  console.log('FAILED...', error.text);
                },
              );
              e.target.reset()
          };
    return (
        <section className="background-section">
            <div className="container">
                <h1 className="--text-center">Place Order</h1>
                <form ref={form} onSubmit={sendEmail}>
                    <input
                        type="text"
                        placeholder="Supplier's Name"
                        name='s_name'
                        required
                    />
                    <input
                        type="email"
                        placeholder="Supplier's Email"
                        name='supplier_email'
                        required
                    />
                    <input
                        type="text"
                        placeholder='Subject'
                        name='subject'
                        required
                    />
                    <textarea
                        name="message"
                        cols="30" rows="10"
                    ></textarea>
                    <button type="submit">
                        Send
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Mailer;
