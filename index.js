const homeEl = document.getElementById("home-score")
const guestEl = document.getElementById("guest-score")
const homeInc1 = document.getElementById("home-inc-1")
const homeInc2 = document.getElementById("home-inc-2")
const homeInc3 = document.getElementById("home-inc-3")
const guestInc1 = document.getElementById("guest-inc-1")
const guestInc2 = document.getElementById("guest-inc-2")
const guestInc3 = document.getElementById("guest-inc-3")
const reset = document.getElementById("reset")
let homeScore = 0
let guestScore = 0


homeInc1.addEventListener("click",function(){
    homeScore += 1
    homeEl.textContent = homeScore
})

homeInc2.addEventListener("click",function(){
    homeScore += 2
    homeEl.textContent = homeScore
})

homeInc3.addEventListener("click",function(){
    homeScore += 3
    homeEl.textContent = homeScore
})

guestInc1.addEventListener("click",function(){
    guestScore += 1
    guestEl.textContent = guestScore
})

guestInc2.addEventListener("click",function(){
    guestScore += 2
    guestEl.textContent = guestScore
})

guestInc3.addEventListener("click",function(){
    guestScore += 3
    guestEl.textContent = guestScore
})

reset.addEventListener("click",function() {
    homeScore = 0
    guestScore = 0
    guestEl.textContent = 0
    homeEl.textContent = 0
})