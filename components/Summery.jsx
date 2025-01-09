import React from "react";
import Grade from "./Grade";
import Advance from "./Advance";

export default function Summary({site, headers}) {
  let headersData = headers
    

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
                <Grade headers={headersData?.evaluation}/>
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
                    <Advance headers={headersData?.evaluation}/>
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
