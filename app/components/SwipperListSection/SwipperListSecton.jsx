'use client'

import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import { useEffect } from 'react'
import { SwipperCard } from '../SwipperCard/SwipperCard'
import Styles from './SwipperListSection.module.css'
import Link from 'next/link'

export const SwipperListSection = props => {
	console.log(props.data);
	
	useEffect(() => {
		const options = {
			loop: true,
			spaceBetween: 70,
			slidesPerView: 3,
			pagination: {
				el: '.swiper-pagination',
				type: 'fraction',
				enabled: true,
				clickable: true,
				// type: 'custom',
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			modules: [Navigation, Pagination],
		}
		new Swiper('.swiper', options)
	}, [])

	return (
		<section className={Styles['section-wrapper']}>
			<div className={Styles['section-head']}>
				<h2 className={Styles['section-head-title']}>{props.title}</h2>
			</div>
			<div className={`swiper ${Styles['slider']}`}>
				<ul className={`swiper-wrapper ${Styles['slider-wrapper']}`}>
					{props.data?.map((item) => {
						return (
							<li className={`swiper-slide ${Styles['slide']}`} key={item.id}>
								<Link href={`/inventions/${item.id}`}>
									<SwipperCard {...item} />
								</Link>
							</li>
						)
					})}
				</ul>
				<a href='#' className={`swiper-button-prev ${Styles['arrow-left']}`}>
					<img src='img/arrow.png' alt='' />
				</a>
				<a href='#' className={`swiper-button-next ${Styles['arrow-right']}`}>
					<img src='img/arrow.png' alt='' />
				</a>

				<div className={`swiper-pagination ${Styles['pagination']}`}></div>
			</div>
		</section>
	)
}
