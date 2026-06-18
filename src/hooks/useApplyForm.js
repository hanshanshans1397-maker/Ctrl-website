import { useEffect } from 'react';
import { useLang } from '../context/LangContext';

const APPLY_API_URL = '/api/apply';

const INVOLVEMENT_LABELS = {
  lokalni: { cs: 'Lokální buňka', en: 'Local cell' },
  online: { cs: 'Online příspěvek', en: 'Online contribution' },
  event: { cs: 'Jen velké akce', en: 'Major events only' },
};

const COUNTRY_LABELS = {
  cz: { cs: 'Česká republika', en: 'Czech Republic' },
  sk: { cs: 'Slovensko', en: 'Slovakia' },
  at: { cs: 'Rakousko', en: 'Austria' },
  pl: { cs: 'Polsko', en: 'Poland' },
  si: { cs: 'Slovinsko', en: 'Slovenia' },
  hu: { cs: 'Maďarsko', en: 'Hungary' },
  other: { cs: 'Jiná', en: 'Other' },
};

const HEAR_ABOUT_LABELS = {
  social: { cs: 'Instagram / TikTok', en: 'Instagram / TikTok' },
  friend: { cs: 'Od kamaráda', en: 'From a friend' },
  school: { cs: 'Na škole / workshopu', en: 'At school / workshop' },
  summit: { cs: 'CTRL Summit', en: 'CTRL Summit' },
  web: { cs: 'Web ctrleurope.com', en: 'Website ctrleurope.com' },
  other: { cs: 'Jinde', en: 'Elsewhere' },
};

function formatHours(value, isEn) {
  const unit = isEn ? 'hrs' : 'hod';
  return value === '15' ? `15+ ${unit}` : `${value} ${unit}`;
}

function getVisibleText(parent, isEn) {
  const lang = isEn ? 'en' : 'cs';
  const el = parent.querySelector(`.${lang}`);
  return (el ?? parent).textContent.trim();
}

function labelFromMap(map, value, isEn) {
  if (!value) return '';
  const entry = map[value];
  if (!entry) return String(value);
  return isEn ? entry.en : entry.cs;
}

function getSelectedChipLabels(groupId, isEn) {
  return [...document.querySelectorAll(`#${groupId} .chip.selected`)]
    .map((chip) => getVisibleText(chip, isEn))
    .filter(Boolean)
    .join(', ');
}

function getSelectedInvolvement(groupId, isEn) {
  const selected = document.querySelector(`#${groupId} .radio-card.selected`);
  const value = selected?.dataset.val || selected?.querySelector('input[type="radio"]')?.value;
  return labelFromMap(INVOLVEMENT_LABELS, value, isEn);
}

export function useApplyForm(formId = 'applyForm') {
  const { isEn } = useLang();

  useEffect(() => {
    document.querySelectorAll('.apply-page .chip-group').forEach((group) => {
      group.querySelectorAll('.chip').forEach((chip) => {
        const onClick = () => chip.classList.toggle('selected');
        chip.addEventListener('click', onClick);
        chip._cleanup = () => chip.removeEventListener('click', onClick);
      });
    });

    document.querySelectorAll('.apply-page .radio-cards').forEach((group) => {
      group.querySelectorAll('.radio-card').forEach((card) => {
        const onClick = () => {
          group.querySelectorAll('.radio-card').forEach((c) => c.classList.remove('selected'));
          card.classList.add('selected');
          const input = card.querySelector('input[type="radio"]');
          if (input) input.checked = true;
        };
        card.addEventListener('click', onClick);
        card._cleanup = () => card.removeEventListener('click', onClick);
      });
    });

    const slider = document.getElementById('availSlider');
    const valDisplay = document.getElementById('availVal');
    const onSlider = () => {
      if (valDisplay && slider) {
        valDisplay.textContent = formatHours(slider.value, isEn);
      }
    };
    if (slider) {
      slider.addEventListener('input', onSlider);
      onSlider();
    }

    return () => {
      document.querySelectorAll('.apply-page .chip').forEach((chip) => chip._cleanup?.());
      document.querySelectorAll('.apply-page .radio-card').forEach((card) => card._cleanup?.());
      if (slider) slider.removeEventListener('input', onSlider);
    };
  }, [isEn]);

  useEffect(() => {
    document.querySelectorAll('[data-ph-cs]').forEach((el) => {
      el.placeholder = isEn ? el.getAttribute('data-ph-en') : el.getAttribute('data-ph-cs');
    });

    document.querySelectorAll('.apply-page select.apply-select-i18n').forEach((sel) => {
      sel.querySelectorAll('option').forEach((opt) => {
        if (opt.classList.contains('cs')) opt.hidden = isEn;
        if (opt.classList.contains('en')) opt.hidden = !isEn;
      });
      const emptyOpt = sel.querySelector('option[value=""]');
      if (emptyOpt) emptyOpt.textContent = isEn ? 'Select...' : 'Vyber...';
    });

    const valDisplay = document.getElementById('availVal');
    const slider = document.getElementById('availSlider');
    if (valDisplay && slider) {
      valDisplay.textContent = formatHours(slider.value, isEn);
    }
  }, [isEn]);

  useEffect(() => {
    const form = document.getElementById(formId);
    const success = document.getElementById('applyFormSuccess');
    const btn = document.getElementById('applySubmitBtn');
    if (!form) return undefined;

    const onSubmit = async (e) => {
      e.preventDefault();

      const involvement = getSelectedInvolvement('radio-forma', isEn);
      if (!involvement) {
        alert(
          isEn
            ? 'Please select how you want to get involved.'
            : 'Vyber prosím formu zapojení.',
        );
        return;
      }

      if (btn) {
        btn.disabled = true;
        btn.textContent = '...';
      }

      const formData = new FormData(form);
      const hours = String(formData.get('hoursPerWeek') ?? '');
      const payload = {
        lang: isEn ? 'en' : 'cs',
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        birthDate: formData.get('birthDate'),
        phone: formData.get('phone'),
        email: formData.get('email'),
        city: formData.get('city'),
        country: labelFromMap(COUNTRY_LABELS, formData.get('country'), isEn),
        school: formData.get('school'),
        languages: formData.get('languages'),
        hoursPerWeek: hours ? formatHours(hours, isEn) : '',
        motivation: formData.get('motivation'),
        hearAbout: labelFromMap(HEAR_ABOUT_LABELS, formData.get('hearAbout'), isEn),
        cells: getSelectedChipLabels('chips-bunka', isEn),
        skills: getSelectedChipLabels('chips-skills', isEn),
        involvement,
        _gotcha: formData.get('_gotcha'),
      };

      try {
        const res = await fetch(APPLY_API_URL, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });
        if (res.ok) {
          form.classList.add('hide');
          if (success) success.classList.add('show');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          alert(isEn ? 'Could not send. Please try again.' : 'Nepodařilo se odeslat. Zkuste to znovu.');
          if (btn) {
            btn.disabled = false;
            btn.innerHTML =
              '<span class="cs">Odeslat přihlášku</span><span class="en">Submit application</span>';
          }
        }
      } catch {
        alert(
          isEn
            ? 'Could not send. Please try again or email us.'
            : 'Nepodařilo se odeslat. Zkuste to znovu nebo nám napište e-mail.',
        );
        if (btn) {
          btn.disabled = false;
          btn.innerHTML =
            '<span class="cs">Odeslat přihlášku</span><span class="en">Submit application</span>';
        }
      }
    };

    form.addEventListener('submit', onSubmit);
    return () => form.removeEventListener('submit', onSubmit);
  }, [formId, isEn]);
}
