import React, { useContext, useState } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import Email from "../../../public/assets/icons/Email";
import Envelop from "../../../public/assets/icons/Envelop";
import User from "../../../public/assets/icons/User";
import Input from "../input/Input";
import TextArea from "../textarea/TextArea";
import axios from 'axios'
import {
  GetInTouchButton,
  GetInTouchSessionTittle,
  GetInTouchWrapper,
} from "./style";

const GetInTouch = () => {
  const { cardColor, buttonColor, fontColorOne, background } =
    useContext(ThemeContext);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    body: "",
  });
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
        console.log('hello')
       
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
          onChange={handleChange}
        />
        <Input
          icon={<Email />}
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <TextArea
          icon={<Envelop />}
          value={formData.body}
          name="body"
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
