import React, { useState } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import SignUp from "../component/SignUp";
import Login from "../component/Login";

const HomePage = () => {
  return (
    <>
      <div className="home-page">
        <Tabs className="container" variant="enclosed">
          <TabList className="login-button">
            <Tab>Login</Tab>
            <Tab>Sign-Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <SignUp />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </>
  );
};

export default HomePage;
