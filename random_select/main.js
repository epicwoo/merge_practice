$(document).ready(function () {
    $("input").click(function () {
        //alert("um...");
        //$("H1").text("Hello");
        //$("H1").text($("li:first").text());
        //$("H1").text($("li:last").text());
        //$("H1").text($("li").eq(1).text());

        /*var numberOfListItem=$("#choices li").length;
        var randomChildNumber=Math.floor(Math.random()*numberOfListItem);
        console.log(randomChildNumber)
        $("h1").text($("#choices li").eq(randomChildNumber).text());*/

        $("#click").attr("value", "再試一次");

        var numArrayN = [];
        for (i=0; i<38; i++) {
            numArrayN.push(i + 1);
        }
        //console.log(numArrayN);

        var rdmArrayN = [];
        for(x=0; x<6; x++) {
            var rdmNumN = Math.floor(Math.random() * numArrayN.length );
            rdmArrayN.push(numArrayN.splice(rdmNumN,1)[0]);
        }
        //console.log(rdmArrayN);

        var numArrayS = [];
        for (i=0; i<8; i++) {
            numArrayS.push(i + 1);
        }
        //console.log(numArrayS);

        var rdmArrayS = [];
        for(x=0; x<1; x++) {
            var rdmNumS = Math.floor(Math.random() * numArrayS.length );
            rdmArrayS.push(numArrayS.splice(rdmNumS,1)[0]);
        }
        //console.log(rdmArrayS);

        $("h2").text("第一區選號： "+rdmArrayN);
        $("h3").text("第二區選號： "+rdmArrayS);
    });
});