const relevantSpan = document.querySelectorAll(".relevant-span");
const notificationContainer = document.querySelectorAll(".notification-container");
const allReadButton = document.querySelector(".main__header-button");
const unreadDot = document.querySelectorAll(".unread-dot");
const unreadCounterSpan = document.querySelector(".unread-counter");
let readCounter = document.querySelectorAll(".notification-container-visited").length;
let unreadCounter = notificationContainer.length - readCounter;
unreadCounterSpan.textContent = `${unreadCounter}`;

relevantSpan.forEach(span=>{
    span.addEventListener("click", ()=>{
        span.classList.add("relevant-span-visited");
    })
})

allReadButton.addEventListener("click", ()=>{
    notificationContainer.forEach((container, index)=>{
        addVisitedClass(container, index, unreadDot);
    })
    updateCounter(readCounter, unreadCounter, unreadCounterSpan);
})

notificationContainer.forEach((container, index)=>{
    container.addEventListener("click", ()=>{
        addVisitedClass(container, index, unreadDot);
        updateCounter(readCounter, unreadCounter, unreadCounterSpan);
    })
})

function addVisitedClass(container, index, unreadDot) {
    container.classList.add("notification-container-visited");
    unreadDot[index].classList.add("unread-dot-visited");
}

function updateCounter(read, unread, span){
    read = document.querySelectorAll(".notification-container-visited").length;
    unread = notificationContainer.length - read;
    span.textContent = `${unread}`;
}