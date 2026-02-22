function Error(Props) {
  const { statusCode = 500, errorMessage = "Something Went Wrong!" } = Props;
  return (
    <div className="bg-gray-900 flex justify-center items-center h-screen">
      <div className="bg-gray-800 w-2xl text-white p-10 rounded-md">
        <div className="font-bold text-5xl">{statusCode}</div>
        <p className="font-semibold text-2xl">{errorMessage}</p>
      </div>
    </div>
  );
}

export default Error;
