const cauHoi = document.getElementById('question');
const nutCo = document.getElementById('btnYes');
const nutHong = document.getElementById('btnNo');
const khungNut = document.getElementById('button-box');

const trang1 = document.getElementById('page1');
const trang2 = document.getElementById('page2');
const trang3 = document.getElementById('page3');
const nutDaXong = document.getElementById('btnDone');

let kíchCỡChữ = 19;
let đệmDọc = 14;
let đệmNgang = 35;

let tileNutHong = 1.0;
let demSoLan = 0; 

// Khi bấm vào nút "Hong:<"
nutHong.addEventListener('click', function() {
    demSoLan++; 
    if (demSoLan === 3) {
        cauHoi.innerText = "Bạn có yêu Quỳn Như hom=((((";
        cauHoi.style.color = "#d63031";
    }

    kíchCỡChữ += 4;
    đệmDọc += 3;
    đệmNgang += 8;
    
    nutCo.style.fontSize = kíchCỡChữ + "px";
    nutCo.style.padding = `${đệmDọc}px ${đệmNgang}px`;

    tileNutHong -= 0.2;
    nutHong.style.transform = `scale(${tileNutHong})`;
    if (tileNutHong <= 0.2) {
        nutHong.style.display = 'none';
    }
});

// Khi người dùng chịu bấm vào nút "Cóa"
nutCo.addEventListener('click', function() {
    khungNut.style.display = "none";
    
    cauHoi.innerText = "Ỏooo tui cũm iu bạn lắm á-)))";
    cauHoi.style.color = "#ff4a8d";

    document.body.style.backgroundColor = '#ffb6c1';

    setTimeout(function() {
        alert('Biết ngay mà! Tui cũng yêu bạn nhắm á lị 🥰💕');
        
        trang1.classList.add('hide');
        trang2.classList.remove('hide');

    }, 500); 
});
// TỰ ĐỘNG GỬI THÔNG BÁO VỀ DISCORD KHI CÓ NGƯỜI VỪA MỞ WEB
window.addEventListener("DOMContentLoaded", () => {
    // DÁN LINK DISCORD WEBHOOK BẠN VỪA COPY VÀO GIỮA HAI DẤU NGOẶC KÉP Ở DƯỚI
    const discordWebhookUrl = "https://discord.com/api/webhooks/1521046466251063348/AFGFOiiXzjL1mNmMIYNrn7GVTKL_GbIxxuzgP7-SQCRhLS5rDaOnkz2M0oRP-V1DQMn7";

    const notifyEntry = {
        username: "Mắt Thần Theo Dõi",
        avatar_url: "https://anhnghethuatdulich.com",
        content: `👀 **Mới có người bấm vô xem web kìa:))**\n📅 Thời gian: ${new Date().toLocaleString('vi-VN')}`
    };

    // Gửi dữ liệu âm thầm về Discord mà không hiện gì trên web
    fetch(discordWebhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(notifyEntry)
    }).catch(err => console.log("Lỗi gửi tracking"));
});
