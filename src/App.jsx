import { useEffect, useMemo, useState } from 'react'
import { CalendarDays, Newspaper, Users, Target, BookOpen, HeartHandshake, MapPin, Mail, Phone, Send } from 'lucide-react'

function SectionTitle({ kicker, title, subtitle }) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-10">
      {kicker && <p className="text-emerald-700 font-semibold tracking-wide uppercase">{kicker}</p>}
      <h2 className="mt-1 text-3xl md:text-4xl font-extrabold text-gray-900">{title}</h2>
      {subtitle && <p className="mt-3 text-gray-600">{subtitle}</p>}
    </div>
  )
}

function Hero() {
  return (
    <section id="beranda" className="pt-28 md:pt-32 bg-gradient-to-br from-emerald-50 via-white to-emerald-100">
      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-emerald-700 font-semibold">Lembaga Dakwah Kampus Al-Izzah</p>
          <h1 className="mt-2 text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Membangun Generasi Rabbani di Kampus UINSU
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Wadah pembinaan, pengembangan, dan dakwah kemahasiswaan untuk mewujudkan peradaban Islam di lingkungan kampus.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#program" className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 rounded-md font-medium">Lihat Program</a>
            <a href="#kontak" className="bg-white border hover:bg-gray-50 px-5 py-3 rounded-md font-medium">Gabung Komunitas</a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 bg-emerald-200/50 blur-3xl rounded-full" />
          <div className="relative bg-white border rounded-2xl p-6 shadow-xl">
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Users, label: 'Kaderisasi' },
                { icon: BookOpen, label: 'Kajian' },
                { icon: CalendarDays, label: 'Agenda' },
                { icon: Target, label: 'Dakwah' },
                { icon: HeartHandshake, label: 'Sosial' },
                { icon: Newspaper, label: 'Artikel' },
              ].map((item) => (
                <div key={item.label} className="aspect-square rounded-xl bg-emerald-50 border text-emerald-700 flex flex-col items-center justify-center gap-2">
                  <item.icon />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="tentang" className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle
          kicker="Tentang Kami"
          title="LDK Al-Izzah UINSU"
          subtitle="Berkomitmen membina mahasiswa menjadi pribadi yang berilmu, berakhlak, dan berkontribusi bagi umat."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: 'Visi', text: 'Terwujudnya peradaban Islam di kampus melalui kaderisasi dan dakwah yang terstruktur.' },
            { title: 'Misi', text: 'Menyelenggarakan pembinaan rutin, kajian keilmuan, dan agenda keumatan yang berdampak.' },
            { title: 'Nilai', text: 'Ikhlas, Istiqamah, Ukhuwah, dan Profesionalisme dalam setiap aktivitas dakwah.' },
          ].map((card) => (
            <div key={card.title} className="border rounded-xl p-6 bg-emerald-50/50">
              <h3 className="text-xl font-semibold text-gray-900">{card.title}</h3>
              <p className="mt-2 text-gray-600">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProgramGrid({ items }) {
  const icons = { Users, BookOpen, CalendarDays, Target, HeartHandshake, Newspaper }
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {items.map((p, idx) => {
        const Icon = icons[p.icon] || Target
        return (
          <div key={p.id || idx} className="border rounded-xl p-6 bg-white hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <Icon />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">{p.title}</h3>
            {p.excerpt && <p className="mt-2 text-gray-600 text-sm">{p.excerpt}</p>}
          </div>
        )
      })}
    </div>
  )
}

function EventsList({ items }) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {items.map((e, idx) => (
        <div key={e.id || idx} className="border rounded-xl p-6 bg-white">
          <div className="flex items-center gap-2 text-emerald-700 font-medium">
            <CalendarDays size={18} />{new Date(e.date).toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' })}
          </div>
          <h3 className="mt-2 text-lg font-semibold text-gray-900">{e.title}</h3>
          {e.location && (
            <p className="mt-1 flex items-center gap-1 text-sm text-gray-600"><MapPin size={16} /> {e.location}</p>
          )}
          {e.description && <p className="mt-2 text-sm text-gray-600">{e.description}</p>}
        </div>
      ))}
    </div>
  )
}

