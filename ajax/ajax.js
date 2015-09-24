$(document).ready(function () {
    //Відправка форм===============================
    $("form").submit(function () {
        if (cor) {
            var form = this;
            var formData = new FormData(form);
            $.ajax({
                url: 'mail/mailer.php',
                data: formData,
                cache: false,
                contentType: false,
                processData: false,
                type: 'POST',
                success: function (data) {
                    if ( data.trim()!='true') {
                        $.fancybox({ href: "#none" });
                    }
                    else {
                        $(this).trigger('reset');
                        $.fancybox({ href: "#spas" });
                    }
                }
            });
        }
        return false;
    });
    //=============================================
});