function readURL(input) {
    if (input.files && input.files[0]) {

        var reader = new FileReader();

        reader.onload = function (e) {
            $('.border-container').hide();

            $('.file-upload-image').attr('src', e.target.result);
            $('.file-upload-content').show();

            $('.image-title').html(input.files[0].name);
        };

        reader.readAsDataURL(input.files[0]);

    } else {
        removeUpload();
    }
}

function removeUpload() {
    $('.file-upload.m').replaceWith($('.file-upload.m').clone());
    $('.file-upload.s0').replaceWith($('.file-upload.s0').clone());
    $('.file-upload.s1').replaceWith($('.file-upload.s1').clone());
    $('.file-upload.s2').replaceWith($('.file-upload.s2').clone());
    $('.file-upload.s3').replaceWith($('.file-upload.s3').clone());
    
    $('.file-upload-content').hide();
    $('.border-container').show();
}
$('border-container').bind('dragover', function () {
    $('.border-container').addClass('image-dropping');
});
$('.border-container').bind('dragleave', function () {
    $('.border-container').removeClass('image-dropping');
});