import { JobCard } from "@/components/cards/job-card";
import jobPositions from "@/data/job-positions.json";
import { jobDescriptions } from "@/data/job-descriptions";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface JobsListProps {
  searchQuery: string;
}

export function JobsList({ searchQuery }: JobsListProps) {
  // Filter jobs based on search query
  const filteredJobs = jobPositions.positions.filter((position) => {
    if (!searchQuery) return true;
    const searchLower = searchQuery.toLowerCase();
    return position.title.toLowerCase().includes(searchLower);
  });

  // Get suggested positions when no results
  const getSuggestedPositions = () => {
    if (!searchQuery) return [];
    return jobPositions.positions
      .filter(
        (position) =>
          !position.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .slice(0, 3);
  };

  if (filteredJobs.length === 0) {
    const suggestedPositions = getSuggestedPositions();
    return (
      <div className="space-y-6" role="alert" aria-live="polite">
        <Alert variant="default" className="bg-muted/50">
          <AlertCircle className="size-4" />
          <AlertDescription>
            No jobs found matching &quot;{searchQuery}&quot;
          </AlertDescription>
        </Alert>

        {suggestedPositions.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">
              You might be interested in:
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {suggestedPositions.map((position) => (
                <JobCard
                  key={position.id}
                  id={position.id}
                  title={position.title}
                  category={position.category}
                  description={
                    jobDescriptions[position.id]?.description ??
                    "Join our team and make an impact in education technology."
                  }
                />
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div role="region" aria-label="Job search results">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          {/* <SearchIcon className="size-4 text-muted-foreground" /> */}
          <p className="text-sm text-muted-foreground">
            {searchQuery && "Found"} {filteredJobs.length} position
            {filteredJobs.length !== 1 && "s"}
            {searchQuery && <> matching &quot;{searchQuery}&quot;</>}
          </p>
        </div>
      </div>

      <div
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        role="list"
        aria-label="Available positions"
      >
        {filteredJobs.map((position) => (
          <JobCard
            key={position.id}
            id={position.id}
            title={position.title}
            category={position.category}
            description={
              jobDescriptions[position.id]?.description ??
              "Join our team and make an impact in education technology."
            }
          />
        ))}
      </div>
    </div>
  );
}
