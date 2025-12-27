import React, { useState } from 'react';
import { Book, Award, Home, MapPin, Users, Clock, LogOut, Filter, Calendar, ArrowLeft, CheckCircle, XCircle, Trash2, Plus} from 'lucide-react';
import PromoPage from './PromoPage';

const initialCoaches = [
  { id: 1, name: "Anjai", photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah", location: "Cibadak, Sukabumi", certifications: ["TESOL", "IELTS"], price: { private: 150000, public: 100000 }, availability: ["Sen 14:00-17:00", "Rab 14:00-17:00"], studentCount: 8, maxStudents: 15, bio: "10+ tahun pengalaman. Spesialisasi IELTS dan business English.", isAvailable: true },
  { id: 2, name: "Fathar", photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Budi", location: "Palabuhanratu, Sukabumi", certifications: ["CELTA", "TOEFL"], price: { private: 120000, public: 80000 }, availability: ["Sel 15:00-18:00", "Kam 15:00-18:00"], studentCount: 12, maxStudents: 15, bio: "Fun learning untuk anak-anak dan remaja.", isAvailable: true },
  { id: 3, name: "Indra", photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rizki", location: "Cibadak, Sukabumi", certifications: ["TOEFL", "Conversation"], price: { private: 110000, public: 75000 }, availability: ["Rab 10:00-13:00", "Jum 10:00-13:00"], studentCount: 6, maxStudents: 15, bio: "Fokus conversation dan speaking skills.", isAvailable: true },
  { id: 4, name: "Raida", photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Diana", location: "Palabuhanratu, Sukabumi", certifications: ["CELTA", "Grammar"], price: { private: 140000, public: 95000 }, availability: ["Sel 14:00-17:00", "Kam 14:00-17:00"], studentCount: 10, maxStudents: 15, bio: "Spesialis grammar dan academic writing.", isAvailable: true }
];

const sessions = [
  { id: 'pagi', label: 'Sesi 1 - Pagi', time: '08.00-09.30' },
  { id: 'siang', label: 'Sesi 2 - Siang', time: '10.00-11.30' },
  { id: 'sore', label: 'Sesi 3 - Sore', time: '14.30-17.00' },
  { id: 'malam', label: 'Sesi 4 - Malam', time: '18.30-20.00' }
];

function App() {
  const [page, setPage] = useState('landing');
  const [role, setRole] = useState(null);
  const [filterLoc, setFilterLoc] = useState('all');
  const [selCoach, setSelCoach] = useState(null);
  const [coaches, setCoaches] = useState(initialCoaches);
  const [bookings, setBookings] = useState([]);
  const [form, setForm] = useState({ program: 'private', date: '', session: 'pagi', notes: '' });
  const [showAddCoach, setShowAddCoach] = useState(false);
  const [newCoach, setNewCoach] = useState({
    name: '', location: '', certifications: '', 
    pricePrivate: '', pricePublic: '', availability: '', 
    bio: '', photo: ''
  });

  const Header = () => (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Book className="text-amber-600 w-8 h-8" />
          <h1 className="text-2xl font-bold text-amber-600">Hallo Bahasa</h1>
        </div>
        <div className="flex items-center gap-4">
          {role === 'customer' && (
            <>
              <button onClick={() => setPage('coaches')} className="hidden md:block text-gray-700 hover:text-amber-600 font-semibold">Browse</button>
              <button onClick={() => setPage('my-bookings')} className="hidden md:block text-gray-700 hover:text-amber-600 font-semibold">My Bookings</button>
            </>
          )}
          {role === 'coach' && <button onClick={() => setPage('coach-dash')} className="hidden md:block text-gray-700 hover:text-amber-600 font-semibold">Dashboard</button>}
          {role === 'admin' && <button onClick={() => setPage('admin-dash')} className="hidden md:block text-gray-700 hover:text-amber-600 font-semibold">Admin</button>}
          <span className="text-sm text-gray-600 hidden md:block">{role === 'customer' ? '👤' : role === 'coach' ? '🎓' : '⚙️'} {role}</span>
          <button onClick={() => { setRole(null); setPage('landing'); }} className="text-red-600 hover:text-red-700"><LogOut className="w-5 h-5" /></button>
        </div>
      </div>
    </header>
  );

  const handleAddCoach = (e) => {
  e.preventDefault();
  const coach = {
    id: coaches.length + 1,
    name: newCoach.name,
    photo: newCoach.photo || `https://api.dicebear.com/7.x/avataaars/svg?seed=${newCoach.name}`,
    location: newCoach.location,
    certifications: newCoach.certifications.split(',').map(c => c.trim()),
    price: {
      private: parseInt(newCoach.pricePrivate),
      public: parseInt(newCoach.pricePublic)
    },
    availability: newCoach.availability.split(',').map(a => a.trim()),
    studentCount: 0,
    maxStudents: 15,
    bio: newCoach.bio,
    isAvailable: true
  };
  setCoaches([...coaches, coach]);
  setNewCoach({ name: '', location: '', certifications: '', pricePrivate: '', pricePublic: '', availability: '', bio: '', photo: '' });
  setShowAddCoach(false);
  alert('✅ Coach berhasil ditambahkan!');
  };

  if (page === 'landing') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-amber-100">
        <header className="bg-white shadow-sm sticky top-0">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center gap-2"><Book className="text-amber-600 w-8 h-8" /><h1 className="text-2xl font-bold text-amber-600">Hallo Bahasa</h1></div>
            <button onClick={() => setPage('login')} className="text-gray-800 px-6 py-2 rounded-lg hover:bg-yellow-500 font-semibold" style={{ backgroundColor: '#FFFC00' }}>Login</button>
          </div>
        </header>
        <section className="container mx-auto px-4 py-20 text-center">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">Belajar Bahasa Inggris dengan <span className="text-amber-600">Coach Profesional</span></h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">Temukan coach bersertifikat di Sukabumi. Private atau Public class!</p>
          <div className="flex flex-col gap-4 items-center">
            <button
              onClick={() => setPage('login')}className="text-gray-800 px-8 py-4 rounded-lg text-lg hover:bg-yellow-500 transition font-semibold"style={{ backgroundColor: '#FFFC00' }} >
              Mulai Sekarang
            </button>

            <button
              onClick={() => setPage('promo')}className="text-yellow-600 px-8 py-4 rounded-lg text-lg border-2 border-yellow-400 hover:bg-yellow-100 transition font-semibold">
              Lihat Promo Spesial 🎉
            </button>
          </div>

          </section>
        
        <section className="container mx-auto px-4 py-16">
          <h3 className="text-3xl font-bold text-center mb-12">Kenapa Pilih Hallo Bahasa?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md text-center"><Award className="w-16 h-16 text-amber-600 mx-auto mb-4" /><h4 className="text-xl font-semibold mb-3">Coach Bersertifikat</h4><p className="text-gray-600">Sertifikat internasional</p></div>
            <div className="bg-white p-8 rounded-xl shadow-md text-center"><Home className="w-16 h-16 text-amber-600 mx-auto mb-4" /><h4 className="text-xl font-semibold mb-3">Fleksibel</h4><p className="text-gray-600">Private atau Public</p></div>
            <div className="bg-white p-8 rounded-xl shadow-md text-center"><MapPin className="w-16 h-16 text-amber-600 mx-auto mb-4" /><h4 className="text-xl font-semibold mb-3">Lokal</h4><p className="text-gray-600">Area Sukabumi</p></div>
          </div>
        </section>
      </div>
    );
  }

  if (page === 'login') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-amber-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
          <div className="text-center mb-8"><Book className="w-20 h-20 text-amber-600 mx-auto mb-4" /><h2 className="text-3xl font-bold">Login</h2></div>
          <div className="space-y-4">
            <button onClick={() => { setRole('customer'); setPage('coaches'); }} className="w-full text-gray-800 py-4 rounded-lg hover:bg-yellow-500 font-semibold" style={{ backgroundColor: '#FFFC00' }}>👤 Customer</button>
            <button onClick={() => { setRole('coach'); setPage('coach-dash'); }} className="w-full bg-green-600 text-white py-4 rounded-lg hover:bg-green-700 font-semibold">🎓 Coach</button>
            <button onClick={() => { setRole('admin'); setPage('admin-dash'); }} className="w-full bg-purple-600 text-white py-4 rounded-lg hover:bg-purple-700 font-semibold">⚙️ Admin</button>
          </div>
          <button onClick={() => setPage('landing')} className="w-full mt-6 text-gray-600">← Kembali</button>
        </div>
      </div>
    );
  }



  if (page === 'coaches') {
    const locs = ['all', 'Cibadak', 'Palabuhanratu'];
    const filtered = filterLoc === 'all' ? coaches.filter(c => c.isAvailable) : coaches.filter(c => c.isAvailable && c.location.includes(filterLoc));
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-4xl font-bold mb-2">Daftar Coach</h2>
          <p className="text-gray-600 mb-8">Pilih coach terbaik di Sukabumi</p>
          <div className="bg-white rounded-xl shadow-md p-6 mb-8 flex items-center gap-4 flex-wrap">
            <Filter className="w-5 h-5 text-amber-600" />
            <span className="font-semibold">Filter:</span>
            {locs.map(l => <button key={l} onClick={() => setFilterLoc(l)} className={`px-4 py-2 rounded-lg font-semibold ${filterLoc === l ? 'text-gray-800' : 'bg-gray-100 text-gray-600'}`} style={filterLoc === l ? { backgroundColor: '#FFFC00' } : {}}>{l === 'all' ? 'Semua' : l}</button>)}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(c => (
              <div key={c.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
                <div className="relative"><img src={c.photo} alt={c.name} className="w-full h-56 object-cover bg-gray-200" /><div className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">Available</div></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{c.name}</h3>
                  <p className="text-gray-600 flex items-center gap-2 mb-3"><MapPin className="w-4 h-4 text-amber-600" />{c.location}</p>
                  <div className="mb-4">{c.certifications.map((cert, i) => <span key={i} className="inline-block bg-amber-100 text-amber-700 text-xs px-3 py-1 rounded-full mr-2 mb-2 font-semibold">{cert}</span>)}</div>
                  <p className="text-sm text-gray-600 mb-4">{c.bio}</p>
                  <div className="border-t pt-4 mb-4">
                    <div className="flex justify-between mb-2"><span className="text-sm text-gray-600">Private</span><span className="font-bold text-amber-600">Rp {c.price.private.toLocaleString('id-ID')}</span></div>
                    <div className="flex justify-between"><span className="text-sm text-gray-600">Public</span><span className="font-bold text-amber-600">Rp {c.price.public.toLocaleString('id-ID')}</span></div>
                  </div>
                  <button onClick={() => { setSelCoach(c); setPage('detail'); }} className="w-full text-gray-800 py-3 rounded-lg hover:bg-yellow-500 font-semibold" style={{ backgroundColor: '#FFFC00' }}>Detail & Booking</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (page === 'detail' && selCoach) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <button onClick={() => setPage('coaches')} className="flex items-center gap-2 text-amber-600 hover:text-amber-700 mb-6 font-semibold"><ArrowLeft className="w-5 h-5" />Kembali</button>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6">
              <img src={selCoach.photo} alt={selCoach.name} className="w-40 h-40 rounded-full mx-auto mb-6 bg-gray-200" />
              <h2 className="text-3xl font-bold text-center mb-2">{selCoach.name}</h2>
              <p className="text-center text-gray-600 flex items-center justify-center gap-2 mb-6"><MapPin className="w-5 h-5" />{selCoach.location}</p>
              <div className="mb-6"><h3 className="font-semibold mb-3 flex items-center gap-2"><Award className="w-5 h-5 text-amber-600" />Sertifikasi</h3>{selCoach.certifications.map((c, i) => <div key={i} className="flex items-center gap-2 bg-amber-50 px-4 py-2 rounded-lg mb-2"><CheckCircle className="w-4 h-4 text-amber-600" /><span className="text-sm font-semibold">{c}</span></div>)}</div>
              <div className="mb-6"><h3 className="font-semibold mb-2">Bio</h3><p className="text-gray-600">{selCoach.bio}</p></div>
              <div className="mb-6"><h3 className="font-semibold mb-3 flex items-center gap-2"><Clock className="w-5 h-5 text-amber-600" />Jadwal</h3>{selCoach.availability.map((s, i) => <div key={i} className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg mb-2"><Calendar className="w-4 h-4" /><span className="text-sm">{s}</span></div>)}</div>
              <div className="border-t pt-4"><h3 className="font-semibold mb-3">Harga</h3><div className="space-y-2"><div className="flex justify-between bg-amber-50 px-4 py-3 rounded-lg"><span>Private</span><span className="font-bold text-amber-600">Rp {selCoach.price.private.toLocaleString('id-ID')}</span></div><div className="flex justify-between bg-amber-50 px-4 py-3 rounded-lg"><span>Public</span><span className="font-bold text-amber-600">Rp {selCoach.price.public.toLocaleString('id-ID')}</span></div></div></div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="text-3xl font-bold mb-6">Form Booking</h3>
              <form onSubmit={(e) => { e.preventDefault(); if (!form.date || !form.session) return alert('Lengkapi form!'); setBookings([...bookings, { id: bookings.length + 1, coachId: selCoach.id, coachName: selCoach.name, coachPhoto: selCoach.photo, customerName: "Demo", program: form.program, date: form.date, session: form.session, notes: form.notes, price: form.program === 'private' ? selCoach.price.private : selCoach.price.public, status: 'pending' }]); setForm({ program: 'private', date: '', sessions: '', notes: '' }); alert('🎉 Booking berhasil!'); setPage('my-bookings'); }} className="space-y-6">
                <div><label className="block font-semibold mb-3">Program</label><div className="grid grid-cols-2 gap-4"><button type="button" onClick={() => setForm({...form, program: 'private'})} className={`p-4 rounded-xl border-2 ${form.program === 'private' ? 'border-amber-500 bg-amber-50' : 'border-gray-200'}`}><Home className="w-8 h-8 text-amber-600 mx-auto mb-2" /><h4 className="font-bold mb-1">Private</h4><p className="text-xs text-gray-600 mb-2">Ke rumah</p><p className="font-bold text-amber-600">Rp {selCoach.price.private.toLocaleString('id-ID')}</p></button><button type="button" onClick={() => setForm({...form, program: 'public'})} className={`p-4 rounded-xl border-2 ${form.program === 'public' ? 'border-amber-500 bg-amber-50' : 'border-gray-200'}`}><Users className="w-8 h-8 text-amber-600 mx-auto mb-2" /><h4 className="font-bold mb-1">Public</h4><p className="text-xs text-gray-600 mb-2">Tempat les</p><p className="font-bold text-amber-600">Rp {selCoach.price.public.toLocaleString('id-ID')}</p></button></div></div>
                <div><label className="block font-semibold mb-2">Tanggal</label><input type="date" value={form.date} onChange={(e) => setForm({...form, date: e.target.value})} className="w-full border-2 rounded-lg px-4 py-3" required /></div>
                <div>
                  <label className="block font-semibold mb-2">Pilih Sesi *</label>
                  <div className="grid grid-cols-2 gap-3">
                    {sessions.map(s => (
                      <button 
                        key={s.id}
                        type="button"
                        onClick={() => setForm({...form, session: s.id})}
                        className={`p-4 rounded-lg border-2 transition text-left ${
                          form.session === s.id 
                            ? 'border-amber-500 bg-amber-50' 
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        <div className="font-bold text-sm mb-1">{s.label}</div>
                        <div className="text-xs text-gray-600">{s.time}</div>
                      </button>
                    ))}
                  </div>
                </div>
                <div><label className="block font-semibold mb-2">Catatan</label><textarea value={form.notes} onChange={(e) => setForm({...form, notes: e.target.value})} className="w-full border-2 rounded-lg px-4 py-3" rows="3" placeholder="Tulis catatan..."></textarea></div>
                <button type="submit" className="w-full text-gray-800 py-4 rounded-lg hover:bg-yellow-500 font-bold text-lg" style={{ backgroundColor: '#FFFC00' }}>Konfirmasi Booking</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (page === 'my-bookings') {
    const mine = bookings.filter(b => b.customerName === "Demo");
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-4xl font-bold mb-8">My Bookings</h2>
          {mine.length === 0 ? <div className="bg-white rounded-xl shadow-md p-12 text-center"><p className="text-gray-600 mb-4">Belum ada booking</p><button onClick={() => setPage('coaches')} className="text-gray-800 px-6 py-2 rounded-lg font-semibold" style={{ backgroundColor: '#FFFC00' }}>Browse Coach</button></div> : <div className="space-y-4">{mine.map(b => <div key={b.id} className="bg-white rounded-xl shadow-md p-6"><div className="flex justify-between items-start"><div className="flex gap-4"><img src={b.coachPhoto} alt={b.coachName} className="w-16 h-16 rounded-full bg-gray-200" /><div><h3 className="text-xl font-bold mb-1">{b.coachName}</h3><p className="text-gray-600 mb-1">Program: {b.program === 'private' ? 'Private' : 'Public'}</p><p className="text-gray-600 mb-1">Tanggal: {b.date} | Sesi: {b.sessionTime || b.session}</p><p className="font-bold text-amber-600">Rp {b.price.toLocaleString('id-ID')}</p>{b.notes && <p className="text-sm text-gray-500 mt-2">Catatan: {b.notes}</p>}</div></div><span className={`px-4 py-2 rounded-full text-sm font-semibold ${b.status === 'approved' ? 'bg-green-100 text-green-700' : b.status === 'rejected' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'}`}>{b.status === 'approved' ? '✓ Approved' : b.status === 'rejected' ? '✗ Rejected' : '⏱ Pending'}</span></div></div>)}</div>}
        </div>
      </div>
    );
  }

  if (page === 'coach-dash') {
    const cb = bookings.filter(b => b.coachName === "Sarah Johnson");
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-4xl font-bold mb-8">Coach Dashboard</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-md p-6"><h3 className="text-gray-600 mb-2">Total</h3><p className="text-4xl font-bold text-amber-600">{cb.length}</p></div>
            <div className="bg-white rounded-xl shadow-md p-6"><h3 className="text-gray-600 mb-2">Pending</h3><p className="text-4xl font-bold text-yellow-600">{cb.filter(b => b.status === 'pending').length}</p></div>
            <div className="bg-white rounded-xl shadow-md p-6"><h3 className="text-gray-600 mb-2">Approved</h3><p className="text-4xl font-bold text-green-600">{cb.filter(b => b.status === 'approved').length}</p></div>
          </div>
          <h3 className="text-2xl font-bold mb-4">Bookings</h3>
          {cb.length === 0 ? <div className="bg-white rounded-xl shadow-md p-12 text-center"><p className="text-gray-600">Belum ada booking</p></div> : <div className="space-y-4">{cb.map(b => <div key={b.id} className="bg-white rounded-xl shadow-md p-6"><div className="flex justify-between"><div><h4 className="text-lg font-bold mb-1">{b.customerName}</h4><p className="text-gray-600">Program: {b.program}</p><p className="text-gray-600">{b.date} | Sesi: {b.sessionTime || b.session}</p><p className="font-bold text-amber-600">Rp {b.price.toLocaleString('id-ID')}</p></div><span className={`px-4 py-2 rounded-full text-sm font-semibold h-fit ${b.status === 'approved' ? 'bg-green-100 text-green-700' : b.status === 'rejected' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'}`}>{b.status}</span></div></div>)}</div>}
        </div>
      </div>
    );
  }

  // Di bagian return App.jsx, tambahkan:
  if (page === 'promo') {
    return <PromoPage />;
  }

  if (page === 'admin-dash') {
    return (
      <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-4xl font-bold mb-8">Admin Panel</h2>
        
        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-gray-600 mb-2">Coaches</h3>
            <p className="text-4xl font-bold text-amber-600">{coaches.length}</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-gray-600 mb-2">Bookings</h3>
            <p className="text-4xl font-bold text-green-600">{bookings.length}</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-gray-600 mb-2">Pending</h3>
            <p className="text-4xl font-bold text-yellow-600">{bookings.filter(b => b.status === 'pending').length}</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-gray-600 mb-2">Approved</h3>
            <p className="text-4xl font-bold text-blue-600">{bookings.filter(b => b.status === 'approved').length}</p>
          </div>
        </div>
        
        {/* Manage Bookings Section */}
        <h3 className="text-2xl font-bold mb-4">Manage Bookings</h3>
        {bookings.length === 0 ? (
          <div className="bg-white rounded-xl shadow-md p-12 text-center mb-12">
            <p className="text-gray-600">Belum ada booking</p>
          </div>
        ) : (
          <div className="space-y-4 mb-12">
            {bookings.map(b => (
              <div key={b.id} className="bg-white rounded-xl shadow-md p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-lg font-bold">{b.customerName} → {b.coachName}</h4>
                    <p className="text-gray-600">{b.program} | {b.date} {b.time}</p>
                    <p className="font-bold text-amber-600">Rp {b.price.toLocaleString('id-ID')}</p>
                  </div>
                  <div className="flex gap-2">
                    {b.status === 'pending' && (
                      <>
                        <button 
                          onClick={() => setBookings(bookings.map(bk => bk.id === b.id ? {...bk, status: 'approved'} : bk))} 
                          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 flex items-center gap-2"
                        >
                          <CheckCircle className="w-4 h-4" />Approve
                        </button>
                        <button 
                          onClick={() => setBookings(bookings.map(bk => bk.id === b.id ? {...bk, status: 'rejected'} : bk))} 
                          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 flex items-center gap-2"
                        >
                          <XCircle className="w-4 h-4" />Reject
                        </button>
                      </>
                    )}
                    {b.status !== 'pending' && (
                      <span className={`px-4 py-2 rounded-full text-sm font-semibold ${b.status === 'approved' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                        {b.status}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Manage Coaches Section */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold">Manage Coaches</h3>
          <button 
            onClick={() => setShowAddCoach(true)}
            className="text-gray-800 px-6 py-3 rounded-lg hover:bg-yellow-500 font-semibold flex items-center gap-2 shadow-md"
            style={{ backgroundColor: '#FFFC00' }}
          >
            <Plus className="w-5 h-5" />
            Tambah Coach Baru
          </button>
        </div>

        {/* Add Coach Modal */}
        {showAddCoach && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">Tambah Coach Baru</h3>
                <button onClick={() => setShowAddCoach(false)} className="text-gray-500 hover:text-gray-700">
                  <XCircle className="w-6 h-6" />
                </button>
              </div>

              <form onSubmit={handleAddCoach} className="space-y-4">
                <div>
                  <label className="block font-semibold mb-2">Nama Coach *</label>
                  <input 
                    type="text" 
                    value={newCoach.name} 
                    onChange={(e) => setNewCoach({...newCoach, name: e.target.value})}
                    className="w-full border-2 rounded-lg px-4 py-2"
                    placeholder="e.g. John Doe"
                    required
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-2">Lokasi *</label>
                  <input 
                    type="text" 
                    value={newCoach.location} 
                    onChange={(e) => setNewCoach({...newCoach, location: e.target.value})}
                    className="w-full border-2 rounded-lg px-4 py-2"
                    placeholder="e.g. Cibadak, Sukabumi"
                    required
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-2">Sertifikasi * (pisahkan dengan koma)</label>
                  <input 
                    type="text" 
                    value={newCoach.certifications} 
                    onChange={(e) => setNewCoach({...newCoach, certifications: e.target.value})}
                    className="w-full border-2 rounded-lg px-4 py-2"
                    placeholder="e.g. TESOL, IELTS Trainer"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold mb-2">Harga Private (Rp) *</label>
                    <input 
                      type="number" 
                      value={newCoach.pricePrivate} 
                      onChange={(e) => setNewCoach({...newCoach, pricePrivate: e.target.value})}
                      className="w-full border-2 rounded-lg px-4 py-2"
                      placeholder="150000"
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-semibold mb-2">Harga Public (Rp) *</label>
                    <input 
                      type="number" 
                      value={newCoach.pricePublic} 
                      onChange={(e) => setNewCoach({...newCoach, pricePublic: e.target.value})}
                      className="w-full border-2 rounded-lg px-4 py-2"
                      placeholder="100000"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold mb-2">Jadwal Tersedia * (pisahkan dengan koma)</label>
                  <input 
                    type="text" 
                    value={newCoach.availability} 
                    onChange={(e) => setNewCoach({...newCoach, availability: e.target.value})}
                    className="w-full border-2 rounded-lg px-4 py-2"
                    placeholder="e.g. Sen 14:00-17:00, Rab 14:00-17:00"
                    required
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-2">Bio *</label>
                  <textarea 
                    value={newCoach.bio} 
                    onChange={(e) => setNewCoach({...newCoach, bio: e.target.value})}
                    className="w-full border-2 rounded-lg px-4 py-2"
                    rows="3"
                    placeholder="Ceritakan tentang pengalaman dan spesialisasi coach..."
                    required
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-2">URL Foto (optional)</label>
                  <input 
                    type="text" 
                    value={newCoach.photo} 
                    onChange={(e) => setNewCoach({...newCoach, photo: e.target.value})}
                    className="w-full border-2 rounded-lg px-4 py-2"
                    placeholder="https://... (kosongkan untuk auto-generate)"
                  />
                  <p className="text-sm text-gray-500 mt-1">Kosongkan untuk generate avatar otomatis</p>
                </div>

                <div className="flex gap-4 pt-4">
                  <button 
                    type="submit"
                    className="flex-1 text-gray-800 py-3 rounded-lg hover:bg-yellow-500 font-bold"
                    style={{ backgroundColor: '#FFFC00' }}
                  >
                    Tambah Coach
                  </button>
                  <button 
                    type="button"
                    onClick={() => setShowAddCoach(false)}
                    className="flex-1 bg-gray-200 py-3 rounded-lg hover:bg-gray-300 font-bold"
                  >
                    Batal
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Coaches Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coaches.map(c => (
            <div key={c.id} className="bg-white rounded-xl shadow-md p-6">
              <img src={c.photo} alt={c.name} className="w-20 h-20 rounded-full mx-auto mb-4 bg-gray-200" />
              <h4 className="text-lg font-bold text-center mb-2">{c.name}</h4>
              <p className="text-sm text-gray-600 text-center mb-2">{c.location}</p>
              <div className="flex justify-center gap-2 mb-4">
                {c.certifications.map((cert, i) => (
                  <span key={i} className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full">{cert}</span>
                ))}
              </div>
              <div className="text-center mb-4">
                <p className="text-sm text-gray-600">Private: <span className="font-bold">Rp {c.price.private.toLocaleString('id-ID')}</span></p>
                <p className="text-sm text-gray-600">Public: <span className="font-bold">Rp {c.price.public.toLocaleString('id-ID')}</span></p>
              </div>
              <button 
                onClick={() => { 
                  if (confirm('Hapus coach ini?')) { 
                    setCoaches(coaches.filter(coach => coach.id !== c.id)); 
                    alert('Coach dihapus!'); 
                  } 
                }}
                className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 flex items-center justify-center gap-2"
              >
                <Trash2 className="w-4 h-4" />Hapus
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
    );
  }

  return null;
}

export default App;