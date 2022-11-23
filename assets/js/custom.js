$(document).ready(function(){
    $( ".floting-icon .floting-icon-item" ).each(function(index) {
        animateDiv($(this));
    });
});

function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateDiv(floting_div){
    var newa = makeNewPosition();
    var olda = floting_div.offset();
    var speed = calcSpeed([olda.top, olda.left], newa);
    
    floting_div.animate({ top: newa[0], left: newa[1] }, speed, function(){
        animateDiv(floting_div);        
    });
};

function calcSpeed(prev, next) {
    
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    
    var greatest = x > y ? x : y;
    
    var speedModifier = 0.1;

    var speed = Math.ceil(greatest/speedModifier);

    return speed;

}