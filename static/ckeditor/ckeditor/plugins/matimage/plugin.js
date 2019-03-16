CKEDITOR.plugins.add( 'matimage', {
    icons: 'matimage',
    init: function( editor ) {
        editor.addCommand( 'insertMatimage', new CKEDITOR.dialogCommand( 'MatimageDialog', { allowedContent: 'img[*]' } ) );
        editor.ui.addButton( 'Matimage', {
            label: 'Вставить изображение',
            command: 'insertMatimage',
            toolbar: 'insert'
        });
        CKEDITOR.dialog.add( 'MatimageDialog', this.path + 'dialogs/matimage.js' );
    }
});