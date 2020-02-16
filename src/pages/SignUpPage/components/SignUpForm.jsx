import React from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { register, clearErrors } from '../../../redux/user/actions';
import { Form, Input, Tooltip, Icon, Checkbox, message, Button, Spin } from 'antd';

class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
    modal: false,
    name: '',
    email: '',
    password: '',

    loggedIn: false,
    flag: true
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        const { name, email, password } = this.state;

        const newUser = {
          name,
          email,
          password
        };

        this.props.register(newUser);
      }
    });
  };

  handleConfirmBlur = e => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  handleWebsiteChange = value => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    this.setState({ autoCompleteResult });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    if (this.props.user && this.props.user.registered) {
      this.props.onRegistered();
    }
    return (
      <div>
        {!this.state.loggedIn ? (
          <Form onSubmit={this.handleSubmit}>
            <Form.Item label={<span>Name</span>}>
              {getFieldDecorator('name', {
                rules: [
                  {
                    required: true,
                    message: 'Please input your name!',
                    whitespace: true
                  }
                ]
              })(
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  onChange={this.onChange}
                />
              )}
            </Form.Item>
            <Form.Item label="E-mail">
              {getFieldDecorator('email', {
                rules: [
                  {
                    type: 'email',
                    message: 'The input is not valid E-mail!'
                  },
                  {
                    required: true,
                    message: 'Please input your E-mail!'
                  }
                ]
              })(
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  onChange={this.onChange}
                />
              )}
            </Form.Item>
            <Form.Item
              label={
                <span>
                  Password &nbsp;
                  <Tooltip
                    title="1 Upper Case Letter; 1 Lower Case Letter; 1 Number; 1 Symbol"
                    placement="top"
                  >
                    <Icon type="question-circle-o" />
                  </Tooltip>
                </span>
              }
            >
              {getFieldDecorator('password', {
                rules: [
                  {
                    required: true,
                    message: 'Please input your password!'
                  },
                  {
                    validator: this.validateToNextPassword
                  }
                ]
              })(
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  onChange={this.onChange}
                />
              )}
            </Form.Item>
            <Form.Item label="Confirm Password">
              {getFieldDecorator('confirm', {
                rules: [
                  {
                    required: true,
                    message: 'Please confirm your password!'
                  },
                  {
                    validator: this.compareToFirstPassword
                  }
                ]
              })(<Input type="password" placeholder="Password" onBlur={this.handleConfirmBlur} />)}
            </Form.Item>
            {/*         <Form.Item
          label="Captcha"
          extra="We must make sure that your are a human."
        >
          {getFieldDecorator("captcha", {
            rules: [
              {
                required: true,
                message: "Please input the captcha you got!"
              }
            ]
          })(
            <ReCAPTCHA sitekey="Your client site key" onChange={this.other} />
          )}
          <Button>Get captcha</Button>
        </Form.Item> */}
            <Form.Item>
              {getFieldDecorator('agreement', {
                valuePropName: 'checked'
              })(
                <Checkbox>
                  I have read the <a href="/">agreement</a>
                </Checkbox>
              )}
            </Form.Item>
            {/* {this.state.isLoading ? <Spin tip="Loading..." indicator={antIcon} /> : null} */}
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Register
              </Button>
            </Form.Item>
          </Form>
        ) : (
          <div>
            <h2>You may continue to the market or can take the time to verify your email now.</h2>
            <h3>
              Note: In order to download and use the desktop client you must be a verfied user.
            </h3>
          </div>
        )}
      </div>
    );
  }
}

const WrappedRegistrationForm = Form.create({ name: 'register' })(RegistrationForm);

const mapStateToProps = state => {
  return {
    user: state.user,
    loggedIn: state.user ? state.user.loggedIn : false,
    error: state.user ? (state.user.error ? state.user.error.message : null) : null
  };
};

export default connect(
  mapStateToProps,
  { register }
)(WrappedRegistrationForm);
