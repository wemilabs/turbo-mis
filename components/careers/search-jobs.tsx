"use client";

import { useCallback, useState } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SearchIcon, XIcon } from "lucide-react";
import { useDebounce } from "@/hooks/use-debounce";
import { cn } from "@/lib/utils";

export function SearchJobs() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const currentQuery = searchParams.get("position") ?? "";
  const [isFocused, setIsFocused] = useState(false);
  const [localValue, setLocalValue] = useState(currentQuery);

  // Debounce the search query to avoid too many URL updates
  const debouncedUpdateQuery = useDebounce(
    useCallback(
      (value: string) => {
        const params = new URLSearchParams(searchParams);
        if (value) {
          params.set("position", value);
        } else {
          params.delete("position");
        }
        router.replace(`${pathname}?${params.toString()}`);
      },
      [pathname, router, searchParams]
    ),
    300
  );

  const handleChange = (value: string) => {
    setLocalValue(value);
    debouncedUpdateQuery(value);
  };

  const handleClear = () => {
    setLocalValue("");
    debouncedUpdateQuery("");
  };

  return (
    <div
      className={cn(
        "relative group transition-all duration-200",
        isFocused && "ring-0 ring-primary ring-offset-0 rounded-md"
      )}
      role="search"
      aria-label="Search jobs"
    >
      <SearchIcon
        className={cn(
          "absolute left-3 top-1/2 size-4 -translate-y-1/2 transition-colors duration-200",
          isFocused ? "text-primary" : "text-muted-foreground"
        )}
        aria-hidden="true"
      />
      <Input
        type="search"
        placeholder="Search jobs..."
        value={localValue}
        onChange={(e) => handleChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={cn(
          "pl-9 pr-12 transition-all duration-200",
          localValue && "pr-20" // Extra padding when clear button is visible
        )}
        aria-label="Search jobs"
        aria-describedby="search-description"
      />
      {localValue && (
        <Button
          variant="ghost"
          size="sm"
          className="absolute right-2 top-1/2 -translate-y-1/2 size-7 p-0 opacity-70 hover:opacity-100"
          onClick={handleClear}
          aria-label="Clear search"
        >
          <XIcon className="size-4" />
        </Button>
      )}
      <div className="sr-only" id="search-description">
        Type to search for jobs by title. Use arrow keys to navigate results.
      </div>
    </div>
  );
}
