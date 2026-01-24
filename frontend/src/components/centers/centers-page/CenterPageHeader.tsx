// import { cn } from "@/lib/utils";

export default function CentersPageHeader() {
  return (
    <section className="relative bg-white ">
      <div className="container mx-auto pt-16 pb-10">
        <div
          className="relative rounded-lg 
        "
          // border border-dashed border-zinc-300 p-6
        >
          {/* <CornerPlusIcons /> */}

          <div className="max-w-2xl space-y-3">
            <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900 ">
              Vaccination Centers
            </h1>
            <p className="text-sm sm:text-base text-zinc-600 ">
              Browse verified vaccination centers and explore available
              vaccines.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// const CornerPlusIcons = () => (
//   <>
//     <PlusIcon className="-top-3 -left-3" />
//     <PlusIcon className="-top-3 -right-3" />
//     <PlusIcon className="-bottom-3 -left-3" />
//     <PlusIcon className="-bottom-3 -right-3" />
//   </>
// );

// const PlusIcon = ({ className }: { className?: string }) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="1"
//     className={cn("absolute size-6 text-black dark:text-white", className)}
//   >
//     <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
//   </svg>
// );
