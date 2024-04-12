function ContactUserCard(props) {
    return (
        <div className="contact-user-card">
            <div className="contact-user-photo">
                <img src="./src/profile.png"></img>
                <h1>Jordan Walke</h1>
                <h2>React Creator</h2>
                <p>Lorem Ipsem</p>
            </div>
        </div>
    )
}

export default ContactUserCard;

//ContactUserCard component is a functional component. It accepts props as a parameter which are used to pass data to the component. Inside the component, the contact user card structure is rendered, including the user's name, title, description
//Props - the users' info is accessed `props` (props.name, props.title, props.description)
