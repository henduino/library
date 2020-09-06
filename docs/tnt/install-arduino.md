title: Install Arduino IDE di MX Linux
description: Arduino Integrated Development Environment adalah perangkat lunak lintas platform yang digunakan untuk menuliskan fungsi-fungsi dari bahasa C dan C++ dan meng-upload-nya pada papan yang kompatibel dengan Arduino
hero: Install Arduino IDE di MX Linux
disqus: henduino

# Install Arduino IDE di MX Linux

Arduino IDE (Integrated Development Environment) adalah perangkat lunak lintas platform (Windows, Linux, Mac-OS) yang digunakan untuk menuliskan fungsi-fungsi dari bahasa C dan C++. Selain digunakan untuk menulis fungsi-fungsi, Arduino IDE juga terintegrasi dengan program pengunggah (upload program) ke papan yang kompatibel dengan Arduino, tetapi dapat juga digunakan untuk pengembangan papan dari vendor lain dengan bantuan inti (core) dari pihak ketiga (misal; STM32). 

Bagi para pemula yang ingin mempelajari tentang mikrokontroler, maka sangat disarankan menggunakan Arduino IDE untuk memulai pembelajaran. Namun jelas, jangan berharap lebih bagi mereka yang sudah mahir meracik mikrokontroler, karena memang Arduino IDE diciptakan untuk memudahkan pembelajaran, memulai untuk memahami apa itu mikrokontroller dan membuat proyek-proyek sederhana, namun tidak untuk kelas profesional. Arduino IDE merupakan perangkat lunak cross-platform yang mampu bekerja pada berbagai sistem operasi. Arduino IDE bekerja dengan baik pada sistem operasi Microsoft Windows, Linux dan turunannya, dan tentunya Mac-OS. Untuk installasi Arduino IDE pada sistem operasi Microsoft Windows dan Mac-OS tidak ada kendala yang rumit, namun berbeda dengan sistem operasi Linux dan turunannya. Bagi para pemula Linux, memasang Arduino IDE itu sangat membingungkan.

Untuk memasang (install) Arduino IDE pada sistem operasi MX Linux hampir mirip dengan turunan Linux lainnya. Sebenarnya pada MX Linux sudah tersedia fasilitas Synaptic Package Manager untuk memudahkah pengguna MX Linux memilih dan meng-install perangkat lunak yang dibutuhkan. Namun untuk perangkat lunak Arduino IDE, paket yang tersedia pada Synaptic Package Manager merupakan versi lawas (saat tulisan ini dibuat, baru sampai versi 1.0.5). Sedangkan saat tulisan ini dibuat Arduino IDE sudah sampai pada versi 1.8.13. Supaya kita bisa menggunakan versi terbaru, maka proses instalasi di ambil langsung dari pengembang Arduino-nya.

Untuk unduhan menggunakan browser, silahkan klik link dibawah ini:

[Download Arduino IDE](https://www.arduino.cc/en/main/software){: .md-button}

***

## Install Arduino IDE dari Terminal MX Linux

Dibawah ini, cara untuk melakukan pemasangan Arduino IDE melalui Terminal MX Linux.

**==Langkah 1==**. Buka Terminal melalui Start Menu atau menggunakan Shortcut dengan kombinasi tombol

++ctrl+alt+t++

**==Langkah 2==**. Setelah terminal terbuka, maka kita berada pada folder Home, untuk berpindah folder gunakan perintah dibawah ini. Misal kita akan menyimpannya pada folder `Downloads`

```
cd Downloads
```

**==Langkah 3==**. Ketikkan perintah dibawah ini untuk mengunduh perangkat lunak Arduino IDE

```
$ wget https://downloads.arduino.cc/arduino-1.8.13-linux64.tar.xz
```

Setelah itu proses unduhan akan dimulai. Tunggu hingga unduhan selesai. Jika selesai akan tampil informasi seperti dibawah ini

```
--2020-08-27 15:08:40--  https://downloads.arduino.cc/arduino-1.8.13-linux64.tar.xz
Resolving downloads.arduino.cc (downloads.arduino.cc)... 104.22.49.75
Connecting to downloads.arduino.cc (downloads.arduino.cc)|104.22.49.75|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: 128701172 (123M) [application/x-tar]
Saving to: ‘arduino-1.8.12-linux64.tar.xz’

arduino-1.8.12-linux64.t 100%[==================================>] 122.74M  1.17MB/s    in 1m 49s  

2020-08-27 15:10:30 (1.13 MB/s) - ‘arduino-1.8.13-linux64.tar.xz’ saved [128701172/128701172]
```

**==Langkah 4==**. Ekstrak file hasil unduhan dengan mengetikkan perintah dibawah ini. Tunggu proses ekstraksi hingga selesai

```
$ tar -xvf arduino-1.8.13-linux64.tar.xz
```

**==Langkah 5==**. Folder baru bernama `arduino-1.8.13` akan dibuat di dalam folder `Downloads`. Pindahkah folder `arduino-1.8.13` ke dalam folder sistem `opt` dengan perintah dibawah ini

```
$ sudo mv arduino-1.8.13 /opt/
```

**==Langkah 6==**. Ketikan perintah dibawah ini untuk berpindah ke dalam folder `arduino-1.8.13` yang ada di dalam folder sistem `opt`

```
cd /opt/arduino-1.8.13

```

**==Langkah 7==**. Install Arduino IDE dengan mengetikkan perintah dibawah ini, kemudian tunggu proses installasi selesai.

```
$ sudo ./install.sh
```
Tunggu proses installasi hingga keluar informasi seperti dibawah ini

```
Adding desktop shortcut, menu item and file associations for Arduino IDE...


 done!
```

**==Langkah 8==**. Proses installasi selesai. Silahkah di coba dengan mengetikan perintah `arduino` pada Terminal atau buka di `Start Menu > Development`

***

## Arduino IDE Error Upload

Jika pada proses upload sketch terjadi error upload dengan info seperti dibawah ini:

```
Error opening serial port '/dev/ttyUSB0'
```

Mungkin salah satu penyebabnya adalah username bersangkutan tidak diberi 'permission', ketikan perintah dibawah ini agar MX Linux memberikan jalan

```
$ sudo usermod -a -G dialout henduino
```

!!! warning "PERHATIKAN!"
	Ganti kata `henduino` pada perintah diatas sesuai akun login MX Linux yang anda gunakan.

Setelah prosedur ini, seharusnya kita dapat melanjutkan proses upload sketsa secara normal ke papan Arduino atau menggunakan Serial Monitor dengan lancar.

Selamat mencoba!!!

***

<small>Artikel diperbarui pada: {{ git_revision_date_localized }}</small>