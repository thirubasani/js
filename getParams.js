 
        $("#getValue").click(function(){   
        var hostname = window.location.hostname;
        var params = new URL(location.href).searchParams;
        var state = params.get("User[state]");
        var city = params.get("User[city]");
        alert("State::"+ state + "-- City::"+ city);
        });
