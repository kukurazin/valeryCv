import React from "react";
import Avatar from "../sources/myPhoto.jpg";

export default function HomeTab() {
  return (
    <div>
      <div className="tabWrapper isActive">
        <div className="homeTab">
          <h2 className="greetings">Hello it's me</h2>
          <img
            className="avatar"
            src={Avatar}
            alt="me"
            style={{ width: "250px", height: "250px" }}
          />

          <p className="cl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ut
            dicta distinctio dolore aliquid sunt eum nam, corrupti soluta,
            reiciendis praesentium, tempore iste aspernatur asperiores! Nesciunt
            natus ipsam omnis ex.
          </p>
        </div>
      </div>
    </div>
  );
}
