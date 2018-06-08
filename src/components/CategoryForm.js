import React from "react";
import { connect } from "react-redux";
import { Form, Icon, Input, Button } from "antd";
import { addCategory, updateCategory } from "../actions";
const FormItem = Form.Item;

class CategoryForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const { name, description } = values;
        if (this.props.category) {
          this.props.updateCategory({
            key: this.props.category.key,
            name,
            description
          });
        } else {
          this.props.addCategory({
            key: new Date().getTime(),
            name,
            description,
            editing: false
          });
        }
        this.props.form.resetFields();
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        {this.props.category ? (
          ""
        ) : (
          <h1 style={{ textAlign: "center" }}>Alta Categoría</h1>
        )}
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem>
            {getFieldDecorator("name", {
              initialValue: !this.props.category
                ? ""
                : this.props.category.name,
              rules: [
                { required: true, message: "Por favor ingrese el nombre" }
              ]
            })(<Input placeholder="Nombre" />)}
          </FormItem>
          <FormItem>
            {getFieldDecorator("description", {
              initialValue: !this.props.category
                ? ""
                : this.props.category.description,
              rules: [
                { required: true, message: "Por favor ingrese la descripción" }
              ]
            })(<Input placeholder="Descripción" />)}
          </FormItem>
          <FormItem style={{ textAlign: "center" }}>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              <Icon type="save" />
              Guardar
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

const WrappedCategoryForm = Form.create()(CategoryForm);
export default connect(
  null,
  { addCategory, updateCategory }
)(WrappedCategoryForm);
