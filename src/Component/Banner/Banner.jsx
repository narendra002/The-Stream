const PopularMovies="popular";
import React, { useState, useEffect } from 'react';
import axios from "axios"
const API_KEY = '4008ea8497eda5d3e80f32017f7d35bc';
const url = "https://api.themoviedb.org/3";
const imgUrl="https://image.tmdb.org/t/p/original";
const Banner = ({BannerType}) => {

	


const link=`${imgUrl}${BannerType?.backdrop_path}`;
	console.log(link);
return(	

  <>  
		<div className="banner"
				style={{ backgroundImage: `url('${link}')` }} >
		</div>
			 <div className="Banner_content">
<h1 className="Banner_title">{BannerType.title||BannerType.name||BannerType.original_title}</h1>
	<br></br>
	<h3 className="Banner_description">{BannerType.overview}</h3>
	 <div className='BannerButton'>
           <button className='watchnow'>▶ Watch Now</button>
           <button className='Detail'>Detail</button>
        </div>		
			 </div>
			 </>
)
		}
export default Banner;
