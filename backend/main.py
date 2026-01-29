
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# Initialize FastAPI application
app = FastAPI(
    title="AI-Based Sit-to-Walk Movement Quality Screening System",
    description="Backend for thesis project",
    version="0.1.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",  # Nuxt dev server
        "http://127.0.0.1:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health")
async def health_check():
    """
    Health check endpoint.
    Returns API status for monitoring and frontend connectivity tests.
    """
    return {
        "status": "healthy",
        "version": "0.1.0",
    }

# To Run Server
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)