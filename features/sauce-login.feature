Feature: Sauce Demo

  Background: 
    Given user membuka browser
    When user melakukan login dengan username standard_user dan password secret_sauce

  @negative
  Scenario Outline: user gagal login ke aplikasi
    Then sistem menampilkan pesan error
  

  @positive
  Scenario Outline: user berhasil login ke aplikasi
    Then sistem menampilkan halaman dashboard
  
  @positive
  Scenario Outline: user melihat detail produk
    When user membuka gambar produk
    Then sistem menampilkan halaman produk yang dipilih

  @positive
  Scenario Outline: user bisa menambahkan produk
    When user menambahkan produk dari halaman dashboard
    Then sistem menampilkan tombol remove
    And sistem menampilkan jumlah item di keranjang

  @positive
  Scenario Outline: user bisa membuka halaman keranjang
    When user membuka halaman keranjang
    Then sistem menampilkan halaman keranjang

  @positive
  Scenario Outline: user bisa melanjutkan belanja
    When user membuka halaman keranjang
    And user melanjutkan berbelanja
    Then sistem menampilkan halaman dashboard