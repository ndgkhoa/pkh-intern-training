interface LoadingProps {
  fullscreen?: boolean;
  message?: string;
}

const Loading = ({ fullscreen = false, message }: LoadingProps) => {
  const containerClass = fullscreen
    ? 'fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm'
    : 'flex flex-col items-center justify-center p-4';

  return (
    <div className={containerClass}>
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-500 border-t-transparent" />
      {message && <p className="mt-3 text-sm font-medium text-gray-700">{message}</p>}
    </div>
  );
};

export default Loading;
