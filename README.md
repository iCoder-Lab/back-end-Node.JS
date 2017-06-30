# Back-end or Server-side development using Node.js
## Things that I would like to share

## Livesport App -> Back-end 
To get list of promotions:
`/getPromotions`


To add user:
`/addUser` + JSON with **logintype**, which can be ['fb','twitter', 'google'] and **accesstoken**
(you will receive user ID back)


To get user
`/getUser/some id`


To add notes:
`/addNote` + JSON with **title**,	**description**, **userid** - int, time - int


To get notes:
`/getNotes` 
