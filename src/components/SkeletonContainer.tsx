import { CardSkeletion } from "./CardSkeletion";

export async function SkeletonContainer() {
  
  return (
    <div className="animate-pulse w-full flex flex-row flex-wrap gap-6 justify-center">
     <CardSkeletion/>
     <CardSkeletion/>
     <CardSkeletion/>
     <CardSkeletion/>
    </div>
  );
}
