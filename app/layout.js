import {App} from './App'
import "./globals.css";

export const metadata = {
	title: 'RussianAchivments',
	description: 'Website with achievements of Russia',
}

export default function RootLayout({ children }) {
  return (
		<html lang='ru'>
			<body>
				<App>
          {children}
        </App>
			</body>
		</html>
	)
}
