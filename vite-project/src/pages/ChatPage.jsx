import React, { useEffect, useRef, useState } from "react";
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
import axios from "axios";
import { io } from "socket.io-client";

const ChatPage = () => {
  const [user, userInfo] = useState(
    JSON.parse(localStorage.getItem("userInfo"))
  );
  const [socket, setSocket] = useState(null);
  const messageRef = useRef(null);
  const [messages, setMessages] = useState([]);
  const [sendMessage, setSendMessage] = useState();
  const [Conversation, setConversation] = useState([]);

  // useEffect(() => {
  //   setSocket(io("http://localhost:7000/"));
  // }, []);

  // useEffect(() => {
  //   socket?.emit("addUser", user.id);
  //   socket?.on("getUser", (users) => {
  //     console.log("active user", users);
  //   });
  // }, []);

  useEffect(() => {
    const conversationId = async () => {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      await axios
        .get(`http://localhost:7001/user/conversation/${user.data.id}`, config)
        .then((data) => {
          const userData = data.data;
          // console.log("user are ", userData);
          // const userData = userDatas.user;
          setConversation(userData);
        })
        .catch((error) => {
          console.error(error);
        });
    };
    conversationId();
    Conversation;
  }, []);

  const fetchMessages = async (user) => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    await axios
      .get(
        `http://localhost:7001/user/message/${Conversation[0].value.conversationId}`,
        config
      )
      .then((data) => {
        // console.log(data);
        setMessages(data);
        console.log(messages);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // useEffect(() => {
  const sendMessages = async () => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const data = {
        conversationId: Conversation[0].value.conversationId,
        senderId: user.data.id,
        message: sendMessage,
        receiveId: messages.data[1].value.user.id,
      };

      await axios
        .post(`http://localhost:7001/user/message`, data, config)
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.error(err);
        });
    } catch (error) {
      console.log(error);
    }
  };
  // }, []);

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
              <span>{user?.data.name}</span>
              <p>chat app</p>
            </div>
          </div>
          <hr />
          <div>
            <div className="users-avatar">
              <div></div>
              {Conversation.map((elements) => (
                <div
                  key={elements.value.conversationId}
                  className="avatar-container"
                  onClick={() => fetchMessages()}
                >
                  <Stack direction="row">
                    <Avatar
                      name={elements.value.user.name}
                      p={elements.value.user.email}
                      src={elements.value.user.pic}
                    >
                      <AvatarBadge
                        boxSize="1.1em"
                        bg="green.500"
                        image={elements.value.user.pic}
                      />
                    </Avatar>
                  </Stack>
                  <div>
                    <h5>{elements.value.user.name}</h5>
                    <p>{elements.value.user.email}</p>
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
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrfBGZTKPYI95D-RUv48HgjcYnf3vcYUlBVg&usqp=CAU"
                  />
                </WrapItem>
              </Wrap>
              <div>
                <span>{user.data.name}</span>
                <p>chat app</p>
              </div>
            </div>
          </header>
          <div className="chat-div">
            <div>
              {messages.status === 200 ? (
                messages.data.map(
                  ({ value: { message, user: { id } } = {} }) => {
                    return (
                      <>
                        <div
                          className={`${
                            id === user.data.id ? "sender" : "reciever"
                          }`}
                          key={message}
                        >
                          <p>{message}</p>
                        </div>
                        <div ref={messageRef}></div>
                      </>
                    );
                    // if (id === user.data.id) {
                    //   // return console.log("its working");
                    //   // } else {
                    //   // console.log("id is ", id);
                    //   // return console.log("'it's not working");
                    //   // }
                    //   return (
                    //     <div className="sender" key={id}>
                    //       <p>{message}</p>
                    //     </div>
                    //   );
                    // } else {
                    //   return (
                    //     <div className="reciever" key={id}>
                    //       <p>{message}</p>
                    //     </div>
                    //   );
                    // }
                  }
                )
              ) : (
                <div>
                  <p>No messages yet</p>
                </div>
              )}
            </div>
          </div>
          {messages?.data && (
            <footer className="chat-footer">
              <div>
                <Stack>
                  <Input
                    variant="filled"
                    placeholder="Filled"
                    width="450px"
                    border={"none"}
                    value={sendMessage || ""}
                    onChange={(e) => setSendMessage(e.target.value)}
                  />
                </Stack>
                <div className="chat-icons">
                  <AiOutlineSend onClick={() => sendMessages()} />
                  <BsPlusLg />
                </div>
              </div>
            </footer>
          )}
        </section>
        <section className="right-section"></section>
      </section>
    </div>
  );
};

export default ChatPage;
