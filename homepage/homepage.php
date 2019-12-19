<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<link rel="stylesheet" href="homepage.css">
	<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
	<link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">
	<link rel="stylesheet" href="../book-media-card/book-media-card.css">
	<link rel="stylesheet" href="../movie-media-card/movie-media-card.css">
	<title>Document</title>
</head>
<body>
	<section class="main">
		<div class="main__side">
			<div class="side__content">
				<object data="../assets/svgs/book-svg.svg" type="image/svg+xml"></object>
				<h1 class="side__title" data-name="Lorem">Find your next book</h1>
			<div class="side__inner-media">
				<div class="media-card">
					<?php include('../book-media-card/book-media-card.html'); ?>
				</div>
			</div>
		  </div>
		</div>
		<div class="main__side">
			<div class="side__content">
				<object data="../assets/svgs/movie-svg.svg" type="image/svg+xml"></object>
				<h1 class="side__title" data-name="Amet">Find your next movie</h1>
			<div class="side__inner-media">
				<!-- <a href="../media-collection/movies-collection.php">View your books</a> -->
				<div class="media-card">
					<?php include('../movie-media-card/movie-media-card.html'); ?>
				</div>
			</div>
		  </div>
		</div>
		<i class="fa fa-close side__close"></i>
		<div class="movie-collection-icon">
			<svg width="58" height="69" viewBox="0 0 58 69" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g id="movie-collection-icon" filter="url(#filter0_d)">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M47.8889 0H20.4309C17.4135 0 14.9722 2.46875 14.9722 5.48611H42.4028C45.4201 5.48611 47.8889 7.95486 47.8889 10.9722V46.6319L53.375 49.375V5.48611C53.375 2.46875 50.9062 0 47.8889 0ZM36.9167 16.4583V52.0358L25.3684 47.0708L23.2014 46.1382L21.0344 47.0708L9.48611 52.0358V16.4583H36.9167ZM9.48611 10.9722H36.9167C39.934 10.9722 42.4028 13.441 42.4028 16.4583V60.3472L23.2014 52.1181L4 60.3472V16.4583C4 13.441 6.46875 10.9722 9.48611 10.9722Z" fill="#244F75"/>
				</g>
				<defs>
				<filter id="filter0_d" x="0" y="0" width="57.375" height="68.3472" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
				<feFlood flood-opacity="0" result="BackgroundImageFix"/>
				<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
				<feOffset dy="4"/>
				<feGaussianBlur stdDeviation="2"/>
				<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
				<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
				<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
				</filter>
				</defs>
			</svg>
		</div>
		<div class="book-collection-icon">
			<svg width="58" height="69" viewBox="0 0 58 69" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g id="book-collection-icon" filter="url(#filter0_d)">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M47.8889 0H20.4309C17.4135 0 14.9722 2.46875 14.9722 5.48611H42.4028C45.4201 5.48611 47.8889 7.95486 47.8889 10.9722V46.6319L53.375 49.375V5.48611C53.375 2.46875 50.9062 0 47.8889 0ZM36.9167 16.4583V52.0358L25.3684 47.0708L23.2014 46.1382L21.0344 47.0708L9.48611 52.0358V16.4583H36.9167ZM9.48611 10.9722H36.9167C39.934 10.9722 42.4028 13.441 42.4028 16.4583V60.3472L23.2014 52.1181L4 60.3472V16.4583C4 13.441 6.46875 10.9722 9.48611 10.9722Z" fill="#60BFBF"/>
				</g>
				<defs>
				<filter id="filter0_d" x="0" y="0" width="57.375" height="68.3472" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
				<feFlood flood-opacity="0" result="BackgroundImageFix"/>
				<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
				<feOffset dy="4"/>
				<feGaussianBlur stdDeviation="2"/>
				<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
				<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
				<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
				</filter>
				</defs>
			</svg>
		</div>
		
	</section>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script src="../book-media-card/book-media-card.js"></script> 
	<script src="../movie-media-card/movie-media-card.js"></script> 
	<script src="homepage.js"></script>
	<script src="../include.js"></script>
	<script>includeHTML();</script>
</body>
</html>