import { Container, Stack } from "@mui/system";
import Entreprise from "../../src/components/Entreprise";

export default function Page({entreprises}) {
  return (
    <div>
      <Container>
        <h1>Entreprises</h1>
        <Stack direction="row" spacing={5}>
          {entreprises.map(entr => (
            <Entreprise key={entr.id} data={entr} />
            )
          )}
        </Stack>
      </Container>
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