function Articles({ items }) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {items.map((a, idx) => (
        <article key={a.id || idx} className="border rounded-xl overflow-hidden bg-white hover:shadow-lg transition-shadow">
          <div className="p-6">
            <p className="text-xs text-emerald-700 font-medium">
              {a.category || 'Artikel'} • {a.published_at ? new Date(a.published_at).toLocaleDateString('id-ID') : '—'}
            </p>
            <h3 className="mt-2 text-lg font-semibold text-gray-900 line-clamp-2">{a.title}</h3>
            {a.excerpt && <p className="mt-2 text-gray-600 text-sm line-clamp-3">{a.excerpt}</p>}
          </div>
        </article>
      ))}
    </div>
  )
}

function Contact() {
  const baseUrl = useMemo(() => import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000', [])
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Gagal mengirim pesan')
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section id="kontak" className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle kicker="Kontak" title="Hubungi Kami" subtitle="Ada pertanyaan atau ingin bergabung? Kirim pesan kepada kami." />
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border rounded-xl p-6 bg-emerald-50/50">
            <div className="flex items-center gap-2 text-emerald-700 font-semibold"><Mail size={18}/> Email</div>
            <p className="mt-1 text-gray-700">ldk.alizzah@uinsu.ac.id</p>
            <div className="mt-4 flex items-center gap-2 text-emerald-700 font-semibold"><Phone size={18}/> Kontak</div>
            <p className="mt-1 text-gray-700">+62 812-xxxx-xxxx</p>
          </div>
          <form onSubmit={handleSubmit} className="md:col-span-2 border rounded-xl p-6 bg-white">
            <div className="grid md:grid-cols-2 gap-4">
              <input required value={form.name} onChange={e=>setForm(v=>({...v,name:e.target.value}))} placeholder="Nama Lengkap" className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"/>
              <input required type="email" value={form.email} onChange={e=>setForm(v=>({...v,email:e.target.value}))} placeholder="Email" className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"/>
            </div>
            <input value={form.subject} onChange={e=>setForm(v=>({...v,subject:e.target.value}))} placeholder="Subjek" className="mt-4 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"/>
            <textarea required value={form.message} onChange={e=>setForm(v=>({...v,message:e.target.value}))} placeholder="Pesan" rows={5} className="mt-4 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"/>
            <button disabled={status==='loading'} className="mt-4 inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-md">
              <Send size={18}/> {status==='loading' ? 'Mengirim...' : 'Kirim Pesan'}
            </button>
            {status==='success' && <p className="mt-3 text-emerald-700">Pesan berhasil dikirim. Terima kasih!</p>}
            {status==='error' && <p className="mt-3 text-red-600">Terjadi kesalahan. Coba lagi.</p>}
          </form>
        </div>
      </div>
    </section>
  )
}

