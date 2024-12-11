// Funkcja zmieniająca kolor stopki co 2 sekundy
function zmienKolorStopki() {
    const stopka = document.getElementById("stopka");
    const obecnyKolor = stopka.style.backgroundColor;

    // Zmiana koloru na szary lub ciemnoniebieski
    if (obecnyKolor === "gray") {
        stopka.style.backgroundColor = "#37474f"; // Domyślny kolor stopki
    } else {
        stopka.style.backgroundColor = "gray"; // Alternatywny kolor
    }
}

// Uruchomienie funkcji w interwale co 2 sekundy
setInterval(zmienKolorStopki, 2000);
