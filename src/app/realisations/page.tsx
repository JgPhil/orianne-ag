import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Realisations from '@/components/Realisations';

export default function RealisationsPage() {
  return (
    <main>
      <Header />
      <div style={{ paddingTop: '120px', paddingBottom: '2rem' }}>
        <div className="container" style={{ marginBottom: '2rem' }}>
             <Link href="/" className="btn btn-secondary">
                ← Retour à l'accueil
             </Link>
        </div>
        
        {/* We use the existing component. We might need to adjust it if it has an ID that scrolls weirdly, 
            but for a separate page it's fine. */}
        <Realisations />
      </div>
      <Footer />
    </main>
  );
}
