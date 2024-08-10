// Nomenclatura de variáveis

const UserCategoriesByQuantityFollowers = [
  {
    title: 'User',
    followers: 5
  },
  {
    title: 'Friendly',
    followers: 50,
  },
  {
    title: 'Famous',
    followers: 500,
  },
  {
    title: 'Super Star',
    followers: 1000,
  },
]

export default async function getUserAndClassifyCategoryInGitHub(req, res) {
  const username = String(req.user.username)

  if (!username) {
    return res.status(400).json({
      message: `Please provide an username to search on the github API`
    })
  }

  const responseUserGitHub = await fetch(`https://api.github.com/users/${username}`);

  if (responseUserGitHub.status === 404) {
    return res.status(400).json({
      message: `User with username "${username}" not found`
    })
  }

  const userData = await responseUserGitHub.json()

  const orderCategoriesByFollowers  = UserCategoriesByQuantityFollowers.sort((firstCategory, secondCategory) =>  secondCategory.followers - firstCategory.followers); 


  const  determineUserCategory= orderCategoriesByFollowers.find(i => userData.followers > i.followers)

  const userAndCategory = {
    user: userData,
    category: determineUserCategory.title
  }


  return userAndCategory
}

getUserAndClassifyCategoryInGitHub({ user: {
  username: 'josepholiveira'
}}, {})

