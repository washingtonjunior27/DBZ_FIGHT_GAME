// FUNCTIONS
const closeResultModal = () => {
    document.querySelector('.result').style.display = "none";
    document.querySelector('.start').style.display = "flex";
    document.querySelector('.main').classList.remove('active');
    document.querySelector('.result').style.display = "none";
}

const openResultModal = () => document.querySelector('.result').style.display = "block";

const addImageWarriors = (name1, name2, warrior1, warrior2) => {
    document.querySelector("#nome").textContent = name1;
    document.querySelector("#nome2").textContent = name2;
    document.querySelector("#img1").src = warrior1;
    document.querySelector("#img2").src = warrior2;
}

const fillModal = (result, guerreiro1, guerreiro2, pontos1, pontos2) => {
    const getTbody = document.getElementById('table-result-body');
    getTbody.innerHTML = "";
    
    document.querySelector('.result-title h3').textContent = `${result}`;

    const newTr = document.createElement('tr');
    newTr.innerHTML = `<td>${guerreiro1.nome}</td>
                        <td>${guerreiro1.poder}</td>
                        <td>${guerreiro1.velocidade}</td>
                        <td>${guerreiro1.habilidades}</td>
                        <td>${pontos1}</td>`;

    const newTr2 = document.createElement('tr');
    newTr2.innerHTML = `<td>${guerreiro2.nome}</td>
                        <td>${guerreiro2.poder}</td>
                        <td>${guerreiro2.velocidade}</td>
                        <td>${guerreiro2.habilidades}</td>
                        <td>${pontos2}</td>`;

                        
    getTbody.appendChild(newTr);
    getTbody.appendChild(newTr2)

    pontos1 > pontos2 
    ? document.querySelector('.result-footer h3').textContent = `${guerreiro1.nome} destrói com ${guerreiro1.ataque}`
    : document.querySelector('.result-footer h3').textContent = `${guerreiro2.nome} destrói com ${guerreiro2.ataque}`
    
}

const generateCharacters = () => {
    const random1 = Math.floor(Math.random() * guerreiros_z.length);
    let random2 = Math.floor(Math.random() * guerreiros_z.length);

    while(random1 == random2){
        random2 = Math.floor(Math.random() * guerreiros_z.length);
    }

    const guerreiro1 = guerreiros_z[random1]
    const guerreiro2 = guerreiros_z[random2]

    addImageWarriors(guerreiro1.nome, guerreiro2.nome, guerreiro1.img, guerreiro2.img);

    let pontos1 = 0;
    let pontos2 = 0;

    guerreiro1.poder > guerreiro2.poder ? pontos1 += 1 : pontos2 += 1;
    guerreiro1.habilidades > guerreiro2.habilidades ? pontos1 += 1 : pontos2 += 1;
    guerreiro1.velocidade > guerreiro2.velocidade ? pontos1 += 1 : pontos2 += 1;

    document.getElementById('aposta1').addEventListener('click', () => {    
        openResultModal()

        if(pontos1 > pontos2){
            const result = 'Voce venceu!';
            fillModal(result, guerreiro1, guerreiro2, pontos1, pontos2);
        }else{
            const result = 'Voce perdeu!';
            fillModal(result, guerreiro1, guerreiro2, pontos1, pontos2);
        }
    })

    document.getElementById('aposta2').addEventListener('click', () => {
        openResultModal()

        if(pontos1 > pontos2){
            const result = 'Voce perdeu!';
            fillModal(result, guerreiro1, guerreiro2, pontos1, pontos2);
        }else{
            const result = 'Voce venceu!';
            fillModal(result, guerreiro1, guerreiro2, pontos1, pontos2);
        }
    })
}
// EVENTS

document.getElementById('startGame').addEventListener('click', () => {
    document.querySelector('.start').style.display = "none";
    document.querySelector('.main').classList.add('active');
    
    generateCharacters();
})

document.getElementById('restart').addEventListener('click', () => {
    document.querySelector('.result').style.display = "none";
    document.querySelector('.start').style.display = "flex";
    document.querySelector('.main').classList.remove('active');
})

document.getElementById('closeResult').addEventListener('click', () => closeResultModal())


