const { STATUS_CODE: code, MESSAGE: msg } = require('../../helpers/commons');

class Domain {
  static getAbout = async (req, res) => res.json({
    success: true,
    data: {
      about: `EasyLend merupakan sebuah aplikasi peminjaman P2P yang mempermudah UMKM mendapatkan dana bagi 
      bisnisnya serta dapat mengatur pengelolaan dan perencanaan keuangan.`,
      checkList: [
        'Fitur permodalan yang lengkap',
        'Memudahkan P2P lending',
        'Transaksi yang aman',
        'Financial Literacy',
        'E-Wallet'
      ],
      secondCheckList: [
        'Kapabilitas Machine Learning',
        'Optimalisasi SEO dan Outcome',
        'Laporan Keuangan',
        'Mentoring',
        'Pembukuan'
      ]
    },
    message: msg.SUCCESS,
    code: code.SUCCESS
  });

  static getContact = async (req, res) => res.json({
    success: true,
    data: {
      name: 'Hasimy Md',
      address: 'Telkom Digital Business, Menara Multimedia, Jl. Kebon Sirih No.12, RT.11/RW.2, Gambir, Kecamatan Gambir, Jakarta Pusat 10110',
      phoneNumber: '+62 812-3381-0366'
    },
    message: msg.SUCCESS,
    code: code.SUCCESS
  });

  static getOriginators = async (req, res) => res.json({
    success: true,
    data: [
      {
        img: '../img/pak_arifin.jpeg',
        name: 'Muhamad Arifin, M.Pd.',
        job: 'Guru/Pembimbing'
      },
      {
        img: '../img/franky.jpeg',
        name: 'Franky Wahyu',
        job: 'Hipster'
      },
      {
        img: '../img/lidya.jpg',
        name: 'Maulidya Dwi',
        job: 'Hustler'
      },
      {
        img: '../img/hasimy.jpg',
        name: 'Hasimy Md',
        job: 'Hacker'
      }
    ],
    message: msg.SUCCESS,
    code: code.SUCCESS
  });

  static getFeatures = async (req, res) => res.json({
    success: true,
    data: [
      {
        icon: 'fa fa-comment-o',
        title: 'Mentoring',
        text: 'Menghadirkan ahli dibidangnya untuk memberikan edukasi bisnis, digital marketing, dan lain-lain.'
      },
      {
        icon: 'fa fa-credit-card-alt',
        title: 'Pinjaman Modal',
        text: 'Perantara investor dan UMKM untuk insentif pengembangan usaha.'
      },
      {
        icon: 'fa fa-pie-chart',
        title: 'Pengelolaan Finansial',
        text: 'Membantu mengelola finansial usaha UMKM agar lebih terstruktur.'
      },
      {
        icon: 'fa fa-file-text',
        title: 'Perencanaan Finansial',
        text: 'Membantu UMKM dengan riset data finansial dan digitalisasi usaha.'
      }
    ],
    message: msg.SUCCESS,
    code: code.SUCCESS
  })
}

module.exports = Domain;
