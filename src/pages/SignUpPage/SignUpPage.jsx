import { Button, Form, Steps, Row, Col, Radio, Card } from "antd";
import React from "react";
import Redirectable from "../../components/Redirectable";

import ButtonLink from "../../components/ButtonLink";
import { connect } from "react-redux";
import { login } from "../../redux/user/actions";
import { routes } from "../../router";
import WrappedRegistrationForm from "./components/SignUpForm";

// Steps
const Step = Steps.Step;

const steps = [
  {
    title: "User Type"
  },
  {
    title: "Registration Details"
  },
  {
    title: "Verification"
  }
];

class SignUpPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      auth_type: "",
      beginReg: 0,
      confirmDirty: false,
      autoCompleteResult: []
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  handleConfirmBlur = e => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue("password")) {
      callback("Two passwords that you enter is inconsistent!");
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(["confirm"], { force: true });
    }
    callback();
  };

  handleWebsiteChange = value => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = [".com", ".org", ".net"].map(
        domain => `${value}${domain}`
      );
    }
    this.setState({ autoCompleteResult });
  };

  handleFirstSubmit = e => {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const auth_type = values.auth_type;
        this.setState({ auth_type });
      }
    });
  };

  next = () => {
    // const current = this.state.current + 1;
    // this.setState({ current });
    this.setState(function(state, props) {
      return {
        current: state.current + 1
      };
    });
  };

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  get_content() {
    const current = this.state.current;
    const { getFieldDecorator } = this.props.form;

    if (current === 0) {
      return (
        <div>
          <br />
          <br />
          <Card style={{ margin: "auto", textAlign: "center" }}>
            <h2>Are you a forecaster or company?</h2>
            <Row gutter={8}>
              <Col span={12}>
                <h3>Researcher</h3>
                <p>
                  If you are a forecaster, you will have the ability to view the{" "}
                  <br />
                  questions, make forecasts, and earn money.
                </p>
              </Col>
              <Col span={12}>
                <h3>Hospital</h3>
                <p>
                  If you are a hospital organization, you will have to ability{" "}
                  <br style={{ lineHeight: 0.5 }} />
                  to add new datasets to the market and sell your data.
                </p>
              </Col>
            </Row>

            <Form onSubmit={this.handleSubmit} className="login-form">
              <Form.Item>
                {getFieldDecorator("auth_type", {
                  initialValue: "Researcher",
                  rules: [
                    { required: true, message: "Please input your Password!" }
                  ]
                })(
                  <Radio.Group buttonStyle="solid">
                    <Radio.Button value="Researcher">Researcher</Radio.Button>
                    <Radio.Button value="Hospital">Hospital</Radio.Button>
                    {/* <Radio.Button value="Both">Both</Radio.Button> */}
                  </Radio.Group>
                )}
              </Form.Item>
            </Form>
          </Card>

          <br />

          <br />
        </div>
      );
    } else if (current === 1) {
      return (
        <div style={{ paddingRight: 100, paddingLeft: 100 }}>
          <WrappedRegistrationForm
            beginReg={this.state.beginReg}
            onRegistered={this.next}
          />
        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h2>Verify Account</h2>
          <p style={{ marginBottom: "5rem" }}>
            To verify your account check your linked email account for an email
            regarding verification. <br />
            You will not be able to login until you verify your account email.
          </p>
        </div>
      );
    }
  }

  render() {
    const { current } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 8
        }
      }
    };

    return (
      <div>
        <h1>{routes.signup.name}</h1>
        <div>
          <Steps current={current}>
            {steps.map(item => (
              <Step key={item.title} title={item.title} />
            ))}
          </Steps>
          <div className="steps-content">
            {this.get_content(formItemLayout, tailFormItemLayout)}
          </div>
          <div className="steps-action">
            {current < steps.length - 2 && (
              <Button
                htmlType="submit"
                className="login-form-button"
                type="primary"
                onClick={() => {
                  this.handleFirstSubmit();
                  this.next();
                }}
              >
                Next
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button
                htmlType="submit"
                className="login-form-button"
                type="primary"
                onClick={this.next()}
              >
                Done
              </Button>
            )}
            {current > 0 && current < 2 && (
              <div style={{ alignContent: "center" }}>
                {!this.props.loggedIn ? (
                  <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                    Back
                  </Button>
                ) : (
                  <Row type="flex" justify="center" gutter={16}>
                    <Col>
                      <Button
                        type="mr"
                        onClick={() => {
                          this.next();
                        }}
                      >
                        Next
                      </Button>
                    </Col>
                    <Col>
                      <ButtonLink type="primary" to={routes.dashboard.url}>
                        Home
                      </ButtonLink>
                    </Col>
                  </Row>
                )}
              </div>
            )}
            {current > 1 && (
              <div style={{ alignContent: "center" }}>
                {!this.props.loggedIn ? (
                  <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                    Prev
                  </Button>
                ) : (
                  <Row type="flex" justify="center" gutter={16}>
                    <Col>
                      <ButtonLink type="primary" to={routes.dashboard.url}>
                        Home
                      </ButtonLink>
                    </Col>
                  </Row>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogin: (username, pass) => {
      dispatch(login(username, pass));
    }
  };
};

const mapStateToProps = state => {
  return {
    user: state.user,
    error: state.error,
    loggedIn: state.user ? state.user.loggedIn : false
  };
};

const SignUpPageForm = Form.create({ name: "register" })(SignUpPage);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Redirectable(Form.create({ name: "signup_page" })(SignUpPageForm)));
