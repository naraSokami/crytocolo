import Link from "next/link"

export default function Page({data}) {
    return (
      <Link href={`/entreprises/${data.id}`}>
        <div className="entreprise">
          <h3><span>{data.name.slice(0, 1)}</span>{data.name.slice(1)}</h3>
          <p>{data.description.slice(0, 120) + "..."}</p>
          <button className="btn">Invest</button>
        </div>
      </Link>
    )
  }
  