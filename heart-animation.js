function createHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s"; // 2s - 5s durasi jatuh
    
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000); // Hapus setelah 5 detik
}

setInterval(createHeart, 300);

function createFallingLove() {
    const love = document.createElement("div");
    love.classList.add("falling-love");
    love.innerHTML = "❤️"; // Bisa diganti dengan emoji lain atau gambar

    // Set posisi love secara acak di atas layar
    love.style.left = Math.random() * 100 + "vw";
    love.style.top = "-10px"; 

    // Tambahkan event listener agar bisa diklik
    love.addEventListener("click", function () {
        window.location.href = "hati-gede.html"; // Ganti dengan halaman tujuan
    });

    document.body.appendChild(love);

    // Animasi jatuh
    let moveInterval = setInterval(() => {
        love.style.top = parseInt(love.style.top) + 5 + "px";

        // Hapus jika sudah di bawah layar
        if (parseInt(love.style.top) > window.innerHeight) {
            clearInterval(moveInterval);
            love.remove();
        }
    }, 50);

    // Hapus love setelah beberapa detik (jika tidak diklik)
    setTimeout(() => {
        love.remove();
    }, 5000);
}

// Buat love jatuh setiap 500ms
setInterval(createFallingLove, 500);
