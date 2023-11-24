function submission () {
    var result=document.getElementById('email').value;
    document.write(result);
    var result1=document.getElementById('password').value;
    document.write(result1);
}
function expand() {
    var detail="water,sugar,vinegar,tomato paste, garlic and red chilli(10%),salt,mixed spcies,stabilizers(Xanthan Gum, Carboxymethyl Cellulose),Peservatives(Sodium Benzoate, Sodium Metabisulphite),Antioxidant(Calcium Disodium EDTA)";

    document.getElementById("ingredients").innerHTML=detail;

}
function deletion1() {
    document.getElementById('a1').className="vision";
}
function deletion2() {
    document.getElementById('a2').className="vision";
}
function deletion3() {
    document.getElementById('a3').className="vision";
}
function edition1 () {
    document.getElementById('edit1').value=prompt("enter name:");
}
