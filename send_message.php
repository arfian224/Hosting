<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    // Simpan data ke file
    $file = fopen("messages.txt", "a");
    fwrite($file, "Nama: $name\nEmail: $email\nPesan: $message\n------------------------\n");
    fclose($file);

    echo "<body style='background:#0a0a0a; color:#fff; text-align:center; font-family:sans-serif;'>
            <h2 style='color:#d4af37;'>Terima kasih, $name!</h2>
            <p>Pesan kamu sudah terkirim 🎉</p>
            <a href='index.html' style='color:#d4af37; text-decoration:none;'>Kembali ke Halaman Utama</a>
          </body>";
} else {
    header("Location: index.html");
    exit;
}
?>
