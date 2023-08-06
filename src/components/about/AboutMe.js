import React from "react";
import avatar from "../../assets/avatar.svg";

const aboutMe = () => {
    return (
        <div className="container" id="about-me">
            <img src={avatar} alt="avatar" />
            <h3>Hi, I'm Aly.</h3>
            <p>Starting my career as Fullstack MERN Developer, studying Software Engineering at college. My background in HR has nurtured my people skills, but coding is where my heart lies. I find joy in crafting digital solutions from scratch, turning abstract ideas into tangible apps, and enhancing user experiences. My project portfolio encompasses front-end, back-end, and databases, all underscored by a commitment to clean code. Eager to embark on a development career, I'm actively seeking opportunities to contribute my skills and passion. Let's connect and explore the possibilities!</p>
        </div>
    );
};

export default aboutMe