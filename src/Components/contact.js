import React, { useState } from "react";
import { NotificationManager } from "react-notifications";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./contact.css"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "name"
        ? value
          .toLowerCase()
          .replace(/\b\w/g, (char) => char.toUpperCase())
        : name === "email"
          ? value
            .toLowerCase()
          : name === "message"
            ? value
              .toLowerCase()
              .replace(/(^\s*\w|[.!?]\s*\w)/g, (char) => char.toUpperCase())
            : value
    });
  };

  const validate = () => {
    let isValid = true;

    const nameRegex = /^[a-zA-Z\s]+$/;
    const consecutiveIdenticalRegex = /([a-zA-Z])\1{2,}/i;  
    const consecutiveSequenceRegex = /([a-zA-Z])\2{6,}/;

    if (!formData.name.trim()) {
      NotificationManager.error("Name is required", null, 4000);
      isValid = false;
    } else if (formData.name.trim().length < 3) {
      NotificationManager.error(`Invalid name "${formData.name.trim()}"`, null, 4000);
      isValid = false;
    } else if (!nameRegex.test(formData.name)) {
      NotificationManager.error(`Invalid name "${formData.name.trim()}"`, null, 4000);
      isValid = false;
    } else if (consecutiveIdenticalRegex.test(formData.name.replace(/\s+/g, ''))) {
      NotificationManager.error(`Invalid name "${formData.name.trim()}"`, null, 4000);
      isValid = false;
    } else if (consecutiveSequenceRegex.test(formData.name.replace(/\s+/g, ''))) {
      NotificationManager.error(`Invalid name "${formData.name.trim()}"`, null, 4000);
      isValid = false;
    }

    const phoneRegex = /^(?!(\d)\1{9})[6-9]\d{9}$/;
    if (!formData.phone.trim()) {
      NotificationManager.error("Phone number is required", null, 4000);
      isValid = false;
    } else if (!phoneRegex.test(formData.phone)) {
      NotificationManager.error("Invalid phone number", null, 4000);
      isValid = false;
    } else if (formData.phone === "9876543210") {
       NotificationManager.error("Invalid phone number", null, 4000);
       isValid = false;
    }

    if (!formData.email.trim()) {
      NotificationManager.error("Email address is required", null, 4000);
      isValid = false;
    } else if (
      !formData.email.includes("@") ||
      !formData.email.match(/^[a-zA-Z0-9.-_]+@[a-zA-Z0-9]+(\.[a-zA-Z]{2,})?$/) ||
      !formData.email.match(/\.(com|in|org|edu\.in|net|co\.in)$/)
    ) {
      NotificationManager.error("Invalid email address", null, 4000);
      isValid = false;
    }

    if (!formData.message.trim()) {
      NotificationManager.error("Message cannot be empty", null, 4000);
      isValid = false;
    } else if (formData.message.length > 250) {
      NotificationManager.error("Message cannot be more than 250 characters long", null, 4000);
      isValid = false;
    }
    else {
      const messageRegex = /^[a-zA-Z0-9.,'"!&\s@%#%^*(){}?+-/]*$/;
      if (!messageRegex.test(formData.message)) {
        NotificationManager.error("Message can only contain alphabets, numbers, and some special symbols", null, 4000);
        isValid = false;
      }
    }

    return isValid;
  };


  const notify = () => {
    const toastId = toast.loading("Sending message...", {
    });

    setTimeout(() => {
      toast.update(toastId, {
        render: "Your message has been sent successfully !",
        type: "success",
        isLoading: false,
        autoClose: 4000,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        closeButton: true,
      });
    }, 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      notify();
      console.log("Name: ", formData.name);
      console.log("Phone: ", formData.phone);
      console.log("Email: ", formData.email);
      console.log("Message: ", formData.message);
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
    }
  };



  return (
    <div className="contact" id="Contact">
      <h2 >Contact me</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="" pattern="[A-Za-z\s]*" onInput={(e) => { e.target.value = e.target.value.replace(/[^A-Za-z\s]/g, ""); }} style={{ width: "100%" }} />
          <label>Name</label>
        </div>
        <div className="input-container">
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder=" " maxLength="10" pattern="[0-9]*" onInput={(e) => e.target.value = e.target.value.replace(/\D/g, "")} style={{ width: "100%" }} />
          <label>Phone Number</label>
        </div>
        <div className="input-container">
          <input type="text" name="email" value={formData.email} onChange={handleChange} placeholder=" " style={{ width: "100%" }} />
          <label>Email Address</label>
        </div>
        <div className="input-container">
          <textarea type="text" name="message" value={formData.message} onChange={handleChange} placeholder=" " style={{ width: "100%" }} />
          <label>Your Message</label>
        </div>
        <button type="submit" className="submit" style={{ marginTop: "10px" }}>Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
