CKEDITOR.dialog.add( 'MatimageDialog', function( editor ) {
    return {
        title: 'Добавить картинку',
        minWidth: 400,
        minHeight: 200,
        onShow: function() {
            this.editMode = false;
            var editor = this.getParentEditor(),
                sel = editor.getSelection(),
                element = sel && sel.getSelectedElement();
            if (element && element.getName() == 'img') {
                this.imageElement = element;
                this.editMode = true;
                this.setupContent(this.imageElement);
                this.getElement().getFirst().find('.cke_dialog_title').getItem(0).setText('Редактировать картинку')
                //this.setLabel('Редактировать картинку');
            }
            else
            {
                this.getElement().getFirst().find('.cke_dialog_title').getItem(0).setText('Добавить картинку')
            }
        },
        contents: [
            {
                id: 'tab-basic',
                label: 'Добавить картинку',
                elements: [
                    {
                        type: 'hbox',
                        widths: ['75%', '25%'],
                        children: [
                            {
                                type: 'text',
                                id: 'url',
                                label: 'Сcылка на картинку',
                                width: '100%',
                                validate: CKEDITOR.dialog.validate.notEmpty("Заполните поле ссылки"),
                                setup: function(element) {
                                    this.setValue( element.getAttribute( 'src' ) );
                                },
                            },
                            {
                                type: 'button',
                                id: 'browse',
                                className: 'cke_dialog_image_browse',
                                filebrowser: {
                                    action: 'Browse',
                                    target: 'tab-basic:url',
                                    url: editor.config.filebrowserImageBrowseLinkUrl
                                },
                                width: '100%',
                                style: 'display:inline-block;margin-top:20px;',
                                hidden: true,
                                label: editor.lang.common.browseServer
                            },
                        ]
                    },
                    {
                        type: 'radio',
                        id: 'size',
                        label: 'Размер изображения',
                        items: [ [ 'Маленький', 'small' ], [ 'Средний', 'medium' ], [ 'Большой', 'large' ] ],
                        style: 'color: green',
                        'default': 'medium',
                        setup: function (element) {
                            var classes = element.getAttribute('class');
                            var i = classes.indexOf('img-');
                            var size = classes.slice(i);
                            i = size.indexOf(' ');
                            if (i === -1)
                                size = size.slice(4);
                            else
                                size = size.slice(4, i);
                            this.setValue(size)
                        }
                    },
                    {
                        type: 'radio',
                        id: 'align',
                        label: 'Выравнивание изображения',
                        items: [ [ 'Слева', 'left' ], [ 'По середине', 'center' ], [ 'Справа', 'right' ] ],
                        style: 'color: green',
                        'default': 'center',
                        setup: function (element) {
                            var classes = element.getAttribute('class');
                            var i = classes.indexOf('i-');
                            var align = classes.slice(i);
                            i = align.indexOf(' ');
                            if (i === -1)
                                align = align.slice(2);
                            else
                                align = align.slice(2, i);
                            console.log(align);
                            this.setValue(align)
                        }
                    },
                    {
                        type: 'checkbox',
                        id: 'float',
                        label: 'Обтекание текстом',
                        setup: function (element) {
                            var classes = element.getAttribute('class');
                            var i = classes.indexOf('float');
                            if (i !== -1)
                                this.setValue('checked');
                        }
                    }
                ]
            },
            {
                id: 'Upload',
                hidden: true,
                filebrowser: 'uploadButton',
                label: editor.lang.image.upload,
                elements: [ {
                    type: 'file',
                    id: 'upload',
                    label: editor.lang.image.btnUpload,
                    style: 'height:40px',
                    size: 38
                },
                {
                    type: 'fileButton',
                    id: 'uploadButton',
                    filebrowser: 'tab-basic:url',
                    label: editor.lang.image.btnUpload,
                    'for': [ 'Upload', 'upload' ]
                } ]
            },

        ],
        onOk: function() {
            var dialog = this;

            var img = editor.document.createElement( 'img' );
            //img.addClass('responsive-img');
            img.setAttribute('src', dialog.getValueOf('tab-basic', 'url'));


            img.addClass('i-'+dialog.getValueOf('tab-basic', 'align'));
            if (dialog.getValueOf('tab-basic', 'float'))
                img.addClass('float');
            img.addClass('img-'+dialog.getValueOf('tab-basic', 'size'));
            img.addClass('materialboxed');

            editor.insertElement( img );
        }
    };
});