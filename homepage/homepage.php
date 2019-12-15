<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<link rel="stylesheet" href="homepage.css">
	<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
	<link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">
	<link rel="stylesheet" href="../media-card/media-card.css">
	<title>Document</title>
</head>
<body>
	<section class="main">
		<div class="main__side">
			<div class="side__content">
				<div w3-include-html="../assets/svgs/book-svg.html"></div> 
				<h1 class="side__title" data-name="Lorem">Find your next book</h1>
			<div class="side__inner-media">
				<a href="../media-collection/books-collection.php">View your books</a>
				<div class="media-card">
					<div w3-include-html="../media-card/media-card.php"></div> 
				</div>
			</div>
			
		  </div>
		</div>
		<div class="main__side">
			<div class="side__content">
				<div w3-include-html="../assets/svgs/movie-svg.html"></div> 
				<h1 class="side__title" data-name="Amet">Find your next movie</h1>
			<div class="side__inner-media">
				<a href="../media-collection/movies-collection.php">View your books</a>
				<div class="media-card">
					<div w3-include-html="../media-card/media-card.php"></div> 
				</div>
			</div>
		  </div>
		</div>
		<i class="fa fa-close side__close"></i>
	</section>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script src="../media-card/media-card.js"></script> 
	<script src="homepage.js"></script>
	<script src="../include.js"></script>
	<script>includeHTML();</script>
</body>
</html>