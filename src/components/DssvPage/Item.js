import React, { Component } from "react";
import { connect } from "react-redux";
import { REMOVE_ITEM } from "./constants/constants";

class Item extends Component {
  render() {
    let { id, account, password } = this.props.user;
    return (
      <tr>
        <td>{id}</td>
        <td>{account}</td>
        <td>{password}</td>
        <td>
          <div className="container text-right">
            <button className="btn btn-primary mr-2">Edit</button>
            <button
              onClick={() => {
                this.props.handleDelete(id);
              }}
              className="btn btn-danger"
            >
              Delete
            </button>
          </div>
        </td>
      </tr>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    users: state.userReducer.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleDelete: (users) => {
      dispatch({
        type: REMOVE_ITEM,
        payload: users,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);
