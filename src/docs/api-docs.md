# API Documentation
<span style="
  display: inline-block;
  background-color: rgba(0, 255, 231, 0.1);
  color: #00ffe7;
  border: 1px solid #00ffe7;
  border-radius: 16px;
  padding: 4px 10px;
  font-size: 0.9rem;
  font-family: sans-serif;
  margin-top: 1rem;
">
  Author: Rizky Joanditya Nur Iman &copy; 2025
</span>
<span style="
  display: inline-block;
  background-color: rgba(0, 255, 231, 0.1);
  color: #00ffe7;
  border: 1px solid #00ffe7;
  border-radius: 16px;
  padding: 4px 10px;
  font-size: 0.9rem;
  font-family: sans-serif;
  margin-top: 1rem;
">
    Latest Updated : 12 Juni 2025
</span>

<br>

REST API ini dirancang untuk mengelola konten dalam CMS (Content Management System) aplikasi **https://sukoharjokab.go.id**. API ini menyediakan berbagai endpoint untuk membuat, membaca, memperbarui, dan menghapus data seperti artikel, kategori, media, dan pengaturan situs. Setiap endpoint mengikuti standar RESTful dan dilindungi menggunakan otentikasi token.


# Base URL

`http://localhost:3000/api/v1`

# Endpoints

## GET: /api/v1/posts

