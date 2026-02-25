"use client";

import { companies } from "../../../data/companies";

import { useParams } from "next/navigation";

import { useState } from "react";

export default function CompanyPage(){

  const params = useParams();

  const company = companies.find(

    c => c.id === params.id

  );

  const [report,setReport] = useState<any>(null);

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

    setReport(data);

    setLoading(false);

  }

  return(

    <div className="container">

      <div className="title">

        {company?.name}

      </div>

      <div className="subtitle">

        {company?.website}

      </div>

      <button

        className="button"

        onClick={enrich}

      >

        {

          loading

          ?

          "Analyzing..."

          :

          "Generate VC Report"

        }

      </button>

      {

        report &&

        <div className="card">

          <div className="card-title">

            VC Intelligence Report

          </div>

          <div className="field">

            <div className="label">

              Company Name

            </div>

            <div className="value">

              {report.companyName}

            </div>

          </div>

          <div className="field">

            <div className="label">

              Website

            </div>

            <div className="value">

              {report.website}

            </div>

          </div>

          <div className="field">

            <div className="label">

              About Company

            </div>

            <div className="value">

              {report.about}

            </div>

          </div>

          <div className="field">

            <div className="label">

              VC Insight

            </div>

            <div className="value">

              {report.insight}

            </div>

          </div>

        </div>

      }

    </div>

  );

}