"use client";

import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  return createPortal(
    <dialog
      ref={dialogRef}
      className="m-0 min-h-screen min-w-screen bg-black/90 text-white"
      onClick={onDismiss}
    >
      <div className="flex justify-end p-4">
        <button onClick={onDismiss}>
          <X className="h-6 w-6 cursor-pointer" />
        </button>
      </div>
      {children}
    </dialog>,
    document.getElementById("modal-root")!,
  );
}
