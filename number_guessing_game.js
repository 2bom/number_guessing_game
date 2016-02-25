
var target;
var user_answer;
var user_answer_number;
var finished = false;
var guesses = 0;

function do_game(){
  //target number를 설정한다.
  //prompt > 유저에게 숫자를 입력받는다.
  var random_number = Math.random()*100; //do_game()이 한번 load 될 때마다 값이 바뀌어야 하니까 내부에 위치한 변수.
  target = Math.floor(random_number + 1);


  while (!finished){
    user_answer = prompt("숫자를 맞춰라, UP DOWM 게임!\n과연 내가 생각하고 있는 숫자는 무엇일까요?\n1부터 100까지의 숫자 중에서 하나의 숫자를 골라보세요!\n\n");
    user_answer_number = parseInt(user_answer);
    guesses += 1;
    if (user_answer == null){
      alert("게임을 종료합니다.");
      finished = true;
    } else {
      finished = input_check();
    }
  }
}

function input_check() {
  //1.입력값이 숫자인지 확인 > enter a number!
  if (isNaN(user_answer_number)) {
    alert("숫자를 입력해주세요.");
    return false;
  }
  //1.입력값이 [1,100] 사이의 숫자인지 확인 > wrong range!
  if ((user_answer_number < 1) || (user_answer_number > 100)) {
    alert("1부터 100 사이에 있는 숫자를 입력해주세요.");
    return false;
  }
  //2.입력값이 target보다 클때 > too high!
  if (user_answer_number > target) {
    alert("이 숫자는 너무 크네요! \n\n DOWN!");
    return false;
  }
  //2.입력값이 target보다 작을때 > too low!
  if (user_answer_number < target) {
    alert("이 숫자는 너무 작네요 \n\n UP!");
    return false;
  }
  //2.it's correct > target값과 수행횟수 출력
  else {
    alert(target + "정답입니다! " + "\n\n총 도전 횟수는" + guesses + "번 입니다.");
    return true;
  }
}
