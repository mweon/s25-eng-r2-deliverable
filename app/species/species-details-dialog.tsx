"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { Database } from "@/lib/schema";

// Defines Species type based on the Supabase database schema
type Species = Database["public"]["Tables"]["species"]["Row"];

// Detailed view for a given species' information
export default function SpeciesDetailsDialog({ species }: { species: Species }) {
  return (
    <Dialog>
      {/* Triggers the dialog when Learn More button is pushed */}
      <DialogTrigger asChild>
        <Button className="mt-3 w-full">
          Learn More
        </Button>
      </DialogTrigger>

      <DialogContent className="max-h-screen overflow-y-auto sm:max-w-[600px]">
        {/* Scientific Name */}
        <div>
          <p>
              <span className="font-semibold">Scientific Name: </span>
              <span className="italic">{species.scientific_name}</span>
          </p>
        </div>

        {/* Common Name */}
                <div>
          <p>
              <span className="font-semibold">Common Name: </span>
              {species.common_name}
          </p>
        </div>

        {/* Kingdom */}
        <div>
          <p>
              <span className="font-semibold">Kingdom: </span>
              {species.kingdom}
          </p>
        </div>

        {/* Total Population */}
        <div>
          <p>
              <span className="font-semibold">Total Population: </span>
              {species.total_population}
          </p>
        </div>

        {/* Description */}
        <div>
          <p>
              <span className="font-semibold">Description: </span>
              {species.description}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
