var button=document.getElementById('counter');

button.onclick= function(){
    // Make a request to the counter endpoint
    var request=new XMLHttpRequest();
    // Capture the response and store it in a variable
    request.onreadystatechange = function(){
        if (request.readyState === XMLHttpRequest.DONE) {
            // everything is good, the response is received
            if (httpRequest.status === 200){
                var counter=request.responseText;
                var span=document.getElementById('count');
                span.innerHTML=counter.toString();
            }
        }
    }
    
    // Make the request
    request.open('GET','http://akshun4.imad.hasura-app.io/counter');
    request.send(null);
}