jQuery(function ($) {
    // $('.buttonsliderhome').magnificPopup({
    //   disableOn: 700,
    //   type: 'iframe',
    //   mainClass: 'mfp-fade',
    //   removalDelay: 160,
    //   preloader: false,
    //   fixedContentPos: false
    // });
    $(".btn-2").click(function() {
		$('html, body').animate({
			scrollTop: $("#firsttexxxxt").offset().top
		}, 800);
	});
  //   $('#clock').countdown('2018/12/29', function(event) {
	//   var $this = $(this).html(event.strftime(''
	// 	+ '<p class="text-primary">%D<i>يوم</i></p>'
	// 	+ '<p>%H<i>ساعة</i></p>'
	// 	+ '<p>%M<i>دقيقة</i></p>'
	// 	+ '<p>%S<i>ثانية</i></p>'));
  // }
  // );
//    window.sr = ScrollReveal({duration:800,origin:'top',mobile:true});
//	sr.reveal('.headertop a,.headertop p,.headernav > li > a, .offershome,.bannnner,.productsbox,.home-navtabs-bg h3,.home-navtabs > li > a,.footersub h3,.footersub p,.footersub input,.footersub button,.footerbg-title,.footerbg .footerbg-list li,.footerbg .btn,.headersocial li a,.footerbg-payment,.footerbg p,.footerbg img,h1,h2,h3,h4,h5,h6,.single-bg p,.single-bg li,.table-block tr,.btn,.form-control,label,p.footerfirst,.footericons p,.list-unstyled li,.headertop p,.headertop li,.headertop input,.headertop button,.boxservices p,.boxservices img,textarea');
});