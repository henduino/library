title: Selamat Datang di Henduino Library
description: Halaman Situs Henduino yang membahas tentang Arduino dan ESP serta perpustakaan yang digunakannya.
hero: Selamat Datang di Henduino Library
path: tree/master/docs
source: index.md
disqus: 

# Selamat Datang di Henduino Library

## Apa Henduino?

Ketika anda membuka halaman situs ini mungkin dalam hati bertanya-tanya, apa itu Henduino? [Henduino][1] adalah produk mikrokontroler yang dikembangkan oleh **Dede Hendriono** dengan dikhususkan pada chip mikrokontroler yang diproduksi oleh perusahaan [Atmel][2] dan perusahaan [Espressif][3]. Sedangkan konsentrasinya lebih ke turunan [Arduino][4], hal ini agar para Artis Elektronika terbiasa dengan perangkat lunak Arduino IDE. Selain berbasis Arduino, Henduino juga membuat beberapa papan mikrokontroler dengan basis ESP baik [ESP8266][5] maupun [ESP32][6] yang terkenal murah, mudah dan berdaya guna. Namun ada beberapa proyek yang dibuat oleh tim Henduino keluar dari 2 basis mikrokontroler tersebut.

Sedangkan situs ini merupakan arsip atau perpustakaan tim Henduino, jadi apa yang tertulis disini bisa berupa ide, rencana, yang sedang dikembangkan atau bahkan produk yang siap untuk digunakan. Apa saja? Ikuti saja perkembangannya disitus ini. :D

[1]: http://henduino.github.io
[2]: https://www.microchip.com/
[3]: https://www.espressif.com/
[4]: https://www.arduino.cc/
[5]: https://www.espressif.com/en/products/hardware/esp8266ex/overview
[6]: https://www.espressif.com/en/products/hardware/esp32/overview

* * *

## Kenapa Arduino dan ESP?

Henduino menggunakan basis Arduino dan ESP karena memang papan mikrokontroler ini merupakan papan yang sangat populer baik di Indonesia maupun didunia. Perkembangannya yang pesat telah melahirkan berbagai perangkat keras yang berdaya guna baik untuk kesenangan maupun untuk menghadapi proyek sesungguhnya yang bisa diterapkan sesuai kebutuhan dan tentunya bernilai bisnis yang tinggi. Kebiasaan dan kebutuhan masyarakat dunia yang hampir terbiasa dengan internet membuat produk mikrokontroler hampir dimiliki oleh setiap orang didunia. Disadari atau pun tidak disekitar kita hampir beberapa jenis perangkat itu dibuat dengan basis mikrokontroler, misal remote, sistem pengaman rumah, pembaca suhu dan lain sebagainya. Ini membuat geliat para artis elektronika semakin semangat dan pertumbuhannya semakin banyak, membuat para artis elektronika tidak memiliki pilihan kecuali ikut terjun untuk berkecimpung dalam pengembangan dunia mikrokontroler. Henduino merupakan bagian kecil dari kepedulian terhadap perkembangan mikrokontroler tersebut. Ini sebagai upaya generasi Indonesia untuk menghadap tantangan global perkembangan dunia.

* * *

## Seperti apa Papan Henduino?

Papan Henduino dibuat dengan susunan yang mengedepankan kemudahan dan biaya, dengan harapan menjadi Papan Mikrokontroler pertama Indonesia yang murah namun tetap mudah untuk dikembangkan. Walau tidak sempurna namun mudah-mudahan ini mampu jadi pemicu dan membangkitkan kepedulian developer mikrokontroler Indonesia untuk ikut andil terhadap perkembangan dunia mikrokontroler Indonesia.
Sebenarnya ada beberapa varian yang sedang dikembangkan tapi karena terbentur masalah pendanaan sehingga baru sedikit yang sudah dibuat dan mulai dikembagkan secara pribadi. Keterbatasan dana ini membuat kami dari tim Henduino baru mampu membuat untuk kebutuhan internal saja tanpa mampu membuat untuk kebutuhan secara umum. Namun bagi siapa saja yang ingin membuat sendiri silahkan ambil datanya dari repository yang kami simpan di GitHub.

