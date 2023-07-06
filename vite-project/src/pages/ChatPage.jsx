import React, { useEffect, useState } from "react";
import {
  Wrap,
  WrapItem,
  Avatar,
  AvatarBadge,
  Input,
  Stack,
} from "@chakra-ui/react";
import { AiOutlineSend } from "react-icons/ai";
import { BsPlusLg } from "react-icons/bs";

const ChatPage = () => {
  const chats = [
    {
      name: "John Doe",
      status: "online",
      img: "",
    },
    {
      name: "Piyush",
      status: "offline",
      img: "",
    },
    {
      name: "john wick",
      status: "online",
      img: "",
    },
    {
      name: "inter",
      status: "offline",
      img: "",
    },
    {
      name: "steve",
      status: "online",
      img: "",
    },
    {
      name: "andrew",
      status: "busy",
      img: "",
    },
    {
      name: "tobey",
      status: "busy",
      img: "",
    },
  ];

  return (
    <div className="chat-page">
      <section className="chat-container">
        <section className="left-section">
          <div className="avatar">
            <Wrap>
              <WrapItem>
                <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
              </WrapItem>
            </Wrap>
            <div>
              <span>aman kumar</span>
              <p>chat app</p>
            </div>
          </div>
          <hr />
          <div>
            <div className="users-avatar">
              <div></div>
              {chats.map((elements) => (
                <div key={elements.name} className="avatar-container">
                  <Stack direction="row">
                    <Avatar
                      name={elements.name}
                      p={elements.status}
                      src="https://bit.ly/dan-abramov"
                    >
                      <AvatarBadge
                        boxSize="1.1em"
                        bg="green.500"
                        image="https://bit.ly/dan-abramov"
                      />
                    </Avatar>
                  </Stack>
                  <div>
                    <h5>{elements.name}</h5>
                    <p>{elements.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="mid-section">
          <header className="chat-header">
            <div>
              <Wrap>
                <WrapItem>
                  <Avatar
                    name="Dan Abrahmov"
                    src="https://bit.ly/dan-abramov"
                  />
                </WrapItem>
              </Wrap>
              <div>
                <span>John deo</span>
                <p>chat app</p>
              </div>
            </div>
          </header>
          <div className="chat-div">
            <div>
              <div className="sender">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  sender
                </p>
              </div>
              <div className="reciever">
                <p>
                  Voluptate porro ipsum non praesentium nobis libero blanditiis
                  reciever
                </p>
              </div>
            </div>
          </div>
          <footer className="chat-footer">
            <div>
              <Stack>
                <Input
                  variant="filled"
                  placeholder="Filled"
                  width="450px"
                  border={"none"}
                />
              </Stack>
              <div className="chat-icons">
                <AiOutlineSend />
                <BsPlusLg />
              </div>
            </div>
          </footer>
        </section>
        <section className="right-section"></section>
      </section>
    </div>
  );
};

export default ChatPage;
