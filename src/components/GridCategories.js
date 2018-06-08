import React, { Component } from "react";
import { connect } from "react-redux";
import CategoryItem from "./CategoryItem";
import CategoryForm from "./CategoryForm";
import "./categoryItem.css";
class GridCategories extends Component {
  showCategories() {
    return this.props.categories.map(category => (
      <div key={category.key}>
        {category.editing ? (
          <CategoryForm category={category} key={category.key} />
        ) : (
          <CategoryItem key={category.key} category={category} />
        )}
      </div>
    ));
  }
  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Lista Categorías</h1>
        <div className="row">
          <span className="row-title">Categoría</span>
          <span className="row-title">Descripción</span>
          <span className="row-title">Acciones</span>
        </div>
        {this.showCategories()}
      </div>
    );
  }
}

function mapStateToProps({ categories }) {
  return {
    categories: categories
  };
}
export default connect(mapStateToProps)(GridCategories);
