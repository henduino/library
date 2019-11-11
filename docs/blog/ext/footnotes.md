title: Footnotes - Catatan Kaki
description: MKDocs Extensions - Footnotes atau Catatan Kaki adalah ekstensi lain yang termasuk ke dalam standar pustaka Markdown.
hero: MKDocs Extensions - Footnotes
path: tree/master/docs/blog/ext
source: footnotes.md
disqus: henduino

# Footnotes atau Catatan Kaki

[Footnotes][1] adalah ekstensi lain yang termasuk ke dalam standar pustaka Markdown. Seperti namanya, footnotes digunakan untuk menambahkan catatan kaki ke dalam dokumen.

  [1]: https://python-markdown.github.io/extensions/footnotes/

## Instalasi

Tambahkan baris berikut ke dalam `mkdocs.yml`:

``` yaml
markdown_extensions:
  - footnotes
```

## Penggunaan

Markup untuk catatan kaki mirip dengan standar markup Markdown untuk tautan. Referensi dimasukkan ke dalam teks, yang kemudian dapat didefinisikan pada titik mana saja dalam dokumen.

### Memasukkan referensi

Referensi catatan kaki diapit tanda kurung siku dan dimulai dengan tanda sisipan, diikuti oleh label arbitrer yang berisi pengidentifikasi angka [1, 2, 3, ...] atau nama [Granovetter et al. 1998]. Referensi yang dicantumkan selalu nomor berurutan yang di superscript.

Contoh:

``` markdown
Lorem ipsum[^1] dolor sit amet, consectetur adipiscing elit.[^2]
```

Hasil:

Lorem ipsum[^1] dolor sit amet, consectetur adipiscing elit.[^2]

### Memasukkan konten

Konten catatan kaki juga dideklarasikan dengan label, yang harus cocok dengan label yang digunakan untuk referensi catatan kaki. Itu dapat dimasukkan pada posisi dimana saja di dalam dokumen dan selalu ditampilkan di bagian bawah halaman. Selanjutnya, backlink secara otomatis ditambahkan ke referensi catatan kaki.

#### pada satu baris

Pernyataan singkat dapat ditulis pada baris yang sama atau dalam satu baris.

Contoh:

``` markdown
[^1]: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
```

Hasil:

<a href="#fn:1">Lompat ke catatan kaki di bagian bawah halaman</a>

  [^1]: Lorem ipsum dolor sit amet, consectetur adipiscing elit.

#### pada banyak baris

Paragraf harus ditulis pada baris berikutnya. Seperti semua blok Markdown, konten harus diindentasi dengan empat spasi.

Contoh:

``` markdown
[^2]:
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.
```

Hasil:

  [^2]:
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
      nulla. Curabitur feugiat, tortor non consequat finibus, justo purus
      auctor massa, nec semper lorem quam in massa.

<a href="#fn:2">Lompat ke catatan kaki di bagian bawah halaman</a>
