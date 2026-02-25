import Link from "next/link";
import { companies } from "../../data/companies";

export default function Companies() {

  return (

    <div className="container">

      <h1 className="title">

        Startup Database

      </h1>

      <p style={{color:"#94a3b8"}}>

        Click a company to generate VC intelligence

      </p>

      {

        companies.map(company => (

          <Link
            key={company.id}
            href={`/companies/${company.id}`}
            className="link"
          >

            <div className="card">

              <h2>

                {company.name}

              </h2>

              <p style={{color:"#94a3b8"}}>

                {company.website}

              </p>

            </div>

          </Link>

        ))

      }

    </div>

  );

}