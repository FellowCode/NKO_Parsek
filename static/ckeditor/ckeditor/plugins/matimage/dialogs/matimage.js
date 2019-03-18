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
                //this.setLabel('Редактировать картинку');
            }
        },
        contents: [
            {
                id: 'tab-basic',
                label: 'Добавить картинку',
                setup: function(element){
                    this.setLabel('Редактировать картинку')
                },
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
                                    this.get
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
                            var i = classes.indexOf('left');
                            var align = 'left';
                            if (i === -1) {
                                i = classes.indexOf('right');
                                if (i === -1)
                                    align = 'center';
                                else
                                    align = 'right';
                            }
                            this.setValue(align)
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

            var size = dialog.getValueOf('tab-basic', 'size');
            size = size === 'large' ? '100%' : size;
            size = size === 'small' ? '25%' : '50%';

            img.setAttribute('style', 'width:' + size + ';height:auto;padding 5px;');
            img.addClass(dialog.getValueOf('tab-basic', 'align'));
            img.addClass('img-'+dialog.getValueOf('tab-basic', 'size'));
            img.addClass('materialboxed');

            editor.insertElement( img );
        }
    };
});