/* weeklyCalendar.js */
export function createWeeklyCalendar({
  container,
  initialDate = dayjs(),
  onChange
}) {
  let currentDate = initialDate;
  let pickerEl = null;

  const headerTitle = container.querySelector('.weekly-title, .header-title');
  const pickerArrow = container.querySelector('.picker-arrow');
  const prevBtn = container.querySelector('.ico-prev')?.closest('button');
  const nextBtn = container.querySelector('.ico-next')?.closest('button');
  const dayCols = container.querySelectorAll('.weekly-day-col');

  /* -----------------------------
   * Utils
   * ----------------------------- */
  const getWeekDates = (date) => {
    const start = date.startOf('isoWeek');
    return Array.from({ length: 7 }, (_, i) => start.add(i, 'day'));
  };

  const getRelativeLabel = (date) => {
    const diff = date.diff(dayjs(), 'day');
    if (diff === -1) return '어제';
    if (diff === 0) return '오늘';
    if (diff === 1) return '내일';
    return '';
  };

  /* -----------------------------
   * Render Header / Week
   * ----------------------------- */
  const renderHeader = () => {
    if (!headerTitle) return;

    if (headerTitle.classList.contains('weekly-title')) {
      headerTitle.textContent = `${currentDate
        .startOf('isoWeek')
        .format('MM.DD')} ~ ${currentDate.endOf('isoWeek').format('MM.DD')}`;
    } else {
      headerTitle.childNodes[0].nodeValue = `${currentDate.format('YYYY. MM')}`;
    }
  };

  const renderWeek = () => {
    const weekDates = getWeekDates(currentDate);

    dayCols.forEach((col, idx) => {
      const date = weekDates[idx];
      const numEl = col.querySelector('.weekly-date-num');
      let txEl = col.querySelector('.weekly-date-tx');

      col.classList.remove('today', 'selected');
      numEl.textContent = date.format('D');

      const label = getRelativeLabel(date);
      if (label) {
        col.classList.add(label === '오늘' ? 'today' : 'selected');
        if (!txEl) {
          txEl = document.createElement('span');
          txEl.className = 'weekly-date-tx';
          numEl.after(txEl);
        }
        txEl.textContent = label;
      } else if (txEl) {
        txEl.remove();
      }
    });
  };

  /* -----------------------------
   * Year / Month Picker
   * ----------------------------- */
  const renderPicker = () => {
    if (pickerEl) pickerEl.remove();

    const currentYear = currentDate.year();
    const currentMonth = currentDate.month() + 1;

    pickerEl = document.createElement('div');
    pickerEl.className = 'year-month-picker';

    const years = [];
    for (let y = currentYear - 10; y <= currentYear + 10; y++) {
      years.push(`
        <div class="picker-item ${y === currentYear ? 'active' : ''}" data-year="${y}">
          ${y}년
        </div>
      `);
    }

    const months = Array.from({ length: 12 }, (_, i) => {
      const m = i + 1;
      return `
        <div class="picker-item ${m === currentMonth ? 'active' : ''}" data-month="${m}">
          ${m}월
        </div>
      `;
    });

    pickerEl.innerHTML = `
      <div class="picker-col year-col">${years.join('')}</div>
      <div class="picker-col month-col">${months.join('')}</div>
    `;

    container.appendChild(pickerEl);

    bindPickerEvents();
  };

  const bindPickerEvents = () => {
    pickerEl.querySelectorAll('[data-year]').forEach(item => {
      item.addEventListener('click', () => {
        currentDate = currentDate.year(+item.dataset.year);
        update();
        closePicker();
      });
    });

    pickerEl.querySelectorAll('[data-month]').forEach(item => {
      item.addEventListener('click', () => {
        currentDate = currentDate.month(+item.dataset.month - 1);
        update();
        closePicker();
      });
    });
  };

  const togglePicker = () => {
    if (pickerEl) {
      closePicker();
    } else {
      renderPicker();
    }
  };

  const closePicker = () => {
    pickerEl?.remove();
    pickerEl = null;
  };

  /* -----------------------------
   * Events
   * ----------------------------- */
  prevBtn?.addEventListener('click', () => {
    currentDate = currentDate.subtract(1, 'week');
    update();
  });

  nextBtn?.addEventListener('click', () => {
    currentDate = currentDate.add(1, 'week');
    update();
  });

  pickerArrow?.addEventListener('click', (e) => {
    e.stopPropagation();
    togglePicker();
  });

  document.addEventListener('click', (e) => {
    if (!container.contains(e.target)) {
      closePicker();
    }
  });

  /* -----------------------------
   * Update
   * ----------------------------- */
  const update = () => {
    renderHeader();
    renderWeek();
    onChange?.(currentDate);
  };

  update();
}
