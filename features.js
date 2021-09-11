var images = {
    Larck: 'images/LarckDrakengold.gif',
    Adrien: 'images/adrien-s.jpg',
    Alayne: 'images/alayne-s.jpg',
    Anne: 'images/anne-s.jpg',
    Arry: 'images/arry-s.jpg',
    Jane: 'images/jane-m.jpg',
    Phil: 'images/phil-s.jpg',
    Todd: 'images/todd-s.jpg'
};

function imginst(source){
    /* this is what will create instances of images */
    /* to load the image only once, not a million times and be slow */
    image.src = images[source];
}