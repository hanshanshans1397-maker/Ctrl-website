export function PartnerSchoolsSection() {
  return (
    <section className="sec bg-dark" id="partnerske-skoly">
      <div className="inner max-w-[860px]">
        <div className="section-head rev">
          <span className="section-label">
            <span className="cs">Partnerské školy</span>
            <span className="en">Partner schools</span>
          </span>
          <h2 className="section-title !text-bg">
            <span className="cs">Workshopy zdarma pro partnerské školy</span>
            <span className="en">Free workshops for partner schools</span>
          </h2>
        </div>
        <p className="rev d1 max-w-[640px] text-pretty text-[16px] leading-[1.75] font-light text-[rgba(245,245,243,0.72)]">
          <span className="cs">
            Chceme, aby se k digitální gramotnosti dostala každá škola bez
            ohledu na rozpočet. Pro partnerské školy proto hledáme financování
            z grantů, dotací a od partnerských firem, aby pro ně mohly být
            workshopy zdarma. Chcete se stát partnerskou školou? Ozvěte se nám.
          </span>
          <span className="en">
            We want every school to have access to digital literacy, regardless
            of its budget. For partner schools we look for funding from grants,
            subsidies and partner companies, so the workshops can be free for
            them. Want to become a partner school? Get in touch.
          </span>
        </p>
        <div className="rev d2 mt-8">
          <a
            href="#partnerska-skola"
            className="btn-p cs bg-bg text-dark hover:bg-accent hover:text-bg"
          >
            Chci být partnerskou školou
          </a>
          <a
            href="#partnerska-skola"
            className="btn-p en bg-bg text-dark hover:bg-accent hover:text-bg"
          >
            I want to be a partner school
          </a>
        </div>
      </div>
    </section>
  );
}
