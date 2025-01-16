// Set background color for the page to normal (it will be default)
document.body.style.backgroundColor ="darkblue"; // White background for the page

// Create container div for 2x2 grid layout
let container = document.createElement("div");
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.justifyContent = "space-around";
container.style.alignItems = "center";
container.style.padding = "20px";
container.style.height = "auto"; // No fixed height
container.style.backgroundColor = "darkblue"; // Teal background for the project boxes container
container.style.margin = "0 auto"; // Centering the container
document.body.appendChild(container);

// Data for boxes (titles, images, content, and links)
const boxData = [
    {
        title: "Blockchain for Farm-to-Fork Traceability",
        image: "https://images-provider.frontiersin.org/api/ipx/w=1200&f=png/https://www.frontiersin.org/files/Articles/1294829/fsufs-07-1294829-HTML/image_m/fsufs-07-1294829-g001.jpg",
        content: "Blockchain ensures every step of the agricultural supply chain is securely recorded, providing end-to-end traceability from farms to consumers.",
        link: "https://tracextech.com/blockchain-for-food-traceability/"
    },
    {
        title: "Web_development_website",
        image: "https://png.pngtree.com/png-clipart/20201208/original/pngtree-computer-web-development-website-web-design-png-image_5502279.jpg",
        content: "In today’s digital era, a well-designed and responsive website is essential for success. Our team of expert web developers is dedicated to creating custom websites tailored to your needs, offering high-quality services from concept to deployment. We specialize in front-end and back-end development, ensuring that your website is not only aesthetically pleasing but also optimized for performance, security, and user experience.",
        link: "https://madhari-tarunsai.github.io/webwave_inovation/"
    },
    {
        title: "Stylish_Men's Ware website",
        image: "https://images01.nicepagecdn.com/page/10/99/website-template-preview-109962.jpg",
        content: "Stylish men's wear is a reflection of both personal taste and contemporary fashion trends, blending classic elements with modern influences to create versatile and sophisticated looks. Whether you're dressing for a formal event, casual outing, or a professional setting, stylish menswear offers a wide range of options to suit every occasion.",
        link: "https://madhari-tarunsai.github.io/stylish_men-s_wear_min_project/"
    },
    {
        title: "Tourist place website",
        image: "https://www.bestbus.in/assets/images/news-cms/hyderabad_tourist_places_near_airport.jpeg",
        content: "Tourist places are locations that attract visitors due to their natural beauty, historical significance, cultural richness, or recreational value. These places provide an opportunity for people to explore new environments, experience different cultures, and participate in various leisure activities. Tourist destinations can range from serene natural wonders such as mountains, beaches, and forests, to vibrant cities with iconic landmarks, historical sites, museums, and entertainment hubs. These places often cater to a wide range of interests, including adventure tourism, eco-tourism, historical tourism, and cultural experiences.",
        link: "https://madhari-tarunsai.github.io/tourist_place/"
    }
];

// Function to create a styled box
function createBox(data) {
    let box = document.createElement("div");
    box.style.height = "auto";
    box.style.width = "35%";
    box.style.border = "0.2px solid black";
    box.style.backgroundColor = "lightgreen";
    box.style.textAlign = "center";
    box.style.fontSize = "18px";
    box.style.padding = "15px";
    box.style.marginBottom = "20px";
    box.style.boxSizing = "border-box";
    box.style.display = "flex";
    box.style.flexDirection = "column";
    box.style.justifyContent = "center";
    box.style.alignItems = "center";
    box.style.transition = "transform 0.3s, background-color 0.3s";  // Add smooth transition for hover

    // Hover effect on box
    box.addEventListener("mouseenter", function () {
        box.style.transform = "scale(1.05)";  // Slightly enlarge the box
        box.style.backgroundColor = "#f0f8ff";  // Change background color on hover
        box.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.2)";  // Add a stronger shadow effect
    });

    box.addEventListener("mouseleave", function () {
        box.style.transform = "scale(1)";  // Return to normal size
        box.style.backgroundColor = "lightgreen";  // Revert background color
        box.style.boxShadow = "none";  // Remove the shadow effect
    });

    // Title
    let title = document.createElement("div");
    title.innerHTML = data.title;
    title.style.marginBottom = "15px";
    title.style.fontWeight = "bold";
    title.style.textAlign = "center";
    box.appendChild(title);

    // Image
    let image = document.createElement("img");
    image.setAttribute("src", data.image);
    image.style.height = "30vh";
    image.style.width = "100%";
    image.style.borderRadius = "20px";
    image.style.objectFit = "cover";
    image.style.marginBottom = "15px";
    box.appendChild(image);

    // Content paragraph (truncated initially)
    let cont = document.createElement("p");
    cont.innerHTML = data.content.substring(0, 100) + "...";
    cont.style.textAlign = "justify";
    cont.style.lineHeight = "1.4";
    cont.style.fontSize = "14px";
    cont.style.marginBottom = "10px";
    box.appendChild(cont);

    // Read More button
    let button = document.createElement("button");
    button.innerHTML = "website";
    button.style.padding = "8px 12px";
    button.style.fontSize = "14px";
    button.style.cursor = "pointer";
    button.style.border = "none";
    button.style.borderRadius = "5px";
    button.style.backgroundColor = "#3498db";
    button.style.color = "white";

    // Redirect to another page on button click
    button.addEventListener("click", function () {
        window.location.href = data.link; // Redirect to the corresponding page
    });

    box.appendChild(button);

    return box;
}

// Append 4 boxes to the container with different content
boxData.forEach(data => {
    container.appendChild(createBox(data));
});






