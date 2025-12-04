import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import CTA from '@/components/CTA'
import { Button } from '@/components/ui/button'
import { recentSessions } from '@/constants'

const Page = () => {
  return (
    <main className='space-y-12'>
     <h1>Popular Companions</h1>
     
     <section className="home-section">
      <CompanionCard
       id='123'
       name='Neura the Brainy Explorer'
       topic='Neura Network of the Brain'
       subject='science'
       duration={45}
       color='#E5D0FF'
      />
      <CompanionCard 
       id='456'
       name='Countsy the Number Wizard'
       topic='Derivatives & Integrals'
       subject='Maths'
       duration={30}
       color='#ffda6e'
      />
      <CompanionCard
        id='789'
       name='Verba the Vocabulary Builder'
       topic='English Literature'
       subject='Language'
       duration={30}
       color='#BDE7FF'
      />
     </section>

     <section className='home-section'>
      <CompanionsList  
        title='Recently completed sessions'
        companions={recentSessions}
        classNames="w-2/3 max-lg:w-full"
      />
      <CTA />
      
     </section>
    </main>
  )
}

export default Page