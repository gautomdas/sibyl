import React, { useState } from "react";
import { Form, Input, Icon, Button } from "antd";
import { routes } from "../router";

// LoginForm is a dumb presentational component which gets the email/username and password from the user
// <LoginForm onSubmit={(email, password) => {}}/>
function LoginForm({ onSubmit, form, loading }) {
  const { getFieldDecorator } = form;
  const handleSubmit = e => {
    e.preventDefault();

    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        const email = values.userName;
        const password = values.password;
        console.log("ayy");

        // if (loading == false) setLoading(true);
        onSubmit(email, password);
      }
    });
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Item>
          {getFieldDecorator("userName", {
            rules: [{ required: true, message: "Please input your username!" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your Password!" }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            {routes.login.name}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Form.create({ name: "login_form" })(LoginForm);
