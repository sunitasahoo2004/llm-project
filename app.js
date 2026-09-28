const API_KEY="AQ.Ab8RN6IL5rtAx624BKgjliB-rVP8qFVCZ5LPtz98eA4sJO3y7w";
const askButton =document.getElementById("askBtn");
const result= document.getElementById("result");
const promptInput= document.getElementById("prompt");

askButton.addEventListener("click",async function () {
    const prompt= promptInput.Value;
    
    const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent",
    {
        method: "POST" ,
        headers: {
            "Content-Type": "application/json" ,
            "x-goog-api-key": API_KEY

},
        body: JSON.stringify({
            contents: [
                {
                    parts: [
                        {
                            text: prompt
                        }
                    ]
                }
            ]
        })
        }

);
const data =await response.json();
console.log(data.candidate[0].content.parts[0].text);
result.innerText= data;
})

