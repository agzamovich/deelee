	  //video ends and scrolls automatically to about me
		  $(document).ready(function(){
		    window.addEventListener('load', function() {
		    var video = document.getElementById('jumpfrom');
		    var element = document.getElementById('jumpto');
		    video.onended = function() {
		    //the video ended
		    var scrollDistance = document.body.scrollTop;
		    var elemRect = element.getBoundingClientRect();
		    var elemOffsetViewportDistance = elemRect.top;
		    var totalOffset = scrollDistance + elemOffsetViewportDistance;
		    window.scrollTo(0, totalOffset);
		  };
		});
	});