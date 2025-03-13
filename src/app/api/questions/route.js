export async function GET(request) {
    const answers = [
        {
            number: "Question 1/10",
            text: "Qual è la capitale di Italia?",
            button1: "Milano",
            button2: "Roma",
            button3: "Venezia",
            button4: "Napoli",
            answer: "Roma"

        },
        {
            number: "Question 2/10",
            text: "Chi ha dipinto la Gioconda?" ,
            button1: "Michelangelo",
            button2: "Leonardo da Vinci",
            button3: "Raffaello",
            button4: "Donatello" ,
            answer: "Leonardo da Vinci"
        },
        {
            number: "Question 3/10",
            text: "Qual è il fiume più lungo del mondo?" ,
            button1: "Rio delle Amazzoni",
            button2: "Nilo",
            button3: "Fiume Azzurro",
            button4: "Mississippi",
            answer: "Fiume Azzurro"
          },
        {
            number: "Question 4/10",
            text: "Quanti pianeti ci sono nel sistema solare?" ,
            button1: "Sette",
            button2: "Otto",
            button3: "Nove",
            button4: "Dieci",
            answer: "Otto" 
          },
        {
            number: "Question 5/10",
            text: "Quale elemento chimico ha il simbolo O?" ,
            button1: "Ossigeno",
            button2: "Oro",
            button3: "Ozono",
            button4: "Osmio",
            answer: "Ossigeno"
          },
        {
            number: "Question 6/10",
            text: "Chi ha scritto La Divina Commedia?" ,
            button1: "Dante Alighieri",
            button2: "Francesco Petrarca",
            button3: "Giovanni Boccaccio",
            button4: "Alessandro Manzoni",
            answer: "Dante Alighieri" 
          },
        {
            number: "Question 7/10",
            text: "Qual è il continente più grande del mondo?" ,
            button1: "Asia",
            button2: "Africa",
            button3: "America",
            button4: "Europa",
            answer: "Asia" 
          },
          {
            number: "Question 8/10",
            text: "Quale di questi non è un linguaggio di programmazione?" ,
            button1: "Javascript",
            button2: "Python",
            button3: "Java",
            button4: "Excel",
            answer: "Excel" 
          },
          {
            number: "Question 9/10",
            text: "Quale di questi è un famoso motore di ricerca?" ,
            button1: "Google",
            button2: "Word",
            button3: "Powerpoint",
            button4: "Adobe",
            answer: "Google"
          },
          {
            number: "Question 10/10",
            text: "In che anno è caduto il muro di Berlino?" ,
            button1: "1987",
            button2: "1988",
            button3: "1989",
            button4: "1990",
            answer: "1989" 
          }

]
    return new Response(JSON.stringify(answers), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  }