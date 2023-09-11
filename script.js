const list =[
  {
      name: "Paulo",
      p1: 7,
      p2: 8.5
  },
    
  {
      name: "Ronaldo",
      p1: 8,
      p2: 5
  },
    
  {
      name: "Yan",
      p1: 6.8,
      p2: 5
  },
  
  {
      name: "Renan",
      p1: 10,
      p2: 9
  }
    
  ]
  
  // function average(p1, p2) {
  //   return (p1 + p2) / 2
  // }

  // function message(person) {

  //   let pFinal = `${average(person.p1, person.p2)}`
  //    if (pFinal >= 7){
  //     alert(`
  //     A média do(a) aluno(a) ${person.name} é: ${pFinal}
  //     Parabéns ${person.name}, vc foi aprovado(a) no concurso!`)
  //   } else {
  //     alert(`
  //     A média do(a) aluno(a) ${person.name} é: ${pFinal}
  //     Não foi desta vez ${person.name}, tente novamente!`)
  //   }
  //   return `Alpha Prime INC.`
  // }

  // for (let people of list) {
  //   let info = message(people)
  //   alert(info)
  // }  
  
// ------------------------------------------------ os dois funcionam entretanto, um tem um return indesejado!

  let pass
  let testNote

  function average(p1, p2, name) {
    testNote = (p1 + p2) / 2
    pass = testNote >= 7 ? `    
     Parabéns, ${name} vc foi aprovado(a) no concurso!` : `
     Não foi desta vez, ${name}! Tente novamente!`;
    return testNote
  }

  function message (finishHim){
    return `A média do aluno ${finishHim.name} é: ${average(finishHim.p1, finishHim.p2, finishHim.name)}  ${pass} `
  }

  for (let people of list) {
    let info = message(people)
    alert(info)
  }  
