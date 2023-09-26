import React, { Component } from "react";
import Item from "./Item";
import { BASE_URL_DSSV } from "./utils";
import { message } from "antd";
import axios from "axios";
import { connect } from "react-redux";
import { SET_USERS } from "./constants/constants";

class List extends Component {
  componentDidMount = () => {
    axios({
      url: BASE_URL_DSSV,
      method: "GET",
    })
      .then((res) => {
        this.props.handleSetUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
        message.error("Đã có lỗi xảy ra");
      });
  };
  renderTbody = () => {
    return this.props.users.map((user, index) => (
      <Item user={user} key={index} />
    ));
  };
  render() {
    return (
      <table className="table table-bordered mt-3 ">
        <thead>
          <tr>
            <th>Id</th>
            <th>Account</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{this.renderTbody()}</tbody>
      </table>
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
    handleSetUsers: (users) => {
      dispatch({
        type: SET_USERS,
        payload: users,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
