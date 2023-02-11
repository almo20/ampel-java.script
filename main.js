
function main(){
    var input = document.getElementById("colorStreetLights")
    var color = input.value;
    var lowerColorName = color.toLowerCase();

    if (lowerColorName == "green"){
        alert("You can drive!")
    }else if(lowerColorName == "yellow"){
        alert("You can drive or stop!")
    }else if(lowerColorName == "red"){
        alert("Stop!")
    }else{
        alert("The color is wrong!")
    }
}