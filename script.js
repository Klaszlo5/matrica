window.addEventListener("load", init);

const lista = [kocka,kocka,kocka,kocka,kocak]

function init(){
   let txt=""
   for(let index=0;index<lista.length; index++)
   {
        txt+=`<div><img src="${elem}" id="${index}"></div>`
   }
   lista.append=txt;
   const jquery=document.querySelectorAll("#lista div img");
   console.log(jquery);
   jquery.forEach(function(elem){
    elem.addEventListener("click", kockas);
   })
}


function kockas(){
    const hatter="kep/es.jpg";
    console.log(event.target.id);
    let jelenlegi=event.target.id;
    event.target.src=kepTomb[jelenlegi];
    allelemen.push(jelenlegi);
    console.log(allelemen);
    event.target.off("click",kockas);
    if (allelemen.length===2){
        const tomb=document.$("#kep div img");
        tomb.forEach(function(elem){
            elem.off("click", kockas);
        });

        let feltetel=kepTomb[allelemen[0]]===kepTomb[allelemen[1]];
        console.log(feltetel);
        if(!feltetel){
            setTimeout(function(){

                allelemen.forEach(function(elem){
                    document.$(elem).src=hatter;
                })
                allelemen.splice(0);
                },1000);
                tomb.forEach(function(elem){
                    elem.on("click", kockas);
                });
            }
        }
        else{
        
            allelemen.forEach(function(elem){
            document.$(elem).dispay="none";
        })
        allelemen.splice(0);
        tomb.forEach(function(elem){
            elem.on("click", kockas);
        });
    }
}