function send_data(articles)
{ 
    for(i = 0;i<articles.length;i++)
    {   if(i%3==0)
        {
            let news = document.getElementById('breaking_news');
            news.innerHTML += '<br><div class = "row "></div>' ;
            create(articles[i]);
            // news.innerHTML += '</div>';
        }
        else
        {
            create(articles[i]);
        }
    }
    add_hover();
}
function create(article)
{
   let a_box = document.createElement('div');
   a_box.setAttribute('class','col-lg-4 ml-5 mr-5 columns');
   let rows = document.getElementsByClassName('row');
   rows[(rows.length -1)].appendChild(a_box);
   let columns = document.getElementsByClassName('columns');
   let timestamp =new Date( article['publishedAt'])
   let year = timestamp.getFullYear();
   let month = timestamp.getMonth();
   Date.shortMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
   function short_months(month)
      { 
        return Date.shortMonths[month]; 
      }
   month = short_months(month)
   let day = timestamp.getDate();
   let author = article['author'];
   let title = article['title'];
   let art_link = article['url'];
   let img_link = article['urlToImage'];
   if(article['content'] != null)
   {
     var content = article['content'];
     content = content.slice(0,content.length -15)+'..';
   }
   else
   {
    var content = article['description']+'...';
   }
   let type = 'content';
   columns[columns.length -1].innerHTML += `
    <div class="post-module">
      <div class="thumbnail">
        <div class="date">
          <div class="day">${day}</div>
          <div class="month">${month}</div>
        </div><img src="${img_link}"/>
      </div>
      <div class="post-content">
        <div class="category">${type}</div>
        <h1 class="title">${title}</h1>
        <p class="description">${content}</p>
        <a target="_blank" href="${art_link}">read more</a>
      </div>
    </div>
  </div>`
 
 
}
function add_hover()
{
  $('.post-module').hover(function() {
    $(this).find('.description').stop().animate({height: "toggle", opacity: "toggle"}, 300);
  });
}