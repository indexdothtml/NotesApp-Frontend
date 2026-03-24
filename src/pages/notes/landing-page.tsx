import { Link } from "react-router";

import { Button } from "@/components/ui/button";

export function LandingPage() {
  return (
    <section className="ml-10 mr-10 mt-20 pl-20 flex items-center gap-10">
      <div>
        <h1 className="text-4xl mb-2">Notes made simple.</h1>
        <h2 className="text-lg w-2xl mb-2">
          No complex Folders, no hidden menus. Just a clean page and your best
          ideas, synced everywhere you go.
        </h2>
        <Button asChild>
          <Link to="/signup">Get started for free</Link>
        </Button>
      </div>
      <img
        src="/undraw_saving-notes_wp71.svg"
        alt="Save Notes"
        className="w-80"
      />
    </section>
  );
}
