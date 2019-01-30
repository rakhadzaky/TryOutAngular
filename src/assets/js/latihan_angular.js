var webApp = angular.module('webApp', []);



webApp.controller('LoginController', function($scope){


})

webApp.controller('ParticipantsController', function($scope){

	$scope.User = [
		{
			"id" : "1301174026",
			"name" : "Rakha Dzaky",
			"school" : "SMK Telkom Purwokerto"
		}
	];
	
	$scope.ListQuestions = [
		{
			"judul" : "Dasar Algoritma Pemrograman Tingkat 1",
			"jml" : "100",
			"start" : "07.30",
			"end" : "10.30",
			"status" : "Finish",
			"id" : "1"
		},
		{
			"judul" : "Dasar Algoritma Pemrograman Tingkat 2",
			"jml" : "50",
			"start" : "07.30",
			"end" : "10.30",
			"status" : "Stand By",
			"id" : "2"
		},
		{
			"judul" : "Dasar Algoritma Pemrograman Tingkat 3",
			"jml" : "90",
			"start" : "07.30",
			"end" : "10.30",
			"status" : "Stand By",
			"id" : "3"
		}
	];

	$scope.Answer = [
		{
			"id" : "a",
			"option" : "pilihan 1"
		},
		{
			"id" : "b",
			"option" : "pilihan 2"
		},
		{
			"id" : "c",
			"option" : "pilihan 3"
		},
		{
			"id" : "d",
			"option" : "pilihan 4"
		},
		{
			"id" : "e",
			"option" : "pilihan 5"
		},
	];

	$scope.checkedAtt = "b"

	$scope.ListAnswer = [
		{
			"id" : "1",
			"answer" : "a"
		},
		{
			"id" : "2",
			"answer" : "c"
		},
		{
			"id" : "3",
			"answer" : "d"
		},
		{
			"id" : "4",
			"answer" : "e"
		},
		{
			"id" : "5",
			"answer" : ""
		},
		{
			"id" : "6",
			"answer" : "b"
		},
		{
			"id" : "7",
			"answer" : "a"
		},
		{
			"id" : "8",
			"answer" : "c"
		},
		{
			"id" : "9",
			"answer" : "a"
		},
		{
			"id" : "10",
			"answer" : "d"
		}
	];

	$scope.logOut = function(){
		alert("Logout")
	};	

	$scope.emptyAnswer = function(event){
		
	};

	$scope.finishAnswer = function(){
		var txt;
		var r = confirm("Apakah anda yakin ? Setelah anda selesai mengerjakan, anda tidak dapat mengubah lagi");
		if (r == true) {
			alert("Selesai mengerjakan")
		}
	};

})