- **Description**: Get all posts
- **Response**: `200 OK`
  ```json
    {
        "success": true,
        "count": 3159,
        "data": [
            {
                "id": "001768c2-2906-43b8-b669-37873cecb679",
                "user_id": "7e188bb1-8bed-4595-9765-8ba8bd8f5b86",
                "title": "Bupati Dampingi Dirjen Kebudayaan Kunjungi Situs Keraton Kartasura",
                "slug": "bupati-dampingi-dirjen-kebudayaan-kunjungi-situs-keraton-kartasura",
                "content": "<!-- wp:tadv/classic-paragraph -->\n<p><strong>SUKOHARJO</strong> – Direktur Jenderal (Dirjen) Kebudayaan, Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi (Kemendikbudristek), Hilmar Farid berkunjung ke situs Keraton Kartasura, Minggu (24/4/2022). Kunjungan tersebut disambut Bupati Sukoharjo, Etik Suryani.</p>\n<p>Dalam kunjungannya tersebut, selain mengecek lokasi penjebolan tembok benteng keraton yang dijebol, Dirjen juga berkeliling ke situs Keraton Kartasura didampingi Bupati. Dirjen bersama Bupati terlihat berkeling situs untuk melihat dari dekat kondisi situs Keraton Kartasura.</p>\n<p>Terkait kasus perusakan tembok benteng keraton tersebut, Hilmar menyampaikan segala bentuk kegiatan yang bersinggungan dengan struktur bangunan atau benda cagar budaya diatur berdasarkan Undang-Undang Nomor 11 Tahun 2010 tentang Cagar Budaya. Untuk itu, masyarakat perlu diberi pemahaman terkait aturan itu khususnya yang tinggal di kompleks cagar budaya.</p>\n<p>“Sosialisasi perlu dilakukan agar masyarakat tahu bagaimana melakukan kegiatan di kawasan cagar budaya. Tidak bisa langsung membangun, harus ada koordinasi. Status benteng Keraton Kartasura sudah diperlakukan sebagai cagar budaya,” ujarnya.</p>\n<p>Untuk itu, lanjutnya, UU Nomor 11 Tahun 2010 sudah berlaku pada objek diduga cagar budaya (ODCB). Dalam waktu dekat, legalitas berupa surat keputusan (SK) penetapan cagar budaya segera ditetapkan oleh bupati.</p>\n<p>Terkait perusakan tembok benteng tersebut, Hilmar merekomendasikan aktivitas dilokasi dihentikan sementara waktu. Pemerintah daerah dan pemilik lahan duduk bersama menyamakan persepsi sehingga kedepan tidak saling bertabrakan lagi.</p>\n<p>Sedangkan Bupati Sukoharjo, Etik Suryani menyampaikan siap melakukan rekomendasi dari Dirjen Kebudayaan. Pemkab segera mengambil langkah-langkah untuk penetapan situs Keraton Kartasura sebagai cagar budaya. Termasuk juga menyusun Peraturan Daerah (Perda) bersama DPRD dan juga melakukan sinkronisasi dengan Dirjen Kebudayaan dan BPCB Jawa Tengah.</p>\n<p>“Pemkab segera melakukan koordinasi dan sinkronisasi dengan BPCB Jawa Tengah dan juga Dirjen Kebudataan karena pengelolaan dan pemeliharaan situs budaya tidak mudah,” ujar Bupati. (*)</p>\n<p><em>Sumber Bagian Protokol dan Komunikasi Pimpinan</em></p>\n<!-- /wp:tadv/classic-paragraph -->",
                "status": "publish",
                "image_id": "12a7d467-af32-4e24-82ef-4fd96a0e4707",
                "type_id": "10ff4fd0-6179-4e1e-9249-8f3151fce0ee",
                "attachment_id": null,
                "views": 0,
                "published_at": "2022-04-25 07:48:12",
                "created_at": "2025-04-29T07:49:22.000000Z",
                "updated_at": "2025-04-29T07:49:22.000000Z",
                "deleted_at": null,
                "user": {
                    "id": "7e188bb1-8bed-4595-9765-8ba8bd8f5b86",
                    "username": "admin-portal",
                    "email": "portal@sukoharjokab.go.id",
                    "email_verified_at": "2025-04-29T07:48:22.000000Z",
                    "created_at": "2025-04-29T07:48:22.000000Z",
                    "updated_at": "2025-04-29T07:48:22.000000Z"
                },
                "image": {
                    "id": "12a7d467-af32-4e24-82ef-4fd96a0e4707",
                    "name": "25-apr-keraton-kts-768x512",
                    "slug": "25-apr-keraton-kts-768x512",
                    "description": null,
                    "url": "https://portal.sukoharjokab.go.id/wp-content/uploads/2022/05/25-apr-keraton-kts-768x512.jpeg",
                    "created_at": "2025-04-29T07:48:57.000000Z",
                    "updated_at": "2025-04-29T07:48:57.000000Z"
                },
                "type": {
                    "id": "10ff4fd0-6179-4e1e-9249-8f3151fce0ee",
                    "name": "Post",
                    "slug": "post",
                    "created_at": "2025-04-29T07:48:23.000000Z",
                    "updated_at": "2025-04-29T07:48:23.000000Z"
                },
                "attachments": [],
                "taxonomies": [
                    {
                        "id": "ad995e08-9bfb-49ef-afd5-7665abba1b4c",
                        "term_id": "37beb483-7dfa-4fc0-b66e-9b31e5495782",
                        "taxonomy": "category",
                        "description": "",
                        "parent": null,
                        "count": 2815,
                        "created_at": "2025-04-29T07:48:34.000000Z",
                        "updated_at": "2025-04-29T07:48:34.000000Z",
                        "pivot": {
                            "post_id": "001768c2-2906-43b8-b669-37873cecb679",
                            "taxonomy_id": "ad995e08-9bfb-49ef-afd5-7665abba1b4c"
                        }
                    }
                ]
            },
        ...
        ]
  }

## POST: /api/v1/posts

- **Description**: Create a new post
- **Headers**:
  `Authorization: Bearer <token>`
- **Request Body**:
  ```json
  {
    "user_id": "7e188bb1-8bed-4595-9765-8ba8bd8f5b86",
    "title": "Post Title",
    "slug": "post-title",
    "content": "Post Content",
    "image_id": "12a7d467-af32-4e24-82ef-4fd96a0e4707",
    "type_id": "10ff4fd0-6179-4e1e-9249-8f3151fce0ee",
    "attachments": [],
    "taxonomies": [
        "ad995e08-9bfb-49ef-afd5-7665abba1b4c",
    ],
  }
