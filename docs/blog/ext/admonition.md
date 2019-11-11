title: Admonition
description: MKDocs Extensions - Admonition adalah ekstensi yang disertakan ke dalam pustaka standar Markdown yang memungkinkan untuk menambahkan konten samping bergaya blok ke dokumentasi Anda.
hero: MKDocs Extensions - Admonition
path: tree/master/docs/blog/ext
source: admonition.md
disqus: henduino

# Admonition

[Admonition][1] adalah ekstensi yang disertakan ke dalam pustaka standar Markdown yang memungkinkan untuk menambahkan konten samping bergaya blok ke dokumentasi Anda, misalnya ringkasan, catatan, petunjuk atau peringatan.

  [1]: https://python-markdown.github.io/extensions/admonition/

## Instalasi

Tambahkan baris berikut ke dalam `mkdocs.yml`:

``` yaml
markdown_extensions:
  - admonition
```

## Penggunaan

Blok Admonition mengikuti sintaksis sederhana: setiap blok dimulai dengan `!!!`, diikuti oleh satu kata kunci yang digunakan sebagai [tipe kualifikasi][2] blok. Isi blok kemudian mengikuti pada baris berikutnya, dijorok dengan empat spasi.

Contoh:

``` markdown
!!! note
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.
```

Hasil:

!!! note

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.

  [2]: #tipe

### Mengubah Judul

Secara default, judul blok akan sama dengan tipe kualifikasi dalam titlecase. Namun, ini dapat diubah dengan menambahkan string yang dikutip setelah tipe kualifikasi.

Contoh:

``` markdown
!!! note "Phasellus posuere in sem ut cursus"
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.
```

Hasil:

!!! note "Phasellus posuere in sem ut cursus"

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.

### Menghapus Judul

Mirip dengan pengaturan [judul khusus][3], ikon dan judul dapat dihilangkan dengan memberikan string kosong setelah kualifikasi jenis:

Contoh:

``` markdown
!!! note ""
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.
```

Hasil:

!!! note ""

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.

  [3]: #mengubah-judul

### Blok kode tertanam

Blok dapat berisi semua jenis konten teks, termasuk tajuk utama, daftar, paragraf, dan blok lainnya - kecuali blok kode, karena parser dari standar pustaka Markdown tidak memperhitungkannya.

Namun, paket [Ekstensi PyMdown][4] menambahkan ekstensi yang disebut [SuperFences][5], yang memungkinkan untuk membuat blok kode di dalam blok lain, masing-masing blok Admonition.

  [4]: https://facelessuser.github.io/pymdown-extensions
  [5]: https://facelessuser.github.io/pymdown-extensions/extensions/superfences/

Contoh:

!!! note

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.

    ``` mysql
    SELECT
      Employees.EmployeeID,
      Employees.Name,
      Employees.Salary,
      Manager.Name AS Manager
    FROM
      Employees
    LEFT JOIN
      Employees AS Manager
    ON
      Employees.ManagerID = Manager.EmployeeID
    WHERE
      Employees.EmployeeID = '087652';
    ```

    Nunc eu odio eleifend, blandit leo a, volutpat sapien. Phasellus posuere in
    sem ut cursus. Nullam sit amet tincidunt ipsum, sit amet elementum turpis.
    Etiam ipsum quam, mattis in purus vitae, lacinia fermentum enim.

### Blok yang dapat dilipat

[Detail][6] ekstensi yang juga merupakan bagian dari paket [Ekstensi PyMdown][4] menambahkan dukungan untuk rendering blok Admonition yang dapat dilipat. Ini berguna untuk FAQ atau konten yang bersifat sekunder. Blok yang dapat dilipat diawali dengan tanda `???` bukan dengan tanda `!!!`.

Contoh:

``` markdown
??? note "Phasellus posuere in sem ut cursus"
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.
```

Hasil:

??? note "Phasellus posuere in sem ut cursus"

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.

Dengan menambahkan tanda `+` langsung setelah penanda awal, blok dapat dirender terbuka secara default.

  [6]: https://facelessuser.github.io/pymdown-extensions/extensions/details/

## Tipe

Admonition mendukung tipe kualifikasi yang ditentukan pengguna yang dapat mempengaruhi gaya blok yang dimasukkan. Berikut ini adalah daftar tipe kualifikasi yang disediakan oleh theme Material, sedangkan tipe default, untuk tipe kualifikasi yang tidak diketahui, ditetapkan sebagai `note`.

### Note

Contoh:

``` markdown
!!! note
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.
```

Hasil:

!!! note

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.

Kualifikasi:

* `note`
* `seealso`

### Abstact/Abstrak

Contoh:

``` markdown
!!! abstract
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.
```

Hasil:

!!! abstract

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.

Kualifikasi:

* `abstract`
* `summary`
* `tldr`

### Info

Contoh:

``` markdown
!!! info
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.
```

Hasil:

!!! info

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.

Kualifikasi:

* `info`
* `todo`

### Tip

Contoh:

``` markdown
!!! tip
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.
```

Hasil:

!!! tip

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.

Kualifikasi:

* `tip`
* `hint`
* `important`

### Success/Sukses

Contoh:

``` markdown
!!! success
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.
```

Hasil:

!!! success

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.

Kualifikasi:

* `success`
* `check`
* `done`

### Question/Pertanyaan

Contoh:

``` markdown
!!! question
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.
```

Hasil:

!!! question

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.

Kualifikasi:

* `question`
* `help`
* `faq`

### Warning/Perhatian

Contoh:

``` markdown
!!! warning
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.
```

Hasil:

!!! warning

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.

Kualifikasi:

* `warning`
* `caution`
* `attention`

### Failure/Kegagalan

Contoh:

``` markdown
!!! failure
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.
```

Hasil:

!!! failure

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.

Kualifikasi:

* `failure`
* `fail`
* `missing`

### Danger/Bahaya

Contoh:

``` markdown
!!! danger
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.
```

Hasil:

!!! danger

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.

Kualifikasi:

* `danger`
* `error`

### Bug/Kesalahan

Contoh:

``` markdown
!!! bug
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.
```

Hasil:

!!! bug

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.

Kualifikasi:

* `bug`

### Example/Contoh

Contoh:

``` markdown
!!! example
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.
```

Hasil:

!!! example

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.

Kualifikasi:

* `example`
* `snippet`

### Quote/Kutipan

Contoh:

``` markdown
!!! quote
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.
```

Hasil:

!!! quote

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.

Kualifikasi:

* `quote`
* `cite`
