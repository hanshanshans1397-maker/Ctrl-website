const EMBED_ORIGIN = 'https://strava-embeds.com/route';

export function StravaRouteEmbed({ routeId, href, title }) {
  const labelCs = title?.cs ?? 'Trasa na Stravě';
  const labelEn = title?.en ?? 'Route on Strava';

  return (
    <figure className="article-strava">
      <div className="article-strava__frame">
        <iframe
          src={`${EMBED_ORIGIN}/${routeId}`}
          title={labelCs}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          allow="fullscreen"
        />
      </div>
      <figcaption>
        <a href={href} target="_blank" rel="noopener noreferrer">
          <span className="cs">Otevřít trasu na Stravě →</span>
          <span className="en">Open the route on Strava →</span>
        </a>
      </figcaption>
    </figure>
  );
}
