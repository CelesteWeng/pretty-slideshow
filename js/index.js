window.onload = function () {
	var oW = 0
	var oBanner = document.getElementById('banner')
	var oBtnL = document.getElementById("btn_L")
	var oBtnR = document.getElementById("btn_R")
	var oView = document.getElementById("view") // 放ul的div
	var oUl = oView.getElementsByTagName('ul')[0]
	var oOl = document.getElementById('olBtn')

	bannerPlay(oBanner, oBtnL, oBtnR, oView, oUl, oOl)
}
