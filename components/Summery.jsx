import React from "react";

export default function Summary({site, headers}) {
  let headersData = headers
    console.log(headersData)

  if (!headersData) return <div>Loading...</div>;

  return (
    <div className="push-top mt-[50px] border-1 border-black">
      <div className="text-3xl p-[20px] border text-left font-semibold text-gray-800 ">
        Security Report Summary
      </div>
      <div className=" pt-[10px]">
        <div className="flex flex-wrap">
      
          <div className="w-full sm:w-1/4 p-4">
            <div className="score">
              <div className="score_yellow bg-yellow-300 h-[130px rounded-s p-4 flex justify-center items-center">
                <span className="text-xl font-bold">{headersData?.headers["Content-Security-Policy"] === "Present" ? "A" : "C"}</span>
              </div>
            </div>
          </div>

        
          <div className="w-full sm:w-3/4 p-4">
            <table className="table-auto w-full border-separate border-spacing-4">
              <tbody>
                <tr>
                  <th className="text-left text-lg font-medium text-gray-700">Site:</th>
                  <td>
                    <a
                      href={site}
                      target="_blank"
                      rel="nofollow noreferrer noopener"
                      className="text-blue-600 hover:underline"
                    >
                      {site}
                    </a>
                  </td>
                </tr>
                <tr>
                  <th className="text-left text-lg font-medium text-gray-700">IP Address:</th>
                  <td className="text-gray-600">{headersData?.ip}</td>
                </tr>
                <tr>
                  <th className="text-left text-lg font-medium text-gray-700">Report Time:</th>
                  <td className="text-gray-600">{headersData?.headers?.date}</td>
                </tr>
                <tr>
                  <th className="text-left text-lg font-medium text-gray-700">Headers:</th>
                  <td>
                    <ul className="space-y-2">
                      {Object.entries(headersData?.evaluation)?.map(([header, status]) => (
                        <li
                          key={header}
                          className={`inline-block mr-[20px] space-x-2 ${
                            status === "Present"
                              ? "text-green-600"
                              : status === "Missing"
                              ? "text-red-600"
                              : "text-[#ffa500]"
                          }`}
                        >
                          <i
                            className={`fa ${
                              status === "Present"
                                ? "fa-check-circle"
                                : status === "Missing"
                                ? "fa-times-circle"
                                : "fa-question-circle"
                            }`}
                          />
                          <span>{header}</span>
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th className="text-left text-lg font-medium text-gray-700">Advanced:</th>
                  <td>
                    <div className="flex items-center space-x-4">
                      <span className="text-gray-600">
                        Not bad… Maybe you should perform a deeper security analysis of your website and APIs:
                      </span>
                      {/* <a
                        href="https://probely.com/sh?utm_campaign=Security%20Headers&utm_source=Security%20Headers&utm_medium=Display&utm_content=C"
                        target="_blank"
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                      >
                        Try Now
                      </a> */}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
