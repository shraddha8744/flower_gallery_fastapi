from fastapi import FastAPI
from .router import userRoute,LoginRoute
from .database import engine ,Base
from fastapi.middleware.cors import CORSMiddleware

Base.metadata.create_all(bind=engine)
app=FastAPI()

app.include_router(userRoute.userRouter)
app.include_router(LoginRoute.login_router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Frontend origin
    allow_credentials=True,
    allow_methods=["*"],  # Allows all HTTP methods
    allow_headers=["*"],  # Allows all headers
)

