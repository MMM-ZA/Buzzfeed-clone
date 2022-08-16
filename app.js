const questionDisplay = document.querySelector('#questions')
const answerDisplay = document.querySelector('#answer')

 const questions = [
  {
    id: 0,
    text: "Pick a vaction destination:",
    answers: [
      {
        text:"New York",
        image:"https://images.unsplash.com/photo-1617688319108-cb3bdc88f587?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80",
        alt:"Photo of the empire state building during the day time",
        credit: "Christian Ladewig"

      },
      {
        text:"Amsterdam",
        image:"https://images.unsplash.com/photo-1459679749680-18eb1eb37418?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        alt:"Photo of canal and dutch buildings in amsterdam",
        credit:"Javier M."

      },
      {
        text:"London",
        image:"https://images.unsplash.com/photo-1486299267070-83823f5448dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
        alt:"Photo of big ben and parliament in london",
        credit:"Marcin Nowak"

      },
      {
        text:"Tokyo",
        image:"https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        alt:"Photo of shopping area in tokyo at night",
        credit: "Jezael Melgoza"

      }

    ]

  },
  {
    id: 1,
    text: "Pick some food:",
    answers: [
      {
        text:"Pizza",
        image:"https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        alt:"Photo of a whole pizza with mushrooms and herbs",
        credit: "Vitalii Chernopyskyi"

      },
      {
        text:"Sandwich",
        image:"https://images.unsplash.com/photo-1592415499556-74fcb9f18667?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
        alt:"Photo of wholewheat vegan sandwich",
        credit: "The Matter of Food"

      },
      {
        text:"Post Roast",
        image:"https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80",
        alt:"Photo of a roasted pork chop with a side of veggies",
        credit: "Alex Munsell"

      },
      {
        text:"Pasta",
        image:"https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1232&q=80",
        alt:"Photo of a plate of pasta",
        credit: "Amirali mirhashemian"

      },
    ]
  },

  {
   id: 2,
    text: "Pick your ideal home:",
    answers: [
      {
        text:"Victorian",
        image:"https://images.unsplash.com/photo-1576525390218-1f9f706684cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
        alt:"Photo of a pink victorian house in Califonia",
        credit: "Jim Witkowski"

      },
      {
        text:"Modern",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        alt:"Photo of an geometric shaped home with large windows and window shutters",
        credit:"Dylan James"

      },
      {
        text:"Mediterranean",
        image:"https://images.unsplash.com/photo-1416331108676-a22ccb276e35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80",
        alt:"Photo of a Mediterranean house with a pool ",
        credit:"Vita Vilcina"

      },
      {
        text:"Cabin",
        image:"https://images.unsplash.com/photo-1559767949-0faa5c7e9992?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        alt:"Photo of a lake and a cabin in the woods in the day time",
        credit: "Stephen Wheeler"

      }

    ]
  }

]

const answers = [ {

   combination: ["New York", "Pizza", "Victorian"],
   text: "Blue Cheese",
   image: "https://images.unsplash.com/photo-1452195100486-9cc805987862?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
   alt: "Blue Cheese"
},

{
   combination: ["Amsterdam", "Sandwich", "Modern"],
   text: "Mozzarella",
   image: "https://images.unsplash.com/photo-1645087177483-f760329f470f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
   alt: "Mozzarella"
},

{
   combination: ["London", "Pot Roast", "Mediterranean"],
   text: "Brie",
   image: "https://images.unsplash.com/photo-1634487359989-3e90c9432133?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
   alt: "Brie"
},


{
   combination: ["Tokyo", "Pasta", "Cabin"],
   text: "Cheddar",
   image: "https://images.unsplash.com/photo-1589881133825-bbb3b9471b1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
   alt: "Cheddar"
}
 //a default answer will be provided to account for the lack of different combinations
]

const unansweredQuestions = []
const chosenAnswers = []

const populateQuestions =  () => {
  questions.forEach(question => {
      const titleBlock = document.createElement('div')
      titleBlock.id = question.id
      titleBlock.classList.add('title-block')
      const titleHeading = document.createElement('h2')
      titleHeading.textContent = question.text
      titleBlock.append(titleHeading)
      questionDisplay.append(titleBlock)

     const answersBlock = document.createElement('div')
     answersBlock.id = question.id + "-questions"
     answersBlock.classList.add('answer-options')

     unansweredQuestions.push(question.id)

     question.answers.forEach(answer =>{
       const answerBlock = document.createElement('div')
       answerBlock.classList.add('answer-block')
       answerBlock.addEventListener('click', () => handleClick(question.id, answer.text))
       const answerImage = document.createElement('img')
       answerImage.setAttribute('src', answer.image)
       answerImage.setAttribute('alt', answer.alt)

       const answerTitle = document.createElement('h3')
       answerTitle.textContent = answer.text

       const answerInfo = document.createElement('p')
       const imageLink = document.createElement('a')
       imageLink.setAttribute('href', answer.credit)
       imageLink.textContent = answer.credit
       const sourceLink = document.createElement('a')
       sourceLink.textContent = 'Unsplash'
       sourceLink.setAttribute('src', 'https://unsplash.com/')

        answerInfo.append(imageLink, 'to', sourceLink)

        answerBlock.append(answerImage, answerTitle, answerInfo)

        answersBlock.append(answerBlock)

  })
        questionDisplay.append(answersBlock)
  })
}



populateQuestions()

const handleClick = (questionId, chosenAnswer) =>  {
  if (unansweredQuestions.includes(questionId))
  chosenAnswers.push(chosenAnswer)
  const itemToRemove = unansweredQuestions.indexOf(questionId)

  if (itemToRemove > -1 ) {
    unansweredQuestions.splice(itemToRemove, 1)
  }

  console.log(chosenAnswer)
  console.log(unansweredQuestions)

  disableQuestionBlock(questionId, chosenAnswer)
  const lowestQuestionId = Math.min(...unansweredQuestions)
   location.href = '#' + lowestQuestionId


  if (!unansweredQuestions.length) {

    showAnswer()
  }
}

 const showAnswer = () => {

    let result
    answers.forEach(answer => {
      if (
        chosenAnswers.includes(answer.combination[0]),
        chosenAnswers.includes(answer.combination[1]),
        chosenAnswers.includes(answer.combination[2])
      )
      {
        result = answer
        return
      } else if (!result) {
       //defaults to the first answer object
      result = answers[0]
      }
    })



  const answerBlock = document.createElement('div')
  answerBlock.classList.add('result-block')
  const answerTitle = document.createElement('h3')
  answerTitle.textContent = result.text
  const answerImage = document.createElement('img')
  answerImage.setAttribute('src', result.image)
  answerImage.setAttribute('alt', result.alt)


  answerBlock.append(answerTitle, answerImage)

  answerDisplay.append(answerBlock)

  const allAnswerBlocks = document.querySelectorAll('.answer-block')
   Array.from(allAnswerBlocks).forEach(answerBlock => answerBlock.replaceWith(answerBlock))

 }

 const disableQuestionBlock = (questionId, chosenAnswer) => {
  const currentQuestionBlock = document.getElementById(questionId + "-questions")

    Array.from(currentQuestionBlock.children).forEach(block => {
      if (block.children.item(1).innerText!= chosenAnswer) {
        block.style.opacity = "50%"
      }
    })

 }
