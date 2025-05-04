import { Loader } from "lucide-react";

const LoadingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center px-4">
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <Loader className="w-16 h-16 text-blue-500 animate-spin" />
        </div>

        <h1 className="text-2xl font-semibold text-gray-700 mb-4">
          Loading...
        </h1>
        <p className="text-gray-600 max-w-md mx-auto">
          Please wait while we load the content for you.
        </p>
      </div>
    </div>
  );
};

export default LoadingPage;
