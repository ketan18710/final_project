function search()
{
    var val = $('#search').val();
    localStorage.setItem(search ,val)
    console.log(val)
    window.location.replace('/search.html')
}


