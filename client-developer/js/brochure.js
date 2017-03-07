/**
 * Toggles active content in the service-brochure element.
 * @param {*} handler
 * @param {*} event - Single left mouse click event
 */

var onBrochureItemClicked = function(handler, event) {
    var defaultListItemStyling = "brochure-select left";
    var defaultImageDisplay = "brochure-display hidden";

    var activeListItemStyling = "brochure-select left brochure-list-item-active";
    var activeImageDisplay = "brochure-display active";

    var imageContainer = document.getElementById("service-brochure");
    var images = imageContainer.getElementsByClassName("brochure-display");

    if(handler.children.length !== images.length)
    {
        console.error("The number of display images must match the number of sections");
        return;
    }

    // If the event target is a div grab it's parent <li> element.
    var brochureItem = (event.target.tagName === "DIV") ? event.target.parentElement : event.target;
    var indexOfSelectedItem = 0;

    // Go through each of the li elements in the list
    // and reset their class attributes.
    for(var i = 0; i < handler.children.length; i++) {
        if(handler.children[i] === brochureItem)
        {
            indexOfSelectedItem = i;
        }
        handler.children[i].className = defaultListItemStyling;
        images[i].className = defaultImageDisplay;
    }

    // Apply active styling to both the li element
    // and display its corresponding image.
    brochureItem.className = activeListItemStyling;
    images[indexOfSelectedItem].className = activeImageDisplay;
}