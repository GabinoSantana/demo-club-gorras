import React, { Component } from "react";
import { Layout } from "antd";
import CategoryForm from "./components/CategoryForm";
import GridCategories from "./components/GridCategories";

const { Content } = Layout;
class App extends Component {
  render() {
    return (
      <Content style={{ padding: "100px" }}>
        <CategoryForm />
        <GridCategories />
      </Content>
    );
  }
}

export default App;
