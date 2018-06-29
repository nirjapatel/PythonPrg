var app = angular.module("Angular59",[]);

app.controller("GameController",['$scope', function($scope){
	$scope.demo = "Hello String";

	var words=["rat","cat","bat","mat"];
	$scope.incorrectLettersChosen = [];
	$scope.correctLetterChosen =[];
	$scope.guesses = 6;
	$scope.displayWord = '';
	$scope.input = {
		letter : ''
	}

	var selectRandomWord = function(){
		var index = Math.round(Math.random()*words.length);
		return words[index];
	}

	var newGame = function(){
		$scope.incorrectLettersChosen = [];
		$scope.correctLetterChosen =[];
		$scope.guesses = 6;
		$scope.displayWord = '';

		selectedWord = selectRandomWord();
		console.log(selectedWord);

		var tempDisplayWord = '';
		for(var i = 0; i < selectedWord.length; i++){
			tempDisplayWord +='*';
		}
		
		$scope.displayWord = tempDisplayWord;
		console.log($scope.displayWord);
	}

	$scope.letterChosen = function(){
		console.log("Working!");
		for(var i = 0; i < $scope.correctLetterChosen.length; i++){
			if($scope.correctLetterChosen[i].toLowerCase()==$scope.input.letter.toLowerCase()){
				$scope.input.letter = "";
				return;
			}
		}

		for(var i = 0; i < $scope.incorrectLettersChosen.length; i++){
			if($scope.incorrectLettersChosen[i].toLowerCase()==$scope.input.letter.toLowerCase()){
				$scope.input.letter = "";
				return;
			}
		}

		var correct = false;
		for(var i = 0; i < selectedWord.length; i++){
			if(selectedWord[i].toLowerCase()==$scope.input.letter.toLowerCase()){
				$scope.displayWord = $scope.displayWord.slice(0,i)+$scope.input.letter.toLowerCase()+$scope.displayWord.slice(i+1);
				correct = true;
			}
		}

		if(correct){
			$scope.correctLetterChosen.push($scope.input.letter.toLowerCase());
		}else{
			$scope.incorrectLettersChosen.push($scope.input.letter.toLowerCase());
		}
		$scope.input.letter = "";

	}

	newGame();
}])