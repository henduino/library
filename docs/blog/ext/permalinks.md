title: Permalinks
description: MKDocs Extensions - Permalinks adalah fitur ekstensi Daftar Isi, yang merupakan bagian dari standar pustaka Markdown
hero: MKDocs Extensions - Permalinks
path: tree/master/docs/blog/ext
source: permalinks.md
disqus: henduino

# Permalinks

Permalinks adalah fitur ekstensi [Daftar Isi][1], yang merupakan bagian dari standar pustaka Markdown. Ekstensi menyisipkan jangkar di akhir setiap judul, yang memungkinkan untuk langsung menautkan ke bagian dokumen.

  [1]: https://python-markdown.github.io/extensions/toc/

## Instalasi

Untuk mengaktifkan permalink, tambahkan kode berikut ini ke dalam `mkdocs.yml`:

``` yaml
markdown_extensions:
  - toc:
      permalink: true
```

Ini akan menambahkan tautan yang mengandung simbol paragraf `¶` di akhir setiap judul (persis seperti pada halaman yang sedang Anda lihat), yang akan ditampilkan oleh tema Material pada saat mouse di posisi hover. Untuk mengubah teks permalink, sebuah string dapat disisipkan, misalnya:

``` markdown
markdown_extensions:
  - toc:
      permalink: Link
```

## Penggunaan

Saat diaktifkan, permalink dimasukkan secara otomatis.
