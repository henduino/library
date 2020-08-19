title: Fungsi .gitignore
description: gitignore adalah cara git untuk mengabaikan file yang dimasukan dalam daftar .gitignore agar tidak diikut sertakan pada proses git push.
hero: Fungsi .gitignore
disqus: henduino

# .gitignore pada Git

Bismillah. Alhamdulillah. Sesuai dengan terjemahan bebas bahwa ignore berarti mengabaikan. gitignore adalah cara git untuk mengabaikan file yang dimasukan dalam daftar .gitignore agar tidak diikutsertakan pada proses `git push`, `git clone` maupun `git pull`. Ketika kita melakukan proses clone projects dari github melalui perintah `git clone <url>` maka didalam folder hasil clone tersebut akan ditemukan sebuah file ==.gitignore==. Apa sebenarnya fungsi file tersebut?

File ini punya peranan penting dalam memanajemen file yang akan ditambahkan atau tidak kedalam repository. Terkadang kita tidak perlu untuk melakukan add commit push pada semua folder atau file yang ada karena mungkin file atau folder tersebut hanya dibutuhkan pada mode localhost. Misal; bagi anda yang sudah mempelajari NodeJS, pada saat ingin menjalankan suatu aplikasi secara localhost, maka pada folder tersebut biasanya dibutuhkan module-module pendukung untuk menjalankannya secara localhost offline, tetapi ketika kita akan membagikannya kepada orang lain melalui repository maka module-module tersebut tidak perlu diikutsertakan untuk dibagikan. Maka disinilah perlu pengabaian atau ignoring. File atau folder yang diabaikan atau di-ignore tidak akan di-track oleh perangkat lunak Git, sedangkan file yang tidak di-track maka tidak akan dipantau perubahannya dan tidak akan diikut sertakan untuk di add commit push ke respository. Mudah-mudahan paham dengan maksud pengabaian atau ignore.

***

## Fungsi .gitignore

.gitignore adalah salah satu standar pengabaian atau ignoring perangkat lunak Git. Dan biasanya ketika kita mengambil suatu file dari repository baik dengan cara clone ataupun mengunduh langsung berbentuk ZIP, file .gitignore ini selalu diikutsertakan. Silahkan coba unduh salah satu file dari Github berbentuk ZIP dan kemudian ekstrak dengan perangkat lunak ekstraksi, maka kita akan menemukan satu file dengan nama .gitignore. Buka file .gitignore ini dengan teks editor maka kita akan menemukan beberapa baris nama, baik itu nama file atau nama folder. Contoh isi file .gitignore yang penulis ambil dari folder Octopress seperti dibawah ini:

```
.bundle
.DS_Store
.sass-cache
.gist-cache
.pygments-cache
_deploy
public
sass.old
source.old
source/_stash
source/stylesheets/screen.css
vendor
node_modules
```

Ketika baru pertama kali kita mengunduh Octopress dari Github baik dengan cara unduhan langsung berupa file ZIP maupun dengan cara clone melalui Github, maka kita tidak akan menemukan file atau folder dengan nama yang tercantum pada .gitignore, ini berarti orang yang mengupload Octopress tersebut tidak mengikutsertakan file atau folder tersebut pada saat melakukan `add commit push` pada repository. Perhatikan struktur atau isi file Octopress setelah di-clone seperti dibawah ini:

```
.themes
plugins
.editorconfig
.gitattribute
.gitignore
.powrc
.rbenv-version
.rvmrc
.slugignore
.travis.yml
_config.yml
CHANGELOG.markdown
config.rb
config.ru
Gemfile
Gemfile.lock
Rakefile
README.markdown
```

Pengabaian atau ignore ini ia lakukan dengan cara menuliskannya pada file .gitignore. Jadi apabila kita ingin berbagi suatu data pada suatu folder melalui repository (misal; Github) tetapi ada file atau folder yang tidak ingin dibagikan maka kita hanya perlu menuliskannya pada file .gitignore, hal ini akan memberitahu perangkat lunak Git untuk tidak men-track file atau folder yang tercantum pada .gitignore. Ingat, bahwa file yang tidak di-track maka tidak akan dipantau oleh perangkat lunak Git, walaupun berkali-kali kita melakukan perubahan pada file tersebut dan termasuk file yang ada didalam folder yang dimasukan kedalam .gitignore. Jika tidak dipantau atau di-track maka tidak akan di `add commit push` ke repository.

