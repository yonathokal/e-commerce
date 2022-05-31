import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import "antd/dist/antd.css";

const Login = (props) => {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [unAuth, setUnAuth] = useState(false);
  const msg = "Kindly re-enter the correct credentials";
  const onFinish = (values) => {
    if (values.username == "admin" && values.password == "123") {
      setUnAuth(false);
      props.isLogin(true);
    } else {
      setUnAuth(true);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      {unAuth && <p style={{ color: "red" }}>{msg}</p>}
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        style={{
          margin: "auto",
          width: "50%",
          border: "3px solid green",
          padding: "10px",
          alignItems: "center",
        }}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input onChange={(e) => setName(e.target.value)} />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password onChange={(e) => setPass(e.target.value)} />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Login;
