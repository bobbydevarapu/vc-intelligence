export async function POST(req: Request){

  try{

    const body = await req.json();

    const website = body.website;

    const res = await fetch(website);

    const html = await res.text();

    const titleMatch = html.match(/<title>(.*?)<\/title>/i);

    const title = titleMatch ? titleMatch[1] : "Unknown";

    return Response.json({

      companyName: title.split("|")[0].trim(),

      website: website,

      about: title,

      insight:

      "This startup operates in the technology sector and demonstrates strong potential for venture capital investment based on its digital product infrastructure."

    });

  }

  catch{

    return Response.json({

      companyName:"Unknown",

      website:"",

      about:"",

      insight:"Analysis failed"

    });

  }

}