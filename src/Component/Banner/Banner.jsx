import React from 'react';
import { useState } from 'react';

const imgUrl = "https://image.tmdb.org/t/p/original";
const Banner = ({ BannerType }) => {
	const link = `${imgUrl}${BannerType?.backdrop_path}`;



	return (
		<>


			<div className="banner"
				style={{ backgroundImage: `url('${link}')` }} >
			</div>
			<div className="Banner_content">
				<h1 className="Banner_title">{BannerType.title || BannerType.name || BannerType.original_title}</h1>
				<br></br>
				<h3 className="Banner_description">{BannerType.overview}</h3>
				<div className='BannerButton'>
					<button className='watchnow' >▶ Watch Now</button>
					<button className='Detail'>Detail</button>
				</div>
			</div>
		</>
	)
}
export default Banner;