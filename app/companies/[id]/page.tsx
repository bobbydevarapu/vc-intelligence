"use client";

import { companies } from "../../../data/companies";

import { useParams } from "next/navigation";

import { useState } from "react";

export default function CompanyPage(){

  const params = useParams();

  const company = companies.find(

    c => c.id === params.id

  );

  const [summary,setSummary] = useState("");

  const [loading,setLoading] = useState(false);

  async function enrich(){

    setLoading(true);

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

    setLoading(false);

  }

  return(

    <div className="container">

      <h1 className="title">

        {company?.name}

      </h1>

      <p style={{color:"#94a3b8"}}>

        {company?.website}

      </p>

      <button

        onClick={enrich}

        className="button"

      >

        {

          loading

          ?

          "Analyzing..."

          :

          "Generate VC Intelligence"

        }

      </button>

      {

        summary &&

        <div className="card">

          <h3>

            VC Insight

          </h3>

          <p>

            {summary}

          </p>

        </div>

      }

    </div>

  );

}