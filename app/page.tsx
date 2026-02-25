import Link from "next/link";

export default function Home() {

  return (

    <div style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      textAlign: "center"
    }}>

      <h1 style={{
        fontSize: "42px",
        marginBottom: "10px"
      }}>
        VC Intelligence Platform
      </h1>

      <p style={{
        fontSize: "18px",
        marginBottom: "25px",
        color: "#94a3b8"
      }}>
        Analyze startups and generate investor insights instantly
      </p>

      <Link href="/companies">

        <button className="button">

          Explore Companies

        </button>

      </Link>

    </div>

  );

}