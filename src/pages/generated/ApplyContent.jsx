export function ApplyPageContent() {
  return (
    <div className="apply-page">
      <div className="apply-wrap">
        <div className="section-head">
          <span className="section-label">
            <span className="cs">CTRL Europe · Přihláška člena</span>
            <span className="en">CTRL Europe · Member Application</span>
          </span>
          <h1 className="cs">Připoj se k síti.</h1>
          <h1 className="en">Join the network.</h1>
        </div>

        <p className="lede cs">
          CTRL Europe roste díky lidem jako ty. Vyplň přihlášku a staneš se součástí{' '}
          <strong>sítě 650+ mladých lidí</strong> napříč střední a východní Evropou, kteří se
          rozhodli nečekat až to vyřeší někdo jiný.
        </p>
        <p className="lede en">
          CTRL Europe grows thanks to people like you. Fill out the application and become part of
          a <strong>network of 650+ young people</strong> across Central and Eastern Europe who
          decided not to wait for someone else to fix things.
        </p>

        <div className="progress-track">
          <div className="progress-seg">
            <div className="fill" />
          </div>
        </div>

        <div className="success" id="applyFormSuccess">
          <div className="success-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M5 13l4 4L19 7"
                stroke="#1D4ED8"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h2 className="cs">Přihláška odeslána</h2>
          <h2 className="en">Application sent</h2>
          <p className="cs">
            Děkujeme za zájem o CTRL Europe. Ozveme se ti na e-mail do několika dní s dalšími
            informacemi.
          </p>
          <p className="en">
            Thank you for your interest in CTRL Europe. We will email you within a few days with more
            information.
          </p>
        </div>

        <form id="applyForm" className="form-live">
          <input type="text" name="_gotcha" className="apply-honeypot" tabIndex={-1} autoComplete="off" />
          <input type="hidden" name="form_type" value="member_application" />

          <div className="section">
            <div className="section-num">01</div>
            <span className="section-label">
              <span className="cs">Kdo jsi</span>
              <span className="en">Who you are</span>
            </span>
            <p className="section-sub cs">Základní údaje pro vedení členské evidence.</p>
            <p className="section-sub en">Basic details for our member records.</p>

            <div className="field-row">
              <div className="field">
                <label>
                  <span className="cs">Jméno *</span>
                  <span className="en">First name *</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  data-ph-cs="Jana"
                  data-ph-en="Jane"
                  required
                />
              </div>
              <div className="field">
                <label>
                  <span className="cs">Příjmení *</span>
                  <span className="en">Last name *</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  data-ph-cs="Nováková"
                  data-ph-en="Smith"
                  required
                />
              </div>
            </div>

            <div className="field-row">
              <div className="field">
                <label>
                  <span className="cs">Datum narození *</span>
                  <span className="en">Date of birth *</span>
                </label>
                <input type="date" name="birthDate" required />
              </div>
              <div className="field">
                <label>
                  <span className="cs">Telefon</span>
                  <span className="en">Phone</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  data-ph-cs="+420 777 000 000"
                  data-ph-en="+420 777 000 000"
                />
              </div>
            </div>

            <div className="field">
              <label>E-mail *</label>
              <input
                type="email"
                name="email"
                data-ph-cs="jana@email.cz"
                data-ph-en="jane@email.com"
                required
              />
            </div>

            <div className="field-row">
              <div className="field">
                <label>
                  <span className="cs">Město</span>
                  <span className="en">City</span>
                </label>
                <input type="text" name="city" data-ph-cs="Brno" data-ph-en="Brno" />
              </div>
              <div className="field">
                <label>
                  <span className="cs">Země</span>
                  <span className="en">Country</span>
                </label>
                <select className="apply-select-i18n" name="country" defaultValue="cz">
                  <option value="cz" className="cs">
                    Česká republika
                  </option>
                  <option value="cz" className="en">
                    Czech Republic
                  </option>
                  <option value="sk" className="cs">
                    Slovensko
                  </option>
                  <option value="sk" className="en">
                    Slovakia
                  </option>
                  <option value="at" className="cs">
                    Rakousko
                  </option>
                  <option value="at" className="en">
                    Austria
                  </option>
                  <option value="pl" className="cs">
                    Polsko
                  </option>
                  <option value="pl" className="en">
                    Poland
                  </option>
                  <option value="si" className="cs">
                    Slovinsko
                  </option>
                  <option value="si" className="en">
                    Slovenia
                  </option>
                  <option value="hu" className="cs">
                    Maďarsko
                  </option>
                  <option value="hu" className="en">
                    Hungary
                  </option>
                  <option value="other" className="cs">
                    Jiná
                  </option>
                  <option value="other" className="en">
                    Other
                  </option>
                </select>
              </div>
            </div>

            <div className="field">
              <label>
                <span className="cs">
                  Škola nebo zaměstnání <span className="opt">nepovinné</span>
                </span>
                <span className="en">
                  School or employment <span className="opt">optional</span>
                </span>
              </label>
              <input
                type="text"
                name="school"
                data-ph-cs="Gymnázium Matyáše Lercha, Brno"
                data-ph-en="Example High School, Brno"
              />
            </div>
          </div>

          <div className="divider" />

          <div className="section">
            <div className="section-num">02</div>
            <span className="section-label">
              <span className="cs">Kam chceš patřit</span>
              <span className="en">Where you want to belong</span>
            </span>
            <p className="section-sub cs">
              Buňky jsou specializované týmy v rámci CTRL Europe. Vyber tu, která tě nejvíc zajímá
              — klidně víc než jednu.
            </p>
            <p className="section-sub en">
              Cells are specialized teams within CTRL Europe. Pick the one that interests you most —
              feel free to choose more than one.
            </p>

            <div className="field">
              <div className="chip-group" id="chips-bunka">
                {[
                  ['pr', 'PR a komunikace', 'PR and communications'],
                  ['social', 'Sociální sítě', 'Social media'],
                  ['podcast', 'Podcast', 'Podcast'],
                  ['research', 'Research', 'Research'],
                  ['design', 'Grafika a design', 'Graphics and design'],
                  ['video', 'Video', 'Video'],
                  ['intl', 'Mezinárodní vztahy', 'International relations'],
                  ['events', 'Eventy', 'Events'],
                  ['nevim', 'Ještě nevím', 'Not sure yet'],
                ].map(([val, cs, en]) => (
                  <div key={val} className="chip" data-val={val} role="button" tabIndex={0}>
                    <span className="cs">{cs}</span>
                    <span className="en">{en}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="divider" />

          <div className="section">
            <div className="section-num">03</div>
            <span className="section-label">
              <span className="cs">Co umíš</span>
              <span className="en">What you can do</span>
            </span>
            <p className="section-sub cs">
              Žádná zkušenost nevyžadována — chceme jen vědět, kde bys mohl/a být užitečný/á.
            </p>
            <p className="section-sub en">
              No experience required — we just want to know where you could be useful.
            </p>

            <div className="field">
              <div className="chip-group" id="chips-skills">
                {[
                  ['psani', 'Psaní a copywriting', 'Writing and copywriting'],
                  ['grafika', 'Grafický design', 'Graphic design'],
                  ['video2', 'Střih videa', 'Video editing'],
                  ['prog', 'Programování', 'Programming'],
                  ['reci', 'Veřejné vystupování', 'Public speaking'],
                  ['jazyky', 'Cizí jazyky', 'Foreign languages'],
                  ['organizace', 'Organizace eventů', 'Event organization'],
                  ['data', 'Analýza dat', 'Data analysis'],
                ].map(([val, cs, en]) => (
                  <div key={val} className="chip" data-val={val} role="button" tabIndex={0}>
                    <span className="cs">{cs}</span>
                    <span className="en">{en}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="field field-spaced">
              <label>
                <span className="cs">
                  Jazyky, kterými mluvíš <span className="opt">nepovinné</span>
                </span>
                <span className="en">
                  Languages you speak <span className="opt">optional</span>
                </span>
              </label>
              <input
                type="text"
                name="languages"
                data-ph-cs="čeština, angličtina, němčina..."
                data-ph-en="Czech, English, German..."
              />
            </div>
          </div>

          <div className="divider" />

          <div className="section">
            <div className="section-num">04</div>
            <span className="section-label">
              <span className="cs">Kolik času máš</span>
              <span className="en">How much time you have</span>
            </span>
            <p className="section-sub cs">
              Žádný závazek navíc — jen ať víme, s čím můžeme počítat.
            </p>
            <p className="section-sub en">
              No extra commitment — we just need to know what to expect.
            </p>

            <div className="field">
              <label>
                <span className="cs">Hodin týdně, které bys věnoval/a CTRL Europe</span>
                <span className="en">Hours per week you would dedicate to CTRL Europe</span>
              </label>
              <div className="avail-row">
                <input
                  type="range"
                  id="availSlider"
                  name="hoursPerWeek"
                  min="1"
                  max="15"
                  defaultValue="3"
                />
                <div className="avail-val" id="availVal">
                  3 hod
                </div>
              </div>
            </div>

            <div className="field field-tight">
              <label>
                <span className="cs">Forma zapojení</span>
                <span className="en">How you want to get involved</span>
              </label>
              <div className="radio-cards" id="radio-forma">
                {[
                  [
                    'lokalni',
                    'Lokální buňka',
                    'Local cell',
                    'Chci aktivně budovat CTRL Europe na své škole nebo ve svém městě.',
                    'I want to actively build CTRL Europe at my school or in my city.',
                  ],
                  [
                    'online',
                    'Online příspěvek',
                    'Online contribution',
                    'Pomůžu s obsahem, researchem nebo komunikací na dálku.',
                    'I will help with content, research or communication remotely.',
                  ],
                  [
                    'event',
                    'Jen velké akce',
                    'Major events only',
                    'Rád se zapojím do CTRL Summit a podobných eventů.',
                    'I am happy to get involved in CTRL Summit and similar events.',
                  ],
                ].map(([val, titleCs, titleEn, descCs, descEn]) => (
                  <label key={val} className="radio-card" data-val={val}>
                    <input className="apply-honeypot" type="radio" name="involvementType" value={val} />
                    <div className="radio-dot" aria-hidden="true" />
                    <div className="radio-text">
                      <strong>
                        <span className="cs">{titleCs}</span>
                        <span className="en">{titleEn}</span>
                      </strong>
                      <span>
                        <span className="cs">{descCs}</span>
                        <span className="en">{descEn}</span>
                      </span>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="divider" />

          <div className="section">
            <div className="section-num">05</div>
            <span className="section-label">
              <span className="cs">Proč CTRL Europe</span>
              <span className="en">Why CTRL Europe</span>
            </span>
            <p className="section-sub cs">
              Pár vět stačí. Chceme slyšet tvůj vlastní hlas, ne dokonalou esej.
            </p>
            <p className="section-sub en">
              A few sentences is enough. We want to hear your own voice, not a perfect essay.
            </p>

            <div className="field">
              <label>
                <span className="cs">Co tě na CTRL Europe zaujalo? *</span>
                <span className="en">What drew you to CTRL Europe? *</span>
              </label>
              <textarea
                name="motivation"
                data-ph-cs="Napiš pár vět o tom, proč se chceš zapojit..."
                data-ph-en="Write a few sentences about why you want to get involved..."
                required
              />
            </div>

            <div className="field">
              <label>
                <span className="cs">
                  Kde jsi o nás slyšel/a? <span className="opt">nepovinné</span>
                </span>
                <span className="en">
                  How did you hear about us? <span className="opt">optional</span>
                </span>
              </label>
              <select className="apply-select-i18n" name="hearAbout" defaultValue="">
                <option value="" disabled>
                  Vyber...
                </option>
                <option value="social" className="cs">
                  Instagram / TikTok
                </option>
                <option value="social" className="en">
                  Instagram / TikTok
                </option>
                <option value="friend" className="cs">
                  Od kamaráda
                </option>
                <option value="friend" className="en">
                  From a friend
                </option>
                <option value="school" className="cs">
                  Na škole / workshopu
                </option>
                <option value="school" className="en">
                  At school / workshop
                </option>
                <option value="summit">CTRL Summit</option>
                <option value="web" className="cs">
                  Web ctrleurope.com
                </option>
                <option value="web" className="en">
                  Website ctrleurope.com
                </option>
                <option value="other" className="cs">
                  Jinde
                </option>
                <option value="other" className="en">
                  Elsewhere
                </option>
              </select>
            </div>
          </div>

          <div className="submit-zone">
            <button type="submit" className="submit-btn" id="applySubmitBtn">
              <span className="cs">Odeslat přihlášku</span>
              <span className="en">Submit application</span>
            </button>
            <p className="submit-note cs">
              Odpovíme do 5 pracovních dní. Pokud je ti méně než 15 let, budeme potřebovat souhlas
              zákonného zástupce.
            </p>
            <p className="submit-note en">
              We will respond within 5 business days. If you are under 15, we will need consent from
              a legal guardian.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
