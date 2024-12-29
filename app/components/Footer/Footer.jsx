import Styles from './Footer.module.css'

export const Footer = () => {
  return (
		<footer className={Styles['footer']}>
			<div className={Styles['container']}>
				<div className={Styles['footer-wrapper']}>
					<h2 className={Styles['footer-logo']}>
						<a href='#'>Российские изобретения</a>
					</h2>
				</div>
			</div>
		</footer>
	)
}