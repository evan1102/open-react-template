import React, {useState} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import { json } from 'react-router';
import '../../App.css'

const propTypes = {
  children: PropTypes.node,
  ...SectionProps.types
}

const defaultProps = {
  children: null,
  ...SectionProps.defaults
}

const QuizSection = ({
  className,
  children,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const questions = [
    {
      questionText: 'How would you use your e-bike?',
      answerOptions: [
        { answerText: 'Commuting', isCorrect: false },
        { answerText: 'Everyday', isCorrect: false },
        { answerText: 'Adventuring', isCorrect: true }
      ],
    },
    {
      questionText: 'Where will you ride? Select two.',
      answerOptions: [
        { answerText: 'Cities', isCorrect: false },
        { answerText: 'Dirt Trails', isCorrect: true },
        { answerText: 'Remote Locations', isCorrect: false },
        { answerText: 'Open Road', isCorrect: false },
      ],
    },
    {
      questionText: 'Rank what is most important to you. Rank at least two.',
      answerOptions: [
        { answerText: 'Range', isCorrect: true },
        { answerText: 'Speed', isCorrect: false },
        { answerText: 'Style', isCorrect: false },
        { answerText: 'Price', isCorrect: false },
      ],
    },
    {
      questionText: 'How tall are you?',
      answerOptions: [
        { answerText: '1', isCorrect: false },
        { answerText: '4', isCorrect: false },
        { answerText: '6', isCorrect: false },
        { answerText: '7', isCorrect: true },
      ],
    },
    {
      questionText: 'Which colors do you prefer? Select all that apply.',
      answerOptions: [
        { answerText: 'red', isCorrect: false },
        { answerText: 'blue', isCorrect: false },
        { answerText: 'green', isCorrect: false },
        { answerText: 'black', isCorrect: true },
      ],
    },
  ];
  const outerClasses = classNames(
    'section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
  const [rank, setrank] = useState([])
  const [userProfile,setuserProfile] = useState({})
  const [answerSelected,setanswerSelected] = useState(false)


  const handleNextButtonClick = () => {

    //dont let user press next button unless they have selected at least one option
    if (rank.length === 0 ){
      alert('Choose at least one option')
      return
    }

    //passes user choices into the userProfile state object, and goes to next question 
    

    //clear all button colors
    document.querySelectorAll('button').forEach(but => but.style.background = '')


    console.log('passed',rank)

    const nextQuestion = currentQuestion + 1;
    setuserProfile(userProfile => (
      {...{userProfile},rank}
    ))
    console.log('userprofile',userProfile)

    //clear previous rank list
    setrank([])

    if(questions[currentQuestion]['questionText'] === 'Rank what is most important to you. Rank at least two.'){
      console.log('true')
    }

		
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);

    // if the quiz is done, create a userProfile object for the user
      const userProfileJSON = {
        [questions[0]['questionText']]: userProfile['userProfile']['userProfile']['userProfile']['rank'],
        [questions[1]['questionText']]: userProfile['userProfile']['userProfile']['rank'],
        [questions[2]['questionText']]: userProfile['userProfile']['rank'],
        [questions[3]['questionText']]: userProfile['rank'],
        [questions[4]['questionText']]: rank
      }
      console.log('Full User Profile JSON:',userProfileJSON)
    }
      ///here put code from guide 1 under if showscore = true

  }

  const handleAnswerOptionClick = (answerOption,id) => {
    //adds the selected answer to the rank array or removes it if it is already there

    if(questions[currentQuestion]['questionText'] === 'Rank what is most important to you. Rank at least two.'){
      console.log('true')
    }

    //following removes the answer from the array if it already exists
    if (rank.includes(answerOption)){
      setrank((rank) => rank.filter(item=> item !== answerOption));

      //then change color of button if it was highlighted
      if (document.getElementById(id).style.background==='grey'){
      document.getElementById(id).style.background='';
      }
    } 
    //following adds the answer to the rank array if it doesnt already exist
    else{
      setrank([...rank, answerOption])
      //then change color of button if it was highlighted
      if (document.getElementById(id).style.background===''){
        document.getElementById(id).style.background='grey';
        }

    }
    console.log('selected',rank)

  }

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
        <div className='app'>
			{showScore ? (
				<div className='score-section'>
					paste html of guide1 section here
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption,id) => (
							<button id= {id} onClick={() => handleAnswerOptionClick(answerOption.answerText,id)}>{answerOption.answerText}</button>))}
              
					</div>
          <div>
          <button onClick={() => handleNextButtonClick()}>Next</button>
          </div>
          {/*following is for height bar selector*/}
          <p data-v-5b203982="" id="height-display" class="pr-e20 text-blue-500 tracking-tight text-e20 font-semibold text-right w-1/2">data-v-5b203982</p>
          <datalist data-v-5b203982="" id="tickmarks"><option data-v-5b203982="" label="opt" value="0"></option><option data-v-5b203982="" label="opt" value="1"></option><option data-v-5b203982="" label="opt" value="2"></option><option data-v-5b203982="" label="opt" value="3"></option><option data-v-5b203982="" label="opt" value="4"></option><option data-v-5b203982="" label="opt" value="5"></option><option data-v-5b203982="" label="opt" value="6"></option><option data-v-5b203982="" label="opt" value="7"></option><option data-v-5b203982="" label="opt" value="8"></option><option data-v-5b203982="" label="opt" value="9"></option><option data-v-5b203982="" label="opt" value="10"></option><option data-v-5b203982="" label="opt" value="11"></option><option data-v-5b203982="" label="opt" value="12"></option><option data-v-5b203982="" label="opt" value="13"></option><option data-v-5b203982="" label="opt" value="14"></option><option data-v-5b203982="" label="opt" value="15"></option><option data-v-5b203982="" label="opt" value="16"></option><option data-v-5b203982="" label="opt" value="17"></option><option data-v-5b203982="" label="opt" value="18"></option><option data-v-5b203982="" label="opt" value="19"></option><option data-v-5b203982="" label="opt" value="20"></option><option data-v-5b203982="" label="opt" value="21"></option><option data-v-5b203982="" label="opt" value="22"></option><option data-v-5b203982="" label="opt" value="23"></option><option data-v-5b203982="" label="opt" value="24"></option><option data-v-5b203982="" label="opt" value="25"></option></datalist>
          <input data-v-5b203982="" type="range" list="tickmarks" min="0" max="25" step="1" aria-label="How tall are you?" class="quiz-range w-full"></input>
				</>
			)}
		</div>
          {children}
        </div>
      </div>
    </section>
  );
}

QuizSection.propTypes = propTypes;
QuizSection.defaultProps = defaultProps;

export default QuizSection;