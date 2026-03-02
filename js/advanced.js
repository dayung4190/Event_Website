// DARK MODE
function toggleDark(){
 document.body.classList.toggle("dark");
}

// COUNTDOWN
const eventDate = new Date("May 20, 2026 09:00:00").getTime();
setInterval(()=>{
 const now = new Date().getTime();
 const d = Math.floor((eventDate-now)/(1000*60*60*24));
 const el = document.getElementById("countdown");
 if(el) el.innerHTML = d+" days to event";
},1000);

// SLIDER
let i=0;
setInterval(()=>{
 const slides=document.querySelectorAll(".slide");
 if(!slides.length) return;
 slides.forEach(s=>s.classList.remove("active"));
 i=(i+1)%slides.length;
 slides[i].classList.add("active");
},4000);

// MODAL
function showModal(){document.getElementById("modal").style.display="flex"}
function closeModal(){document.getElementById("modal").style.display="none"}

// SPEAKER SEARCH
function filterSpeakers(){
 let q=document.getElementById("speakerSearch").value.toLowerCase();
 document.querySelectorAll(".speaker-card").forEach(c=>{
  c.style.display=c.innerText.toLowerCase().includes(q)?"block":"none";
 });
}

// BACK TO TOP
window.onscroll=()=>{
 const b=document.getElementById("topBtn");
 if(!b) return;
 b.style.display=window.scrollY>300?"block":"none";
};
function topPage(){window.scrollTo({top:0,behavior:"smooth"});}
