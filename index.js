$(document).ready(function(){
	
	$(window).load(function() {
		$('#content').load( 'content/MenuOpenRails.html');
	});
		
	$('#MenuOpenRails').click(function(){
        $('#content').load( 'content/MenuOpenRails.html' );
    });
	
	$('#MenuLinki').click(function(){
        $('#content').load( 'content/MenuLinki.html' );
    });
	
	$('#MenuElektryczne').click(function(){
        $('#content').post( 'content/DownloadData.html' {elektryczne}, function(type));
    });
	
	$(".menu-trigger").click(function(){
		$('nav').slideToggle();
	});
});
	