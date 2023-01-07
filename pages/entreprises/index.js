import Entreprise from "../../src/components/Entreprise";

export default function Page({entreprises}) {
  return (
    <div style={{padding: '50px 5%'}}>
      <h1 style={{marginBottom: '50px'}}>Entreprises</h1>
      <div  className="entreprises">
        {entreprises.map(entr => (
          <Entreprise key={entr.id} data={entr} />
          )
        )}
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const data = await import("/data/data.json")
  console.log(data);

  return {
    props: {
      entreprises: data.entreprises || []
    },
  }
}