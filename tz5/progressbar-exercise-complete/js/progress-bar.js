let progressBar = $("#myProgressBar");
let progressWidth = $(".progress").width();
let currentProgressBarWidth = 0;




$("#plusOne").click((function(){
    currentProgressBarWidth += progressWidth*0.01;
    progressBar.width(currentProgressBarWidth + progressWidth*0.01);
}));
$("#plusThree").click((function(){
    currentProgressBarWidth += progressWidth*0.03;
    progressBar.width(currentProgressBarWidth + progressWidth*0.03);
}));
$('#plusSeven').click((function(){
    currentProgressBarWidth += currentProgressBarWidth + progressWidth*0.07;
    progressBar.width(currentProgressBarWidth + progressWidth*0.07);
}));