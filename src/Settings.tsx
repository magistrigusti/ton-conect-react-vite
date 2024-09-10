import { useState, useEffect } from 'react';
import { useTonConnectUI, Locales, THEME } from '@tonconnect/ui-react';

export const Settings = () => {
  const [lang, setLang] = useState('en');
  const [theme, setTheme] = useState(THEME.DARK);
  const [_ , setOptions] = useTonConnectUI()

  useEffect(() => {
    setOptions({
      language: lang as Locales
    })
  }, [setOptions, lang]);

  useEffect(() => {
    setOptions({
      uiPreferences: {
        theme
      }
    })
  }, [setOptions, theme]);

  return (
    <div>
      <select value={ lang } onSelect={ e => setLang(e.target.value)}>
        <option value='ru'>ru</option>
        <option value='en'>en</option>
      </select>

      <select value={theme} onSelect={ e => setTheme(e.target.value)} >
        <option value={THEME.DARK} >Dark</option>
        <option value={THEME.LIGHT}>Light</option>
      </select>
    </div>
  )
}