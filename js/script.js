function openNav() {
    document.getElementById("jipa").style.width = "100%";
}

function closeNav() {
    document.getElementById("jipa").style.width = "0%";
}

function openNavT() {
    document.getElementById("truevalue").style.width = "100%";
}

function closeNavT() {
    document.getElementById("truevalue").style.width = "0%";
}

jQuery('.skillbar').each(function(){
	jQuery(this).find('.skillbar-bar').animate({
		width:jQuery(this).attr('data-percent')
	},2000);
});