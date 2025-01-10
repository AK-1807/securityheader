"use client"
import React, { useState } from 'react'

export default function Grade({headers}) {
    let grade = "";
    let colour= ""
    // const [grade, setGrade] = useState("")
    // const [colour, setColour] = useState("")
    let headerslength = Object.entries(headers).length
    let count = 0
   

    {Object.entries(headers)?.map(([header, status]) => {
        if(status == "Present"){
            count +=1
        }
    })}
    if((headers["Strict-Transport-Security"] == "Present" && headers["Content-Security-Policy"] == "Present") && count >= (headerslength-3)){
        grade = "A"
        colour = "bg-[#2b9100]"
    }else if((headers["Strict-Transport-Security"] == "Present" || headers["Content-Security-Policy"] == "Present") && count >= (headerslength-3)){
        grade = "B"
        colour = "bg-[#acec91]"
    }else if((headers["Strict-Transport-Security"] == "Present" || headers["Content-Security-Policy"] == "Present") && (count <= (headerslength-2) && count > (headerslength-4))){
        grade = "C"
        colour = "bg-[#ffa500]"
    } else if((headers["Strict-Transport-Security"] == "Present" || headers["Content-Security-Policy"] == "Present" )&& (count <= (headerslength-2) && count >= (headerslength-4))){
      grade = "C"
        colour = "bg-[#ffa500]"
    }else if((headers["Strict-Transport-Security"] == "low" || headers["Content-Security-Policy"] == "Present") && (count <= (headerslength-2) && count > (headerslength-4))){
        grade = "C"
        colour = "bg-[#ffa500]"
    }
    else if((headers["Strict-Transport-Security"] == "Present" || headers["Content-Security-Policy"] == "Present") && count <= (headerslength-4)){
      grade = "D"
        colour = "bg-[#e56d22]"

    }
    else if((headers["Strict-Transport-Security"] != "Present" && headers["Content-Security-Policy"] != "Present") && count < (headerslength-4)){
     grade = "D"
        colour = "bg-[#db1e1e]"
        
    }else {
        grade = "D"
           colour = "bg-[#db1e1e]"
           
       }
   
  return (
    <div className={`${colour} h-[130px] rounded-s p-4 flex justify-center items-center`}>
      
    <span className="text-xl font-bold">{grade}</span>
  </div>
  )
}
