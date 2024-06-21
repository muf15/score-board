let homeEl = document.getElementById("home-score")
let guestEl = document.getElementById("guest-score")
let homeScore=0
let guestScore=0

function homeInc1()
{
    homeScore+=1
    homeEl.textContent= homeScore
}

function homeInc2()
{
    homeScore+=2
    homeEl.textContent= homeScore
}

function homeInc3()
{
    homeScore+=3
    homeEl.textContent= homeScore
}

function guestInc1()
{
    guestScore+=1
    guestEl.textContent= guestScore
}

function guestInc2()
{
    guestScore+=2
    guestEl.textContent= guestScore
}

function guestInc3()
{
    guestScore+=3
    guestEl.textContent= guestScore
}

function reset()
{
    homeScore=0
    guestScore=0
    guestEl.textContent= 0
    homeEl.textContent= 0
}