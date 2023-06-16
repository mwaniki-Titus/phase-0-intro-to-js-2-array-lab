const cats = ["Milo", "Otis","Garfield"];

function destructivelyAppendCat(name){
     cats.push("Ralph");

}
function destructivelyPrependCat(name) {
    cats.unshift(name);
}
function destructivelyRemoveLastCat(name) {
    cats.pop();
    
}
function destructivelyRemoveFirstCat(){
    cats.shift();
    
}
function appendCat(Broom) {
    return[...cats,'Broom'];
    
}
function prependCat(name) {
    const newCats=[name,...cats];
    return newCats;
    
}
function removeLastCat(){ 
return cats.slice(0, -1);
    
}
function removeFirstCat() {
 return cats.slice(1);  
}