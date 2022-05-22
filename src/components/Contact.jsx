import React, { useState } from "react";
import "../SASS/components/contact.scss";
import { collection, addDoc } from "firebase/firestore";
import { async } from "@firebase/util";
import { database } from "../config/firebase";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");

  // Add a new document with a generated id.
  const storeContact = async () => {
    // contacts collection in firebase
    const docRef = await addDoc(collection(database, "contacts"), {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      address: address,
      message: message,
    });
    // console.log("Document written with ID: ", docRef.id);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setAddress("");
    setMessage("");
  };

  return (
    <section className="contacts" id="contact">
      <h1>contact</h1>
      <div className="contactBox">
        <h3>Get in Touch</h3>
        <div className="conatctName">
          <input
            type="text"
            name=""
            id="firstName"
            placeholder="Fisrt Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            name=""
            id="lastName"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="contactEmail">
          <input
            type="text"
            name=""
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            name=""
            id="phone"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <input
          type="text"
          name=""
          id="address"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <textarea
          name=""
          id="message"
          cols="30"
          rows="10"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        >
          Type your message here
        </textarea>
        <button onClick={storeContact}>Submit</button>
      </div>
    </section>
  );
};

export default Contact;
