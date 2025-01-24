import React, { useState } from "react";
import { toast } from "react-toastify";
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

    if (!formData.name.trim()) {
      toast.error("Name is required", {
        pauseOnHover: false,
      });
      isValid = false;
    } else if (formData.name.trim().length < 3) {
      toast.error("Name must be at least 3 characters long", {
        pauseOnHover: false,
      });
      isValid = false;
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!formData.phone.trim()) {
      toast.error("Phone number is required", { pauseOnHover: false });
      isValid = false;
    } else if (!phoneRegex.test(formData.phone)) {
      toast.error("Invalid phone number", { pauseOnHover: false });
      isValid = false;
    }

    if (!formData.email.trim()) {
      toast.error("Email address is required", { pauseOnHover: false });
      isValid = false;
    } else if (
      !formData.email.includes("@") ||
      !formData.email.match(/^[a-zA-Z0-9.-_]+@[a-zA-Z0-9]+(\.[a-zA-Z]{2,})?$/)
    ) {
      toast.error("Invalid email address", { pauseOnHover: false });
      isValid = false;
    }

    if (!formData.message.trim()) {
      toast.error("Message cannot be empty", { pauseOnHover: false });
      isValid = false;
    } else if (formData.message.length > 200) {
      toast.error("Message cannot be more than 200 characters long", { pauseOnHover: false })
    }
    else {
      const messageRegex = /^[a-zA-Z0-9.,'"!&\s@%#%^*(){}?+-/]*$/;
      if (!messageRegex.test(formData.message)) {
        toast.error(
          "Message can only contain alphabets, numbers, and some special symbols",
          { pauseOnHover: false }
        );
        isValid = false;
      }
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      toast.success("Your message has been sent successfully!", { pauseOnHover: false });
      console.log("Form Data:", formData);
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
