// SPA - useState normal
// SSR - exportando funçao getSeverSideProps
// SSG - getStaticProps() e  o revalidade (num em segundos para fazer a chamada - obs. só funciona em produção)

export default function Home(props) {
  return (
    <div>
      <h1>Index</h1>
      <p>{JSON.stringify(props.episodes)}</p>
    </div>
  )
}


export async function getStaticProps() {
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json()

  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8,
  }
}