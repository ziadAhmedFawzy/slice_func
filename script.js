// funct to slice

let cut = (string , start , end) => {
    let result = ""
    for(let i = start; i <= end; i++)
    {
        result = result + string[i];
    }
    return result;
};

console.log(cut('ziad ahmed fawzy love js' , 5 , 9));

let btn = document.getElementById('go');

btn.onclick = function() {
    window.location.href = "https://ziadahmedfawzy.github.io/splite_func/";
}