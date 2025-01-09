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
    if((headers["Strict-Transport-Security"] == "Present" && headers["Content-Security-Policy"] == "Present") && count >= (headerslength-2)){
        // setGrade("A")
        // setColour("bg-[#2b9100]")
        colour = "bg-[#2b9100]"
        grade = "A"
    }else if((headers["Strict-Transport-Security"] == "Present" && headers["Content-Security-Policy"] != "Present") && count >= (headerslength-2)){
        // setGrade("B")
        // setColour("bg-[#acec91]")
        colour = "bg-[#acec91]"
        grade = "B"
    } else if((headers["Strict-Transport-Security"] == "Present" && headers["Content-Security-Policy"] != "Present" )&& count <= (headerslength-4)){
        // setGrade("C")
        // setColour("bg-[#acec91]")
        colour = "bg-[#ffa500]"
        grade = "C"
    }
    else if((headers["Strict-Transport-Security"] != "Present" && headers["Content-Security-Policy"] != "Present") && count >= (headerslength-2)){
        // setGrade("C")
        // setColour("bg-[#ffa500]")
        colour = "bg-[#ffa500]"
        grade = "C"
    }
    else if((headers["Strict-Transport-Security"] != "Present" && headers["Content-Security-Policy"] != "Present") && count >= (headerslength-2)){
        // setGrade("D")
        // setColour("bg-[#e56d22]")
        colour = "bg-[#e56d22]"
        grade = "D"
    }
    else if((headers["Strict-Transport-Security"] != "Present" && headers["Content-Security-Policy"] != "Present") && count < (headerslength-4)){
        // setGrade("D")
        // setColour("bg-[#db1e1e]")
        colour = "bg-[#db1e1e]"
        grade = "D"
    }
   
  return (
    <div className={`${colour} h-[130px] rounded-s p-4 flex justify-center items-center`}>
      
    <span className="text-xl font-bold">{grade}</span>
  </div>
  )
}
