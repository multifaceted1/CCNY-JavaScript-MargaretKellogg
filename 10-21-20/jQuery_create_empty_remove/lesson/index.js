var newSpan = $("<span>")
newSpan.text("I have been added to the div");
$(".create-elements-in-here").append(newSpan);

$(".empty-this-div").empty();
var anotherNewSpan = $("<span>");
anotherNewSpan.text("I have re-added to this div");
$(".empty-this-div").append(anotherNewSpan);

$(".remove-this-dev").remove();
var oneMoreSpan = $("<span>");
oneMoreSpan.text("Can i re-add to a removed div?");
$(".remove-this-dev").append(anotherNewSpan);
