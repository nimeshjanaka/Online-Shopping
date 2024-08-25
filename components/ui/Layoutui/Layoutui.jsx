"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import React, { useState } from "react";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme, Input, Button } from "antd";

const { Search } = Input;
const { Header, Content, Sider } = Layout;

const menuData = [
  {
    title: "sports",
    icon: UserOutlined,
    children: ["Men-Shoes-Clothes", "Women-Shoes-Clothes", "Water-Sports"],
  },
  {
    title: "Home Appliances",
    icon: LaptopOutlined,
    children: [
      "bath-items",
      "decorator",
      "cleaning-items",
      "furniture",
      "media-music",
    ],
  },
  {
    title: "electronics",
    icon: NotificationOutlined,
    children: ["Mobile", "Tablet", "Desktop", "Laptop", "watches"],
  },

  {
    title: "toys",
    icon: NotificationOutlined,
    children: [
      "Small Kids Toys",
      "Baby Toys",
      "Nursery",
      "Gift",
      "Baby Safety",
    ],
  },
];

const Layoutui = ({ children }) => {
  const [selectedContent, setSelectedContent] = useState("Home");
  const router = useRouter();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const items2 = menuData.map((category, index) => {
    return {
      key: `sub${index + 1}`,
      icon: React.createElement(category.icon),
      label: category.title,
      children: category.children.map((item, j) => {
        return {
          key: `sub${index + 1}-${j + 1}`,
          label: item,
          onClick: () => handleMenuClick(item, category.title),
        };
      }),
    };
  });

  const handleMenuClick = (item, categoryTitle) => {
    setSelectedContent(item);
    const url = `/${categoryTitle.toLowerCase().replace(/ /g, "-")}/${item
      .toLowerCase()
      .replace(/ /g, "-")}`;
    router.push(url);
  };

  return (
    <Layout >
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px",
          borderRadius: borderRadiusLG,
          borderBottom: "2px solid #ccc",
        }}
      >
        <Image src="/asset/logo.png" width={60} height={15} alt="Demo Logo" />

        <div className="demo-logo" />
        <Search
          placeholder="input search text"
          onSearch={(value) => console.log(value)}
          style={{
            minWidth: "300px",
            maxWidth: "700px",
            alignItems: "center",
            marginInline: "auto",
          }}
        />
      </Header>
      <Layout>
        <Sider
          width={200}
          style={{
            marginTop: "30px",
            marginLeft: "10px",
            background: "#bde5e1",
            borderRadius: borderRadiusLG,
          }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{
              height: "100%",
              borderRight: 0,
              borderRadius: borderRadiusLG,
              background: "#bde5e1",
            }}
            items={items2}
          />
        </Sider>

        <Layout
          style={{
            padding: "0 16px 16px",
            marginTop: "30px",
          }}
        >
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: "white",
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Layoutui;
