# iOS Haptic (Safari workaround)

Демонстрация единственного известного способа вызвать системный
хаптик-отклик в Safari на iOS — без нативного Vibration API, которого
в WebKit нет.

## Как это работает

iOS 18+ Safari поддерживает нестандартный атрибут `switch` у
`<input type="checkbox">`. Хаптик срабатывает только когда клик по
связанному `<label>` инициируется через `label.click()` в ответ на
пользовательский жест.

```html
<input type="checkbox" switch id="haptic-switch" hidden>
<label for="haptic-switch" id="haptic-label" hidden></label>
```

```js
function triggerHaptic() {
  document.getElementById('haptic-label').click();
}
```

## Ограничения

- Работает только в Safari на iOS 18+.
- Вызов обязательно должен идти из обработчика пользовательского
  события (клик, тап и т.п.).
- Фиксированный системный «тик» — паттерны/интенсивность не
  настраиваются.

## Запуск

Открыть `index.html` на iPhone с iOS 18+ через Safari и нажать кнопку.
