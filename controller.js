let curr_section = 0;
const MAX_SECTION = 2;
//let curr_height = 0;

const sections = ["start", "experience", "education"];

$(document).on('click', '.next-viewport-down', function(event) {
    event.preventDefault();

    let section_index = getClosestDown();
    $('.scroll-elem')[section_index].scrollIntoView();

});

$(document).on('click', '.next-viewport-up', function(event) {
    event.preventDefault();

    let section_index = getClosestUp();
    $('.scroll-elem')[curr_section].scrollIntoView();
});

let getClosestDown = function() {
    var scrollPos = $(document).scrollTop();
    let lowest = 100000000;
    let closest = 2;
    $('.scroll-elem').each(function(i) {
        let elementOffset = $(this).offset().top;
        let distance = elementOffset - scrollPos;
        if (distance != 0 && distance > 0 && distance < lowest) {
            lowest = distance;
            closest = i;
        }
    });
    curr_section = closest;
    return curr_section;
}

let getClosestUp = function() {
    var scrollPos = $(document).scrollTop();
    let lowest = 100000000;
    let closest = 0;
    $('.scroll-elem').each(function(i) {
        let elementOffset = $(this).offset().top;
        let distance = scrollPos - elementOffset;
        if (distance != 0 && distance > 0 && distance < lowest) {
            lowest = distance;
            closest = i;
        }
    });
    curr_section = closest;
    return curr_section;
}