import React, { useState } from "react";
import axios from "axios";
import { Input } from "antd";

const { Search } = Input;
const DOMAIN = process.env.REACT_APP_DOMAIN;

const searchContainer = {
  display: "flex",
  justifyContent: "center",
};

const ChatComponent = (props) => {
  const { handleResp, isLoading, setIsLoading } = props;
  const [searchValue, setSearchValue] = useState("");

  const onSearch = async (question) => {
    //Clear Search Input
    setSearchValue("");
    setIsLoading(true);

    try {
      const response = await axios.get(`${DOMAIN}/chat`, {
        params: {
          question,
        },
      });
    } catch (error) {
      console.error(`Error: ${error}`);
      handleResp(question, error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    //Update searchValue state when the user types in the input box
    //console.log("事件对象:", e);
    //console.log("输入的值:", e.target.value);
    //console.log("更新前的状态:", searchValue);

    setSearchValue(e.target.value);
  };

  return (
    <div style={searchContainer}>
      <Search
        placeholder="input search text"
        enterButton="Ask"
        size="large"
        onSearch={onSearch}
        loading={isLoading}
        value={searchValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default ChatComponent;
