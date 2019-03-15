CKEDITOR.dialog.add( 'videoDialog', function( editor ) {
    return {
        title: 'Добавить видео',
        minWidth: 400,
        minHeight: 100,
        contents: [
            {
                id: 'tab-basic',
                label: 'Добавить видео',
                elements: [
                    {
                        type: 'text',
                        id: 'url',
                        label: 'Сcылка на видео',
                        validate: CKEDITOR.dialog.validate.notEmpty("Заполните поле ссылки")
                    },
                ]
            },
        ],
        onOk: function() {
            var dialog = this;

            var video = editor.document.createElement( 'div' );
            video.addClass('video-container');

            var video_frame = editor.document.createElement( 'iframe' );
            video_frame.setAttribute('src', dialog.getValueOf('tab-basic', 'url'));
            video_frame.setAttribute('width', dialog.getValueOf('tab-basic', '640'));
            video_frame.setAttribute('height', dialog.getValueOf('tab-basic', '480'));
            video_frame.setAttribute('frameborder', 0);
            video_frame.setAttribute('allowfullscreen', '');
            video.append(video_frame);
            editor.insertElement( video );
        }
    };
});