import ContactUserCard from "./ContactUserCard";

function Contacts() {
    return (
        <div className="contacts">
            <h1>Contacts</h1>
            <ContactUserCard />
            <ContactUserCard />
            <ContactUserCard />
            <ContactUserCard />
        </div>
    );
}

export default Contacts;

//import React from "react"; - it's only needed in App.jsx