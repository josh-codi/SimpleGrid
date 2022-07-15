const details = [
    {
        image: "https://media.istockphoto.com/photos/young-woman-wearing-protective-face-mask-and-gloves-while-working-at-picture-id1252668287?b=1&k=20&m=1252668287&s=170667a&w=0&h=hVfOrQbVd2hzXNGUcEYlCwFIPJo_pLbuS5gsoflYjkU=",
        title: "Pre-Pay Crew Incentive",
        description: "For your convenience, crew incentive may be pre-paid up to 2 days prior to your departure."
    },
    {
        image: "https://images.unsplash.com/photo-1515941719567-48bbfc9163f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHRha2UlMjBvZmYlMjBwbGFuZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        title: "Princess EZair",
        description: "Search hassie-free, low price flights to your embarkation port with included benefits like Late Arrival Protection."
    },
    {
        image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFzc2FnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        title: "Onboard Reservations",
        description: "Reserve your preferred spa treatments, save on internet packages and book celebrations packages."
    }
]

const container = document.querySelector(".container");


details.map((val, idx, arr) => {

    const item = document.createElement("div")
        item.classList.add("item");

    let img = document.createElement("aside")
        img.classList.add("img");
    
    let image = document.createElement("img");
        image.setAttribute("src", `${val.image}`)

    let itemDetail = document.createElement("aside")
        itemDetail.classList.add("item-detail");

    let title = document.createElement("h3")
        title.classList.add("title");

    let description = document.createElement("small")
        description.classList.add("description");
    
    img.append(image)
    description.innerHTML = val.description;
    title.innerHTML = val.title;

    itemDetail.append(title);
    itemDetail.append(description);

    item.append(img);
    item.append(itemDetail);

    container.append(item)
})