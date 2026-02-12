// Target the html elements
const eventForm = document.getElementById("eventForm")
const eventTitle = document.getElementById("eventTitle")
const eventDate = document.getElementById("eventDate")
const eventCategory = document.getElementById("eventCategory")
const eventDescription = document.getElementById("eventDescription")
const clearAllBtn = document.getElementById("clearAllBtn")
const addSampleBtn = document.getElementById("addSampleBtn")
const eventContainer = document.getElementById("eventContainer")
const demoContent = document.getElementById("demoContent")

// Take two sample events for add sample events data.
let sampleEvent =
    [
        {
            title: "Web Dev",
            date: "04-06-2026",
            category: "Workshop",
            description: "This is a Web Dev workshop"
        },
        {
            title: "DSA",
            date: "23-08-2026",
            category: "Meeting",
            description: "This is a DSA Meeting"
        }
    ]
    
    addSampleBtn.addEventListener("click",()=>{
        sampleEvent.forEach(addEvent)
    })

// Create event Card which contains user's data and store it inside a div.
function createEventCard(eventData){
    const card = document.createElement("div");
    // To add a class dynamically
    card.classList.add("event-card");

    card.innerHTML=`
    <h3>${eventData.title}</h3>
    <div>${eventData.date}</div>
    <span>${eventData.category}</span>
    <p>${eventData.description}</p>
    <button class=delete-btn>X</button >
    `

    //return the card for addevent function
    return card;
}

// Add the  created  event and append inside the event  container
function addEvent(eventData) {
    //if empty-state is present the remove it when new card will be added.
    const emptyState = eventContainer.querySelector(".empty-state");
    if(emptyState) emptyState.remove();

    eventContainer.appendChild(createEventCard(eventData));
}

// Form handling using submit event
eventForm.addEventListener("submit", (event) => {
    event.preventDefault()

    //eventData stores the user given value
    const eventData =
    {
        title: eventTitle.value,
        date: eventDate.value,
        category: eventCategory.value,
        description: eventDescription.value
    }
    addEvent(eventData);
})

eventContainer.addEventListener("click",(event)=>{
    const card = event.target.closest(".event-card");

    if (event.target.classList.contains("delete-btn")){
        card.remove();
    }
    if (!eventContainer.querySelector(".event-card")){
        eventContainer.innerHTML=`
        <div class="empty-state>No events yet. Add your first event!</div> 
        `;
    }
});

clearAllBtn.addEventListener("click",()=>{
    eventContainer.innerHTML=`
    <div class=empty-state>No events yet. Add your first event!</div> 
    `
});