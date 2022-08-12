function convertirMayus() {
    let texto = document.querySelector("#arraytexto").value;

    document.querySelector("#textosaliente").value = texto.toUpperCase();
}

function convertirMinus() {
    let texto = document.querySelector("#arraytexto").value;

    document.querySelector("#textosaliente").value = texto.toLowerCase();
}

function reemplazar() {
    let texto = document.querySelector("#arraytexto").value;
    let arraynuevo = Array.from(texto);
    document.querySelector("#textosaliente").value = ``
    for (i = 0; i < arraynuevo.length; i++) {

        switch (arraynuevo[i]) {
            case "a":
            case "A":
                arraynuevo.splice(i, 1);
                break;
            case "e":
            case "E":
                arraynuevo.splice(i, 1, "z");
                break;
            case "i":
            case "I":
                arraynuevo.splice(i, 1, arraynuevo[i + 1]);
                break;
            case "o":
            case "O":
                arraynuevo.splice(i, 1);
                break;
            case "u":
            case "U":
                arraynuevo.splice(i, 1, arraynuevo[i - 1]);
                break;
            default:
                break;
        }
        document.querySelector("#textosaliente").value = arraynuevo.join("");

    }
}
