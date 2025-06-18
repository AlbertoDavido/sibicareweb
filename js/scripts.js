const displayValue=document.querySelectorAll(".num");
const itemCounter=document.querySelectorAll("#partner-scroll");

const observerdata= new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            let interval=5000;

displayValue.forEach(value => {
    let startValue=0;
    let endValue=parseInt(value.getAttribute("data-val"));

    let duration=Math.floor(interval/endValue);
    let counter=setInterval(function(){
        startValue+=1;
        value.textContent=startValue + "+";
        if(startValue==endValue){
            clearInterval(counter);
        }
    }, duration);
});
        }
    })
})
itemCounter.forEach(el=>observerdata.observe(el));
const scroll=document.getElementById("partner-scroll");























