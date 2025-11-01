## Overview

Aum is a modern, full-stack web application designed to provide a seamless music listening experience.
Built with React and Node.js, it combines robust backend functionality with an intuitive frontend interface, making it easy for users to discover, and enjoy their favorite music.

<img width="1907" height="907" alt="Screenshot 2025-11-01 190732" src="https://github.com/user-attachments/assets/db0da673-2dd6-42ca-be29-544139c8782e" />


## Features and Capabilities

## Features
- User authentication
- Admin dashboard
- Music upload and streaming
- Cloud storage integration
- Responsive UI design

### User Experience & Accessibility
- User-Friendly Interface:
  - Clean, intuitive design suitable for all age groups
  - Large, readable text and clear navigation
  - Consistent layout and familiar interaction patterns
  - Simple sign-in with SSO and authentication process

- Age-Inclusive Design:
  - Accommodates users from teenagers to seniors
  - Straightforward menu structure
  - Clear, non-technical language throughout

### User Management
- Authentication: Secure user authentication powered by Clerk
- User Profiles: Personalized user profiles with music preferences
- Role-based Access: Admin and regular user roles
= Active-Users tab: User can see other users' status (if other users are online on application)

### Music Management
- Album Organization:
  - Create and manage music albums
  - Upload album artwork
  - Track release years and artists
- Song Management:
  - Upload and organize songs
  - Associate songs with albums
  - Manage song metadata

### Technical Capabilities
- Frontend:
  - Modern React components with TypeScript
  - Responsive design with Tailwind CSS
  - Real-time updates and state management
  - Client-side caching and optimization

- Backend:
  - RESTful API architecture
  - MongoDB data persistence
  - Cloud storage integration
  - Scalable microservices design

### Performance Features
- Optimized image and audio loading
- Caching strategies for improved performance
- Lazy loading of components and assets
- Efficient database queries and indexing

### Security Features
- JWT-based authentication - by Clerk
- Input validation and sanitization
- Rate limiting and request throttling
- Secure file upload handling

<hr>

## Project Structure
```
├── backend/           # Node.js backend
│   ├── src/
│   │   ├── controller/
│   │   ├── lib/
│   │   ├── middleware/
│   │   ├── models/
│   │   └── routes/
│   └── index.js
│
└── frontend/         # React frontend
    ├── src/
    │   ├── components/
    │   │   └── ui/
    │   ├── lib/
    │   ├── App.tsx
    │   └── main.tsx
    └── public/
```

## Backend

### Technologies Used
- Node.js
- Express.js
- MongoDB (with Mongoose)
- Cloudinary for media storage

### Setup
1. Navigate to the backend directory:
```
cd backend
```

3. Install dependencies:
```
npm install
```

5. Create a .env file with the following variables:
```
PORT=5000
MONGODB_URI=your_mongodb_uri
ADMIN_EMAIL=your_admin_email
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
NODE_ENV=development / production
```


5. Start the server:
npm run dev


## Frontend

### Technologies Used
- React with TypeScript
- Vite
- Tailwind CSS
- Clerk for authentication

### Setup
1. Navigate to the frontend directory:
cd frontend


2. Install dependencies:
npm install


3. Create a .env.local file with:
```
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_key
```

5. Start the development server:
```
npm run dev
```

## Development

### Backend Development
- Controllers handle business logic
- Middleware for authentication and request processing
- MongoDB models for data structure
- Cloudinary integration for media handling

### Frontend Development
- TypeScript for type safety
- Component-based architecture
- Tailwind CSS for styling
- UI component library
- Clerk for user management

## Environment Variables

### Backend
```
- PORT: Server port number
- MONGODB_URI: MongoDB connection string
- ADMIN_EMAIL: Administrator email
- CLOUDINARY_API_KEY: Cloudinary credentials
- CLOUDINARY_API_SECRET: Cloudinary credentials
- CLOUDINARY_CLOUD_NAME: Cloudinary credentials
- NODE_ENV: Development/Production environment
```


### Frontend
```
- VITE_CLERK_PUBLISHABLE_KEY: Clerk authentication key
```

## Scripts

### Backend
```
{
  "dev": "Development server",
  "start": "Production server"
}
```


### Frontend
```
{
  "dev": "Start development server",
  "build": "Build for production",
  "preview": "Preview production build"
}
```

## Contributing
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License
All the audios are my own production and belong to me (Pranamya Shukla). They can not be used for commercial purpose without owner's consent.

