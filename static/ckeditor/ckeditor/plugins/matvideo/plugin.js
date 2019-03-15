CKEDITOR.plugins.add( 'matvideo', {
    icons: 'video',
    init: function( editor ) {
        editor.addCommand( 'video', new CKEDITOR.dialogCommand( 'videoDialog', { allowedContent: 'iframe[*]' } ) );
        editor.ui.addButton( 'Video', {
            label: 'Вставить видео',
            command: 'video',
            toolbar: 'insert'
        });

        CKEDITOR.dialog.add( 'videoDialog', this.path + 'dialogs/video.js' );
    }
});