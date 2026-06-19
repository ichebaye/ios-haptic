# iOS Haptic (Safari workaround)

Демонстрация единственного известного способа вызвать системный
хаптик-отклик в Safari на iOS — без нативного Vibration API, которого
в WebKit нет.

## Как это работает

iOS 18+ Safari выдаёт системный хаптик-тик при тапе по
`<input type="checkbox" switch>`. Реальный switch кладётся невидимым
(`opacity: 0`) поверх обычной кнопки и растягивается на её размер —
палец физически попадает по нативному контролу, кнопка под ним играет
чисто декоративную роль.

```html
<div class="haptic-button">
  <button tabindex="-1">Тапни меня</button>
  <label for="haptic-switch">
    <input type="checkbox" switch id="haptic-switch">
  </label>
</div>
```

```css
.haptic-button { position: relative; }
.haptic-button input[type="checkbox"] {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}
```

## Важно: начиная с iOS 26.5

Apple закрыла программный обход — вызов `label.click()` из JS
**больше не вызывает** хаптик. Сработать может только прямой тап
пользователя по самому `<input switch>`, поэтому контрол нельзя
скрывать через `hidden`/`display:none` — он должен оставаться
кликабельным (просто невидимым через `opacity: 0`).

## Ограничения

- Работает только в Safari на iOS 18+.
- Только прямой тап пользователя — программно не вызвать.
- Фиксированный системный «тик» — паттерны/интенсивность не
  настраиваются.

## Запуск

Открыть `index.html` на iPhone с iOS 18+ через Safari и тапнуть по
кнопке.
