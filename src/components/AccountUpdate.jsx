import React from 'react';

import { Form, Icon, Input, Button } from 'antd';

import PropTypes from 'prop-types';

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class AccountUpdate extends React.Component {
  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
    this.props.form.setFieldsValue({
      firstName: this.props.user.firstName,
      lastName: this.props.user.lastName
    });
  }

  static propTypes = {
    user: PropTypes.objectOf(PropTypes.string.isRequired)
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const {
      getFieldDecorator,
      getFieldsError,
      getFieldError,
      isFieldTouched,
      setFieldsValue
    } = this.props.form;

    // Only show error after a field is touched.
    const firstNameError = isFieldTouched('firstName') && getFieldError('firstName');
    const lastNameError = isFieldTouched('lastName') && getFieldError('lastName');
    const m = '0.6rem';
    return (
      <Form onSubmit={this.handleSubmit} layout="vertical">
        {/* <h4>Name</h4> */}
        <Form.Item label="Name" style={{ margin: 0, padding: 0 }}>
          <Form.Item
            style={{ display: 'inline-block', width: 'calc(50% - 12px)', margin: 0 }}
            validateStatus={firstNameError ? 'error' : ''}
            help={firstNameError || ''}
          >
            {getFieldDecorator('firstName', {
              rules: [{ required: true, message: 'Please input your first name!' }]
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="First Name"
                // value={this.props.user.firstName}
              />
            )}
          </Form.Item>

          <span
            style={{
              display: 'inline-block',
              width: '24px',
              textAlign: 'center'
            }}
          />
          <Form.Item
            style={{ display: 'inline-block', width: 'calc(50% - 12px)', margin: 0 }}
            validateStatus={lastNameError ? 'error' : ''}
            help={lastNameError || ''}
          >
            {getFieldDecorator('lastName', {
              rules: [{ required: true, message: 'Please input your last name!' }]
            })(
              <Input
                // prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Last Name"
                // value={this.props.user.lastName}
              />
            )}
          </Form.Item>
        </Form.Item>
        <Form.Item label="Password" style={{ marginBottom: 0 }}>
          <Form.Item style={{ marginBottom: m }}>
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Old Password"
            />
          </Form.Item>
          <Form.Item style={{ marginBottom: m }}>
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="New Password"
            />
          </Form.Item>
          <Form.Item style={{ marginBottom: m }}>
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Confirm Password"
            />
          </Form.Item>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
            Save
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create({ name: 'account_update' })(AccountUpdate);
