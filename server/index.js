const express = require('express')
const cors = require('cors')
const router = express.Router()
const app = express()
app.use(cors())
app.use(express.json())

const data = {
    drinks: [
        {
            id: 1,
            name: 'Coca-Cola',
            price: 100,
            stock: true,
            img: 'https://res.cloudinary.com/df3sxfwhb/image/upload/v1699531027/media/mp8iimfm7t8rs8ufpsro.avif',
            ingredients: 'voda, visoko fruktozni sirup, šećer, ugljen-dioksid (min. 2 g/L), boja: E150d, kiselina: fosforna kiselina, prirodne arome uključujući i kofein'
        },

        {
            id: 2,
            name: 'Heineken',
            price: 150,
            stock: true,
            img: 'https://res.cloudinary.com/df3sxfwhb/image/upload/v1699531389/media/zeas4wa81w5cok6bllpj.avif',
            ingredients: 'voda, jecmeni slad , hmelj'
        },

        {
            id: 3,
            name: 'Rosa',
            price: 50,
            stock: false,
            img: 'https://res.cloudinary.com/df3sxfwhb/image/upload/v1699531446/media/pwomgt01x9zlfgkeur88.avif',
            ingredients: 'None'
        },
    ],

    food: [
        {
            id: 4,
            name: 'Gulas',
            price: 450,
            stock: true,
            img: 'https://res.cloudinary.com/df3sxfwhb/image/upload/v1699531633/media/gohtmcxxtfdhsbjkeuhi.avif',
            ingredients: 'Sastojci Voda, kuhano goveđe meso (35%), goveđi loj, koncentrat rajčica, pšenično brašno, začini i ekstrakti začina, kuhinjska sol, šećer, alkoholni ocat, pojačivač okusa (mononatrijev glutaminat). Može sadržavati jaja, soju, mlijeko i celer',

        },

        {
            id: 5,
            name: 'Plazma',
            price: 185,
            stock: true,
            img: 'https://res.cloudinary.com/df3sxfwhb/image/upload/v1699531648/media/ckvzwinz5gbfa5oyl4df.avif',
            ingredients: 'None',

        },

        {
            id: 6,
            name: 'Hleb',
            price: 80,
            stock: true,
            img: 'https://res.cloudinary.com/df3sxfwhb/image/upload/v1699531644/media/okx5zgfvec9s5rb4kvzz.avif',
            ingredients: 'Sastojci :pšenično brašno tip ¿500¿,voda, pekarski kvasac, kuhinjska so, emulgatori E472e, E471 i E481, antioksidan E300, enzimi.'
        },
    ]
  };

  app.get('/api', (req, res) => {
    res.json(data)
  })

  data.food.forEach((food) => {
    app.get(`/api/${food.id}`, (req, res) => {
      res.json(food);
    });
  });

data.drinks.forEach((drink) => {
    app.get(`/api/${drink.id}`, (req, res) => {
      res.json(drink);
    });
  });

app.listen('5000', console.log('Server running on port 5000'))