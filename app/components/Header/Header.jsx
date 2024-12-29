import Link from 'next/link'
import Styles from './Header.module.css'

export const Header = () => {

  return (
		<header className={Styles['header']}>
			<div className='container'>
				<div className={Styles['header-wrapper']}>
					<h1 className={Styles['logo']}>
						<Link href={`/`}>Российские изобретения</Link>
					</h1>
					<div className={Styles['burger-menu']}>
						<input
							type='checkbox'
							id='burger-checkbox'
							className={Styles['burger-checkbox']}
						/>
						<label
							htmlFor='burger-checkbox'
							className={Styles['burger']}
						></label>
						<div className={Styles['menu-box']}>
							<div className={Styles['menu-head']}>Изобретения</div>
							<ul className={Styles['menu-list']}>
								<li className={Styles['menu-item']}>
									<a href='' className={Styles['menu-link']}>
										Пока недоступно
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}