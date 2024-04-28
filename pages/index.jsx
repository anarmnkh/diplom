import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import News from "../components/News";
import { useSession } from "next-auth/react";
import Head from "next/head";
export default function Home() {
  const { data: session } = useSession();

  return (
    <div>
      <Head>
        <title>Нүүр хуудас</title>
      </Head>
      <Navbar />

      <Hero/>
      <News/>
     // {session ? <User session={session} /> : <Guest />}
      <Footer />
    </div>
  );
}

function User({ session }) {
  return (
    <main className="container mx-auto text-center py-20">
      <h3 className="text-4xl font-bold"> Authorized User HomePage</h3>
      <div className="details">
        <h5>{session.user.name}</h5>
        <h5>{session.user.email}</h5>
      </div>
    </main>
  );
}

function Guest() {
  return (
    <main className="container mx-auto text-center py-20">
      <h3 className="text-4xl font-bold"> Authorized Guest HomePage</h3>
      <div className="details">
        <h5>guest</h5>
      </div>
    </main>
  );
}
