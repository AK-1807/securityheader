
import React from 'react'

export default function Advance({headers}) {
    let grade = "";
    let colour= "";
    let text= "";

    let headerslength = Object.entries(headers).length
    let count = 0
   

    {Object.entries(headers)?.map(([header, status]) => {
        if(status == "Present"){
            count +=1
        }
    })}
    if((headers["Strict-Transport-Security"] == "Present" && headers["Content-Security-Policy"] == "Present") && count >= (headerslength-2)){
        grade = "A"
        colour = "bg-[#2b9100]"
        text = "Great grade! Perform a deeper security analysis of your website and APIs:"
    }else if((headers["Strict-Transport-Security"] == "Present" || headers["Content-Security-Policy"] == "Present") && count >= (headerslength-2)){
        grade = "B"
        colour = "bg-[#acec91]"
        text = "Good grade! Perform a deeper security analysis of your website and APIs:"
    }else if((headers["Strict-Transport-Security"] == "Present" || headers["Content-Security-Policy"] == "Present") && (count <= (headerslength-2) && count > (headerslength-4))){
        grade = "C"
        colour = "bg-[#ffa500]"
        text = "Not bad… Maybe you should perform a deeper security analysis of your website and APIs:"
    }
    else if((headers["Strict-Transport-Security"] == "low" || headers["Content-Security-Policy"] == "Present") && (count <= (headerslength-2) && count >= (headerslength-4))){
        grade = "C"
        colour = "bg-[#ffa500]"
        text = "Not bad… Maybe you should perform a deeper security analysis of your website and APIs:"
    } else if((headers["Strict-Transport-Security"] == "Present" || headers["Content-Security-Policy"] == "Present" )&& (count <= (headerslength-2) && count > (headerslength-4))){
      grade = "C"
        colour = "bg-[#ffa500]"
        text = "Not bad… Maybe you should perform a deeper security analysis of your website and APIs:"
    }
    else if((headers["Strict-Transport-Security"] == "Present" || headers["Content-Security-Policy"] == "Present") && count <= (headerslength-4)){
      grade = "D"
        colour = "bg-[#e56d22]"
        text = "Your site could be at risk, let’s perform a deeper security analysis of your site and APIs:"
    }
    else if((headers["Strict-Transport-Security"] != "Present" && headers["Content-Security-Policy"] != "Present") && count < (headerslength-4)){
     grade = "D"
        colour = "bg-[#db1e1e]"
        text = "Your site could be at risk, let’s perform a deeper security analysis of your site and APIs:"
    }else{
        grade = "D"
        colour = "bg-[#db1e1e]"
        text = "Your site could be at risk, let’s perform a deeper security analysis of your site and APIs:"
    }
   
  return (
    <div className="flex items-center space-x-4">
    <span className="text-gray-600">
      {text}
    </span>
    <a
      href={`https://probely.com/sh?utm_campaign=Security%20Headers&utm_source=Security%20Headers&utm_medium=Display&utm_content=${grade}`}
      target="_blank"
      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
    >
      Try Now
    </a>
  </div>
  )
}
