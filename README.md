# Bütçematik 🤑

Kullanıcıların gelir ve giderlerini takip edebileceği bir kişisel bütçe uygulamasıdır. Bu uygulama kullanıcıların gelir ve gider kalemlerinin kayıt altında mali durumlarını daha iyi yönetebilir.

- Canlı görmek için tıklayınız👉 https://budget-plum.vercel.app

## 🛠 Kullanılan Teknolojiler 

- Next.js
- React
- Tailwind CSS 
- SASS 

## 🛠 Kullanılan Kütüphaneler 

- @reduxjs/toolkit (v2.3.0): Redux için modern ve basit bir yapı sunarak global state yönetimi sağlar.
- react-redux (v9.1.2): React uygulamalarında Redux kullanımı için bağlayıcı.
- uuid (v11.0.3): Unique ID'ler oluşturmak için kullanılan bir kütüphane.
- sweetalert2 (v11.14.5): Gelişmiş ve şık modal uyarılar göstermek için kullanılır.
- date-fns (v4.1.0): Tarih işlemleri ve manipülasyonları için kullanılan hafif ve fonksiyonel bir kütüphane.
- recharts (v2.13.3): Kolay ve özelleştirilebilir grafikler oluşturmak için kullanılan bir kütüphane
  
## 🗃️ Veri Depolama

- LocalStorage
  
## 🎯 Özellikler

- Gelir ve Gider Ekleme
- Gider eklerken bütçe limitinin %80’ine ulaşıldığında uyarı verir.
- Bütçe limitini aşan gider girişlerini engeller.
- Yapılan son işlemleri görüntüleme
- Son işlemleri gelir ve gider kategorisine göre filtreleme
- Aylık ve yıllık gelir/gider analizleri için bar grafik ve pasta grafikler
- Kullanıcı dostu arayüz ve sade tasarım.
- Responsive Tasarım

 ## 📂 Proje Yapısı
 ```csharp
├── components
│   ├── AddNewItem.jsx         # Gelir/gider ekleme formu
│   ├── BudgetDashboard.jsx    # Bütçe özeti ve dashboard
│   ├── FinancialTransactions.jsx # İşlem tablosu ve finansal hareketler
│   ├── Header.jsx             # Proje başlığı ve navigasyon
│   ├── MonthlyBarChart.jsx    # Aylık gelir-gider bar grafiği
│   ├── MonthlyPieChart.jsx    # Aylık gelir-gider pasta grafiği
│   ├── YearlyBarChart.jsx     # Yıllık gelir-gider bar grafiği
│   ├── YearlyPieChart.jsx     # Yıllık gelir-gider pasta grafiği
├── redux
│   ├── store.js               # Redux store yapılandırması
│   ├── transactionsSlice.js   # Finansal işlemlerle ilgili Redux slice
├── styles
│   ├── Header.module.scss     # Header bileşeni için SCSS stilleri
│   ├── global.css             # Uygulama genelinde kullanılan CSS dosyası
├── data
│   ├── fakeData.js            
```

 ## 📸 Ekran Görüntüleri
![responsive kopya](https://github.com/user-attachments/assets/5e4a2dec-efb5-43ef-993d-30d8410e6306)
![add](https://github.com/user-attachments/assets/795e2b95-2b60-41a4-a3f3-b7abce4b2ec3)
![uyarı](https://github.com/user-attachments/assets/30df4705-017e-4deb-8519-7ee7445391be)
![uyarı 2](https://github.com/user-attachments/assets/94b253d4-86ed-4d49-8a5a-b7b0d46cc94d)
!![table](https://github.com/user-attachments/assets/65e8319a-64aa-43d9-a88c-1ce2b5e63eea)
![validasyonlar](https://github.com/user-attachments/assets/195aa053-e815-45e0-ac18-6c17acc672ff)
![grafikler](https://github.com/user-attachments/assets/05dd01a4-679b-47af-b3b9-1bde37cca60f)
![footer](https://github.com/user-attachments/assets/0f13032d-d54d-4fbb-8364-8c03658f3890)

