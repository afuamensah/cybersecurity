$(document).ready(function(){


	var countdown = function() {
		var date = new Date(2021, 11, 4, 11, 0)
		var today = new Date();
		var oneDay = 24*60*60*1000;
		var days = ((date.getTime() - today.getTime()) / oneDay);
		days = Math.ceil(days);

		if(days == 0) {
			$("#days").text("It's here.");
        }
        if (days == 1) {
            $("#countdown").text(days.toString().concat(" "));
            $("#days").text("day left.");
        }
		if (days > 0) {
            $("#countdown").text(days.toString().concat(" "));
            $("#days").text("days left.");
        }
        
	};
	countdown();

	jQuery(function($) {
		$("#rss").rss("http://feeds.feedburner.com/eset/blog",
		{
		  entryTemplate:'<br/><h4><a style="color: #AB0CD0; text-decoration: none;"href="{url}">{title}<br/><span style="font-size: 12px; font-style: italic; color: #000000;">{author}</span></a><br/></h4>'
		})
	  })
	
  });