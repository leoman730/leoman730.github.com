var UX = function () {
    this.init = function () {
        this.repositionSurveyNote();
        this.repositionSketch();
        this.resizeVideos();
    }

}; 

UX.prototype.repositionSurveyNote = function() {

    var survey_report = $('#survey_report');
    var survey_note = $('#survey_note');

    survey_note.css({
        top: survey_report.position().top,
        left: survey_report.position().left + survey_report.width()
    });
}

UX.prototype.repositionSketch = function() {

    var report1 = $('#usability_report_1');
    var sketch = $('#sketch');

    sketch.css({
        top: report1.position().top ,
        left: report1.position().left + report1.width()
    });
}

UX.prototype.resizeVideos = function() {
    // Find all YouTube videos
    var $allVideos = $("iframe[src^='http://www.youtube.com']"),

    // The element that is fluid width
    $fluidEl = $(".video");

    // Figure out and save aspect ratio for each video
    $allVideos.each(function() {

        $(this)
        .data('aspectRatio', this.height / this.width)

        // and remove the hard coded width/height
        .removeAttr('height')
        .removeAttr('width');

    });

    var newWidth = $fluidEl.width();

    // Resize all videos according to their own aspect ratio
    $allVideos.each(function() {
        var $el = $(this);
        $el
        .width(newWidth)
        .height(newWidth * $el.data('aspectRatio'));

    });


}

window.ux = new UX();






(function($){

    $(document).ready(function(){
        ux.init();


        $('#wireframe_download').click(function(evt) {
            var url='https://www.evernote.com/shard/s203/res/40873ff3-1209-4750-a66c-75e5cf346a59/wireframe.v2.0.0.pdf';    
            window.open(url,'Download');  
        });

        $('#view_survey').click(function(evt) {
            var url='https://elab.typeform.com/to/BsIYDB';    
            window.open(url,'View Survey');  
        });

        $('#view_report').click(function(evt) {
            var url='https://drive.google.com/file/d/0B5M18kVLJbS-UVEzazdUS1lEVnM/edit?usp=sharing';    
            window.open(url,'View Report');  
        });


        // targeting screen size 1280 * 800
        $(window).resize(function(){
            // reposition survey note            
            ux.repositionSurveyNote();
            ux.repositionSketch();
            ux.resizeVideos();
        });

        // reset content container width and height
        //$('.content_container').width($(window).width());
        //$('.content_container').height($(window).height());
    });


    var repositionSurveyNote = function() {


    };

})(jQuery);
