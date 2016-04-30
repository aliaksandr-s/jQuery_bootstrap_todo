$(function () {

    $('#add').click(addNote);
    $('.marketing').on('click', removeNote);
    $('input[type="text"').on('keypress', handeInput);

    getNotes();

    function getNotes() {
        var notes = window.localStorage.getItem('notesCopy');
        if (notes) {
            var parsed = jQuery.parseJSON(notes);
            $('div.all-notes').replaceWith(parsed);
        }
    };

    function handeInput(e) {
        if (e.keyCode === 13){
            addNote();
        }
    }

    function addNote() {
        var text = $('input[type="text"]').val();
        $('input[type="text"]').val(" ");
        var insertPlace = $('div.marketing').children();
        insertPlace.prepend('<div class="note-wrapper"><p class="note">' + text + '</p><span class="glyphicon glyphicon-remove icon"></span></div>');
        copyNotes();
    }

    function copyNotes() {
        var notesCopy = $('div.all-notes').prop('outerHTML');
        var jsonString = JSON.stringify(notesCopy);
        window.localStorage.setItem('notesCopy', jsonString);
    }

    function removeNote() {
        if ($(event.target).hasClass('icon')) {
            var note = $(event.target).parent("div");
            note.slideUp(150, function () {
                $(this).remove();
                copyNotes();
            });
        }
    }

})
