import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const submitHandler = () => {};

  return (
    <form className="input-fields">
      <div>
        <FormControl isRequired>
          <FormLabel>Email Address</FormLabel>
          <Input
            placeholder="Enter email address"
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
        <Button className="btn" onClick={submitHandler}>
          Login
        </Button>
        <Button className="btn">Credentials</Button>
      </div>
    </form>
  );
};

export default Login;
