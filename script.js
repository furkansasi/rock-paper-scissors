const secenekler = ["Taş", "Kağıt", "Makas"];

const secenekGorsel = {
    "Taş": "rock.png",
    "Kağıt": "paper.png",
    "Makas": "scissors.png"
};

let pcSkor = 0;
let userSkor = 0;

const oyuncuSecimAlani = document.querySelector('.player-choice');
const pcSecimAlani = document.querySelector('.pc-choice');
const skorTahtasi = document.querySelector('.score-board p');
const sifirlaBtn = document.querySelector('#sifirla');

document.getElementById('tas').addEventListener('click', () => oyunBaslat("Taş"));
document.getElementById('kagit').addEventListener('click', () => oyunBaslat("Kağıt"));
document.getElementById('makas').addEventListener('click', () => oyunBaslat("Makas"));

sifirlaBtn.addEventListener('click', () => {
    userSkor = 0;
    pcSkor = 0;
    skorGuncelle();
    oyuncuSecimAlani.innerHTML = "";
    pcSecimAlani.innerHTML = "";
});

function oyunBaslat(kullaniciSecimi) {
    const bilgisayarIndex = Math.floor(Math.random() * 3);
    const bilgisayarSecimi = secenekler[bilgisayarIndex];

    oyuncuSecimAlani.innerHTML = `<img src="image/${secenekGorsel[kullaniciSecimi]}" alt="${kullaniciSecimi}" width="80">`;
    pcSecimAlani.innerHTML = `<img src="image/${secenekGorsel[bilgisayarSecimi]}" alt="${bilgisayarSecimi}" width="80">`;

    if (kullaniciSecimi !== bilgisayarSecimi) {
        const kazanmaDurumu =
            (kullaniciSecimi === "Taş" && bilgisayarSecimi === "Makas") ||
            (kullaniciSecimi === "Kağıt" && bilgisayarSecimi === "Taş") ||
            (kullaniciSecimi === "Makas" && bilgisayarSecimi === "Kağıt");
        if (kazanmaDurumu) {
            userSkor++;
        } else {
            pcSkor++;
        }
    }

    skorGuncelle();
}

function skorGuncelle() {
    skorTahtasi.textContent = `Oyuncu ${userSkor} - ${pcSkor} Bilgisayar`;
}
