export function BoardMemberCard({ member, variant = 'home' }) {
  const isFeatured = Boolean(member.photo);
  const compact = variant === 'about';

  return (
    <div
      className={`exec-card ${compact ? 'exec-card--about' : 'exec-card--home'} ${isFeatured ? 'exec-card--photo' : ''}`}
      data-enter={member.enter || 'pop'}
    >
      {member.photo ? (
        <div className="exec-card__avatar exec-card__avatar--photo">
          <img
            src={member.photo}
            alt={member.photoAlt || member.name}
            data-clip-reveal={variant === 'home' ? '' : undefined}
            className="h-full w-full object-cover object-[center_22%]"
            loading="lazy"
            decoding="async"
          />
        </div>
      ) : (
        <div className="exec-card__avatar exec-card__avatar--initials" aria-hidden="true">
          {member.initials}
        </div>
      )}
      <div className="exec-card__name">{member.name}</div>
      <div className="exec-card__role">
        <span className="cs">{member.roleCs}</span>
        <span className="en">{member.roleEn}</span>
      </div>
    </div>
  );
}
