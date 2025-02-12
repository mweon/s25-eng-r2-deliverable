"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { Database } from "@/lib/schema";

// Defines Species type based on the Supabase database schema
type User = Database["public"]["Tables"]["profiles"]["Row"];

// Detailed view for a given species' information
export default function UserDetailsDialog({ user }: { user: User }) {
  return (
    <Dialog>
      {/* Triggers the dialog when Learn More button is pushed */}
      <DialogTrigger asChild>
        <Button className="mt-3 w-full" variant="secondary">
          See More
        </Button>
      </DialogTrigger>

      <DialogContent className="max-h-screen overflow-y-auto sm:max-w-[600px]">
        {/* Display Name */}
        <div>
          <p>
              <span className="font-semibold">Name: </span>
              {user.display_name}
          </p>
        </div>

        {/* Email */}
        <div>
          <p>
              <span className="font-semibold">Email: </span>
              <span className="italic">{user.email}</span>
          </p>
        </div>

        {/* Full Biography */}
        <div>
          <p>
              <span className="font-semibold">Bio: </span>
              {user.biography}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
