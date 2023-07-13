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
import axios from "axios";

const ChatPage = () => {
  const [user, userInfo] = useState(
    JSON.parse(localStorage.getItem("userInfo"))
  );
  const [messages, setMessages] = useState([]);
  const [Conversation, setConversation] = useState([]);
  console.log(Conversation[0]);

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

  const fetchMessages = async () => {
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
        console.log(data);
        setMessages(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

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
                    src="https://bit.ly/dan-abramov"
                  />
                </WrapItem>
              </Wrap>
              <div>
                <span>john deo</span>
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
                      <div
                        className={`${
                          id === user.data.id ? "sender" : "reciever"
                        }`}
                        key={id}
                      >
                        <p>{message}</p>
                      </div>
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
