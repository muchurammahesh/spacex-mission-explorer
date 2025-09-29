import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  handleRetry = () => {
    this.setState({ hasError: false });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="text-center text-red-600 p-6 space-y-4">
          <h2>Something went wrong.</h2>
          <p>Please refresh or try again.</p>
          <button
            onClick={this.handleRetry}
            className="px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white rounded-lg"
          >
            Retry
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}