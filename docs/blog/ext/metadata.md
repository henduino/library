title: Metadata
description: MKDocs Extensions - Metadata memungkinkan untuk menambahkan metadata ke dalam dokumen yang memberikan kontrol lebih besar atas tema dalam konteks halaman khusus.
hero: Inilah Teks Hero pada Metadata
path: tree/master/docs/blog/ext
source: metadata.md
disqus: henduino

# Metadata

Ekstensi [Metadata][1] memungkinkan untuk menambahkan metadata ke dalam dokumen yang memberikan kontrol lebih besar atas tema dalam konteks halaman khusus.

  [1]: https://python-markdown.github.io/extensions/meta_data/

## Instalasi

Tambahkan baris berikut ke dalam `mkdocs.yml`:

``` yaml
markdown_extensions:
  - meta
```

## Penggunaan

Metadata ditulis sebagai serangkaian pasangan nilai kunci pada awal dokumen Markdown, dibatasi oleh baris kosong yang mengakhiri konteks metadata. Secara alami, metadata terpisah dari dokumen sebelum merender konten halaman yang sebenarnya dan tersedia untuk tema.

Contoh:

``` markdown
title: Lorem ipsum dolor sit amet
description: Nullam urna elit, malesuada eget finibus ut, ac tortor.
path: path/to/file
source: file.js

# Headline

...
```

Lihat bagian selanjutnya yang mencakup metadata yang didukung oleh Material.

### Mengatur teks hero

Material menampilkan hero teks sederhana halaman-lokal melalui Metadata, seperti yang Anda lihat di halaman ini ketika Anda gulir ke atas. Pengaturannya sangatlah sederhana:

``` markdown
hero: Inilah Teks Hero pada Metadata
```

### Mentautkan sumber

Ketika sebuah dokumen terkait dengan kumpulan file sumber tertentu dan `repo_url` didefinisikan di dalam proyek `mkdocs.yml`, file-file tersebut dapat dihubungkan dengan menggunakan kunci `source`:

``` markdown
source: file.js
```

Nama file ditambahkan ke setingan `repo_url` di dalam `mkdocs.yml`, tetapi dapat diawali dengan `path` untuk memastikan arah jalur yang benar:

Contoh:

``` markdown
path: tree/master/docs/extensions
source: metadata.md
```

Hasil:

Lihat bagian [sumber][2] untuk output yang dihasilkan.

  [2]: #__source

### Mengarahkan ke halaman lain

Terkadang kita perlu memindahkan dokumen di dalam navigasi dan mengarahkan pengguna dari URL lama ke URL yang baru. `redirect` tag meta memungkinkan untuk membuat pengalihan dari dokumen saat ini ke alamat yang ditentukan dalam tag.

Misalnya, jika dokumen Anda berisi:

``` markdown
redirect: /new/url
```

akses URL dokumen itu akan secara otomatis dialihkan ke `/new/url`.

### Penggantian

#### Judul halaman

Judul halaman dapat ditimpa pada tingkatan per-dokumen:

``` markdown
title: Lorem ipsum dolor sit amet
```

Ini akan mengatur tag `title` di dalam dokumen `head` untuk halaman saat ini ke nilai yang ditentukan. Itu juga akan mengesampingkan settingan default Material untuk MkDocs yang menyisipkan judul situs menggunakan tanda hubung sebagai pemisah ke judul halaman.

#### Deskripsi Halaman

Deskripsi halaman juga dapat ditimpa pada tingkatan per-dokumen:

``` yaml
description: Nullam urna elit, malesuada eget finibus ut, ac tortor.
```

Ini akan mengatur tag `meta` yang berisi deskripsi situs di dalam dokumen `head` untuk halaman saat ini ke nilai yang ditentukan.

#### Disqus

Komentar Disqus dapat diaktifkan pada level per-dokumen:

``` markdown
disqus: your-shortname
```

Disqus dapat dinonaktifkan untuk halaman tertentu dengan mengaturnya ke nilai kosong:

``` markdown
disqus:
```
