var express = require('express');
var morgan = require('morgan');
var path = require('path');

var articles={
    'article-one':{
        title:'Article One|Akshun',
        heading:'Article One',
        date:'Feb 16, 2017',
        content:`<p>
                    This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article.
                </p>
                <p>
                    This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article.
                </p>
                <p>
                    This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article.
                </p>`
    },
    'article-two':{
        title:'Article Two|Akshun',
        heading:'Article Two',
        date:'Feb 16, 2017',
        content:`<p>
                    This is the content for my second article. This is the content for my second article. This is the content for my second article. This is the content for my second article.
                </p>
                <p>
                    This is the content for my second article. This is the content for my second article. This is the content for my second article. This is the content for my second article. This is the content for my second article. This is the content for my second article. This is the content for my second article.
                </p>
                <p>
                    This is the content for my second article. This is the content for my second article. This is the content for my second article. This is the content for my second article. This is the content for my second article.
                </p>`
    },
    'article-three':{
        title:'Article Three|Akshun',
        heading:'Article Three',
        date:'Feb 16, 2017',
        content:'This is the content for my third article.'
    }
};

function createTemplate(data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
    
    var htmlTemplate=`
        <html>
        <head>
            <title>${title}</title>
            <meta name="viewport" content="width=devide-width, initial-scale=1" />
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="container">
                <div>
                    <a href ="/">Home</a>
                </div>
                <hr>
                <h3>
                    ${heading}
                </h3>
                <div>
                    ${date}
                </div>
                <div>
                    ${content}
                </div>
            </div>
        </body>
        </html>
    `;
    
    return htmlTemplate;
}

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter=0;
app.get('/counter',function(req,res){
    counter+=1;
    res.send(counter.toString());
})

var names=[];
app.get('/submit-name/:name',function(req,res){
    var name=req.params.name;
//app.get('/submit-name',function(req,res){
  //  var name=req.query.name;
    names.push(name);
    //JSON:javascript object notation
    res.send(JSON.stringify(names));
})

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/:articleName',function(req,res){
    var articleName=req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
