import React, { Component } from "react";
import { connect } from "react-redux";
import { Icon, Button, Divider } from "antd";
import { deleteCategory, editCategory } from "../actions";
import "./categoryItem.css";

class CategoryItem extends Component {
  editCategory() {
    this.props.editCategory({ key: this.props.category.key });
  }
  delCategory() {
    this.props.deleteCategory({ key: this.props.category.key });
  }
  render() {
    return (
      <div className="row">
        <span>{this.props.category.name}</span>
        <span>{this.props.category.description}</span>
        <div>
          <Button onClick={() => this.editCategory()}>
            <Icon type="check" />Editar
          </Button>
          <Divider type="vertical" />
          <Button type="danger" onClick={() => this.delCategory()}>
            <Icon type="close-circle" />Borrar
          </Button>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { deleteCategory, editCategory }
)(CategoryItem);
