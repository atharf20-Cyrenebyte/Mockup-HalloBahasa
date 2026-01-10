import React from 'react';
import { Book, Award, Users, Target, Heart, TrendingUp, Star, MapPin, Calendar, Trophy, Briefcase, GraduationCap, Globe, Zap, Shield } from 'lucide-react';

function AboutUs() {
  const timeline = [
    { year: '2018', title: 'Awal Mula', desc: 'Coach Dimas mendirikan Kampoeng Bahasa dari rumah dengan 5 siswa pertama' },
    { year: '2019', title: 'Ekspansi Tim', desc: 'Merekrut 3 coach bersertifikat dan membuka tempat les pertama di Cibadak' },
    { year: '2020', title: 'Pandemi & Inovasi', desc: 'Bertahan di masa pandemi dengan menghadirkan kelas online' },
    { year: '2022', title: 'Multi Lokasi', desc: 'Membuka cabang di Palabuhanratu dan Cisaat' },
    { year: '2024', title: 'Digital Platform', desc: 'Meluncurkan platform booking online untuk kemudahan customer' },
    { year: '2025', title: 'Visi Baru', desc: 'Target 1000+ siswa aktif dan ekspansi ke kota-kota besar Jawa Barat' }
  ];

  const values = [
    { icon: Heart, title: 'Passion for Teaching', desc: 'Kami mengajar dengan hati, bukan hanya sekedar profesi' },
    { icon: Star, title: 'Excellence', desc: 'Standar kualitas tinggi dalam setiap aspek pembelajaran' },
    { icon: Users, title: 'Student-Centered', desc: 'Kebutuhan dan kemajuan siswa adalah prioritas utama' },
    { icon: Zap, title: 'Innovation', desc: 'Terus berinovasi dengan metode dan teknologi terkini' },
    { icon: Shield, title: 'Integrity', desc: 'Transparansi dan kejujuran dalam setiap layanan' },
    { icon: Globe, title: 'Global Mindset', desc: 'Mempersiapkan siswa untuk berkompetisi di kancah global' }
  ];

  const achievements = [
    { number: '2000+', label: 'Siswa Lulus', icon: GraduationCap },
    { number: '15+', label: 'Coach Bersertifikat', icon: Award },
    { number: '3', label: 'Lokasi Aktif', icon: MapPin },
    { number: '4.9/5', label: 'Rating Kepuasan', icon: Star }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Book className="text-amber-600 w-8 h-8" />
            <h1 className="text-2xl font-bold text-amber-600">Kampoeng Bahasa</h1>
          </div>
          <nav className="hidden md:flex gap-6 text-gray-700 font-semibold">
            <a href="#story" className="hover:text-amber-600 transition">Our Story</a>
            <a href="#chief" className="hover:text-amber-600 transition">Our Chief</a>
            <a href="#values" className="hover:text-amber-600 transition">Our Values</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-500 to-orange-500 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
            <span className="font-semibold">Tentang Kami</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Membangun Generasi<br />Unggul Berbahasa Inggris
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-8 text-white/90">
            Dari sebuah mimpi sederhana di tahun 2018, kini Kampoeng Bahasa telah menjadi rumah belajar bagi ribuan siswa di Sukabumi yang ingin menguasai bahasa Inggris dengan percaya diri.
          </p>
          <div className="flex justify-center gap-4">
            <div className="bg-white text-gray-800 px-8 py-4 rounded-xl">
              <div className="text-3xl font-bold text-amber-600">7+</div>
              <div className="text-sm">Tahun Berdiri</div>
            </div>
            <div className="bg-white text-gray-800 px-8 py-4 rounded-xl">
              <div className="text-3xl font-bold text-amber-600">2000+</div>
              <div className="text-sm">Siswa Lulus</div>
            </div>
            <div className="bg-white text-gray-800 px-8 py-4 rounded-xl">
              <div className="text-3xl font-bold text-amber-600">4.9/5</div>
              <div className="text-sm">Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story - Timeline */}
      <section id="story" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">Perjalanan Kami</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Dari ruang tamu sederhana hingga menjadi lembaga kursus bahasa Inggris terpercaya di Sukabumi
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-6 mb-8 relative">
                {/* Timeline Line */}
                {index !== timeline.length - 1 && (
                  <div className="absolute left-6 top-12 w-0.5 h-full bg-amber-200"></div>
                )}
                
                {/* Year Badge */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm z-10 relative" style={{ backgroundColor: '#FFFC00', color: '#000' }}>
                    {item.year.slice(2)}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-gray-50 rounded-xl p-6 hover:shadow-lg transition">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-5 h-5 text-amber-600" />
                    <span className="font-bold text-amber-600">{item.year}</span>
                  </div>
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: '#FFFC00' }}>
                <Target className="w-8 h-8 text-gray-800" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Visi Kami</h3>
              <p className="text-gray-700 leading-relaxed">
                Menjadi lembaga pendidikan bahasa Inggris terkemuka di Jawa Barat yang menghasilkan generasi muda yang percaya diri, kompeten, dan siap bersaing di era global.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-6">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Misi Kami</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span>Memberikan pembelajaran berkualitas dengan metode terkini</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span>Menghadirkan coach bersertifikat internasional</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span>Menciptakan lingkungan belajar yang nyaman dan mendukung</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Chief Profile */}
      <section id="chief" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">Meet Our Chief</h3>
            <p className="text-xl text-gray-600">Visioner di balik kesuksesan Kampoeng Bahasa</p>
          </div>

          <div className="max-w-4xl mx-auto bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl overflow-hidden shadow-2xl">
            <div className="md:flex">
              {/* Photo */}
              <div className="md:w-2/5 bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center p-12">
                <div className="w-64 h-64 rounded-full bg-white/20 backdrop-blur-sm border-8 border-white/30 overflow-hidden flex items-center justify-center">
                  <img 
                    src="Coach Dimas Chief.jpeg" 
                    alt="Coach Dimas" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Info */}
              <div className="md:w-3/5 p-8 md:p-12">
                <div className="mb-6">
                  <h4 className="text-3xl font-bold mb-2">Dimas Holil</h4>
                  <p className="text-xl text-amber-600 font-semibold mb-4">Founder & Chief Executive Coach</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-semibold">TESOL Certified</span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">Cambridge CELTA</span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">IELTS Expert</span>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <p className="text-gray-700 leading-relaxed">
                    Coach Dimas, yang memiliki nama asli Dimas Holil, merupakan pengajar bahasa Inggris yang aktif mengajar di Kampoeng Inggris Sukabumi. Ia dikenal sebagai penemu sekaligus pendiri Kampoeng Inggris di Sukabumi, sebuah inisiatif pendidikan yang bertujuan meningkatkan kemampuan bahasa Inggris masyarakat. Selain itu, ia juga dikenal dengan nama lain Celebrity English Deemust, yang merepresentasikan perannya sebagai figur publik di bidang edukasi bahasa Inggris.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Dalam riwayat pendidikannya, Dimas Holil merupakan lulusan SMUN Cisaat dan melanjutkan pendidikan di STMI. Di luar dunia pendidikan formal, ia juga menekuni bidang seni sebagai penyanyi dengan nama panggung Dondimas. Pengalaman profesionalnya mencakup pengajaran bahasa Inggris di Pondok Pesantren Daarut Tarmizi, yang semakin memperkaya kompetensinya sebagai pendidik dengan latar belakang akademik, praktis, dan kreatif.
                  </p>
                </div>

                <div className="border-t pt-6">
                  <h5 className="font-bold mb-4 flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-amber-600" />
                    Key Achievements
                  </h5>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                      <span>Best English Educator Award - Sukabumi 2022</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                      <span>Trained 2000+ students with 95% success rate</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                      <span>Speaker di 15+ seminar pendidikan nasional</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                      <span>Penulis buku "English Mastery in 90 Days"</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Quote */}
          <div className="max-w-3xl mx-auto mt-12 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-amber-500">
              <p className="text-2xl text-gray-700 italic mb-4">
                "Bahasa Inggris bukan hanya skill, tapi jendela menuju dunia yang lebih luas. Setiap siswa berhak mendapatkan kesempatan untuk membuka jendela itu."
              </p>
              <p className="font-bold text-amber-600">- Mister Dee Must</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section id="values" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">Our Core Values</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nilai-nilai yang menjadi fondasi setiap keputusan dan tindakan kami
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#FFFC00' }}>
                    <Icon className="w-7 h-7 text-gray-800" />
                  </div>
                  <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                  <p className="text-gray-600">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements Stats */}
      <section className="py-16 bg-gradient-to-br from-amber-500 to-orange-500 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">Our Impact</h3>
            <p className="text-xl text-white/90">Angka-angka yang berbicara tentang dedikasi kami</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {achievements.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/20 transition">
                  <Icon className="w-12 h-12 mx-auto mb-4" />
                  <div className="text-4xl font-bold mb-2">{item.number}</div>
                  <div className="text-white/90">{item.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-6">Siap Bergabung dengan Kami?</h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Menjadi bagian dari keluarga besar Kampoeng Bahasa dan raih impian Anda bersama kami
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="text-gray-800 px-8 py-4 rounded-lg hover:bg-yellow-500 transition font-bold text-lg shadow-lg" style={{ backgroundColor: '#FFFC00' }}>
              Daftar Sebagai Siswa
            </button>
            <button className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition font-bold text-lg shadow-lg">
              Daftar Sebagai Coach
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Book className="w-8 h-8 text-amber-500" />
                <h4 className="text-xl font-bold">Kampoeng Bahasa</h4>
              </div>
              <p className="text-gray-400">Membangun generasi unggul berbahasa Inggris sejak 2018</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#story" className="hover:text-white transition">Our Story</a></li>
                <li><a href="#chief" className="hover:text-white transition">Our Chief</a></li>
                <li><a href="#values" className="hover:text-white transition">Our Values</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Lokasi</h4>
              <ul className="space-y-2 text-gray-400">
                <li>• Cibadak (Pusat)</li>
                <li>• Palabuhanratu</li>
                <li>• Cisaat</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Kontak</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+62 812-3456-789</li>
                <li>info@kampoengbahasa.id</li>
                <li>Sukabumi, Jawa Barat</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Kampoeng Bahasa. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default AboutUs;