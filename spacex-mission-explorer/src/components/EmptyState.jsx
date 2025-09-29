
export default function EmptyState({ message }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-gray-500">
      <p className="text-lg font-medium">{message}</p>
    </div>
  );
}
