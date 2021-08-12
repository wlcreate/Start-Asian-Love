# Start Asian Love ![Vercel](http://therealsujitk-vercel-badge.vercel.app/?app=therealsujitk-vercel-badge)

<img width="1302" alt="Start-Asian-Love" src="https://user-images.githubusercontent.com/62153993/118204100-7ab1d400-b42b-11eb-85d6-50ba93df02a3.png">

After the increase of attacks on Asian Americans since COVID-19, the Atlanta Spa Shootings that occurred on March 16, 2021 and rise of the Stop Asian Hate movement, Waverley Leung and Emmanuel Jose came together to work on Start Asian Love as their own way to take action. Since the first version of the website, the team has grown to include Sandy Dai and Daniel Kwon who bring their own voices and experiences. We hope to continue growing Start Asian Love to fight against injustice and for equality.

Start Asian Love is a safe space that educates and consolidates resources related to Asian racism, Asian American history, and the Stop Asian Hate movement. Through these resources we hope to raise awareness and encourage you to join the fight and support Asian Americans.

✨ Check out the [live site](https://start-asian-love.vercel.app/) ✨ If you would like to contribute or give us feedback please fill out this [form](https://forms.gle/LQtZ5xgr16htNhdZ8)!

## Getting Started

**Note**: In order to run this app locally, first you will need to get an API key from [News API](https://newsapi.org/)

1. Download Node.js and `npm` (follow instructions [here](https://nodejs.org/en/))
2. Clone this project locally
3. `cd` into the directory
4. Install all dependencies

```bash
npm install
```

5. In the main root directory of the project, create an `.env.local` file
6. In the `.env.local` file, create an environment variable to store the News API key:

```
NEXT_PUBLIC_NEWS_KEY=YOUR-NEWS-API-KEY
```

5. Run the server

```bash
# for deployed version:
npm start

# for development:
npm run dev
```

6. Access the project in your browser at [`localhost:3000`](http://localhost:3000)

### For Sanity

**Note**: In order to have write access to SAL's Sanity Studio you will need to be added as a project member by Waverley!

1. From the main project directory move into the sanity folder

```bash
cd sanitydb
```

2. Launch Sanity Studio

```bash
sanity start
```

3. Access the studio in your browser at [`localhost:3333`](http://localhost:3333)

## Features

As of July 1st, Start Asian Love has Home, About, News, Support, and Wins pages.

### Home Page

Users learn about the rise of Anti-Asian incidents and crimes, as well as Asian racism, in the United States. A youtube playlist, graphics, and text is displayed for the user to interact with.

### About Page

Users learn more about the history and mission of Start Asian Love, as well as the team behind it.

### News Page

Users can browse the latest news related to the Stop Asian Hate movement, Anti-Asian incidents and crimes, AAPI Heritage month, and other Asian related news. When users hover over each news "card", the card slightly enlarges and a some leading text from the article is shown. Users can then click on a card to read the full article.

### Support Page

Users can browse through the resources we have collected and filter them based on who they resource is for and certain categories. Each category is displayed as a "card" with an image, short description about the resource, and related category/categories. Clicking on a resource will bring the user to the resource's website.

### Wins Page

Since this is a very heavy topic that can be traumatizing, depressing, and frustrating, Waverley and Emmanuel also wanted to shine some light on things that Asian Americans should be proud of. This page is dedicated to five categories (heritage, contributions, representation, art, and cultural) that the user can browse through. Once the user clicks on a specific resource under the corresponding section, they are brought to that resource's page and can click on a related resource for more information.

## Future Features

Some ideas we have in mind and would like to incorporate:

- An events section which will display rallies, training workshops, etc.
- Continue to add resources to the Support page and Wins page
- Create interactive features to engage users more
  - For example, a map that displays information about Anti-Asian incidents and crimes

## Tech Stack

- [Next.js](https://nextjs.org)
- [SASS](https://sass-lang.com)
- [Sanity](http://sanity.io)
- [Vercel](https://vercel.com)

## Contributors

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/wlcreate">
        <img src="https://avatars0.githubusercontent.com/u/62153993?s=460&v=4" width="200px;" alt="Waverley Leung's GitHub profile picture"/><br/><sub><b>Waverley Leung</b></sub>
      </a>         
    </td>
    <td align="center">
      <a href="https://github.com/emjose">
        <img src="https://avatars.githubusercontent.com/u/61435324?v=4" width="200px;" alt="Emmanuel Jose's GitHub profile picture"/><br/>
        <sub><b>Emmanuel Jose</b></sub>
      </a>         
    </td>
    <td align="center">
      <a href="https://github.com/sandaiiyahh">
        <img src="https://avatars.githubusercontent.com/u/60532744?v=4" width="200px;" alt="Sandy Dai's GitHub profile picture"/><br/>
        <sub><b>Sandy Dai</b></sub>
      </a>         
    </td>
        <td align="center">
      <a href="https://github.com/danielkwon89">
        <img src="https://avatars.githubusercontent.com/u/37312930?v=4" width="200px;" alt="Daniel Kwon's GitHub profile picture"/><br/>
        <sub><b>Daniel Kwon</b></sub>
      </a>         
    </td>
  </tr>
</table>
