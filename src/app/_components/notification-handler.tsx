"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

export default function NotificationHandler() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    if (searchParams.get("deleted")) {
      toast.success(
        <div className="items-center">
          <span className="text-lg">Image Deleted</span>
        </div>,
      );
      router.replace("/", undefined);
    }
  }, [searchParams, router]);

  return null;
}
