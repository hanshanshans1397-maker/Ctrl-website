import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ApplyPageContent } from "./generated/ApplyContent";

function ApplyComingSoon() {
  return (
    <div className="apply-page">
      <div className="apply-wrap">
        <div className="section-head">
          <span className="section-label">
            <span className="cs">CTRL Europe · Přihláška člena</span>
            <span className="en">CTRL Europe · Member Application</span>
          </span>
          <h1 className="cs">Připravujeme.</h1>
          <h1 className="en">Coming soon.</h1>
        </div>

        <p className="lede cs">
          Online přihláška pro členství v CTRL Europe se právě připravuje. Brzy
          zde bude možné vyplnit formulář a připojit se k síti.
        </p>
        <p className="lede en">
          The online membership application for CTRL Europe is being prepared.
          You will soon be able to fill out the form and join the network.
        </p>

        <p className="text-[15px] font-light leading-relaxed text-[var(--apply-muted)]">
          <span className="cs">
            Mezitím nás můžete kontaktovat přes{" "}
            <Link
              to="/join"
              className="font-medium text-[var(--apply-blue)] underline underline-offset-2"
            >
              Zapojit se
            </Link>
            .
          </span>
          <span className="en">
            In the meantime, you can reach us via{" "}
            <Link
              to="/join"
              className="font-medium text-[var(--apply-blue)] underline underline-offset-2"
            >
              Get involved
            </Link>
            .
          </span>
        </p>
      </div>
    </div>
  );
}

export default function ApplyPage() {
  useEffect(() => {
    document.title = "Přihláška | CTRL Europe";
  }, []);

  //return <ApplyComingSoon />;

  return <ApplyPageContent />;
}