***

## Pola Penulisan .gitignore

File atau folder yang dimasukan kedalam .gitignore akan diabaikan atau untracked (tidak akan di-track) oleh perangkat lunak Git. Secara umum file-file yang berfungsi sebagai log atau file yang dibuat oleh sistem pada komputer kita sendiri seharusnya diabaikan oleh Git. Agar file-file tersebut diabaikan maka kita harus membuat file .gitignore untuk memberikan informasi kepada Git agar apa yang ada didalam pola .gitignore untuk tidak di-track. Pola penulisan .gitignore misal seperti dibawah ini:

```
*.[oa]
*~
```

Baris pertama memberitahukan kepada Git untuk mengabaikan semua file yang berakhiran .o dan .a. File yang berakhiran .o dan .a biasanya adalah file object dan file archive yang dibuat otomatis selama proses building kode oleh sistem. Sedangkan baris kedua memberitahukan kepada Git untuk mengabaikan semua file yang berakhiran tilde `~` yang biasanya dibuat secara otomatis oleh teks editor seperti halnya Emacs sebagai file temporary. Kita juga bisa memasukan direktori log, tmp atau pid; dokumen yang secara otomatis terbuat; dan lain sebagainya. Lakukan setting .gitignore hingga anda benar-benar yakin bahwa file tersebut memang siap untuk disimpan direpository hal ini untuk mencegah kesalahan commit.

Dibawah ini pola penulisan .gitignore yang bisa anda gunakan sebagai acuan:

* Baris kosong atau baris yang diawali dengan simbol # akan diabaikan.
* Standar kerja pola global (Glob Patterns).
* Kita dapat menggunakan simbol slash (/) untuk folder spesifik.
* Kita dapat menggunakan pola negasi dengan memulainya menggunakan tanda seru (!).

Glob Patterns atau Pola Global maksudnya adalah pola sederhana *regular expression* yang sering digunakan pada shell, antara lain:

* Simbol asterisk `*` yang berarti kosong atau memiliki karakter lebih
* `[abc]` yang berarti karakter apa saja yang ada diantara simbol bracket, dalam contoh ini bisa saja a, b atau c.
* Simbol tanda tanya `?` yang berarti karakter apa saja cocok asalkan terdiri dari satu karakter.
* Penggunaan simbol tanda sambung atau *hypens* `-` yang ada didalam bracket, misal [0-9] berarti karakter yang berada diantara 0 sampai dengan 9.

Mungkin masih membingungkan mengenai Glob Patterns dan memang seharusnya kita terbiasa dengan Glob Patterns pada Regular Expressions (misal; Javascript).
Dibawah ini contoh pola file .gitignore:

```
# sebuah komentar - ini akan diabaikan
*.a          # abaikan semua file dengan akhiran .a
!lib.a       # tetapi lakukan track pada lib.a, jika telah mengabaikan file .a diatas
/TODO        # hanya abaikan semua file yang ada didalam TODO, tetapi tidak dengan subdirektori /TODO
build/       # abaikan semua file didalam direktori build/ termasuk didalam subdirektorinya
doc/*.txt    # abaikan doc/notes.txt, tetapi tidak dengan doc/server/arch.txt
doc/**/*.txt # abaikan semua file .txt didalam direktori doc/
```

Untuk mengetahui apa saja file atau direktori yang diabaikan maka ada dua cara untuk mengetahuinya, yaitu:

* Membuka file .gitignore dengan teks editor; atau
* Mengetikan perintah `cat .gitignore` pada Git Bash

***

## Daftar Pustaka

* [Ignoring Files][1]
* [Create useful .gitignore files for your project][2]
* [gitignore Template][3]

[1]: https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository#Ignoring-Files
[2]: https://www.toptal.com/developers/gitignore
[3]: https://github.com/github/gitignore

***

<small>Artikel diperbarui pada: {{ git_revision_date_localized }}</small>