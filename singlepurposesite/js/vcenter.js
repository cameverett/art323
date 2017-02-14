var textblocks = document.getElementsByClassName('inset');
var sectionHeight = 480;
for(var i = 0; i < textblocks.length; i++) {
    var offset = (sectionHeight - textblocks.item(i).clientHeight) / 2;
    textblocks.item(i).setAttribute("style", "margin-top: " + offset + "px;");
}