Beberapa varian Henduino dibuat secara spesifik untuk kebutuhan tertentu yang memudahkan siapa saja untuk membuat proyek mikrokontroler yang langsung siap digunakan. Seperti Henduino R2, HESP IoT R2, dan beberapa varian lainnya. Tunggu terbitnya ya? 

* * *

## Apa semua yang dibahas hanya Papan Henduino?

Halaman ini bukan halaman khusus Papan Henduino karena hal tersebut tidak relevan dengan semangat open source. Pada halaman ini akan dibahas papan-papan mikrokontroler lain yang memiliki semangat open source, sedangkan papan mikrokontroler yang closed source hanya akan dibahas untuk memancing para pengembang untuk membuat papan lainnya yang memiliki kemampuan sama.

Selain papan mikrokontroler pada situs ini juga disertakan perpustakaan (*library*), contoh penggunaan, dan beberapa contoh aplikasinya sehingga memudahkan siapa saja yang ingin belajar mikrokontroler terutama yang berbasis Arduino dan ESP.

* * *

## Dimanakah bisa membeli Papan Henduino?

Untuk saat ini Henduino masih dalam tahap pengembangan dan produksi jadi untuk sementara Henduino masih digunakan internal tim Henduino saja. Karena sudah dijelaskan diatas bahwa produksi Henduino membutuhkan dana yang cukup besar dan kami belum memiliki dana sebesar itu. Ini membuat proses produksi masal Papan Henduino menjadi terhambat, dan kami pun belum tahu hingga kapan kami bisa memproduksi Papan Henduino untuk kebutuhan umum. Mudah-mudahan secepatnya, karena itu kami mohon do'anya mudah-mudahan Papan Henduino mampu diproduksi masal dalam waktu dekat. Amin...

Bagi yang ingin membuat sendiri Papan Henduino, kami akan membagikannya melalui Repository GitHub dan silahkan dibuat sendiri dengan tujuan non komersil. Setelah membuat bagikan pengalamannya bersama kami untuk membangkitkan semangat tim Henduino.

* * *

## Apa lisensi yang diterapkan pada Papan Henduino?

Sudah dijelaskan diawal bahwa Henduino mengambil semangat Arduino sehingga kami pun meneruskan semangat tersebut. Henduino direncanakan menerapkan lisensi sumber terbuka atau [Open Source License][7] walau sampai hari ini kami belum mendaftarkannya tapi mudah-mudahan kedepannya kita dapat memperoleh Sertifikat Sumber Terbuka dari [Open Source Hardware Association][8]. Lalu apa lisensi Open Source? Dijelaskan dibawah ini mengenai Open Source Software dan Open Source Hardware.

!!! abstract "Tentang Open Source Software - Wikipedia"
	Open Source atau Sumber Terbuka adalah sistem pengembangan yang tidak dikoordinasi oleh suatu individu/lembaga pusat, tetapi oleh para pelaku yang bekerja sama dengan memanfaatkan kode sumber (*source-code*) yang tersebar dan tersedia bebas (biasanya menggunakan fasilitas komunikasi internet). Pola pengembangan ini mengambil model ala bazaar, sehingga pola Open Source ini memiliki ciri bagi komunitasnya yaitu adanya dorongan yang bersumber dari budaya memberi, yang artinya ketika suatu komunitas menggunakan sebuah program Open Source dan telah menerima sebuah manfaat kemudian akan termotivasi untuk menimbulkan sebuah pertanyaan apa yang bisa pengguna berikan balik kepada orang banyak.

!!! abstract "Tentang Open Source Hardware - OpenSource"
	Open Hardware atau Open Source Hardware mengacu pada spesifikasi desain objek fisik yang dilisensikan sedemikian rupa sehingga objek tersebut dapat dipelajari, dimodifikasi, dibuat, dan didistribusikan oleh siapa saja. Kode sumber perangkat keras terbuka harus mudah diakses, dan komponen-komponennya lebih mudah bagi siapa saja untuk mendapatkannya. Pada dasarnya, perangkat keras terbuka menghilangkan hambatan umum untuk desain dan pembuatan barang fisik; itu memberikan sebanyak mungkin orang kemampuan untuk membangun, membuat ulang dengan fungsi khusus, dan berbagi pengetahuan mereka tentang desain dan fungsi perangkat keras.

[7]: https://opensource.com
[8]: https://www.oshwa.org/

* * *