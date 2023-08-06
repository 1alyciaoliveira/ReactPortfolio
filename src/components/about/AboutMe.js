import React from "react";
import avatar from "../../assets/avatar.svg";

const aboutMe = () => {
    return (
        <div className="container" id="about-me">
            <img src={avatar} alt="avatar" />
            <h3>Hi, I'm Aly.</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque lacus augue, vel efficitur quam convallis ut. Pellentesque et pulvinar turpis. Mauris pharetra quis massa ut facilisis. Nulla facilisi. Aliquam pulvinar ante non quam dapibus iaculis et eget augue. Pellentesque tristique congue est, fermentum imperdiet tortor tempus et. Sed eleifend.</p>
        </div>
    );
};

export default aboutMe