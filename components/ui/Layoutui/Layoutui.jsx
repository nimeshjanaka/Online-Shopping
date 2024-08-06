"use client";

import React, { useState } from "react";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme, Input, Button } from "antd";
import { useRouter } from "next/router";

const handleMenuClick = (item) => {
  setSelectedContent(item);
  const url = `/home-appliances/${item.toLowerCase().replace(/ /g, "-")}`;
  router.push(url);
};

const { Search } = Input;
const { Header, Content, Sider } = Layout;

const menuData = [
  {
    title: "Sports",
    icon: UserOutlined,
    children: [
      "Men's Shoes & Clothes",
      "Women's Shoes & Clothes",
      "Water Sports",
      "Boxing Kit",
      "Racket Sports",
    ],
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
    title: "Electronics",
    icon: NotificationOutlined,
    children: ["Mobile", "Tablet", "Desktop", "Laptop", "Headset"],
  },
  {
    title: "Watches",
    icon: LaptopOutlined,
    children: [
      "Men's Watches",
      "Women's Watches",
      "Jewelry",
      "Sunglasses",
      "Kids' Watches",
    ],
  },
  {
    title: "Toys",
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

const Layoutui = () => {
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
          onClick: () => handleMenuClick(item),
        };
      }),
    };
  });

  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px",
        }}
      >
        <div className="demo-logo" />
        <Search
          placeholder="input search text"
          onSearch={(value) => console.log(value)}
          style={{ width: 500 }}
        />
        <Button type="primary">Search</Button>
      </Header>
      <Layout>
        <Sider
          width={200}
          style={{
            background: colorBgContainer,
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
            }}
            items={items2}
          />
        </Sider>
        <Layout
          style={{
            padding: "0 16px 16px",
          }}
        >
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {selectedContent === "Men's Shoes & Clothes" ? (
              <div>Content for Men's Shoes & Clothes</div>
            ) : (
              <div>{selectedContent} Page</div>
            )}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Layoutui;
