
 let empidEl = document.getElementById("empid")
let phonenumEl = document.getElementById("phonenum")
let emptypeEl = document.getElementById("emptype")
let desgEl = document.getElementById("desg")

let myFormEl = document.getElementById("myForm")



let formData ={
  empId:'',
  phone:'',
  emp:'',
  des:''
}

empidEl.addEventListener("change",function(event){
  formData.empId=event.target.value
})

phonenumEl.addEventListener("change",function(event){
  formData.phone=event.target.value
})

emptypeEl.addEventListener("change",function(event){
  formData.emp = event.target.value
})

desgEl.addEventListener("change",function(event){
  formData.des = event.target.value
})

function submitHandler(formData){
  console.log(formData)
  let x = JSON.stringify(formData)
  localStorage.setItem("Data",x)
}

myFormEl.addEventListener("submit",function(event){
  event.preventDefault()
  submitHandler(formData)
})