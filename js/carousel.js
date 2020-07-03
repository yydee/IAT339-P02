setup = function(){
    $("#indicator-next").click(to_p2)
    $("#car-item1").show()
}
    $(document).ready(setup)

to_p1 = function(){
    $("#car-item2").hide()
    $("#car-item3").hide()
    $("#car-item1").show()
    $('#car-item1').css({'opacity':'0'})
    $('#car-item1').animate({'opacity':'1'}, 500)

    $("#indicator-next").off()
    $("#indicator-next").click(to_p2)
    $('#indicator-pre').off()
    $('#indicator-pre').click(to_p3)
}

to_p2 = function(){
    $("#car-item3").hide()
    $("#car-item1").hide()
    $("#car-item2").show()
    $('#car-item2').css({'opacity':'0'})
    $('#car-item2').animate({'opacity':'1'}, 500)

    $("#indicator-next").off()
    $("#indicator-next").click(to_p3)
    $('#indicator-pre').off()
    $('#indicator-pre').click(to_p2)
}

to_p3 = function(){
    $("#car-item1").hide()
    $("#car-item2").hide()
    $("#car-item3").show()
    $('#car-item3').css({'opacity':'0'})
    $('#car-item3').animate({'opacity':'1'}, 500)

    $("#indicator-next").off()
    $("#indicator-next").click(to_p1)
    $('#indicator-pre').off()
    $('#indicator-pre').click(to_p2)
}