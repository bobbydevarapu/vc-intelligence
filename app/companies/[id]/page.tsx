"use client";

import { companies } from "../../../data/companies";

import { useState, useEffect } from "react";

import { useParams } from "next/navigation";

export default function CompanyPage(){

  const params = useParams();

  const company = companies.find(
    c => c.id === params.id
  );

  const [summary,setSummary] = useState("");

  async function enrich(){

    const res = await fetch("/api/enrich",{

      method:"POST",

      headers:{
        "Content-Type":"application/json"
      },

      body: JSON.stringify({
        website: company?.website
      })

    });

    const data = await res.json();

    setSummary(data.summary);

  }

  return(

    <div style={{padding:"20px"}}>

      <h2>{company?.name}</h2>

      <button onClick={enrich}>

        Enrich

      </button>

      <p>{summary}</p>

    </div>

  );

}