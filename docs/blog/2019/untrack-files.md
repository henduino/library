title: Hapus Jejak File
description: Hapus jejak file yang sudah ditambahkan ke repositori git berdasarkan .gitignore
hero: Hapus jejak file yang sudah ditambahkan ke repositori git berdasarkan .gitignore
path: tree/master/docs/blog/2019
source: untrack-files.md
disqus: henduino

# Hapus jejak file yang sudah ditambahkan ke repositori git berdasarkan .gitignore
Suatu saat Anda telah menambahkan / mengkomit beberapa file ke repositori git Anda dan kemudian ingin menambahkannya ke .gitignore; file-file ini akan tetap ada di indeks repositori Anda. Artikel ini akan membahas bagaimana cara menghilangkannya atau membersihkan repositori Anda.

* * *

#### Step 1: Commit semua perubahan
Sebelum melanjutkan, pastikan semua perubahan yang Anda lakukan telah di `commit`, termasuk file `.gitignore`.

#### Step 2: Buang segala sesuatu dari repositori
Untuk membersihkan repositori Anda, gunakan perintah:
```
git rm -r --cached .
```
* `rm` adalah perintah penghapusan
* `-r` memungkinkan penghapusan secara rekursif (menyeluruh)
* `–cached` hanya akan menghapus file dari indeks. Tetapi sebenarnya File Anda tetap ada di sana.
* `.` menunjukkan bahwa semua file tidak akan dilacak. Anda dapat menghapus file tertentu dengan perintah `git rm --cached foo.txt`.
* Perintah `rm` tanpa ampun dan tidak bisa dibatalkan. Jika Anda ingin mencoba apa yang dilakukan sebelumnya, tambahkan tanda `-n` atau `--dry-run` untuk menguji semuanya.

#### Step 3: Tambahkan ulang segala sesuatu ke repositori
```
git add .
```

#### Step 4: Commit
```
git commit -m ".gitignore fix"
```
Repositori Anda telah bersih :)

Push perubahan ke repositori remote Anda untuk melihat perubahannya dan pastikan bahwa repositori Anda sekarang mengalami perubahan.