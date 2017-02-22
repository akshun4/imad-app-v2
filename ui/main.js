var button=document.getElementById('counter');

button.onclick= function(){
    
    // Make a request to the counter endpoint
    var request=new XMLHttpRequest();
    
    // Capture the response and store it in a variable
    request.onreadystatechange = function(){
        
        if (request.readyState === XMLHttpRequest.DONE) {
            // everything is good, the response is received
            
            if (request.status === 200){
                var counter=request.responseText;
                var span=document.getElementById('count');
                span.innerHTML=counter.toString();
            }
        }
    };
    
    // Make the request
    request.open('GET','http://akshun4.imad.hasura-app.io/counter');
    request.send(null);
};


var submit=document.getElementById('submit_btn');

submit.onclick = function(){
    var nameInput=document.getElementById('name1');
    var name=nameInput.value;
    // Make a request to the counter endpoint
    var request=new XMLHttpRequest();
    
    // Capture the response and store it in a variable
    request.onreadystatechange = function(){
        
        if (request.readyState === XMLHttpRequest.DONE) {
            // everything is good, the response is received
            
            if (request.status === 200){
                var names=request.responseText;
                names=JSON.parse(names);
                var list='';
                for (var i=0;i<names.length;i++){
                list=list+'<li>'+names[i]+'</li>';
                }
            var ul=document.getElementById('namelist');
            ul.innerHTML=list.toString();
            }
        }};
    // Make the request
    request.open('GET','http://akshun4.imad.hasura-app.io/submit-name/:'+name);
    request.send(null);
    
};
    