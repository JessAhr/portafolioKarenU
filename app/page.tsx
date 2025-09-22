
import CoverParticles from "@/components/cover-particles";
import Introduction from "@/components/introduction";
import TransitionPage from "@/components/transition-page";


export default function Home() {
  return (
    
    <main >
      <TransitionPage />
      <div className="bg-gradient-to-b from-indigo-900 via-violet-900 to-purple-900 flex min-h-screen items-center justify-center"> 
        <CoverParticles/>
        <Introduction/>
      </div>
    </main>

  );
}
