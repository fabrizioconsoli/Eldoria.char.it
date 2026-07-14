
let statistiche={};



function dado(){

return Math.floor(Math.random()*6)+1;

}



function tiraDadi(){

let dadi=[
dado(),
dado(),
dado(),
dado()
];

dadi.sort();

dadi.shift();

return dadi.reduce((a,b)=>a+b);

}



function generaStatistiche(){


let nomi=[

"Forza",
"Destrezza",
"Costituzione",
"Intelligenza",
"Saggezza",
"Carisma"

];


let html="";


nomi.forEach(n=>{

statistiche[n]=tiraDadi();


html+=`

<div class="stat">

<span>${n}</span>

<b>${statistiche[n]}</b>

</div>

`;

});


document.getElementById("stats").innerHTML=html;


}




function creaScheda(){


let personaggio={

nome:
document.getElementById("nome").value,

razza:
document.getElementById("razza").value,

classe:
document.getElementById("classe").value,

background:
document.getElementById("background").value,

stats:
statistiche,

storia:
document.getElementById("storia").value

};



localStorage.setItem(
"EroeEldoria",
JSON.stringify(personaggio)
);



document.getElementById("output").innerHTML=

`

<h2>${personaggio.nome}</h2>

<h3>${personaggio.razza}
 ${personaggio.classe}</h3>


<p>
<strong>Origine:</strong>
${personaggio.background}
</p>


<hr>


<h3>Statistiche</h3>

${Object.entries(personaggio.stats)
.map(
x=>`${x[0]} : ${x[1]}`
)
.join("<br>")}



<hr>


<p>
${personaggio.storia}
</p>


<p>
✨ Questo eroe è stato scelto dalla Luce Spezzata.
</p>

`;

}
