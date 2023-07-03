import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as react from "@chakra-ui/react";

import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const toast = react.useToast();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!email || !password) {
      toast({
        title: "Please enter all the fields",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    }

    await axios
      .post("http://localhost:7001/user/login", { email, password })
      .then((data) => {
        console.log(data);
        toast({
          title: "Login successful",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        localStorage.setItem("userInfo", JSON.stringify(data));
        navigate("/chatpage");
        setLoading(false);
      })
      .catch((err) => {
        toast({
          title: "Please re-enter the fields",
          status: "warning",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        setLoading(false);
      });
  };

  return (
    <form className="input-fields">
      <div>
        <FormControl isRequired>
          <FormLabel htmlFor="email">Email Address</FormLabel>
          <Input
            name="email"
            value={email || ""}
            placeholder="Enter email address"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
      </div>

      <div>
        <FormControl isRequired>
          <FormLabel>Password</FormLabel>
        </FormControl>
        <InputGroup size="md">
          <Input
            name="password"
            value={password || ""}
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </div>

      <div className="buttons">
        <Button className="btn" onClick={submitHandler} isLoading={loading}>
          Login
        </Button>
        <Button
          className="btn"
          onClick={() => {
            setEmail("guest@gmail.com");
            setPassword("guest");
          }}
        >
          Credentials
        </Button>
      </div>
    </form>
  );
};

export default Login;
