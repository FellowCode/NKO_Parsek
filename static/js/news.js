$(document).ready(function(){
    $('.materialboxed').materialbox();

    $('.body .material-placeholder').each(function (index) {
        var img_block = $(this);
        var img = img_block.children().first();
        if (!img.hasClass("float") || img.hasClass("i-center"))
            img_block.wrap("<div class='image-inline'></div>");
        img_block.addClass(img.attr('class'));
        img_block.removeClass('materialboxed');
    });
});