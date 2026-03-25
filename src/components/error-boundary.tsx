import { useRouteError, isRouteErrorResponse } from "react-router";

import { ErrorLayout } from "@/layouts/error-layout";
import { env } from "@/envConfig";

export function ErrorBoundary() {
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
