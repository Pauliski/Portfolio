import React, { useContext, useState } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import Email from "../../../public/assets/icons/Email";
import Envelop from "../../../public/assets/icons/Envelop";
import User from "../../../public/assets/icons/User";
import Input from "../input/Input";
import TextArea from "../textarea/TextArea";
import axios from 'axios'
import swal from "sweetalert";
import {
  GetInTouchButton,
  GetInTouchSessionTittle,
  GetInTouchWrapper,
} from "./style";

const GetInTouch = () => {
  const { cardColor, buttonColor, fontColorOne, background } =
    useContext(ThemeContext);
  const defaultValue = {
    username: "",
    email: "",
    body: "",
  }
  const [formData, setFormData] = useState(defaultValue);
  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const data  = await axios({
            method: 'post',
            baseURL: '/api/entry/getInTouch',
            data: formData
        });
        setFormData(defaultValue)
        swal({
          title: "Message Sent",
          icon: "success",
        });
       
    } catch (err) {
       console.log(err)
    }
  };
  return (
    <div>
      <GetInTouchSessionTittle color={fontColorOne} id="getInTouch">
        Get in touch
      </GetInTouchSessionTittle>
      <GetInTouchWrapper backgroundColor={cardColor} onSubmit={handleSubmit}>
        <Input
          icon={<User />}
          type="text"
          name="username"
          value={formData.username}
          placeholder="Your name"
          onChange={handleChange}
        />
        <Input
          icon={<Email />}
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <TextArea
          icon={<Envelop />}
          value={formData.body}
          name="body"
          placeholder="Message body"
          onChange={handleChange}
        />
        <GetInTouchButton backgroundColor={buttonColor} color={fontColorOne}>
          SEND MESSAGE
        </GetInTouchButton>
      </GetInTouchWrapper>
    </div>
  );
};

export default GetInTouch;
