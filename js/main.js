window.addEventListener("load", Init);

function Init(){
    console.log("Init");
    var url = "https://newsapi.org/v2/top-headlines?country=ua&category=sports&apiKey=API_KEY";
    Request(urlSport, SportNews);
    var url = "https://newsapi.org/v2/top-headlines?country=ua&category=entertainment&apiKey=API_KEY";
    Request(urlEntertainment, EntertainmentNews);
    var url = "https://newsapi.org/v2/top-headlines?country=ua&category=health&apiKey=API_KEY";
    Request(urlHealth, HealthNews);
    var url = "https://newsapi.org/v2/top-headlines?country=ua&category=science&apiKey=API_KEY";
    Request(urlScience, ScienceNews);
    var url = "https://newsapi.org/v2/top-headlines?country=ua&category=technology&apiKey=API_KEY";
    Request(urlTechnology, TechnologyNews);
}
function Request(url, callback){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.send();
}
xhr.onreadystatechange = function(){
    if (xhr.readyState !=4) return;
    if (xhr.status = !200){
        var errStatus = xhr.status;

    }
}
function SportNews(news){
    console.log(news);
}
function EntertainmentNews(news) {
    console.log(news);
}
function HealthNews(news) {
    console.log(news);
}
function ScienceNews(news) {
    console.log(news);
}
function TechnologyNews(news) {
    console.log(news);
}