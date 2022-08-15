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
        image:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=781&q=80",
        alt:"Photo of a whole hawaiiwan pizza",
        credit: "Chad Montano"

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
        image:"https://images.unsplash.com/photo-1522666257812-173fdc2d11fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
        alt:"Photo of a plate of pasta",
        credit: "Sestrjevitovschii Ina"

      },
    ]
  },

  {
   d: 2,
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
        image:"hhttps://images.unsplash.com/photo-1416331108676-a22ccb276e35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80",
        alt:"Photo of a Mediterranean house with a pool ",
        credit:"Vita Vilcina"

      },
      {
        text:"Cabin",
        image:"https://images.unsplash.com/photo-1611602132416-da2045990f76?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        alt:"Photo of a blue cabin in the woods in the day time",
        credit: "Meritt Thomas"

      }

    ]
  }

]

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

     question.answers.forEach(answer =>{
       const answerBlock = document.createElement('div')
       answerBlock.classList.add('answer-block')
       answerBlock.addEventListener('click', handleClick )
       const answerImage = document.createElement('img')
       answerImage.setAttribute('src', answer.image)
       answerImage.setAttribute('src', answer.alt)


        answerBlock.append(answerImage)
  })
        questionDisplay.append(answersBlock)
  })
}



populateQuestions()

const handleClick = () =>  {
  console.log('clicked')
}
