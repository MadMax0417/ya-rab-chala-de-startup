"use client";

import { useEffect, useRef, type MouseEvent, type ReactNode, type RefObject } from "react";
import { X } from "lucide-react";

type DialogProps = {
  open: boolean;
  onClose: () => void;
  labelledBy: string;
  children: ReactNode;
  className?: string;
  returnFocusRef?: RefObject<HTMLElement | null>;
};

export function Dialog({
  open,
  onClose,
  labelledBy,
  children,
  className = "",
  returnFocusRef,
}: DialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      previouslyFocusedRef.current =
        document.activeElement instanceof HTMLElement ? document.activeElement : null;
      dialog.showModal();
    } else if (!open && dialog.open) {
      dialog.close();

      const previous = returnFocusRef?.current ?? previouslyFocusedRef.current;
      if (previous?.isConnected) {
        previous.focus();
      }
      previouslyFocusedRef.current = null;
    }
  }, [open, returnFocusRef]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleClose = () => onClose();
    dialog.addEventListener("close", handleClose);
    return () => dialog.removeEventListener("close", handleClose);
  }, [onClose]);

  useEffect(() => {
    if (!open) return;
    const previous = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = previous;
    };
  }, [open]);

  function handleBackdropClick(event: MouseEvent<HTMLDialogElement>) {
    if (event.target === event.currentTarget) onClose();
  }

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={labelledBy}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={handleBackdropClick}
      className={`fixed inset-0 z-50 m-auto max-h-[88dvh] w-[calc(100%-2rem)] max-w-2xl overflow-y-auto border border-ink bg-paper p-0 text-ink shadow-[0_30px_90px_rgba(20,19,15,0.34)] sm:w-[calc(100%-3rem)] ${className}`}
    >
      <div className="sticky top-0 z-20 flex items-center justify-end border-b border-rule bg-paper/95 px-4 py-2 backdrop-blur-sm">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          className="inline-flex items-center gap-2 border border-transparent px-2 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted transition hover:border-ink hover:text-ink"
        >
          Close
          <X size={15} strokeWidth={1.8} aria-hidden="true" />
        </button>
      </div>
      <div className="px-5 pb-8 pt-5 sm:px-8 sm:pb-10 sm:pt-7">{children}</div>
    </dialog>
  );
}
