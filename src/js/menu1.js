
function initialize(params) {

    if (__DEV__) {
        console.log(params);
    }

    $("#title").html('this is menu1');
}


module.exports = {

    init: initialize
}


