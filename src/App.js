import { Layout, Typography } from "antd";
import ChatComponent from "./components/ChatComponent";
import PdfUploader from "./components/PdfUploader";
import RenderQA from "./components/RenderQA";
import { useState } from "react";

const { Header, Content } = Layout;
const { Title } = Typography;

const ChatComponentStyle = {
  position: "fixed",
  bottom: "0",
  width: "80%",
  left: "10%",
  marginBottom: "20px",
};

const PdfUploaderStyle = {
  margin: "auto",
  padding: "80px",
};

const renderQAStyle = {
  height: "50%",
  overflowY: "auto",
};

const App = () => {
  const [conversation, setConversation] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleResp = (question, answer) => {
    setConversation([...conversation, { question, answer }]);
  };

  return (
    <>
      <Layout style={{ height: "100vh", backgroundColor: "white" }}>
        <Header style={{ display: "flex", alignItems: "center" }}>
          <Title style={{ color: "white" }}>Next AI</Title>
        </Header>
        <Content style={{ width: "80%", margin: "auto" }}>
          <div style={PdfUploaderStyle}>
            <PdfUploader />
          </div>

          <br />
          <br />

          <div style={renderQAStyle}>
            <RenderQA conversation={conversation} isLoading={isLoading} />
          </div>

          <br />
          <br />
        </Content>
        <div style={ChatComponentStyle}>
          <ChatComponent
            handleResp={handleResp}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />
        </div>
      </Layout>
    </>
  );
};

export default App;
