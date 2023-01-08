import Entreprise from "../../src/components/company/Company";

export default function Page({companies}) {
  return (
    <div style={{padding: '50px 5%'}}>
      <h1 style={{marginBottom: '50px'}}>Meet our <span style={{ color: 'var(--prim-lighter)' }}>Companies</span></h1>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '40px'
      }}>
        {companies.map(entr => (
          <Entreprise key={entr.id} data={entr} />
          )
        )}
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const {companies} = await import("/data/data.json")

  return {
    props: {
      companies: companies || []
    },
  }
}