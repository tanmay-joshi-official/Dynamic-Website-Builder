console.log("Script is working...")
function create_card(title, channel_name, views, months_old, duration, thumbnail){
    if(views>=1000 && views<1000000){
        views = (views/1000) + "K"
    }    
    else if(views>=1000000){
        views = (views/1000000) + "M"
    }
    let html = `<div class="container">
        <div class="card">
            <div class="image">
                <img src=${thumbnail} alt="Thumbnail">
                <div class="duration">${duration}</div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${channel_name} . ${views} views . ${months_old} months old</p>
            </div>
        </div>
    </div>`
    document.querySelector(".container").innerHTML += html
}

create_card("Dynamic Website Builder | Sigma Web Dev video #73",
"CodeWithHarry", 560000, 7, "31:20", "https://i.ytimg.com/vi/KtL-SQ20Q0s/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLDPqs5LtUVsb50otOywVTZEmI75fg")