import React from 'react'
import ContactForm from '../ContactFrom/ContactForm'
import icon1 from '../../images/update/flag1.png'
import icon2 from '../../images/update/flag2.png'
import icon3 from '../../images/update/flag3.png'


const ContactSection = (props) => {
    return (
        <div>
            <div className="contact contact--layout1">
                <ContactForm/>
            </div>
            <div id="myMap">
                <iframe title='title' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14599.594381298903!2d90.42194549999999!3d23.822204699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1644251033908!5m2!1sen!2sbd" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>
            </div>
        </div>
    )
}

export default ContactSection;