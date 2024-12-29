import Styles from './page.module.css'
import { SwipperListSection } from './components/SwipperListSection/SwipperListSecton'
import { useGetDataByCategory, useGetDataByYear } from './api/api-config'
import { data } from './data/data'

export default function Home() {
	const yearList = useGetDataByYear(data)
	const physicsCategory = useGetDataByCategory(data, 'Физика')
	const сhemistryCategory = useGetDataByCategory(data, 'Химия')
	const computerCategory = useGetDataByCategory(data, 'Компьютер')
	const medicineCategory = useGetDataByCategory(data, 'Медицина')
	return (
		<main className={Styles['main']}>
			<div className='container'>
				<SwipperListSection
					title='Открытия по годам'
					id='yearList'
					data={yearList}
				/>
				<SwipperListSection
					title='Открытия в физике'
					id='Physics'
					data={physicsCategory}
				/>
				<SwipperListSection
					title='Открытия в химии'
					id='Химия'
					data={сhemistryCategory}
				/>
				<SwipperListSection
					title='Компьютерные открытия'
					id='Компютер'
					data={computerCategory}
				/>
				<SwipperListSection
					title='Открытия в медицине'
					id='Медицина'
					data={medicineCategory}
				/>
			</div>
		</main>
	)
}
