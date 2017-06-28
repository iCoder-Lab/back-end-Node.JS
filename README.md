# Back-end or Server-side development using Node.js
## Things that I would like to share

## Livesport App -> Back-end 
To get list of promotions:
`/getPromotions`


To add user:
`/addUser` + JSON with **loginType**, which can be ['fb','twitter', 'google'] and **accessToken**
(you will receive user ID back)


To get user
`/getUser/some id`


To add notes:
`/addNote` + JSON with **title**,	**description**, **userID** - int, time - int
