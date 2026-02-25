export async function POST(req: Request){

  try{

    const body = await req.json();

    const website = body.website;

    if(!website){

      return Response.json({
        summary:"Website missing"
      });

    }

    const res = await fetch(website);

    const html = await res.text();

    const titleMatch = html.match(/<title>(.*?)<\/title>/i);

    const title = titleMatch ? titleMatch[1] : "Unknown";

    return Response.json({

      summary:
      "Company Name: " + title +
      "\nWebsite: " + website +
      "\nInsight: This company appears to operate in technology sector and may be relevant for VC evaluation."

    });

  }

  catch{

    return Response.json({

      summary:"Failed to analyze company"

    });

  }

}