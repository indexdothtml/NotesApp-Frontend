import { Component, type ReactNode } from "react";

interface ErrorBoundaryProps {
  fallback: ReactNode; // what to render when error occurs
  children: ReactNode; // wrapped children
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // Render custom fallback UI
      return this.props.fallback;
    }

    return this.props.children;
  }
}
