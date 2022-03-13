function getNews(country,category){
    document.getElementById('news').innerHTML='';

fetch("https://newsapi.org/v2/top-headlines?country="+country+"&category="+category+"&apiKey=504081c1d2a04d7b80d96cd8bd20cd31")

.then((response)=>{
    return response.json();
})
.then((data)=>{
   let news=data.articles;
 if (news.length==0)
 console.log("no data available");
   document.getElementById('news').innerHTML="NO DATA AVAILABLE RIGHT NOW"

   
   

   news.forEach((n,index)=>{

    let newsCard=document.createElement('div');
    newsCard.classList.add('news-card')

    let newsImg=document.createElement('div');
    newsImg.classList.add('news-img');

    let img=document.createElement('img');
    img.setAttribute('src',n.urlToImage);

    newsImg.appendChild(img);

    let newsDetails=document.createElement('div');
    newsDetails.classList.add('details');

    let title=document.createElement('p');
    title.classList.add('title');
    title.append(n.title);

    let author=document.createElement('p');
    author.classList.add('author');
    author.append(n.author)

    let content=document.createElement('p');
    content.classList.add('content')
    content.append(n.description);


    let link=document.createElement('a');
    link.setAttribute('href',n.url);
    link.setAttribute('target','blank');

    let button=document.createElement('button');
    button.classList.add('btn1');
    button.append('Full Article');
    
    link.appendChild(button);
 

    newsDetails.appendChild(title);
    newsDetails.appendChild(author);
    newsDetails.appendChild(content);
    newsDetails.appendChild(link);

    newsCard.appendChild(newsImg);
    newsCard.appendChild(newsDetails);

    document.getElementById('news').appendChild(newsCard);
})
})

.catch((err)=>{
    console.log(err);
})
}
getNews('in','business');


function search(){
    let country=document.getElementById('country').value;
    let category=document.getElementById('category').value;

   getNews(country,category)
    
}