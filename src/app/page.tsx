export default function EmailConfirmed() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-2xl p-8 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mt-4">
          Email Confirmed!
        </h1>
        <p className="text-gray-600 mt-2">
          Your email has been successfully verified. You can now log in to your
          account.
        </p>
      </div>
    </div>
  );
}
