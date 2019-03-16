CKEDITOR.dialog.add( 'MatimageDialog', function( editor ) {
    return {
        title: 'Добавить картинку',
        minWidth: 400,
        minHeight: 200,
        contents: [
            {
                id: 'tab-basic',
                label: 'Добавить картинку',
                elements: [
                    {
                        type: 'text',
                        id: 'url',
                        label: 'Сcылка на картинку',
                        validate: CKEDITOR.dialog.validate.notEmpty("Заполните поле ссылки")
                    },
                    {
                        type: 'radio',
                        id: 'size',
                        label: 'Размер изображения',
                        items: [ [ 'Маленький', 'small' ], [ 'Средний', 'medium' ], [ 'Большой', 'large' ] ],
                        style: 'color: green',
                        'default': 'medium',
                    },
                    {
                        type: 'radio',
                        id: 'align',
                        label: 'Выравнивание изображения',
                        items: [ [ 'Слева', 'left' ], [ 'По середине', 'center' ], [ 'Справа', 'right' ] ],
                        style: 'color: green',
                        'default': 'center',
                    }

                ]
            },

        ],
        onOk: function() {
            var dialog = this;

            var img = editor.document.createElement( 'img' );
            //img.addClass('responsive-img');
            img.setAttribute('src', dialog.getValueOf('tab-basic', 'url'));

            var size = dialog.getValueOf('tab-basic', 'size');
            size = size === 'large' ? '100%' : size;
            size = size === 'small' ? '25%' : '50%';

            img.setAttribute('style', 'width:' + size + ';height:auto;padding 5px;');
            img.addClass(dialog.getValueOf('tab-basic', 'align'));
            img.addClass('materialboxed');

            var block = editor.document.createElement( 'div' );

            block.addClass('image');
            block.addClass(dialog.getValueOf('tab-basic', 'size'));
            block.addClass(dialog.getValueOf('tab-basic', 'align'));
            block.append(img);
            editor.insertElement( img );
        }
    };
});