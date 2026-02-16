import { Trash2, AlertTriangle, X } from "lucide-react";

export default function DeleteAccountModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-slate-900/90 text-white rounded-md shadow-lg border border-slate-800 relative">
        {/* Header */}
        <div className="flex items-center justify-between px-5 pt-5">
          <div className="flex items-center gap-2 text-red-500">
            <Trash2 size={20} />
            <h2 className="text-lg font-semibold">Delete Account</h2>
          </div>
          <button onClick={onClose}>
            <X size={20} className="text-gray-400 hover:text-white" />
          </button>
        </div>

        {/* Body */}
        <div className="px-5 py-4 space-y-4 text-sm text-slate-300">
          <p>
            Deleting your Vidmox account is a{" "}
            <strong className="text-white">permanent action</strong>. However,
            you will have <strong className="text-white">28 days</strong> to
            recover your account before it&apos;s permanently deleted.
          </p>

          <div className="flex items-start gap-2 text-yellow-400 bg-yellow-900/30 border border-yellow-600 rounded p-3 text-sm">
            <AlertTriangle size={16} className="mt-0.5" />
            <p>
              <strong>Important:</strong> Once the account is fully deleted, you{" "}
              <strong>cannot</strong> use the same email to sign up again in the
              future.
            </p>
          </div>

          <p className="text-md text-gray-400">
            You can <strong className="text-white">restore</strong> your account
            within <strong className="text-white">28 days</strong> from the date
            of deletion. After that, it will be{" "}
            <strong className="text-white">permanently removed</strong>.
          </p>
        </div>

        {/* Actions */}
        <div className="px-5 pb-5 pt-2 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 cursor-pointer py-1.5 rounded-md text-sm bg-slate-800 hover:bg-slate-700 text-white"
          >
            Cancel
          </button>
          <button className="px-4 py-1.5 cursor-pointer rounded-md text-sm bg-red-600 hover:bg-red-700 text-white">
            Confirm Delete
          </button>
        </div>
      </div>
    </div>
  );
}
