'use client'
import Styles from './Invention.module.css'
import { getInventionById } from '@/app/api/api-config'
import { data } from '@/app/data/data'
import Link from 'next/link'

export default function InventionPage(props) {
	console.log(props);
	const setInvention = (data, id) => {
		return getInventionById(data, id)
	}

	const invention = setInvention(data, props.params.id)

	console.log(invention);
	

	// const [invention, setInvention] = useState(null)
	// useEffect(() => {
	// 	console.log('useEffect')
	// 	function fetchData() {
	// 		const inventionInfo = getInventionById(
	// 			data,
	// 			props.params.id
	// 		);
	// 		setInvention(inventionInfo)
	// 	}
	// 	fetchData()
	// }, [])

	// setInvention((data) => {
	// 	console.log('функция');
	// 	return {
	// 		...data,
	// 	}
	// })

	return (
		<main className={Styles['main']}>
			<div className='container'>
				<div className={Styles['invention-wrapper']}>
					<div className={Styles['invention-box']}>
						<div className={Styles['img-box']}>
							<img
								className={Styles['img']}
								src={invention.img}
								alt='фото изобретения'
							/>
						</div>
						<div className={Styles['info-box']}>
							<h1 className={Styles['info-title']}>{invention.invention}</h1>
							<p className={Styles['brief-info']}>{invention.brief}</p>
							<div className={Styles['info-row']}>
								<p className={Styles['inventor']}>
									{invention.name === 'Unknown'
										? 'Изобретатель не известен'
										: invention.name}
								</p>
								<p className={Styles['info-date']}>{invention.year}</p>
							</div>
						</div>
						<Link href='/' className={Styles['arrow-back']}>
							<img src='/img/arrow.png' />
						</Link>
					</div>
				</div>
			</div>
		</main>
	)
}
