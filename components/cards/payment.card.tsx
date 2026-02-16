import { Check, X } from "lucide-react";

interface FeatureItem {
  label: string;
  available?: boolean;
}

interface PaymentCardProps {
  name: string;
  price: string;
  features: (string | FeatureItem)[];
  isFree?: boolean;
  highlighted?: boolean;
  isCurrent?: boolean;
  onClick?: () => void;
}

export default function PaymentCard({
  name,
  price,
  features,
  isFree,
  highlighted,
  isCurrent,
  onClick,
}: PaymentCardProps) {
  return (
    <div
      className={`relative rounded-md border p-5 transition hover:shadow-md cursor-pointer ${
        highlighted
          ? "border-blue-700 bg-indigo-50 dark:bg-indigo-900/20"
          : "border-slate-300 dark:border-slate-700"
      }`}
    >
      {/* Current Plan Badge */}
      {isCurrent && (
        <span className="absolute top-2 right-2 text-xs font-medium bg-green-600 text-white px-2 py-0.5 rounded-full">
          Current Plan
        </span>
      )}

      {/* Title and Price */}
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
        {name}
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
        {isFree ? "Forever Free" : `${price}/month`}
      </p>

      {/* Features */}
      <ul className="space-y-2 text-sm">
        {features.map((f, i) => {
          const item: FeatureItem =
            typeof f === "string" ? { label: f, available: true } : f;
          return (
            <li
              key={i}
              className={`flex items-center gap-2 ${
                item.available === false
                  ? "text-gray-400 line-through"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              {item.available === false ? (
                <X className="w-4 h-4 text-red-400" />
              ) : (
                <Check className="w-4 h-4 text-green-500" />
              )}
              {item.label}
            </li>
          );
        })}
      </ul>

      {/* Action Button */}
      {!isCurrent && (
        <button
          onClick={onClick}
          className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 rounded-md transition"
        >
          Select Plan
        </button>
      )}
    </div>
  );
}
