"use client";

import Link from "next/link";

import { companies } from "../../data/companies";

export default function CompaniesPage() {

  return (

    <div style={{padding:"20px"}}>

      <h2>Companies</h2>

      {

        companies.map(company => (

          <div key={company.id}>

            <Link href={`/companies/${company.id}`}>

              {company.name}

            </Link>

          </div>

        ))

      }

    </div>

  );

}