$.fn.pivot = function(options) {
    let $target = $(this);
    let $items = $target.children();
    let $container = $target.wrap('<div></div>').parent();
    let option = {
        width: 500,
        height: 450
    };

    $.extend(option, options); // Corrected the variable name "optioin" to "option"

    $target.css({
        width: $items.length * option.width,
        height: option.height,
        position: 'absolute'
    });
    $items.css({
        width: option.width,
        height: option.height,
        float: 'left' // Removed quotes around 'float'
    });

    // No CSS specified for $container

    let originLeft = 0;
    let oldLeft = 0;
    let nowPosition = 0;
    let isDown = false;
    $target.on({
        mousedown: function(event) { // Added event parameter
            isDown = true; // Corrected capitalization of "True" to "true"
            oldLeft = originLeft = event.clientX; // Added "event." before "clientX"
            event.preventDefault();
        },
        mousemove: function(event) { // Added event parameter
            if (isDown) {
                let distance = oldLeft - event.clientX; // Corrected variable name "idstance" to "distance"
                oldLeft = event.clientX;
                $target.css('left', '+=' + distance); // Corrected animate to direct CSS manipulation
            }
            event.preventDefault();
        },
        mouseup: function(event) { // Added event parameter
            isDown = false;
            function movePosition(direction) { // Corrected function name "movePositioni" to "movePosition"
                let changePosition = nowPosition + direction;
                if (changePosition >= 0 && changePosition < $items.length) {
                    nowPosition = changePosition; // Corrected assignment operator
                }
            }
            if (originLeft - event.clientX > option.width / 4) {
                movePosition(+1); // Corrected function call
            } else if (originLeft - event.clientX < -option.width / 4) {
                movePosition(-1); // Corrected function call
            }
            $target.animate({
                left: -nowPosition * option.width
            }, 500);
            isDown = false;
            event.preventDefault();
        }
    });
};