webApp.controller('CommitteController', function($scope){

	$scope.User =
		{
			"id" : "1301174026",
			"name" : "Rakha Dzaky",
		};

	$scope.ParticipantsDetail = {
		"id" : "1301174026",
		"name" : "Rakha Dzaky",
		"school" : "SMK Telkom Purwokerto"
	};

	$scope.ListQuestions = [
		{
			"judul" : "Dasar Algoritma Pemrograman Tingkat 1",
			"jml" : "100",
			"start" : "07.30",
			"end" : "10.30",
			"status" : "Finish",
			"id" : "1"
		},
		{
			"judul" : "Dasar Algoritma Pemrograman Tingkat 2",
			"jml" : "50",
			"start" : "07.30",
			"end" : "10.30",
			"status" : "On Going",
			"id" : "2"
		},
		{
			"judul" : "Dasar Algoritma Pemrograman Tingkat 2",
			"jml" : "50",
			"start" : "07.30",
			"end" : "10.30",
			"status" : "On Going",
			"id" : "2"
		},
		{
			"judul" : "Dasar Algoritma Pemrograman Tingkat 2",
			"jml" : "50",
			"start" : "07.30",
			"end" : "10.30",
			"status" : "On Going",
			"id" : "2"
		},
		{
			"judul" : "Dasar Algoritma Pemrograman Tingkat 2",
			"jml" : "50",
			"start" : "07.30",
			"end" : "10.30",
			"status" : "On Going",
			"id" : "2"
		},
		{
			"judul" : "Dasar Algoritma Pemrograman Tingkat 2",
			"jml" : "50",
			"start" : "07.30",
			"end" : "10.30",
			"status" : "On Going",
			"id" : "2"
		},
		{
			"judul" : "Dasar Algoritma Pemrograman Tingkat 2",
			"jml" : "50",
			"start" : "07.30",
			"end" : "10.30",
			"status" : "On Going",
			"id" : "2"
		},
		{
			"judul" : "Dasar Algoritma Pemrograman Tingkat 2",
			"jml" : "50",
			"start" : "07.30",
			"end" : "10.30",
			"status" : "Draft",
			"id" : "2"
		},
		{
			"judul" : "Dasar Algoritma Pemrograman Tingkat 2",
			"jml" : "50",
			"start" : "07.30",
			"end" : "10.30",
			"status" : "On Going",
			"id" : "2"
		},
		{
			"judul" : "Dasar Algoritma Pemrograman Tingkat 2",
			"jml" : "50",
			"start" : "07.30",
			"end" : "10.30",
			"status" : "On Going",
			"id" : "2"
		},
		{
			"judul" : "Dasar Algoritma Pemrograman Tingkat 3",
			"jml" : "90",
			"start" : "07.30",
			"end" : "10.30",
			"status" : "Stand By",
			"id" : "3"
		}
	];

	console.log($scope.ListQuestions);

	var NumberperPage = 4;

	var CurrentArray = 0;

	$scope.TotalPage = 0;

	$scope.CurrentPage = 1;

	$scope.NumberOfPage = [];

	$scope.NumberForShow = [];

	$scope.CheckArr = function(Arr){
		console.log(Arr);
	}

	$scope.Pagination = function(CurrentPage, DaftarArr){
		console.log('ListQuestions');
		console.log(DaftarArr);

		$scope.TotalPage = $scope.ListQuestions.length % NumberperPage;

		for (var i = 1; i <= $scope.TotalPage; i++) {
			$scope.NumberOfPage.push(i);
		}
		$scope.CurrentPage = CurrentPage;

		$scope.NumberForShow = [];

		CurrentArray = (CurrentPage * NumberperPage) - NumberperPage;

		for (var i = 1; i <= NumberperPage; i++) {
			if (CurrentArray < DaftarArr.length) {
				console.log(CurrentArray)
				console.log(DaftarArr[CurrentArray]);
				$scope.NumberForShow.push(DaftarArr[CurrentArray]);
				CurrentArray++;
			}
		}
	}

	$scope.ListAnswer = [
		{
			"id" : "1",
			"answer" : "a"
		},
		{
			"id" : "2",
			"answer" : "c"
		},
		{
			"id" : "3",
			"answer" : "d"
		},
		{
			"id" : "4",
			"answer" : "e"
		},
		{
			"id" : "5",
			"answer" : ""
		},
		{
			"id" : "6",
			"answer" : "b"
		},
		{
			"id" : "7",
			"answer" : "a"
		},
		{
			"id" : "8",
			"answer" : "c"
		},
		{
			"id" : "9",
			"answer" : "a"
		},
		{
			"id" : "10",
			"answer" : "d"
		}
	];

	$scope.toPrintDetail = function(){
		window.open("detailanswerprint.html","_blank");
	}

	$scope.toPrintAllParticipants = function(){
		window.open("../Participants/allparticipantsprint.html","_blank");
	}

	$scope.PrintDetail = function(){
		window.print();
	}

	$scope.Choices = 0

	$scope.plusNumber = function(num) {
	    return $scope.Choices++;
	}

	$scope.addVerifCode = function(){
		$scope.idVerif = '';
	}


	
})