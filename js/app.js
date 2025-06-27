const reveals=document.querySelectorAll(".animate")

const observer=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        
        if (entry.isIntersecting){
            entry.target.classList.add("styled")
        }
    });
});
reveals.forEach(el => observer.observe(el));

const revealer=document.querySelectorAll(".animator")
console.log(revealer);
const observation=new IntersectionObserver((entryes)=>{
    entryes.forEach((entr)=>{
        if (entr.isIntersecting){
            entr.target.classList.add("style")
        }
    });
});
revealer.forEach(el => observation.observe(el));

let action=document.querySelectorAll(".btn-action");
action.forEach(action =>{
action.addEventListener("click",function(event){
    event.preventDefault();
document.getElementById("scroll").scrollIntoView({behaviour: "smooth"})
});
})

console.log(action);

const Today=new Date();
const yyyy=Today.getFullYear();
const mm=String(Today.getMonth() + 1).padStart(2,'0');
const dd=String(Today.getDate() + 1).padStart(2,'0');
const minDate=`${yyyy}-${mm}-${dd}`;
const fetchDate=document.getElementById('date-check');

const getDate=document.getElementById('date-check').setAttribute('min',minDate);
const amount=[5000,6000,4000,2000];
// const startDate=document.getElementById('date-check');
// console.log(startDate);
// console.log("Hello world");


document.getElementById('date-check').addEventListener("change", function(){
    const start=this.value;
const setEndDate=document.getElementById('date-checking').value=start;
    const endDate=document.getElementById('date-checking').setAttribute("min", start);
});

function calculateDays(amount,calcDate){
    
    return amount*calcDate;

}
const hcheck=document.getElementById("home-check");
const acheck=document.getElementById("alzheimers-check");
const pcheck=document.getElementById("palliative-check");
const phcheck=document.getElementById("physiotherapy-check");
const pbcheck=document.getElementById("phlebotomy-check");
const wcheck=document.getElementById("wellness-check");
const rcheck=document.getElementById("respite-check");
const tcheck=document.getElementById("transitional-check");
const item_select=document.getElementById("drop-select");
let payAmount;
const payField=document.getElementById('cash');
item_select.addEventListener("change", function(){
    if(this.value==="homecare"){
        hcheck.hidden=false;
        acheck.hidden=true;
        pcheck.hidden=true;
        phcheck.hidden=true;
        pbcheck.hidden=true;
        wcheck.hidden=true;
        rcheck.hidden=true;
        tcheck.hidden=true;
        payField.hidden=false;
        document.getElementById('date-check').addEventListener('change', ()=>{
    var startdate=new Date(document.getElementById('date-check').value);
    var enddate=new Date(document.getElementById('date-checking').value);
        if (isNaN(startdate) || isNaN(enddate)) {
    document.getElementById("output").textContent = "Please select both dates.";
    return;
  }
    var diff=enddate-startdate;
      
    const calcDate=diff/(1000*60*60*24)+1;
    document.getElementById("output").textContent = `Difference: ${calcDate}`;
    console.log(calcDate);
        payAmount=document.getElementById('amount').value=calculateDays(amount[0],calcDate);
        document.getElementById('date-checking').addEventListener('change', ()=>{
            var startdate=new Date(document.getElementById('date-check').value);
    var enddate=new Date(document.getElementById('date-checking').value);
        if (isNaN(startdate) || isNaN(enddate)) {
    document.getElementById("output").textContent = "Please select both dates.";
    return;
  }
    var diff=enddate-startdate;
      
    const calcDate=diff/(1000*60*60*24)+1;
    document.getElementById("output").textContent = `Difference: ${calcDate}`;
    console.log(calcDate);
        payAmount=document.getElementById('amount').value=calculateDays(amount[0],calcDate);
        })
        });
        
    }
    else if(this.value==="alzheimers"){
        hcheck.hidden=true;
        acheck.hidden=false;
        pcheck.hidden=true;
        phcheck.hidden=true;
        pbcheck.hidden=true;
        wcheck.hidden=true;
        rcheck.hidden=true;
        tcheck.hidden=true;
    }
    else if(this.value==="palliative"){
        hcheck.hidden=true;
        acheck.hidden=true;
        pcheck.hidden=false;
        phcheck.hidden=true;
        pbcheck.hidden=true;
        wcheck.hidden=true;
        rcheck.hidden=true;
        tcheck.hidden=true;
    }
    else if(this.value==="phlebotomy"){
        hcheck.hidden=true;
        acheck.hidden=true;
        pcheck.hidden=true;
        phcheck.hidden=true;
        pbcheck.hidden=false;
        wcheck.hidden=true;
        rcheck.hidden=true;
        tcheck.hidden=true;
    }
    else if(this.value==="physiotherapy"){
        hcheck.hidden=true;
        acheck.hidden=true;
        pcheck.hidden=true;
        phcheck.hidden=false;
        pbcheck.hidden=true;
        wcheck.hidden=true;
        rcheck.hidden=true;
        tcheck.hidden=true;
    }
    else if(this.value==="wellness"){
        hcheck.hidden=true;
        acheck.hidden=true;
        pcheck.hidden=true;
        phcheck.hidden=true;
        pbcheck.hidden=true;
        wcheck.hidden=false;
        rcheck.hidden=true;
        tcheck.hidden=true;
    }
    else if(this.value==="respite"){
        hcheck.hidden=true;
        acheck.hidden=true;
        pcheck.hidden=true;
        phcheck.hidden=true;
        pbcheck.hidden=true;
        wcheck.hidden=true;
        rcheck.hidden=false;
        tcheck.hidden=true;
    }
    else if(this.value==="transitional"){
        hcheck.hidden=true;
        acheck.hidden=true;
        pcheck.hidden=true;
        phcheck.hidden=true;
        pbcheck.hidden=true;
        wcheck.hidden=true;
        rcheck.hidden=true;
        tcheck.hidden=false;
    }
    else{
        hcheck.hidden=true;
        acheck.hidden=true;
        pcheck.hidden=true;
        phcheck.hidden=true;
        pbcheck.hidden=true;
        wcheck.hidden=true;
        rcheck.hidden=true;
        tcheck.hidden=true; 
    }
})

// const time=document.getElementById("time-control");//time-control is the div field id
// const time_setter=document.getElementById("time-set");//time-set is the time input id
// const dateSelect=document.getElementById("date-check");//date-check is the date input id
// dateSelect.addEventListener("change", function(){
//     time.hidden=false;
//     time_setter.value="07:00";
// });

const phone=document.getElementById("phone");
phone.addEventListener("input", function(e){
    if(!e.target.value.startsWith("+254")){
        e.target.setCustomValidity("Must begin with +254");
    }

    else{
        e.target.setCustomValidity('');
    }
})

const DOB=document.querySelectorAll('#date-set');

const maxYear=Today.getFullYear()-18;
const minYear = 1970; // Set minimum year
   // Must be at least 18 years old

  // Set allowed date range
  DOB.min = `${minYear}-01-01`;
  DOB.max = `${maxYear}-12-31`;

  // Disable input if date is invalid
//   DOB.addEventListener("change", function () {
//     const selectedDate = new Date(this.value);
//     const selectedYear = selectedDate.getFullYear();

//     if (selectedYear < minYear || selectedYear > maxYear) {
//       this.disabled = true;
//       alert("Selected date is out of allowed range. Input disabled.");
//     }
//   });

const endDate=document.getElementById('date-set').setAttribute("max", maxYear);

































































































