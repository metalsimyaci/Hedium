Hedium Akış şeması
# Talep Alma

- Yönetici için kullanıcı girişi yapmalı
- Makale ekleme, düzenleme, silme yapabilmeli
- Makale işlemlerinde link, resim veya dosya eklenebilmeli
- Makale için önizleme resmi yüklenebilmeli
- Makale içerisinde yüklenen resimler için büyütme özelliği olmalı
- Makale içerisinde embeded desteği olmalı, jsfiddle, jupiter-network gibi
- SEO desteği olmalı
- SEO ile ilgili descripton, keyword, title gibi alanlar otomatik yazıya göre dolmalı ama istenirse müdahale edilerek değiştirilebilir olmalı
- Tag veya kategorilere eklene bilmeli
- Yayınla butonu veya ileri tarihli olarak yayınlana bilmeli
- Yazılara ait log kayıtları tutulmalı
- Tutulan log kayıtları yönetim bölümünde yazıların altında değişklik geçmişi şeklinde takip edilebilmeli
- Site geneli ile ilgili event logları tutulmalı ve yönetim tarafında takip edilebilmeli
- Yorum yönetimi olmalı. Mümkünse disqus uygulaması entegre edilebilir.
- Yazılar sayfasında sayfalama veya scroll ile gösterilecek kayıt sayısı sınırlandırılmalı
- Tek seferde görüntülenecek kayıt sayısı üst bölümden belirlene bilmeli
- Sayfalama işlemlerinde en fazla 10 kayıt görüntülenmeli, en başa ve en sona seçenekleri olmalı
- scroll ile yükleme yapılıyorsa yan tarafta bir tarih slider ı olabilir
- Yazılar sayfasında görüntüleme sayısı ve yorum sayısı bilgileri yer almalı
- Yönetim tarafında temel ayarlara yer verilmeli 

# Analiz

Müşteri tarafından iletilen gereksinimlerin herbirinin analiz edilerek yazılım işlerine dönüşümü yapılmaktadır.
Bu maddelere karşılık gelecek şekilde her bir olası ekran burada senaryoları ile beraber oluşturulur. Bu bölümde oluşan senaryolara göre de test senaryolarımızı oluşturuyoruz. Bunları çıkarırken arka plana veya tasarıma çok girmeden girdiler, çıktılar dikkate alınarak hazırlanır.

## Sistemsel Gereksinimler

- Fiziksel veya Sanal 1 sunucu

## Mimari Gereksinimler

- Postgresql cluster - V.1.1.1 - RDBMS
- Redis Cluster - V.1.2.3 - Cache
- Rabbitmq Instance - V1.1.1 - Eventlerin yönetimi

## Yazılım Analizi

### Ekranlar

- Login
- Forget-Password
- Admin-Dashboard
- Admin-Logs
- Admin-Posts
- Admin-Post-Create
- Admin-Post-Update
- Admin-Post-History
- Admin-Settings
- Admin-Users
- Admin-User-Create
- Admin-User-Update
- Admin-User-Delete
- Posts
- Post-detail
- Categories
- About


### Senaryolar

- Login
  - Success Scenario: Kullanıcı adı ve şifre alarak sisteme login olacak
  - Fail Scenario: Login işleminde hata alması durumunda 
  - Alternative Scenario
    - Forgot Password Scenario
- Forgot Password Scenario
- Admin-Dashboard:
  - Success Scenario:
  - Fail Scenario:
  - Alternative Scenario: 
- Admin-Logs
  - Success Scenario:
  - Fail Scenario:
  - Alternative Scenario:
- Yönetim Ara Ekranı
- 

# Tasarım

# Kodlama

# Test

# Yayın

