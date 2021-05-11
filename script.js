moreCards = () => {
    
    for(let i = 0; i <= 3; i++){
        const container = document.createElement("div");
        container.setAttribute("class", "col-md-3 d-flex align-self-stretch");
        const card = document.createElement("div");
        card.setAttribute("class", "card mb-4  shadow-sm");
        const image = document.createElement("img");
        image.setAttribute("class", "card-img-top cardImagePosition");
        image.setAttribute("data-src", "assets/assessment_image.jpg");
        image.setAttribute("src", "assets/assessment_image.jpg");
        image.setAttribute("data-holder-rendered", "true");
        const cardBody = document.createElement("div");
        cardBody.setAttribute("class", "text-center");
        const cardTitle = document.createElement("p");
        cardTitle.setAttribute("class", "cardType pt-3");
        const titleText = document.createTextNode("Article");
        const cardTitleUnderline = document.createElement("div");
        cardTitleUnderline.setAttribute("class", "d-flex justify-content-center pt-1");
        const underline = document.createElement("div");
        underline.setAttribute("class", "underline green py-1");
        const cardTextContainer = document.createElement("div");
        cardTextContainer.setAttribute("class", "d-flex justify-content-center my-3");
        const cardText = document.createElement("p");
        cardText.setAttribute("class", "card-text cardTitle p-3");
        const text = document.createTextNode("Community Story, Foodtrucks that Love Cheese");

        cardText.appendChild(text);
        cardTextContainer.appendChild(cardText);
        cardTitleUnderline.appendChild(underline);
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardTitleUnderline);
        cardBody.appendChild(cardTextContainer);
        cardTitle.appendChild(titleText);
        container.appendChild(card);
        card.appendChild(image);
        card.appendChild(cardBody);
        const append = document.getElementById("cardAddition");
        append.appendChild(container);
    }
}