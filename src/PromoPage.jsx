import React, { useState } from 'react';
import { ShoppingCart, Star, CheckCircle, ArrowRight, Phone, Mail, MapPin, Gift, Zap, TrendingUp, Package, Truck, Shield, Clock, Tag, Users } from 'lucide-react';

function PromoHub() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    city: ''
  });

  const products = [
    {
      id: 1,
      name: 'Kaos Premium Kampung Bahasa',
      category: 'Fashion',
      price: 150000,
      discount: 50,
      finalPrice: 75000,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
      stock: 50,
      sold: 234,
      rating: 4.8,
      reviews: 89,
      description: 'Kaos cotton combed 30s dengan design eksklusif Kampung Bahasa. Nyaman, adem, dan stylish!'
    },
    {
      id: 2,
      name: 'Tumbler Stainless Premium',
      category: 'Peralatan',
      price: 200000,
      discount: 40,
      finalPrice: 120000,
      image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400',
      stock: 30,
      sold: 156,
      rating: 4.9,
      reviews: 67,
      description: 'Tumbler stainless 500ml dengan insulasi ganda. Keeps hot 12h, cold 24h. Anti tumpah!'
    },
    {
      id: 3,
      name: 'Buku English Mastery Guide',
      category: 'Buku',
      price: 120000,
      discount: 35,
      finalPrice: 78000,
      image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400',
      stock: 100,
      sold: 445,
      rating: 4.7,
      reviews: 203,
      description: 'Panduan lengkap menguasai bahasa Inggris dari basic hingga advanced. 300+ halaman!'
    },
    {
      id: 4,
      name: 'Tiket Seminar English Mastery 2025',
      category: 'Event',
      price: 300000,
      discount: 60,
      finalPrice: 120000,
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400',
      stock: 25,
      sold: 78,
      rating: 5.0,
      reviews: 34,
      description: 'Tiket seminar 2 hari dengan native speaker. Include: materi, sertifikat, lunch, dan networking!'
    },
    {
      id: 5,
      name: 'Totebag Canvas Premium',
      category: 'Fashion',
      price: 80000,
      discount: 45,
      finalPrice: 44000,
      image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400',
      stock: 75,
      sold: 312,
      rating: 4.6,
      reviews: 145,
      description: 'Totebag canvas tebal dengan design minimalis. Perfect untuk daily use!'
    },
    {
      id: 6,
      name: 'Set Alat Tulis Premium',
      category: 'Stationery',
      price: 95000,
      discount: 40,
      finalPrice: 57000,
      image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=400',
      stock: 60,
      sold: 189,
      rating: 4.5,
      reviews: 92,
      description: 'Set lengkap: pen, pencil, eraser, ruler, sharpener dalam box eksklusif!'
    }
  ];

  const handleOrder = () => {
    if (!selectedProduct || !formData.name || !formData.phone || !formData.address) {
      alert('Mohon lengkapi semua data!');
      return;
    }
    
    const total = selectedProduct.finalPrice * quantity;
    const message = `Halo! Saya ingin order:
Produk: ${selectedProduct.name}
Jumlah: ${quantity}
Total: Rp ${total.toLocaleString('id-ID')}

Nama: ${formData.name}
HP: ${formData.phone}
Alamat: ${formData.address}, ${formData.city}`;
    
    window.open(`https://wa.me/6287775404612?text=${encodeURIComponent(message)}`, '_blank');
    alert('🎉 Terima kasih! Anda akan dihubungkan ke WhatsApp untuk konfirmasi order.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <ShoppingCart className="text-amber-600 w-8 h-8" />
            <h1 className="text-2xl font-bold text-amber-600">PromoHub</h1>
          </div>
          <a href="tel:+628123456789" className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition font-semibold flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span className="hidden md:inline">Hubungi</span>
          </a>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-amber-500 to-orange-500 py-12">
        <div className="container mx-auto px-4 text-center text-white">
          <div className="inline-block bg-red-600 px-6 py-2 rounded-full font-bold mb-4 animate-pulse">
            <Gift className="w-5 h-5 inline mr-2" />
            FLASH SALE 60% OFF!
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mega Sale Akhir Tahun! 🎉
          </h2>
          <p className="text-xl mb-6">Produk Berkualitas dengan Harga Terbaik</p>
          <div className="flex justify-center gap-4 text-lg">
            <div className="flex items-center gap-2">
              <Truck className="w-5 h-5" />
              <span>Gratis Ongkir</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span>Garansi 100%</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>COD Available</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-white py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-amber-600 mb-1">5000+</div>
              <div className="text-gray-600 text-sm">Produk Terjual</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-1">4.8/5</div>
              <div className="text-gray-600 text-sm">Rating Pembeli</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-1">100%</div>
              <div className="text-gray-600 text-sm">Garansi Uang Kembali</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-1">24/7</div>
              <div className="text-gray-600 text-sm">Customer Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold mb-8 text-center">Produk Pilihan Terbaik</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(product => (
              <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1">
                {/* Product Image */}
                <div className="relative h-64">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    -{product.discount}%
                  </div>
                  <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    {product.rating}
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="text-xs text-amber-600 font-semibold mb-2">{product.category}</div>
                  <h4 className="text-lg font-bold mb-2 line-clamp-2">{product.name}</h4>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">{product.description}</p>

                  {/* Price */}
                  <div className="mb-4">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-2xl font-bold text-amber-600">Rp {product.finalPrice.toLocaleString('id-ID')}</span>
                      <span className="text-sm text-gray-400 line-through">Rp {product.price.toLocaleString('id-ID')}</span>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {product.sold} terjual
                      </span>
                      <span>Stok: {product.stock}</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <button 
                    onClick={() => {
                      setSelectedProduct(product);
                      window.location.href = '#order';
                    }}
                    className="w-full text-gray-800 py-3 rounded-lg hover:bg-yellow-500 transition font-bold flex items-center justify-center gap-2"
                    style={{ backgroundColor: '#FFFC00' }}
                  >
                    <ShoppingCart className="w-5 h-5" />
                    Beli Sekarang
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Form */}
      <section id="order" className="py-16 bg-gradient-to-br from-amber-500 to-orange-500">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl p-8">
            <h3 className="text-3xl font-bold mb-6 text-center">Checkout Pesanan</h3>

            {selectedProduct ? (
              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex gap-4">
                  <img src={selectedProduct.image} alt={selectedProduct.name} className="w-20 h-20 object-cover rounded-lg" />
                  <div className="flex-1">
                    <h4 className="font-bold">{selectedProduct.name}</h4>
                    <p className="text-amber-600 font-bold">Rp {selectedProduct.finalPrice.toLocaleString('id-ID')}</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-4">
                  <span className="font-semibold">Jumlah:</span>
                  <div className="flex items-center gap-2">
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="bg-gray-200 w-8 h-8 rounded font-bold hover:bg-gray-300">-</button>
                    <span className="w-12 text-center font-bold">{quantity}</span>
                    <button onClick={() => setQuantity(Math.min(selectedProduct.stock, quantity + 1))} className="bg-gray-200 w-8 h-8 rounded font-bold hover:bg-gray-300">+</button>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-lg">Total:</span>
                    <span className="text-2xl font-bold text-amber-600">Rp {(selectedProduct.finalPrice * quantity).toLocaleString('id-ID')}</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="mb-6 p-8 bg-gray-50 rounded-lg text-center text-gray-500">
                Pilih produk terlebih dahulu
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label className="block font-semibold mb-2">Nama Lengkap *</label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full border-2 rounded-lg px-4 py-3"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block font-semibold mb-2">Nomor WhatsApp *</label>
                <input 
                  type="tel" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full border-2 rounded-lg px-4 py-3"
                  placeholder="08123456789"
                />
              </div>

              <div>
                <label className="block font-semibold mb-2">Alamat Lengkap *</label>
                <textarea 
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                  className="w-full border-2 rounded-lg px-4 py-3"
                  rows="3"
                  placeholder="Jl. Contoh No. 123, RT/RW 01/02"
                />
              </div>

              <div>
                <label className="block font-semibold mb-2">Kota *</label>
                <input 
                  type="text" 
                  value={formData.city}
                  onChange={(e) => setFormData({...formData, city: e.target.value})}
                  className="w-full border-2 rounded-lg px-4 py-3"
                  placeholder="Sukabumi"
                />
              </div>

              <button 
                onClick={handleOrder}
                disabled={!selectedProduct}
                className="w-full text-gray-800 py-4 rounded-lg hover:bg-yellow-500 transition font-bold text-lg flex items-center justify-center gap-2 disabled:bg-gray-300 disabled:cursor-not-allowed"
                style={selectedProduct ? { backgroundColor: '#FFFC00' } : {}}
              >
                <ShoppingCart className="w-5 h-5" />
                Order via WhatsApp
                <ArrowRight className="w-5 h-5" />
              </button>

              <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
                <span className="flex items-center gap-1">
                  <Truck className="w-4 h-4" />
                  Gratis Ongkir
                </span>
                <span className="flex items-center gap-1">
                  <Shield className="w-4 h-4" />
                  Garansi 100%
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Kata Pembeli</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { name: 'Ani Susanti', item: 'Kaos Premium', text: 'Bahannya adem banget! Sesuai ekspektasi 🔥', rating: 5 },
              { name: 'Budi Raharja', item: 'Tumbler', text: 'Kualitas oke, packing rapi. Fast respon seller!', rating: 5 },
              { name: 'Citra Dewi', item: 'Tiket Seminar', text: 'Worth it! Ilmunya daging semua. Recommend!', rating: 5 }
            ].map((review, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 shadow-md">
                <div className="flex gap-1 mb-3">
                  {[...Array(review.rating)].map((_, j) => <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-200 rounded-full flex items-center justify-center font-bold">
                    {review.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold">{review.name}</div>
                    <div className="text-sm text-gray-500">Pembeli {review.item}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <ShoppingCart className="w-8 h-8 text-amber-500" />
                <h4 className="text-xl font-bold">PromoHub</h4>
              </div>
              <p className="text-gray-400">Belanja produk berkualitas dengan harga terbaik</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Kontak</h4>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center gap-2"><Phone className="w-4 h-4" /> +62 877-7540-4612</p>
                <p className="flex items-center gap-2"><Mail className="w-4 h-4" /> cs@promohub.id</p>
                <p className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Sukabumi, Jawa Barat</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Kategori</h4>
              <ul className="space-y-2 text-gray-400">
                <li>• Fashion</li>
                <li>• Peralatan</li>
                <li>• Buku & Edukasi</li>
                <li>• Event & Tiket</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PromoHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default PromoHub;