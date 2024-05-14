export default function Page({ params }: {
   params: { id: string }
}) {
   return <h1>Tour: {params.id}</h1>
}