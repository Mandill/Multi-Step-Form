const prevButtons = document.querySelectorAll(".btn-prev")
const nextButtons = document.querySelectorAll(".btn-next")
const progress = document.getElementById("progress")
const form = document.getElementById("form")
const formSteps = document.querySelectorAll(".form-step")
const progressSteps = document.querySelectorAll(".progress-step")

let formStepsNum = 0;
let valid = true

nextButtons.forEach(btn=>{
    btn.addEventListener("click",()=>
    {
            updateFormSteps();
            updateProgressBar();
    })
})
prevButtons.forEach(btn=>{
    btn.addEventListener("click",()=>
    {
        formStepsNum -- ;
        updateProgressBar();
        updateFormSteps();
    })
})

function updateFormSteps()
{
    formSteps.forEach(formStep => 
        {
            formStep.classList.contains("active") && 
                formStep.classList.remove("active")
        })
    formSteps[formStepsNum].classList.add("active")
}

function updateProgressBar()
{
    progressSteps.forEach((progress,index)=>
    {
        if(index < formStepsNum + 1 )
        {
            progress.classList.add("active")
        }
        else
        {
            progress.classList.remove("active")
        }
    })
}

function validateFirst() {
    const name = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    if(name.length < 1)
    {
        alert("Enter the First Name");
    }
    else if(lname.length < 1)
    {
        alert("Enter the Last Name")
    }
    else
    {
        formStepsNum ++;
    }
}
function validateSecond() {
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var phoneRegex = /^\d+$/; 

    if (!emailRegex.test(email)) {
        alert("Enter the Valid Email");
    }
    else if (!phoneRegex.test(phone)) {
        alert("Enter the Valid Phone Number");
    }
    else if(email.length < 1)
    {
        alert("Enter the Valid Email");
    }
    else if(phone.length < 1)
    {
        alert("Enter the Valid Phone Number")
    }
    else {
         formStepsNum ++;
    }
}

form.addEventListener("submit",(e)=>
{
    e.preventDefault()

    const name = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const gender = document.getElementById("gender").value;
    const comments = document.getElementById("comments").value;
    const form = document.getElementById("form");
    form.style.display= 'none';

    var resultContainer = document.querySelector('.submissionResult');
    resultContainer.classList.add("active")

      resultContainer.innerHTML = `
        <h2>Submitted Data</h2>
        <p><strong>Name:</strong> ${name} </strong> ${lname} </p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Phone Number:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${comments}</p>
      `;
    
    console.log("thank you for submitting form");
    
})