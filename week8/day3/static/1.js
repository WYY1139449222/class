var btn = document.getElementById('btn');
btn.onclick = function(){
    let h1 = document.getElementsByTagName('h1')[0];
    h1.style.background = 'blue';
    fetch('http://localhost:8000/add',{
        method:'post',
        credentials:'include',
        body:JSON.stringify({a:[100,200,300]})
    }).then(data=>data.json()).then(data=>{
        console.log(data);
    })
}