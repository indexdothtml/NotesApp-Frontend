import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function NotesSelector() {
  return (
    <Select>
      <SelectTrigger className="w-45">
        <SelectValue placeholder="Notes" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="personal_projects">Personal projects</SelectItem>
          <SelectItem value="company_work">Company work</SelectItem>
          <SelectItem value="travels">Travels</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
