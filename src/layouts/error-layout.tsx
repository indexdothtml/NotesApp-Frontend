import type { PropsWithChildren } from "react";

export function ErrorLayout({ children }: PropsWithChildren) {
  return (
    <div className="bg-gray-900 flex flex-col justify-center items-center h-screen">
      <div className="bg-gray-800 w-fit p-2 rounded-md">{children}</div>
    </div>
  );
}
