import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonShowNote() {
  return (
    <div className="flex flex-col gap-2">
      <Skeleton className="h-5 w-40" />
      <Skeleton className="h-4 w-40" />
      <Skeleton className="h-8 w-20 mt-2" />
      <Skeleton className="h-8 w-2xl" />
      <Skeleton className="h-20 w-2xl" />
      <Skeleton className="h-8 w-14" />
    </div>
  );
}
