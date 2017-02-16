var textblocks = document.getElementsByClassName('inset');
var sectionHeight = 480;
for(var i = 0; i < textblocks.length; i++) {
    var offset = (sectionHeight - textblocks[i].clientHeight) / 2;
    textblocks[i].style.marginTop = offset + 'px';
}
