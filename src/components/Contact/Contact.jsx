import React,{useState, useRef} from 'react'
import emailjs from "@emailjs/browser";
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import './Contact.css'

const Contact = () => {
    const form = useRef();
    const [done, setDone] = useState(false)
    const [notDone, setNotDone] = useState(false)
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value})
        setDone(false)
        setNotDone(false)
    }

    const sendEmail = (e) => {
    e.preventDefault();
    
    if(!formData.from_name || !formData.reply_to ||!formData.message){
      setNotDone(true)
    } else {
      
      //  Please use your own credentials from emailjs or i will recive your email
      
    emailjs
      .sendForm(
        "service_x9lhx3x",
        "template_45e4zk9",
        form.current,
        "0Bhu4Z9cHZC-WIefH"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    }
    };
    

    return(
      <div className="contact-form">
        <Container style={{paddingTop: '50px'}} >
            <Row >
            <Col md={6} className="c-left" >
            <h1>Let's Connect</h1>
            <h1 className="yellow">Get in Touch</h1>
            </Col>
            <Col md={6} className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="from_name" className="user"  placeholder="Name" onChange={handleChange}/>
                <input type="email" name="reply_to" className="user" placeholder="Email" onChange={handleChange} />
                <textarea name="message" className="user" placeholder="Message" onChange={handleChange} />
                <span className='not-done'>{notDone && "Please fill in all fields before submitting."}</span>
                <Button type="submit" className="button" disabled={done}>Send</Button>
                <span className='done'>{done && "Thanks for reaching out! I've received your message and will get back to you soon. Feel free to also connect on LinkedIn or email me directly for quicker responses."}
                </span>
  


                </form>
            </Col>
            </Row>
        </Container>
        </div>
    )
}

export default Contact