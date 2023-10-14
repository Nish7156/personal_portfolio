import React from "react";

function LoadingCard() {
  const lodingList = [1, 2];

  return (
    <>
      {lodingList.map((data: any) => {
        return (
          <div key={data} className="rounded-md bg-[#2a2a2a] p-4 shadow-md">
            <div className="mb-4">
              <div className="mb-2 h-6 w-2/3 animate-pulse bg-gray-200"></div>
              <div className="h-8 w-full animate-pulse bg-gray-200"></div>
            </div>

            <div className="mb-4">
              <div className="h-16 animate-pulse bg-gray-200"></div>
            </div>

            <div className="flex space-x-2">
              <div className="h-6 w-1/4 animate-pulse bg-gray-200"></div>
              <div className="h-6 w-1/4 animate-pulse bg-gray-200"></div>
              <div className="h-6 w-1/4 animate-pulse bg-gray-200"></div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default LoadingCard;
