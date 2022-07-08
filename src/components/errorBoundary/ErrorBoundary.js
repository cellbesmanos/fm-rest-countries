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
    console.error(error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <p style={{ textAlign: "center" }}>
          Something went wrong. Please try again later.
        </p>
      );
    }

    return this.props.children;
  }
}
