import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      msg: "",
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, info) {
    this.setState({
      msg: error.message,
    });
  }

  render() {
    if (this.state.hasError) {
      return <p style={{ textAlign: "center" }}>{this.state.msg}</p>;
    }

    return this.props.children;
  }
}
