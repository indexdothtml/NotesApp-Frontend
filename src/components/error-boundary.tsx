import { Component, type ReactNode } from "react";
import { useRouteError, isRouteErrorResponse } from "react-router";

import { ErrorLayout } from "@/layouts/error-layout";
import { env } from "@/envConfig";

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

export function RootErrorBoundary() {
  let error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return (
      <ErrorLayout>
        <h1 className="text-2xl">
          {error.status} | {error.statusText}
        </h1>
        <p>{error.data}</p>
      </ErrorLayout>
    );
  } else if (error instanceof Error) {
    return (
      <ErrorLayout>
        <h1 className="text-lg">Error</h1>
        <p>{error.message}</p>
        {env.environment === "development" && (
          <>
            <p>The stack trace is:</p>
            <pre>{error.stack}</pre>
          </>
        )}
      </ErrorLayout>
    );
  } else {
    return (
      <ErrorLayout>
        <h1>Unknown Error</h1>
      </ErrorLayout>
    );
  }
}
