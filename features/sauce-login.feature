Feature: Sauce Demo

  Scenario Outline: Sebagai user saya gagal login ke aplikasi

    Given saya membuka browser
    When saya melakukan login dengan username standard_user dan password apasih
    Then sistem menampilkan pesan error

  Scenario Outline: Sebagai user saya bisa login ke aplikasi

    Given saya membuka browser
    When saya melakukan login dengan username standard_user dan password secret_sauce
    Then sistem menampilkan halaman dashboard
    
  Scenario Outline: Sebagai user saya bisa melihat detail produk

    Given saya membuka gambar produk
    Then sistem menampilkan halaman produk yang dipilih


  Scenario Outline: Sebagai user saya bisa menambahkan produk
  
    Given saya menambahkan produk ke keranjang
    Then sistem menampilkan tombol remove


  Scenario Outline: Sebagai user saya bisa membuka halaman keranjang
  
    Given saya membuka halaman keranjang
    Then sistem menampilkan halaman keranjang


  Scenario Outline: Sebagai user saya bisa melanjutkan belanja
  
    Given saya melanjutkan berbelanja
    Then sistem menampilkan halaman dashboard