import axios from 'axios';
import React, { useRef, useState } from 'react'
import { ScaleLoader } from 'react-spinners';
// https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyBi0kkmNZyRkDp2StGkOCGdn7DXakyspyo




function Chatbot() {

  const[inputData,setInputData] = useState("")
  const[question,setQuestion] = useState("Hi");
  const[answer,setAnswer] = useState("Hello, how can i help you !");
  const[loadings,setLoadings] = useState(false)
  const[qnsClass,setQnsClass] = useState("show-qns")
  const inputRef = useRef(null)
 

  const url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key="
  const API_KEY = "AIzaSyBi0kkmNZyRkDp2StGkOCGdn7DXakyspyo"
  const sendingData = {
  "contents": [{
    "parts":[{"text": inputData}]
    }]
  }
  const getData = () => {
    if (!inputData.trim()) return; // Prevent empty submissions

    setQnsClass("hide-qns");
    setLoadings(true);
    setAnswer("");
    setQuestion("");
    axios.post(`${url}${API_KEY}`, sendingData)
      .then((response) => {
        console.log("Response : ", response);
        console.log(response.data.candidates[0].content.parts[0].text);

        setAnswer(response.data.candidates[0].content.parts[0].text);
        setQuestion(sendingData.contents[0].parts[0].text);
        setLoadings(false);
        setQnsClass("show-qns");
        setInputData(""); // Clear input after submission
        if(inputRef.current){
          inputRef.current.value = "";
        }
      })
      .catch((err) => {
        console.log("Error : ", err);
        setLoadings(false); // Make sure to reset loading even on error
        setQnsClass("show-qns"); // Reset qnsClass
      });
  };

  function handleInput(event){
    console.log(event.target.value);
    setInputData(event.target.value);
    sendingData.contents[0].parts[0].text=event.target.value
    console.log(sendingData);
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      getData();
    }
  };
  return (
    <>
    <div className='w-full mx-auto h-screen'>
        <div className='w-full mx-auto overflow-y-scroll h-[78vh] example py-8'>
          <div className='max-w-4xl mx-auto'>
            <p className='bg-[#F3F3F3] rounded-xl p-3 w-4/5 ml-auto sm:ml-12'><span className={qnsClass}>{question}</span></p>
          </div>
            <p className='bg-white rounded-3xl px-5 mt-9 text-justify mb-10 max-w-4xl mx-auto sm:text-sm sm:mb-2 md:mb-6 lg:mb-8'>{answer}</p>
            <ScaleLoader loading={loadings} className='text-center mt-6'/>
        </div>
 
        <div className='w-1/2 h-[18vh] rounded-3xl shadow-xl border-2 border-black/10 fixed bottom-5 left-1/4 px-5 sm:px-3 sm:h-[13vh] sm:w-[94%] sm:left-[2%] md:w-[80%] md:left-[9%] lg:w-[70%] lg:left-[12%] xl:w-[60%] xl:left-[17%] bg-white'>
            <input ref={inputRef} className='w-full outline-none py-3 bg-transparent sm:text-sm sm:py-2' type="text" placeholder='Ask with us' onChange={handleInput} onKeyDown={handleKeyDown}/>
            <button className='px-5 py-1 rounded-full bg-black text-white mt-[7vh] sm:mt-[3vh] sm:text-sm' onClick={getData}>Submit</button>
        </div>
    </div>
    </>
  )
}

export default Chatbot