interface ErrorMessageProps {
  message?: string;
}

const ErrorMessage = ({ message = 'Something went wrong' }: ErrorMessageProps) => {
  return <div className="py-10 text-center font-medium text-red-600">⚠️ {message}</div>;
};

export default ErrorMessage;
