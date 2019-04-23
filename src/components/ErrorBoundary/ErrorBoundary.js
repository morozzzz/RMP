import React from 'react';

class ErrorBoundary extends React.Component {
    constructor() {
        super();
        this.state = {
            hasError: false,
            error: null,
            info: '',
        };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        this.setState({ error, info });
    }

    render() {
        const { children } = this.props;
        const { hasError, error, info } = this.state;

        if (hasError) {
            return (
                <div>
                    <h1>Something went wrong.</h1>
                    <div>{error}</div>
                    <div>{info}</div>
                </div>
            );
        }

        return children;
    }
}

export default ErrorBoundary;
