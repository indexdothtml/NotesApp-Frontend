import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonNotes() {
  return (
    <div className="grid grid-cols-3 gap-6">
      <Skeleton className="h-5 w-40" />
      <Skeleton className="h-5 w-40" />
      <Skeleton className="h-5 w-40" />
      <Skeleton className="h-5 w-40" />
      <Skeleton className="h-5 w-40" />
      <Skeleton className="h-5 w-40" />
      <Skeleton className="h-5 w-40" />
      <Skeleton className="h-5 w-40" />
      <Skeleton className="h-5 w-40" />
      <Skeleton className="h-5 w-40" />
      <Skeleton className="h-5 w-40" />
    </div>
  );
}
