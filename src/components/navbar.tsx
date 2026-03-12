import { Link } from "react-router";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function NavBar() {
  return (
    <nav className="flex justify-between items-center p-4 shadow-md">
      <div className="flex items-center gap-10">
        <div>
          <Link to="/">Notiva</Link>
        </div>
        <Select>
          <SelectTrigger className="w-45">
            <SelectValue placeholder="Notes" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="personal_projects">
                Personal projects
              </SelectItem>
              <SelectItem value="company_work">Company work</SelectItem>
              <SelectItem value="travels">Travels</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Button variant="outline" asChild>
          <Link to="/login">Login</Link>
        </Button>
      </div>
    </nav>
  );
}
