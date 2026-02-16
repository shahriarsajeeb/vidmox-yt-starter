interface AddOnCardProps {
  title: string;
  price: string;
  description: string;
  onClick?: () => void;
}

export default function AddOnCard({
  title,
  price,
  description,
  onClick,
}: AddOnCardProps) {
  return (
    <div
      className="rounded-md border border-gray-200 dark:border-slate-800 p-5 dark:hover:border-slate-700 cursor-pointer transition"
      onClick={onClick}
    >
      <h4 className="font-semibold text-gray-800 dark:text-white mb-1">
        {title}
      </h4>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
        {description}
      </p>
      <span className="text-blue-600 font-medium">{price}</span>
    </div>
  );
}