export default function App() {
  const baseUrl = useMemo(() => import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000', [])
  const [programs, setPrograms] = useState([])
  const [events, setEvents] = useState([])
  const [articles, setArticles] = useState([])

  useEffect(() => {
    async function load() {
      try {
        const [p, e, a] = await Promise.all([
          fetch(`${baseUrl}/api/programs`).then(r=>r.ok?r.json():[]).catch(()=>[]),
          fetch(`${baseUrl}/api/events`).then(r=>r.ok?r.json():[]).catch(()=>[]),
          fetch(`${baseUrl}/api/articles`).then(r=>r.ok?r.json():[]).catch(()=>[]),
        ])
        setPrograms(p?.length ? p : [
          { title:'Kaderisasi', excerpt:'Pembinaan rutin untuk membentuk kader dakwah berkualitas.', icon:'Users' },
          { title:'Kajian Rutin', excerpt:'Penguatan ilmu keislaman dan wawasan keumatan.', icon:'BookOpen' },
          { title:'Gerakan Dakwah', excerpt:'Syiar Islam melalui berbagai kegiatan positif di kampus.', icon:'Target' },
        ])
        setEvents(e?.length ? e : [
          { title:'Kajian Akbar', date:new Date().toISOString(), location:'Aula Utama UINSU', description:'Menghadirkan pemateri inspiratif untuk mahasiswa.' },
          { title:'Open Recruitment', date:new Date(Date.now()+86400000*7).toISOString(), location:'Online', description:'Bergabung bersama keluarga besar LDK Al-Izzah.' },
        ])
        setArticles(a?.length ? a : [
          { title:'Menjadi Mahasiswa Rabbani', excerpt:'Langkah praktis menjadi pribadi berdaya guna.', category:'Tarbiyah' },
          { title:'Produktif di Kampus', excerpt:'Tips manajemen waktu dan organisasi untuk aktivis.', category:'Motivasi' },
          { title:'Adab Sebelum Ilmu', excerpt:'Pilar penting dalam menuntut ilmu.', category:'Adab' },
        ])
      } catch {}
    }
    load()
  }, [baseUrl])

  return (
    <div className="min-h-screen text-gray-900">
      {/* Navbar simple within page */}
      <header className="fixed top-0 left-0 right-0 z-30 backdrop-blur bg-white/70 border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#beranda" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-emerald-600 text-white grid place-items-center font-bold">AI</div>
            <div className="leading-tight">
              <p className="font-semibold">LDK Al-Izzah</p>
              <p className="text-xs text-gray-600">UIN Sumatera Utara</p>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#beranda" className="hover:text-emerald-700">Beranda</a>
            <a href="#tentang" className="hover:text-emerald-700">Tentang</a>
            <a href="#program" className="hover:text-emerald-700">Program</a>
            <a href="#agenda" className="hover:text-emerald-700">Agenda</a>
            <a href="#artikel" className="hover:text-emerald-700">Artikel</a>
            <a href="#kontak" className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md">Gabung</a>
          </nav>
        </div>
      </header>

      <Hero />
      <About />

      <section id="program" className="py-16 md:py-20 bg-emerald-50/60">
        <div className="max-w-6xl mx-auto px-4">
          <SectionTitle kicker="Program" title="Program Unggulan" subtitle="Rangkaian kegiatan pembinaan dan dakwah di kampus." />
          <ProgramGrid items={programs} />
        </div>
      </section>

      <section id="agenda" className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <SectionTitle kicker="Agenda" title="Kegiatan Terdekat" subtitle="Catat tanggalnya dan mari bergabung." />
          <EventsList items={events} />
        </div>
      </section>

      <section id="artikel" className="py-16 md:py-20 bg-emerald-50/60">
        <div className="max-w-6xl mx-auto px-4">
          <SectionTitle kicker="Artikel" title="Tulisan Terbaru" subtitle="Wawasan dan inspirasi untuk aktivis dakwah kampus." />
          <Articles items={articles} />
        </div>
      </section>

      <Contact />

      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6">
          <div>
            <p className="text-white font-semibold">LDK Al-Izzah UINSU</p>
            <p className="mt-2 text-sm">Berbasis di Kampus UIN Sumatera Utara, berkhidmat untuk umat.</p>
          </div>
          <div>
            <p className="text-white font-semibold">Navigasi</p>
            <div className="mt-2 flex flex-col gap-1 text-sm">
              <a href="#tentang" className="hover:text-white">Tentang</a>
              <a href="#program" className="hover:text-white">Program</a>
              <a href="#agenda" className="hover:text-white">Agenda</a>
              <a href="#artikel" className="hover:text-white">Artikel</a>
              <a href="#kontak" className="hover:text-white">Kontak</a>
            </div>
          </div>
          <div>
            <p className="text-white font-semibold">Kontak</p>
            <p className="mt-2 text-sm flex items-center gap-2"><Mail size={16}/> ldk.alizzah@uinsu.ac.id</p>
            <p className="mt-1 text-sm flex items-center gap-2"><Phone size={16}/> +62 812-xxxx-xxxx</p>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 py-4 text-sm text-center">© {new Date().getFullYear()} LDK Al-Izzah UINSU. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}
