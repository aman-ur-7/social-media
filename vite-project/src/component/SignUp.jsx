import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as react from "@chakra-ui/react";

const SignUp = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [confirm, setConfirm] = useState();
  const [password, setPassword] = useState();
  const [pic, setPic] = useState();
  const navigate = useNavigate();
  const [Loading, setIsLoading] = useState(false);

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const toast = react.useToast();

  const postDetails = (pics) => {
    if (pics === undefined) {
      toast({
        title: "Please Select an Image!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "social-media");
      data.append("cloud_name", "dkwr3j4pp");
      fetch("https://api.cloudinary.com/v1_1/dkwr3j4pp/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      toast({
        title: "Please Select an Image!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }
  };

  const submitHandler = async () => {
    setIsLoading(true);
    if (!name || !email || !password || !confirm) {
      toast({
        title: "Please enter all the fields",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    }

    if (password !== confirm) {
      toast({
        title: "Please enter same password",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    }
    axios
      .post("http://localhost:7001/user/", { name, email, password, pic })
      .then((data) => {
        // console.log(data);
        toast({
          title: "Registration successful",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        localStorage.setItem("userInfo", JSON.stringify(data));
        // navigate("/home");
      })
      .catch((err) => {
        console.log(err);
      });
    setIsLoading(false);
  };

  return (
    <form className="input-fields2">
      <div>
        <react.FormControl isRequired>
          <react.FormLabel>Name</react.FormLabel>
          <react.Input
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
          />
        </react.FormControl>
      </div>
      <div>
        <react.FormControl isRequired>
          <react.FormLabel>Email Address</react.FormLabel>
          <react.Input
            placeholder="Enter email address"
            onChange={(e) => setEmail(e.target.value)}
          />
        </react.FormControl>
      </div>

      <div className="file-input">
        <react.FormControl isRequired>
          <react.FormLabel>Password</react.FormLabel>
        </react.FormControl>
        <react.InputGroup size="md">
          <react.Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <react.InputRightElement width="4.5rem">
            <react.Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </react.Button>
          </react.InputRightElement>
        </react.InputGroup>
      </div>

      <div>
        <react.FormControl isRequired>
          <react.FormLabel>Confirm Password</react.FormLabel>
        </react.FormControl>
        <react.InputGroup size="md">
          <react.Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Confirm password"
            onChange={(e) => setConfirm(e.target.value)}
          />
          <react.InputRightElement width="4.5rem">
            <react.Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </react.Button>
          </react.InputRightElement>
        </react.InputGroup>
      </div>

      <div>
        <react.InputGroup size="md" className="file-input">
          <react.Input
            type="file"
            pr="4.5rem"
            placeholder="Upload file"
            accept="image/*"
            onChange={(e) => postDetails(e.target.files[0])}
          />
        </react.InputGroup>
      </div>

      <div className="buttons">
        <react.Button
          className="btn"
          onClick={submitHandler}
          isLoading={Loading}
        >
          Sign Up
        </react.Button>
      </div>
    </form>
  );
};

export default SignUp;
