console.log("Script running");

const submitButton = document.querySelector("#submit");
const queryField = document.querySelector("#search");
const imageHolderDiv = document.querySelector("#imageholder");

// queryField.addEventListener("change", ()=>{
//     chosen = queryField.value;
//     console.log(chosen);
// })


const success_callback = (out) => {
    const chosen = queryField.value
    console.log(chosen)
  //console.log(out[0])
  for(var v in out){
    // console.log(out[v].state)
    if(out[v].state===chosen){
      console.log(out[v].state)
      console.log(out[v].tot_cases)
      console.log(out[v].tot_death)
      document.querySelector("#stats").innerHTML = out[v].state +" has had "+ out[v].tot_cases +" total COVID-19 cases and "+out[v].tot_death+" total deaths due to COVID-19."
      break;
    }
  }
}
const error_callback = () => {
  console.log("Error")
}

let data;
const fetchServer = () => {
  let data;
  let url = 'https://data.cdc.gov/resource/9mfq-cb36.json';
  fetch(url)
  .then(res => res.json())
  .then(success_callback, error_callback)
}

//       "submission_date":"2021-03-11T00:00:00.000",
//       "state":"KS",
//       "tot_cases":"297229",
//       "conf_cases":"241035.0",
//       "prob_cases":"56194",
//       "new_case":"0.0",
//       "pnew_case":"0",
//       "tot_death":"4851",
//       "new_death":"0.0",
//       "pnew_death":"0",
//       "created_at":"2021-03-12T15:20:13.190",
//       "consent_cases":"Agree",
//       "consent_deaths":"N/A"

console.log("writeMessage")

const onSubmit = () =>{
     
    const messageInput =  document.querySelector("#message").value;
    console.log(messageInput)
    const payload = {
        message: messageInput
    }
    
    firebase.database().ref().push(payload);

}
