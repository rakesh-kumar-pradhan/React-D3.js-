import React, { useState, CSSProperties } from "react";
import data from "./data";
import { invoiceData } from "./data/invoiceData";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";
import AttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import ContactsRoundedIcon from "@mui/icons-material/ContactsRounded";
import {
  Layout,
  Menu,
  Button,
  theme,
  Row,
  Col,
  Card,
  Select,
  Space,
} from "antd";
import View1 from "./views/View1";
import View2 from "./views/View2";
import View3 from "./views/View3";
import View4 from "./views/View4";
import View5 from "./views/View5";
import View6 from "./views/View6";
import "./dashboard.css";
import "antd/dist/reset.css";
import HeaderBar from "./views/header";
import Logo from "./views/Logo";
import CashFlowChart from "./charts/CashFlowChart";
import InvoicesChart from "./charts/InvoicesChart";
import AccountTable from "./charts/AccountTable";
import FileUploadPopup from "./components/FileUploadPopup";

const { Header, Sider, Content, Footer } = Layout;

const contentStyle = {
  padding: "15px",
};

const Dashboard = () => {
  const [selectedUser, SetSelectedUser] = useState(data[0]);
  const [greaterThenAge, SetGreaterThenAge] = useState(0);
  const [includedGender, SetIncludedGender] = useState([
    "Male",
    "Female",
    "Unknown",
  ]);
  const [isPopupVisible, setPopupVisible] = useState(false);

  const sampleData = [
    { month: "August", cashIn: 400, cashOut: 900 },
    { month: "September", cashIn: 208, cashOut: 900 },
    { month: "October", cashIn: 100, cashOut: 800 },
    { month: "November", cashIn: 300, cashOut: 600 },
    { month: "December", cashIn: 100, cashOut: 950 },
    { month: "January", cashIn: 600, cashOut: 970 },
  ];

  const handleNewInvoice = () => {
    setPopupVisible(true);
  };

  const handleFileUpload = (file) => {
    // Handle file upload logic here
    console.log('File uploaded:', file);
  };

  const changeSelectUser = (value) => {
    SetSelectedUser(value);
  };

  const changeGreaterThenAge = (value) => {
    SetGreaterThenAge(value);
  };

  const changeIncludedGender = (value) => {
    SetIncludedGender(value);
  };

  // const {selectedUser, greaterThenAge, includedGender} = this.state;
  const filteredData = data
    .filter((user) => includedGender.indexOf(user.gender) !== -1)
    .filter((user) => user.age > greaterThenAge);

  const selectDataList = [];
  const selectManageDataList = [{value:"Sales", label:"Sales"},
  {value:"Advertising", label:"Advertising"},
  {value:"Inventory", label:"Inventory"},
  {value:"Entertainment", label:"Entertainment"},
  {value:"Product", label:"Product"}
];
  filteredData.map((value) => {
    selectDataList.push({ value: value.month, label: value.month });
  });

  // filteredData.map((value) => {
  //   selectManageDataList.push({ value: value.name, label: value.name });
  // });


  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleChange = (value) => {
    SetSelectedUser(filteredData.find((item) => item.month === value));
  };

  const ManageHandleChange = (value) => {
    SetSelectedUser(filteredData.find((item) => item.name === value));
  };


  return (
    <Layout>
      {/* <Sider width={300} style={{backgroundColor:'#eee'}}> */}
      <Sider
        className="sidebar"
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <Content style={{ height: 120 }}>
          <Logo width="180px" height="auto" />
        </Content>
        {/* <Content style={{ height: 200 }}>
                            <View1 user={selectedUser}/>
                        </Content>
                        <Content style={{ height: 300 }}>
                            <View2 data={filteredData}/>
                        </Content>
                        <Content style={{ height: 400 }}>
                            <View3 
                                changeGreaterThenAge={changeGreaterThenAge}
                                changeIncludedGender={changeIncludedGender}
                            />
                        </Content> */}
        <div className="demo-logo-vertical" />
        <Menu
          className="sideBarMenu"
          //   theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <DashboardRoundedIcon />,
              label: "Dashboard",
            },
            {
              key: "2",
              icon: <AccountBalanceWalletRoundedIcon />,
              label: "Accounts",
            },
            {
              key: "3",
              icon: <AttachMoneyRoundedIcon />,
              label: "Payroll",
            },
            {
              key: "4",
              icon: <DescriptionRoundedIcon />,
              label: "Reports",
            },
            {
              key: "5",
              icon: <PersonRoundedIcon />,
              label: "Advisor",
            },
            {
              key: "6",
              icon: <ContactsRoundedIcon />,
              label: "Contacts",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          {/* <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          /> */}
          <HeaderBar />
        </Header>
        {/* <Content style={{ height: 300 }}>
                            <View4 user={selectedUser}/>
                        </Content> */}
        {/* <Layout style={{ height: 600 }}>
                            <Content>
                                <View5 data={filteredData}/>
                            </Content>
                            <Sider width={500} style={{backgroundColor:'#eee'}}>
                                <View6 data={filteredData} changeSelectUser={changeSelectUser}/>
                            </Sider>
                        </Layout> */}

        <Content style={contentStyle}>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Card
                title="Checking account"
                extra={
                  <Space direction="horizontal" size={16}>
                    {" "}
                    <Select
                      defaultValue="Manage"
                      style={{ width: 120 }}
                      onChange={ManageHandleChange}
                      options={selectManageDataList}
                    />
                    <Select
                      defaultValue="January"
                      style={{ width: 120 }}
                      onChange={handleChange}
                      options={selectDataList}
                    />
                  </Space>
                }
                bordered={false}
              >
                <View4
                  user={selectedUser}
                  changeSelectUser={changeSelectUser}
                />
              </Card>
            </Col>
            <Col span={12}>
              <Card title="Invoices owed to you"
               bordered={false}

               extra={
                  <Space direction="horizontal" size={16}>
                    <Button className="invoiceButton" onClick={handleNewInvoice}>New Sales Invoices</Button>
                  </Space>
                }
               
               >
               
                <InvoicesChart data={invoiceData} 

                />
              </Card>
            </Col>
            <Col span={12}>
              <Card title="Total cash flow" bordered={false}>
                <CashFlowChart data={sampleData} />
              </Card>
            </Col>
            <Col span={12}>
              <Card title="Account watchlist" bordered={false}>
                <AccountTable data={sampleData} />
              </Card>
            </Col>
          </Row>
        </Content>
      </Layout>
      <FileUploadPopup
        isVisible={isPopupVisible}
        onClose={() => setPopupVisible(false)}
        onFileUpload={handleFileUpload}
      />
    </Layout>
  );
};

export default Dashboard;
