# Audit Company Full-Stack Project

This project is a technical evaluation task for an internship. It features a dynamic website for an audit company with an admin panel.

## Folder Structure
```text
/audit-company-web
├── /backend
│   ├── /config         # Database connection
│   ├── /controllers    # Business logic for each route
│   ├── /middleware     # Auth middleware (JWT)
│   ├── /models         # Mongoose schemas
│   ├── /routes         # API endpoints
│   └── server.js      # Entry point
├── /frontend           # Vanilla JS, HTML, CSS, Bootstrap
│   ├── /admin          # Admin panel pages
│   ├── /assets         # CSS, Images, JS scripts
│   └── index.html      # Main website
├── .env                # Environment variables
└── package.json
```

## Tech Stack
- **Frontend:** HTML5, CSS3, Bootstrap 5, Vanilla JavaScript.
- **Backend:** Node.js, Express.js.
- **Database:** MongoDB with Mongoose.
- **Security:** JWT (JSON Web Tokens), bcryptjs.
