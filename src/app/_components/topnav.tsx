import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  UserButton,
} from "@clerk/nextjs";
import { LogIn } from "lucide-react";
import { Button } from "~/components/ui/button";

export function TopNav() {
  return (
    <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
      <div>Website Title</div>
      {/* <Button variant={"ghost"} className="text-xl">
        <LogIn className="h-64 w-64" />
        <span>Sign In</span>
      </Button> */}
      <div className="flex flex-row items-center gap-4">
        <SignedOut>
          <div className="cursor-pointer">
            <SignInButton />
            {/* <SignInButton mode="modal" /> */}
          </div>
        </SignedOut>
        <SignedIn>
          <UserButton />
          {/* <SignOutButton /> */}
        </SignedIn>
      </div>
    </nav>
  );
}
