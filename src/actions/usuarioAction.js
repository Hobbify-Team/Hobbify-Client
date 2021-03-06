import axios from "axios";
import { message } from "antd";

const information = localStorage.getItem("information");
const url = "http://ec2-18-220-111-217.us-east-2.compute.amazonaws.com/";

export const login = (values) => (dispatch) => {
  axios({
    method: "post",
    url: `${url}users/login/`,
    data: {
      email: values.email,
      password: values.password,
    },
  })
    .then(function ({ data }) {
      dispatch({
        type: "login",
        payload: data.user,
      });
      const Userinformation = {
        token: data.access_token,
        username: data.user.username,
      };

      localStorage.setItem("information", JSON.stringify(Userinformation));
    })
    .catch(function (error) {
      console.log(error);
      return;
    });
};

export const getInfoUser = (username) => (dispatch) => {
  const token = JSON.parse(information);
  axios({
    method: "get",
    url: `${url}users/${username}/`,
    headers: {
      Authorization: `TOKEN ${token.token}`,
    },
  })
    .then(function ({ data }) {
      dispatch({
        type: "get_info_user",
        payload: data.user,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const updateInfoUser = (username, newData) => (dispatch) => {
  const token = JSON.parse(information);
  axios({
    method: "patch",
    url: `${url}users/${username}/profile/`,
    data: newData,
    headers: {
      Authorization: `TOKEN ${token.token}`,
    },
  })
    .then(function ({ data }) {
      // console.log(data);
      dispatch({
        type: "update_info_user",
        payload: data,
      });
      message.success("Updated profile");
    })
    .catch(function (error) {
      console.log(error);
    });
};
