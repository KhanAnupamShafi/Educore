# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

### In this challenge i am integrating my frontend with existing backend education website. The backend offers functionality for two types of users: Admins and Clients. Admins have privileges like secure login, course creation, and listing, while Clients can view course lists and details without registration.

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Admin Features

- Login: Access the system securely.
- Create: Ability to create courses.
- List: Retrieve a complete list of available courses.
- Retrieve by ID: Access specific course details using its unique ID.
  ### CLient Experience
- Open Access: Clients can view course lists and details without the need for registration.

### API Endpoints [Localhost]

Create Admin - POST: http://localhost:8000/api/register

- Sample JSON Request:

```js
{
  "userName": "Ratul Haque",
  "email": "ratul@gmail.com",
  "password": "123"
}

```

Create Course - POST: http://localhost:8000/api/courses

- Sample JSON Request:

```js
{
  "name": "Introduction to Web Development",
  "description": "A Comprehensive Introduction to Web Development.",
  "price": "5000 BDT",
  "duration": "8 weeks",
  "level": "Beginner",
  "topics": [
    "HTML", "CSS", "JavaScript", "Vue.js", "Node.js", "Express.js", "RESTful APIs"
  ],
  "schedule": {
    "startDate": "2023-02-15",
    "endDate": "2023-04-10",
    "classDays": ["Monday", "Wednesday", "Friday"],
    "classTime": "18:00 - 20:00"
  }
}

```

- Authorization Header: Bearer <JWT Token>
- Get All Courses - GET: http://localhost:8000/api/courses
- Get Specific Course by ID - GET: http://localhost:8000/api/courses/65880afa1c83dc908a4d85cf

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://res.cloudinary.com/de98kpzgn/image/upload/v1703572454/3_evb3p5.webp)

### Built With

- [![React][React.js]][React-url]
- [![Tailwind-url][Tailwind.css]][React-url]

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:5174) with your browser to see the result.

[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: https://res.cloudinary.com/de98kpzgn/image/upload/v1703572454/3_evb3p5.webp
[product-screenshottwo]: https://res.cloudinary.com/de98kpzgn/image/upload/v1703572454/3_evb3p5.webp
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com
[Tailwind.css]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
