module.exports = function check(str, bracketsConfig) {

let stos = [];
let napis = str;
let slowniko ='';
let slownikz ='';
let nawiasy = bracketsConfig;
if (napis.length==0){return true;}
if (napis.length%2 ==1){return false;}

for (let licz1=0;licz1<nawiasy.length;licz1++)
  { 
    slowniko=(slowniko+=nawiasy[licz1][0]);
    slownikz=(slownikz+=nawiasy[licz1][1]);
  }

let tempz='aa';
let tempo='bb';
let tempzo=0;
for (i of napis) 
  {
      tempzo=0;
      if (slowniko.indexOf(i)==-1 && slownikz.indexOf(i)==-1){return false;}//sprawdzamy czy element jest dozwolony
      if (slownikz.indexOf(i)!=-1){tempzo=1;} //sprawdzamy czy element jest zamknięciem
      if (slowniko.indexOf(i)!=-1){tempzo=2;}//sprawdzamy czy element jest otwarciem
      if (slowniko.indexOf(i)!=-1 && slownikz.indexOf(i)!=-1){tempzo=3;}  //sprawdzamy czy element jest jednocześnie zamknięciem i otwarciem
    
      switch (tempzo) {
        case 1:
          if (i==tempz)
            {
            stos.pop();
            tempo  = stos[stos.length-1];//ostatni element stosu
            tempz = slownikz.charAt(slowniko.indexOf(tempo));// wyszukanie pary dla tego elementu działa
            }
            else {return false};
          break;
        case 2:
          stos.push(i);          
          tempo  = stos[stos.length-1];//ostatni element stosu
          tempz = slownikz.charAt(slowniko.indexOf(tempo));// wyszukanie pary dla tego elementu działa
          
        break;
        case 3:
          if (i==tempz)
            {
            stos.pop();
            tempo  = stos[stos.length-1];//ostatni element stosu
            tempz = slownikz.charAt(slowniko.indexOf(tempo));// wyszukanie pary dla tego elementu działa
            }
            else{
              stos.push(i);          
              tempo  = stos[stos.length-1];//ostatni element stosu
              tempz = slownikz.charAt(slowniko.indexOf(tempo));// wyszukanie pary dla tego elementu działa
            }
         break;
      }
  }  
return stos.length===0;
}
