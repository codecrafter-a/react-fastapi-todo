# React FastAPI Todo Application

A full-stack todo management application built with React, Next.js, and FastAPI. This project demonstrates a complete web application with a modern frontend and robust REST API backend.

## Project Overview

This is a complete todo application that allows users to create, manage, and organize their daily tasks. The application features a responsive web interface and a REST API backend.

### Features

- Create new tasks with title and description
- Mark tasks as complete or incomplete
- Edit existing tasks
- Delete tasks from the list
- Responsive design that works on desktop and mobile
- Real-time updates on all operations
- Error handling and user-friendly messages

## Project Structure

```
react-fastapi-todo/
├── backend/                 # FastAPI REST API
│   ├── main.py             # Application entry point
│   ├── model.py            # Database models
│   ├── schemas.py          # Request/response schemas
│   ├── database.py         # Database configuration
│   ├── requirements.txt    # Python dependencies
│   └── README.md           # Backend documentation
├── frontend/               # Next.js React Application
│   ├── app/                # Next.js pages
│   ├── components/         # React components
│   ├── hooks/              # Custom hooks
│   ├── lib/                # Utilities and services
│   ├── package.json        # Node dependencies
│   ├── tsconfig.json       # TypeScript configuration
│   └── README.md           # Frontend documentation
└── readme.md               # This file
```

## Prerequisites

- Python 3.8 or higher
- Node.js 18 or higher
- npm or yarn

## Quick Start

### Backend Setup

```bash
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
source venv/bin/activate    # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run server
python main.py
```

Backend will be available at http://localhost:8000
API documentation at http://localhost:8000/docs

### Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Run development server
npm run dev
```

Frontend will be available at http://localhost:3000

## Technology Stack

### Backend
- FastAPI 0.110.0+
- Uvicorn 0.30.0+
- SQLAlchemy 2.0.25+
- Pydantic 2.6.0+
- SQLite Database

### Frontend
- Next.js 16.1.6
- React 19.2.3
- Tailwind CSS 4
- TypeScript 5

## API Endpoints

Base URL: http://localhost:8000

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /health | Health check |
| GET | /todos | Get all todos |
| GET | /todos/{id} | Get single todo |
| POST | /todos | Create new todo |
| PUT | /todos/{id} | Update todo |
| DELETE | /todos/{id} | Delete todo |

See [Backend README](./backend/README.md) for detailed API documentation.

## Development

### Backend Development

```bash
cd backend
source venv/bin/activate
uvicorn main:app --reload
```

### Frontend Development

```bash
cd frontend
npm run dev
```

### Production Build

#### Backend
```bash
cd backend
uvicorn main:app --host 0.0.0.0 --port 8000
```

#### Frontend
```bash
cd frontend
npm run build
npm start
```

## Database Schema

### todos table

| Column | Type | Details |
|--------|------|---------|
| id | Integer | Primary key, auto-increment |
| title | String(255) | Required |
| description | String | Optional |
| is_completed | Boolean | Default: false |
| created_at | DateTime | Auto-generated |
| updated_at | DateTime | Auto-updated |

## Troubleshooting

### Backend Issues

**Port 8000 already in use**
```bash
uvicorn main:app --port 8001
```

**Database issues**
```bash
rm todos.db
python main.py
```

**Import errors**
Ensure virtual environment is activated and dependencies are installed:
```bash
source venv/bin/activate
pip install -r requirements.txt
```

### Frontend Issues

**Port 3000 already in use**
```bash
npm run dev -- -p 3001
```

**Build failures**
```bash
rm -rf .next node_modules
npm install
npm run build
```

**API connection errors**
- Verify backend is running: `curl http://localhost:8000/health`
- Check API URL in frontend configuration
- Verify CORS is enabled on backend

## Configuration

### Backend CORS

Edit main.py to configure allowed origins:
```python
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Change for production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

### Frontend API URL

Set the backend API URL in frontend environment:
```bash
NEXT_PUBLIC_API_URL=http://localhost:8000 npm run dev
```

## Deployment

### Docker

Backend:
```bash
cd backend
docker build -t todo-api .
docker run -p 8000:8000 todo-api
```

Frontend:
```bash
cd frontend
docker build -t todo-frontend .
docker run -p 3000:3000 todo-frontend
```

### Cloud Deployment

Backend options:
- Heroku
- Railway
- AWS (EC2, Lambda, Elastic Beanstalk)
- DigitalOcean

Frontend options:
- Vercel (recommended for Next.js)
- Netlify
- AWS (S3 + CloudFront)
- GitHub Pages

## File Structure Details

### Backend Files

- main.py: FastAPI application and route handlers
- model.py: SQLAlchemy Todo model definition
- schemas.py: Pydantic request/response schemas
- database.py: Database setup and session management
- requirements.txt: Python package dependencies

### Frontend Files

- app/page.tsx: Main home page
- components/TodoForm.tsx: Form for creating todos
- components/TodoList.tsx: List view of todos
- components/TodoItem.tsx: Individual todo item
- hooks/useTodos.ts: Hook for todo management
- lib/api.ts: API client
- lib/services/todoService.ts: Todo API service

## Error Handling

The API returns standard HTTP status codes:

- 200 OK: Successful GET/PUT requests
- 201 Created: Successful POST requests
- 204 No Content: Successful DELETE requests
- 400 Bad Request: Invalid request data
- 404 Not Found: Resource not found
- 500 Internal Server Error: Server error

## Documentation

For more detailed information:

- [Backend README](./backend/README.md) - Backend setup, API endpoints, and configuration
- [Frontend README](./frontend/README.md) - Frontend components, hooks, and development guide

## Available Scripts

### Backend
```bash
python main.py                    # Run development server
uvicorn main:app --reload         # Run with auto-reload
```

### Frontend
```bash
npm run dev                        # Development server
npm run build                      # Production build
npm start                          # Run production build
npm run lint                       # Run linter
```

## Testing Endpoints

### Using curl

```bash
# Get all todos
curl http://localhost:8000/todos

# Create a todo
curl -X POST http://localhost:8000/todos \
  -H "Content-Type: application/json" \
  -d '{"title": "Test todo"}'

# Update a todo
curl -X PUT http://localhost:8000/todos/1 \
  -H "Content-Type: application/json" \
  -d '{"is_completed": true}'

# Delete a todo
curl -X DELETE http://localhost:8000/todos/1
```

### Using Swagger UI

Visit http://localhost:8000/docs to test endpoints interactively.
