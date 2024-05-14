export default function Page({ params }: {
   params: { id: string }
}) {
   return <h1>Activity: {params.id}</h1>
}