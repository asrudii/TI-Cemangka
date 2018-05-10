$(document).ready(function(){
    $('.menu-icon').click(function(){
        $('.menu-icon').toggleClass('active');
        $('.sidebar').toggleClass('active');
    })


    $('.member-list-choose li:nth-child(1)').click(function(){
        $('#Photography').animate({'margin-left': '0px'}, 800);
    })

    $('.member-list-choose li:nth-child(2)').click(function(){
        $('#Photography').animate({'margin-left': '-1140px'}, 800);
    })

    $('.member-list-choose li:nth-child(3)').click(function(){
        $('#Photography').animate({'margin-left': '-2280px'}, 800);
    })

    $('.member-list-choose li:nth-child(4)').click(function(){
        $('#Photography').animate({'margin-left': '-3420px'}, 800);
    })
            
})