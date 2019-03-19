CKEDITOR.dialog.add( 'videoDialog', function( editor ) {
    return {
        title: 'Добавить видео',
        minWidth: 400,
        minHeight: 120,
        contents: [
            {
                id: 'tab-basic',
                label: 'Добавить видео',
                elements: [
                    {
                        type: 'select',
                        id: 'video-host',
                        label: 'Видеохостинг',
                        items: [['YouTube']],
                        'default': 'YouTube',
                    },
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

            var url = dialog.getValueOf('tab-basic', 'url');
            i = url.indexOf('watch?v=');
            url = url.slice(0, i) + 'embed/' + url.slice(i+8);
            console.log(url);
            var video_frame = editor.document.createElement( 'iframe' );
            video_frame.setAttribute('src', url);
            video_frame.setAttribute('width', '640');
            video_frame.setAttribute('height','480');
            video_frame.setAttribute('frameborder', 0);
            video_frame.setAttribute('allowfullscreen', '');
            video.append(video_frame);
            editor.insertElement( video );
        }
    };
});