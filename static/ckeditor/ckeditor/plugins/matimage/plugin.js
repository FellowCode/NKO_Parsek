CKEDITOR.plugins.add( 'matimage', {
    icons: 'matimage',
    init: function( editor ) {
        editor.addCommand( 'insertMatimage', new CKEDITOR.dialogCommand( 'MatimageDialog', { allowedContent: 'img[*]{*}(*)' } ) );
        editor.ui.addButton( 'Matimage', {
            label: 'Вставить изображение',
            command: 'insertMatimage',
            toolbar: 'insert'
        });
        editor.on( 'doubleclick', function( evt ) {
				var element = evt.data.element;

				if ( element.is( 'img' ) && !element.data( 'cke-realelement' ) && !element.isReadOnly() )
					evt.data.dialog = 'MatimageDialog';
        } );
        CKEDITOR.dialog.add( 'MatimageDialog', this.path + 'dialogs/matimage.js' );
    }
});