const guerreiros_z = [
    {
      nome: "Goku (Vs Raditz)",
      poder: Math.floor(Math.random() * 10 + 150),
      velocidade: Math.floor(Math.random() * 10 + 45),
      habilidades: Math.floor(Math.random() * 10 + 45),
      img: "https://assets.stickpng.com/images/584e838b6a5ae41a83ddee3c.png",
      ataque: 'Kamehameha'
    },
    {
      nome: "Picollo (Vs Raditz)",
      poder: Math.floor(Math.random() * 10 + 145),
      velocidade: Math.floor(Math.random() * 10 + 45),
      habilidades: Math.floor(Math.random() * 10 + 55),
      img: "https://i.pinimg.com/originals/5a/93/36/5a9336e7488117e24714a5b6f51e070e.png",
      ataque: 'Makankosappo'
    },
    {
      nome: "Raditz",
      poder: Math.floor(Math.random() * 10 + 195),
      velocidade: Math.floor(Math.random() * 10 + 65),
      habilidades: Math.floor(Math.random() * 10 + 65),
      img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/84dc13b7-a2e7-4b45-83ec-311e72e82900/ddxd2o7-65aa022d-19f0-4dba-a07b-00814ee237b3.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg0ZGMxM2I3LWEyZTctNGI0NS04M2VjLTMxMWU3MmU4MjkwMFwvZGR4ZDJvNy02NWFhMDIyZC0xOWYwLTRkYmEtYTA3Yi0wMDgxNGVlMjM3YjMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.2oi8en45CgCp45Jo2hjsAJ5GWW0xiH6X3cy_kQKBYek",
      ataque: 'Rajada de KI'
    },
    {
      nome: "Kuririn (Saga Saiyajin)",
      poder: Math.floor(Math.random() * 10 + 235),
      velocidade: Math.floor(Math.random() * 10 + 85),
      habilidades: Math.floor(Math.random() * 10 + 125),
      img: "https://i.pinimg.com/originals/61/1d/c8/611dc836fc11a9dff75569ff2b3691d0.png",
      ataque: 'Kienzan'
    },
    {
      nome: "Yamcha",
      poder: Math.floor(Math.random() * 10 + 185),
      velocidade: Math.floor(Math.random() * 10 + 65),
      habilidades: Math.floor(Math.random() * 10 + 75),
      img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/84dc13b7-a2e7-4b45-83ec-311e72e82900/dcn73gc-d5664695-3020-45cc-8921-7df762b67266.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg0ZGMxM2I3LWEyZTctNGI0NS04M2VjLTMxMWU3MmU4MjkwMFwvZGNuNzNnYy1kNTY2NDY5NS0zMDIwLTQ1Y2MtODkyMS03ZGY3NjJiNjcyNjYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.A13lRC-1ANz3cmsDylNODXwzpxcGBnarRsYqSRHS-mQ",
      ataque: 'Sokidan'
    },
    {
      nome: "TenShinHan",
      poder: Math.floor(Math.random() * 10 + 225),
      velocidade: Math.floor(Math.random() * 10 + 85),
      habilidades: Math.floor(Math.random() * 10 + 105),
      img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/84dc13b7-a2e7-4b45-83ec-311e72e82900/ddmju9o-b13b1319-6394-4923-9a06-6f1afaac28ea.png/v1/fill/w_653,h_1224/tien_shinhan__saiyan_saga__render__dbz_kakarot__by_maxiuchiha22_ddmju9o-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTUwMCIsInBhdGgiOiJcL2ZcLzg0ZGMxM2I3LWEyZTctNGI0NS04M2VjLTMxMWU3MmU4MjkwMFwvZGRtanU5by1iMTNiMTMxOS02Mzk0LTQ5MjMtOWEwNi02ZjFhZmFhYzI4ZWEucG5nIiwid2lkdGgiOiI8PTgwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.HBB-_O4pfRMx1Bn9xG6K2oZf75k3k0bkiPOAZXNR0sI",
      ataque: 'Kikoho'
    },
    {
      nome: "Chaos",
      poder: Math.floor(Math.random() * 10 + 145),
      velocidade: Math.floor(Math.random() * 10 + 25),
      habilidades: Math.floor(Math.random() * 10 + 75),
      img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5198649b-82d8-4da8-b53f-5d30cfdae356/dfd8r6e-4080b446-c2cc-42ae-96c6-eab665477a59.png/v1/fill/w_1280,h_1463/chaos_saga_saiyan_by_widdirit_dfd8r6e-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQ2MyIsInBhdGgiOiJcL2ZcLzUxOTg2NDliLTgyZDgtNGRhOC1iNTNmLTVkMzBjZmRhZTM1NlwvZGZkOHI2ZS00MDgwYjQ0Ni1jMmNjLTQyYWUtOTZjNi1lYWI2NjU0NzdhNTkucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.ToxtT6rUP75KQmIjX22N7U317UBQ7roX495WkmHVAE4",
      ataque: 'Adeus, Tenshin'
    },
    {
      nome: "Piccolo (VS Saiyajins)",
      poder: Math.floor(Math.random() * 10 + 355),
      velocidade: Math.floor(Math.random() * 10 + 175),
      habilidades: Math.floor(Math.random() * 10 + 195),
      img: "https://freepngimg.com/save/107985-piccolo-free-clipart-hd/1053x1247",
      ataque: 'Makankosappo'
    },
    {
      nome: "Nappa",
      poder: Math.floor(Math.random() * 10 + 500),
      velocidade: Math.floor(Math.random() * 10 + 200),
      habilidades: Math.floor(Math.random() * 10 + 200),
      img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/84dc13b7-a2e7-4b45-83ec-311e72e82900/ddz9c8o-d9a55b4b-47cd-418d-8d6c-549fa8288985.png/v1/fill/w_894,h_894/nappa_render_2__dokkan_battle__by_maxiuchiha22_ddz9c8o-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTMwMCIsInBhdGgiOiJcL2ZcLzg0ZGMxM2I3LWEyZTctNGI0NS04M2VjLTMxMWU3MmU4MjkwMFwvZGR6OWM4by1kOWE1NWI0Yi00N2NkLTQxOGQtOGQ2Yy01NDlmYTgyODg5ODUucG5nIiwid2lkdGgiOiI8PTEzMDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.2UA0nk_lYavN_o1QvXnmoxJ2rSc9LEwgtoj8ZkmoMqc",
      ataque: 'Rajada de KI'
    },
    {
      nome: "Vegeta",
      poder: Math.floor(Math.random() * 10 + 800),
      velocidade: Math.floor(Math.random() * 10 + 250),
      habilidades: Math.floor(Math.random() * 10 + 250),
      img: "https://i.pinimg.com/originals/06/c2/3f/06c23f03998cae87c35fcbf3297b443c.png",
      ataque: 'Galick Gun'
    },
    {
      nome: "Goku (VS Vegeta)",
      poder: Math.floor(Math.random() * 10 + 750),
      velocidade: Math.floor(Math.random() * 10 + 250),
      habilidades: Math.floor(Math.random() * 10 + 300),
      img: "https://i.pinimg.com/originals/5a/aa/b2/5aaab22792a5e30c2385681b49e4c9a7.png",
      ataque: 'Genkidama'
    },
    {
      nome: "Vegeta (Oozaru)",
      poder: Math.floor(Math.random() * 10 + 2000),
      velocidade: Math.floor(Math.random() * 10 + 300),
      habilidades: Math.floor(Math.random() * 10 + 300),
      img: "https://i.pinimg.com/originals/2a/39/19/2a391916449a8b2208d37a8f2236c74f.png",
      ataque: 'Super Galick Gun'
    },
    {
      nome: "Bardock",
      poder: Math.floor(Math.random() * 10 + 200),
      velocidade: Math.floor(Math.random() * 10 + 100),
      habilidades: Math.floor(Math.random() * 10 + 100),
      img: "https://i.pinimg.com/originals/22/d8/db/22d8dbed75378f7d1eccea58850bd622.png",
      ataque: 'Final Spirit Cannon'
    },
    {
      nome: "Kuririn (Saga Freeza)",
      poder: Math.floor(Math.random() * 10 + 1000),
      velocidade: Math.floor(Math.random() * 10 + 400),
      habilidades: Math.floor(Math.random() * 10 + 700),
      img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/84dc13b7-a2e7-4b45-83ec-311e72e82900/dcmv07e-4fd6f76e-b0e8-4d5b-a421-6a643f46b9ed.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg0ZGMxM2I3LWEyZTctNGI0NS04M2VjLTMxMWU3MmU4MjkwMFwvZGNtdjA3ZS00ZmQ2Zjc2ZS1iMGU4LTRkNWItYTQyMS02YTY0M2Y0NmI5ZWQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.RgtpOOd5kyXqcB2MJDFrbdMgjqVtXTwU4mct9kzZNHc",
      ataque: 'Kienzan'
    },
    {
      nome: "Piccolo (Saga Freeza)",
      poder: Math.floor(Math.random() * 10 + 1500),
      velocidade: Math.floor(Math.random() * 10 + 800),
      habilidades: Math.floor(Math.random() * 10 + 900),
      img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/84dc13b7-a2e7-4b45-83ec-311e72e82900/dd4p5gj-184b8aa6-62a3-471e-a211-a7dba9368b7a.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg0ZGMxM2I3LWEyZTctNGI0NS04M2VjLTMxMWU3MmU4MjkwMFwvZGQ0cDVnai0xODRiOGFhNi02MmEzLTQ3MWUtYTIxMS1hN2RiYTkzNjhiN2EucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.9eAbfMhoF9SzRKZDOByPTbZxGc6y3KHvr0dZNbNjyh4",
      ataque: 'Makankosappo'
    },
    {
      nome: "Freeza",
      poder: Math.floor(Math.random() * 10 + 1200),
      velocidade: Math.floor(Math.random() * 10 + 600),
      habilidades: Math.floor(Math.random() * 10 + 600),
      img: "https://i.pinimg.com/originals/74/92/f1/7492f156ccf1e4804356de862664491f.png",
      ataque: 'Bola da Morte'
    },
    {
      nome: "Freeza (2nd form)",
      poder: Math.floor(Math.random() * 10 + 1500),
      velocidade: Math.floor(Math.random() * 10 + 800),
      habilidades: Math.floor(Math.random() * 10 + 850),
      img: "https://i.pinimg.com/originals/17/69/b6/1769b660914375d487ef9a5eb03e29c1.png",
      ataque: 'Bola da Morte'
    },
    {
      nome: "Freeza (3nd form)",
      poder: Math.floor(Math.random() * 10 + 1800),
      velocidade: Math.floor(Math.random() * 10 + 1000),
      habilidades: Math.floor(Math.random() * 10 + 1000),
      img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/84dc13b7-a2e7-4b45-83ec-311e72e82900/dcllsh4-4ac51119-9e59-4cb5-b9a6-778e86fa13b5.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg0ZGMxM2I3LWEyZTctNGI0NS04M2VjLTMxMWU3MmU4MjkwMFwvZGNsbHNoNC00YWM1MTExOS05ZTU5LTRjYjUtYjlhNi03NzhlODZmYTEzYjUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.TSNtPr0aedNnMBMChvkuVMMVShttJLQSq6FVeK8BYBo",
      ataque: 'Raio da Morte'
    },
    {
      nome: "Freeza (final form)",
      poder: Math.floor(Math.random() * 10 + 2500),
      velocidade: Math.floor(Math.random() * 10 + 1500),
      habilidades: Math.floor(Math.random() * 10 + 1500),
      img: "https://i.pinimg.com/originals/e7/76/fc/e776fc9313606f7532b93e65e2e7a1d9.png",
      ataque: 'Raio da Morte'
    },
    {
      nome: "Freeza (full power)",
      poder: Math.floor(Math.random() * 10 + 3000),
      velocidade: Math.floor(Math.random() * 10 + 2000),
      habilidades: Math.floor(Math.random() * 10 + 2000),
      img: "https://i.pinimg.com/originals/94/6f/22/946f228f2e7454feae5faf3f2f5f4929.png",
      ataque: 'Destruidor de Planetas'
    },
    {
      nome: "Goku SSJ1",
      poder: Math.floor(Math.random() * 10 + 3500),
      velocidade: Math.floor(Math.random() * 10 + 2500),
      habilidades: Math.floor(Math.random() * 10 + 2500),
      img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/84dc13b7-a2e7-4b45-83ec-311e72e82900/dckmzi2-9e3fad4d-0850-4203-a0a7-2a407b681742.png/v1/fill/w_400,h_640/goku_ssj__namek_saga__render__dokkan_battle__by_maxiuchiha22_dckmzi2-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjQwIiwicGF0aCI6IlwvZlwvODRkYzEzYjctYTJlNy00YjQ1LTgzZWMtMzExZTcyZTgyOTAwXC9kY2ttemkyLTllM2ZhZDRkLTA4NTAtNDIwMy1hMGE3LTJhNDA3YjY4MTc0Mi5wbmciLCJ3aWR0aCI6Ijw9NDAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.3Y29kSClsFhpI5EXBR2LJbhkv4aq8uQY4Pob1nrCx6Q",
      ataque: 'Super Kamehameha'
    },
    {
      nome: "Rei Cold",
      poder: Math.floor(Math.random() * 10 + 2800),
      velocidade: Math.floor(Math.random() * 10 + 1800),
      habilidades: Math.floor(Math.random() * 10 + 1800),
      img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/84dc13b7-a2e7-4b45-83ec-311e72e82900/dcd0oc8-c01b1a4b-cc67-454e-8cfb-3b1af5c36407.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg0ZGMxM2I3LWEyZTctNGI0NS04M2VjLTMxMWU3MmU4MjkwMFwvZGNkMG9jOC1jMDFiMWE0Yi1jYzY3LTQ1NGUtOGNmYi0zYjFhZjVjMzY0MDcucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.vuJAUPDtvi6D98CSp9-fhAnV_KAsJA8SgIDJa_LmOlA",
      ataque: 'Poder da Familia do Mal'
    },
    {
      nome: "Mecha Freeza",
      poder: Math.floor(Math.random() * 10 + 3200),
      velocidade: Math.floor(Math.random() * 10 + 2100),
      habilidades: Math.floor(Math.random() * 10 + 2100),
      img: "https://i.pinimg.com/originals/67/ed/2d/67ed2df302f7d06ebdf0fddb40320889.png",
      ataque: 'Supernova'
    },
    {
      nome: "Trunks SSJ1",
      poder: Math.floor(Math.random() * 10 + 4000),
      velocidade: Math.floor(Math.random() * 10 + 3000),
      habilidades: Math.floor(Math.random() * 10 + 3000),
      img: "https://i.pinimg.com/originals/3a/08/fc/3a08fc885ed8183f550d6f582ea330bd.png",
      ataque: 'Ataque da Espada Brilhante'
    },
    {
      nome: "Android 18",
      poder: Math.floor(Math.random() * 10 + 6000),
      velocidade: Math.floor(Math.random() * 10 + 4000),
      habilidades: Math.floor(Math.random() * 10 + 4000),
      img: "https://i.pinimg.com/originals/30/87/89/308789968565a7fef982fb89c524d38f.png",
      ataque: "Rajada de KI"
    },
    {
      nome: "Android 17",
      poder: Math.floor(Math.random() * 10 + 6000),
      velocidade: Math.floor(Math.random() * 10 + 4000),
      habilidades: Math.floor(Math.random() * 10 + 4000),
      img: "https://glben.dokkaninfo.com/assets/global/en/character/card/1017930/card_1017930_character.png",
      ataque: "Barreira Android"
    },
    {
      nome: "Android 16",
      poder: Math.floor(Math.random() * 10 + 8000),
      velocidade: Math.floor(Math.random() * 10 + 6000),
      habilidades: Math.floor(Math.random() * 10 + 6000),
      img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/84dc13b7-a2e7-4b45-83ec-311e72e82900/dckq2nl-e2892423-a936-41b4-aad9-85cb3b4ab575.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg0ZGMxM2I3LWEyZTctNGI0NS04M2VjLTMxMWU3MmU4MjkwMFwvZGNrcTJubC1lMjg5MjQyMy1hOTM2LTQxYjQtYWFkOS04NWNiM2I0YWI1NzUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.HiOAmS-kRvEhoI80hyFMFpCip-WJAwabyS_dMlMsT5E",
      ataque: "Braço Sonico"
    },
    {
      nome: "Piccolo (com Kami-Sama)",
      poder: Math.floor(Math.random() * 10 + 6000),
      velocidade: Math.floor(Math.random() * 10 + 4000),
      habilidades: Math.floor(Math.random() * 10 + 4500),
      img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b38d1f6b-dcad-4f7a-b47e-338659cdbeaf/ddktllh-55f509e4-0880-4f24-87f1-727f8579aa72.png/v1/fill/w_1280,h_1300/piccolo_jr_by_arbiter720_ddktllh-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTMwMCIsInBhdGgiOiJcL2ZcL2IzOGQxZjZiLWRjYWQtNGY3YS1iNDdlLTMzODY1OWNkYmVhZlwvZGRrdGxsaC01NWY1MDllNC0wODgwLTRmMjQtODdmMS03MjdmODU3OWFhNzIucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.ikdCWdhYOJmTtNKkJGuu84U4lRPlqMGff3z7mkfeXC4",
      ataque: "Zona de Bombas Infernais"
    },
    {
      nome: "Cell",
      poder: Math.floor(Math.random() * 10 + 8000),
      velocidade: Math.floor(Math.random() * 10 + 6000),
      habilidades: Math.floor(Math.random() * 10 + 6500),
      img: "https://dokkaninfo.com/assets/japan/character/card/1017340/card_1017340_character.png",
      ataque: "Kamehameha"
    },
    {
      nome: "Cell (2nd forma)",
      poder: Math.floor(Math.random() * 10 + 9000),
      velocidade: Math.floor(Math.random() * 10 + 7000),
      habilidades: Math.floor(Math.random() * 10 + 7500),
      img: "https://i.pinimg.com/originals/38/4a/a7/384aa78a418d396b8e88a392369ac575.png",
      ataque: "Absorção de KI"
    },
    {
      nome: "Super Vegeta",
      poder: Math.floor(Math.random() * 10 + 11000),
      velocidade: Math.floor(Math.random() * 10 + 10000),
      habilidades: Math.floor(Math.random() * 10 + 10000),
      img: "https://i.pinimg.com/originals/36/80/df/3680dfc2bb334ac753b02257f9c314e2.png",
      ataque: "Resplendor Final"
    },
    {
      nome: "Super Trunks",
      poder: Math.floor(Math.random() * 10 + 15000),
      velocidade: Math.floor(Math.random() * 10 + 4000),
      habilidades: Math.floor(Math.random() * 10 + 8000),
      img: "https://i.pinimg.com/originals/28/cf/f1/28cff16e33f0cf37c122d93def94634d.png",
      ataque: 'Super Onda Explosiva'
    },
    {
      nome: "Cell Forma Perfeita",
      poder: Math.floor(Math.random() * 10 + 14000),
      velocidade: Math.floor(Math.random() * 10 + 14000),
      habilidades: Math.floor(Math.random() * 10 + 14000),
      img: "https://i.pinimg.com/originals/f9/9a/08/f99a0875aeb58861cbb6213cee4b0c73.png",
      ataque: 'Super Kamehameha'
    },
    {
      nome: "Goku (Saga Cell)",
      poder: Math.floor(Math.random() * 10 + 13000),
      velocidade: Math.floor(Math.random() * 10 + 13000),
      habilidades: Math.floor(Math.random() * 10 + 13000),
      img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/84dc13b7-a2e7-4b45-83ec-311e72e82900/dcevpd4-1796a97d-6a12-4368-af42-c38c83f40120.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg0ZGMxM2I3LWEyZTctNGI0NS04M2VjLTMxMWU3MmU4MjkwMFwvZGNldnBkNC0xNzk2YTk3ZC02YTEyLTQzNjgtYWY0Mi1jMzhjODNmNDAxMjAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.zv-sKHB2eZg9sTSVNpcvibfLt8ONeGGv2mbT7Q-i9SI",
      ataque: 'Kamehameha com Teletransporte'
    },
    {
      nome: "Gohan SSJ2",
      poder: Math.floor(Math.random() * 10 + 20000),
      velocidade: Math.floor(Math.random() * 10 + 20000),
      habilidades: Math.floor(Math.random() * 10 + 20000),
      img: "https://i.pinimg.com/originals/08/e3/e4/08e3e4bdd16132583bf5e1248614f21d.png",
      ataque: 'Kamehameha Pai e Filho'
    },
    {
      nome: "Cell Perfeito",
      poder: Math.floor(Math.random() * 10 + 19500),
      velocidade: Math.floor(Math.random() * 10 + 19500),
      habilidades: Math.floor(Math.random() * 10 + 19500),
      img: "https://vignette.wikia.nocookie.net/vsbattles/images/2/21/Cell_%28Super_Hyper_Perfect%29.png/revision/latest/scale-to-width-down/390?cb=20151127005115",
      ataque: 'Kamehameha Solar'
    },
    {
      nome: "Grande Saiyaman",
      poder: Math.floor(Math.random() * 10 + 10000),
      velocidade: Math.floor(Math.random() * 10 + 10000),
      habilidades: Math.floor(Math.random() * 10 + 10000),
      img: "https://i.pinimg.com/originals/79/1f/07/791f078bd416faac04edd88abb2ba813.png",
      ataque: 'Julgamento da Justiça'
    },
    {
      nome: "Supremo Senhor Kaio",
      poder: Math.floor(Math.random() * 10 + 8000),
      velocidade: Math.floor(Math.random() * 10 + 8000),
      habilidades: Math.floor(Math.random() * 10 + 8000),
      img: "https://i.pinimg.com/originals/70/2a/8c/702a8c182cbe9cefe80185ab030cb58f.png",
      ataque: 'Gekiretsu Shinouhou'
    },
    {
      nome: "Goku SSJ2",
      poder: Math.floor(Math.random() * 10 + 23000),
      velocidade: Math.floor(Math.random() * 10 + 23000),
      habilidades: Math.floor(Math.random() * 10 + 23000),
      img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3eb70ccc-e7ad-4e1a-87fa-f97df9ef1c52/db336ev-3a7491d8-8f1c-4b9f-8e3c-6bfff216da02.png/v1/fill/w_1024,h_1049/goku_ssj2_by_saodvd_db336ev-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA0OSIsInBhdGgiOiJcL2ZcLzNlYjcwY2NjLWU3YWQtNGUxYS04N2ZhLWY5N2RmOWVmMWM1MlwvZGIzMzZldi0zYTc0OTFkOC04ZjFjLTRiOWYtOGUzYy02YmZmZjIxNmRhMDIucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.yFkz8tUE99be2OCo4PhxOcETf1kR_AtaoIMpYrZe-p8",
      ataque: 'Super Kamehameha'
    },
    {
      nome: "Goku SSJ3",
      poder: Math.floor(Math.random() * 10 + 30000),
      velocidade: Math.floor(Math.random() * 10 + 30000),
      habilidades: Math.floor(Math.random() * 10 + 30000),
      img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ced6433d-8a03-4eb3-b4f6-65e24027d4ed/dejojba-39d74d96-6f25-4b5f-a2c5-df1678588d57.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2NlZDY0MzNkLThhMDMtNGViMy1iNGY2LTY1ZTI0MDI3ZDRlZFwvZGVqb2piYS0zOWQ3NGQ5Ni02ZjI1LTRiNWYtYTJjNS1kZjE2Nzg1ODhkNTcucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0._RQkJVemDDppxW7u-74YZJrYCniQSb2KGRHPyFeMGD0",
      ataque: 'Golpe do Dragão'
    },
    {
      nome: "Majin Vegeta",
      poder: Math.floor(Math.random() * 10 + 24000),
      velocidade: Math.floor(Math.random() * 10 + 24000),
      habilidades: Math.floor(Math.random() * 10 + 24000),
      img: "https://i.pinimg.com/originals/5d/75/00/5d7500464e76e101464d0280f5c924ea.png",
      ataque: 'Explosão Final'
    },
    {
      nome: "Majin Boo",
      poder: Math.floor(Math.random() * 10 + 28000),
      velocidade: Math.floor(Math.random() * 10 + 28000),
      habilidades: Math.floor(Math.random() * 10 + 28000),
      img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/655491b7-451e-4010-8f27-2a8539ed27a2/d58wvuw-408f1d29-7e8f-4828-a9f3-9884edd418de.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY1NTQ5MWI3LTQ1MWUtNDAxMC04ZjI3LTJhODUzOWVkMjdhMlwvZDU4d3Z1dy00MDhmMWQyOS03ZThmLTQ4MjgtYTlmMy05ODg0ZWRkNDE4ZGUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.KlSoqBUBSnrXmrReC1SH7IYwb_DJFqCE5RoqcCX573k",
      ataque: 'Transforme-se em Chocolate'
    },
    {
      nome: "Evil Boo",
      poder: Math.floor(Math.random() * 10 + 28000),
      velocidade: Math.floor(Math.random() * 10 + 28000),
      habilidades: Math.floor(Math.random() * 10 + 28000),
      img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/84dc13b7-a2e7-4b45-83ec-311e72e82900/ddh7rjz-db39da39-2caa-4426-9716-81c0828d249f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg0ZGMxM2I3LWEyZTctNGI0NS04M2VjLTMxMWU3MmU4MjkwMFwvZGRoN3Jqei1kYjM5ZGEzOS0yY2FhLTQ0MjYtOTcxNi04MWMwODI4ZDI0OWYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.swWpJ7aNH88Ee2rVKQSi5ov5Vh7zNod7p-3UIqVtbrk",
      ataque: 'Super Onda Explosiva'
    },
    {
      nome: "Super Boo",
      poder: Math.floor(Math.random() * 10 + 35000),
      velocidade: Math.floor(Math.random() * 10 + 35000),
      habilidades: Math.floor(Math.random() * 10 + 35000),
      img: "https://i.pinimg.com/originals/61/25/03/612503ab18b76b6dd534c0e828bc36e8.png",
      ataque: 'Revenge Death Bomber'
    },
    {
      nome: "Gotenks SSJ1",
      poder: Math.floor(Math.random() * 10 + 30000),
      velocidade: Math.floor(Math.random() * 10 + 30000),
      habilidades: Math.floor(Math.random() * 10 + 32000),
      img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/84dc13b7-a2e7-4b45-83ec-311e72e82900/ddin328-6e61e0b3-201d-41cb-ae9e-1d74814e2fe3.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg0ZGMxM2I3LWEyZTctNGI0NS04M2VjLTMxMWU3MmU4MjkwMFwvZGRpbjMyOC02ZTYxZTBiMy0yMDFkLTQxY2ItYWU5ZS0xZDc0ODE0ZTJmZTMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.8pz5s_kCsW9Yf_y7BdRN47GIzo1yfFnVZhgg8MzA6Pw",
      ataque: 'Ataque Kamikaze dos Super Fantasmas'
    },
    {
      nome: "Gotenks SSJ3",
      poder: Math.floor(Math.random() * 10 + 34000),
      velocidade: Math.floor(Math.random() * 10 + 34000),
      habilidades: Math.floor(Math.random() * 10 + 37000),
      img: "https://i.pinimg.com/originals/56/1c/21/561c21b099198ba054c154f7ef42c683.png",
      ataque: 'Volleyball de Majin Boo'
    },
    {
      nome: "Gohan Ultimate",
      poder: Math.floor(Math.random() * 10 + 40000),
      velocidade: Math.floor(Math.random() * 10 + 40000),
      habilidades: Math.floor(Math.random() * 10 + 40000),
      img: "https://i.pinimg.com/originals/98/2b/7f/982b7f1296b9a8bb7343c6a1eadd383f.png",
      ataque: 'Super Kamehameha'
    },
    {
      nome: "Super Boo (Gotenks)",
      poder: Math.floor(Math.random() * 10 + 45000),
      velocidade: Math.floor(Math.random() * 10 + 45000),
      habilidades: Math.floor(Math.random() * 10 + 45000),
      img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/84dc13b7-a2e7-4b45-83ec-311e72e82900/dckwgx3-a32b4909-7401-46c8-8e44-8c933aeda98f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg0ZGMxM2I3LWEyZTctNGI0NS04M2VjLTMxMWU3MmU4MjkwMFwvZGNrd2d4My1hMzJiNDkwOS03NDAxLTQ2YzgtOGU0NC04YzkzM2FlZGE5OGYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.zrKtNHMz7bJnVc8IyZlWO24mjQH-9DOxu0dIkGfgfsk",
      ataque: 'Ataque Kamikaze dos Super Fantasmas'
    },
    {
      nome: "Super Boo (Gohan)",
      poder: Math.floor(Math.random() * 10 + 50000),
      velocidade: Math.floor(Math.random() * 10 + 50000),
      habilidades: Math.floor(Math.random() * 10 + 50000),
      img: "https://i.pinimg.com/originals/42/bb/f0/42bbf0a9e8581deee5f5474415e7dcb8.png",
      ataque: 'Super Kamehameha'
    },
    {
      nome: "Vegetto",
      poder: Math.floor(Math.random() * 10 + 52000),
      velocidade: Math.floor(Math.random() * 10 + 52000),
      habilidades: Math.floor(Math.random() * 10 + 54000),
      img: "https://pbs.twimg.com/media/DdsrPGeU8AIpTQX.png",
      ataque: 'Super Kamehameha'
    },
    {
      nome: "Super Vegetto",
      poder: Math.floor(Math.random() * 10 + 60000),
      velocidade: Math.floor(Math.random() * 10 + 60000),
      habilidades: Math.floor(Math.random() * 10 + 65000),
      img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ded4c09d-6f31-4249-b9c5-5918e01082f3/deupiko-b1be19ab-6c8c-4a3f-90cd-dd9548a4a013.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2RlZDRjMDlkLTZmMzEtNDI0OS1iOWM1LTU5MThlMDEwODJmM1wvZGV1cGlrby1iMWJlMTlhYi02YzhjLTRhM2YtOTBjZC1kZDk1NDhhNGEwMTMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.iGtQ-ZQFSX3wSljUzbwZc6E3tnwNsXiJgrIb83nS5Nc",
      ataque: 'Final Kamehameha'
    },
    {
      nome: "Kid Boo",
      poder: Math.floor(Math.random() * 10 + 30000),
      velocidade: Math.floor(Math.random() * 10 + 30000),
      habilidades: Math.floor(Math.random() * 10 + 30000),
      img: "https://i.pinimg.com/originals/2f/e8/61/2fe861ad7821e2d6f76b4b38679fa293.png",
      ataque: 'Planet Burst'
    },
    {
      nome: "Goku (GenkiDama)",
      poder: Math.floor(Math.random() * 10 + 100000),
      velocidade: Math.floor(Math.random() * 10 + 100000),
      habilidades: Math.floor(Math.random() * 10 + 100000),
      img: "https://i.pinimg.com/1200x/e8/04/29/e8042958a7691590a6979af389f687fd.jpg",
      ataque: 'Super GenkiDama'
    },
  ];
  