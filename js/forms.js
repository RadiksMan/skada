/*-------Обработчик форм---------*/
    var incorrect_name_placeholder = "Укажите ваше имя";
    var incorrect_phone_placeholder = "Укажите ваш телефон";
    var cor = true;
    $("form").submit(function () {
        cor = true;
        var name = $(this).find("input[name='name']");
        var phone = $(this).find("input[name='phone']");
        var result = true;
        if (name.val() != "" && name.val() != incorrect_name_placeholder) {
            name.removeClass('incorrect');
        } else {
            name.addClass('incorrect');
            name.val("Укажите ваше имя");
            cor = false;
            result = false;
        }
        if (phone.val() != "" && phone.val() != incorrect_phone_placeholder) {
            phone.removeClass('incorrect');
        } else {
            phone.addClass('incorrect');
            phone.val(incorrect_phone_placeholder);
            cor = false;
            result = false;
        }
        if (result) { return true; } else { return false; }
    });
    $("input[type='text'],input[type='tel'],input[type='email']").click(function ()
    {
        if ($(this).val() == incorrect_name_placeholder)
        {
            $(this).val("");
        }
        if ($(this).val() == incorrect_phone_placeholder)
        {
            $(this).val("");
        }
        $(this).removeClass('incorrect');
    });
    /*------------------------------*/
