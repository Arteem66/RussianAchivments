import Styles from './SwipperCard.module.css'

export const SwipperCard = (props) => {
	
  return (
		<article className={Styles['slider-box']}>
			<h3 className={Styles['invention-name']}>{props.invention}</h3>
			<div className={Styles['invention-info']}>
				<p className={Styles['author-invention']}>{props.name.includes(',') || props.name === 'Unknown' ? 'Изобретатели' : props.name}</p>
				<p className={Styles['invention-date']}>{props.year}</p>
			</div>
		</article>
	)
}