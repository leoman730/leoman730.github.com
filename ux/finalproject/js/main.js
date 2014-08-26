(function($){

	$(document).ready(function(){

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
	});


})(jQuery);
