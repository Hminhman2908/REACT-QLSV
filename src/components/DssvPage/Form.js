import axios from "axios";
import React, { Component } from "react";
import { BASE_URL_DSSV } from "./utils";
import { message } from "antd";
import { connect } from "react-redux";
import { SET_USERS } from "./constants/constants";

class Form extends Component {
  state = {
    id: "",
    account: "",
    password: "",
  };
  handleChangeForm = (e) => {
    var { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  handleGetUserForm = () => {
    axios({
      url: BASE_URL_DSSV,
      method: "GET",
    })
      .then((res) => {
        console.log(res);
        this.props.handleSetUser(res.data);
      })
      .catch((err) => {
        console.log(err);
        message.error("Đã có lỗi xảy ra");
      });
  };
  handleCreate = () => {
    // console.log("Thêm", this.state);
    axios({
      url: BASE_URL_DSSV,
      method: "POST",
      data: this.state,
    })
      .then((res) => {
        console.log(res);
        this.handleGetUserForm(res.data);
        message.success("Thêm thành công");
      })
      .catch((err) => {
        console.log(err);
        message.error("Đã có lỗi xảy ra");
      });
  };
  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <label htmlFor="">ID</label>
            <input
              type="text"
              onChange={this.handleChangeForm}
              className="form-control"
              name="id"
              defaultValue={this.state.id}
              placeholder=""
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Account</label>
            <input
              type="text"
              onChange={this.handleChangeForm}
              className="form-control"
              name="account"
              defaultValue={this.state.account}
              placeholder=""
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Password</label>
            <input
              type="text"
              onChange={this.handleChangeForm}
              className="form-control"
              name="password"
              defaultValue={this.state.password}
              placeholder=""
            />
          </div>
          <button
            type="button"
            onClick={this.handleCreate}
            className="btn btn-success"
          >
            Thêm
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  return {
    handleSetUser: (users) => {
      dispatch({
        type: SET_USERS,
        payload: users,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
